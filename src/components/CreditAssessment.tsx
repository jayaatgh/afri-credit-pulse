import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calculator, Shield, TrendingUp, Phone, CreditCard, Zap } from "lucide-react";

interface CreditData {
  monthlyTransactions: number;
  averageTopup: number;
  billsPaid: number;
  dataUsage: number;
  phoneUsageDays: number;
}

interface CreditResult {
  score: number;
  risk: "low" | "medium" | "high";
  recommendation: string;
  featureImportance: { feature: string; importance: number; value: number }[];
}

const CreditAssessment = () => {
  const [formData, setFormData] = useState<CreditData>({
    monthlyTransactions: 0,
    averageTopup: 0,
    billsPaid: 0,
    dataUsage: 0,
    phoneUsageDays: 0,
  });
  
  const [result, setResult] = useState<CreditResult | null>(null);
  const [loading, setLoading] = useState(false);

  // Simulate ML model prediction
  const calculateCreditScore = (data: CreditData): CreditResult => {
    // Weighted scoring algorithm (simulating trained model)
    const weights = {
      transactions: 0.35,
      topup: 0.25,
      bills: 0.20,
      data: 0.10,
      usage: 0.10,
    };

    // Normalize inputs and calculate weighted score
    const normalizedScore = 
      Math.min(data.monthlyTransactions / 50, 1) * weights.transactions +
      Math.min(data.averageTopup / 100, 1) * weights.topup +
      Math.min(data.billsPaid / 10, 1) * weights.bills +
      Math.min(data.dataUsage / 5000, 1) * weights.data +
      Math.min(data.phoneUsageDays / 30, 1) * weights.usage;

    const score = Math.round(normalizedScore * 850 + 300); // Credit score range 300-850

    // Determine risk level
    let risk: "low" | "medium" | "high";
    let recommendation: string;

    if (score >= 700) {
      risk = "low";
      recommendation = "Excellent creditworthiness. Approved for premium loan products with low interest rates.";
    } else if (score >= 600) {
      risk = "medium";
      recommendation = "Good creditworthiness. Approved for standard loan products with moderate terms.";
    } else {
      risk = "high";
      recommendation = "Limited creditworthiness. Consider micro-loans or secured credit products.";
    }

    // Calculate feature importance (SHAP-style explanation)
    const featureImportance = [
      { 
        feature: "Mobile Money Transactions", 
        importance: weights.transactions * 100, 
        value: data.monthlyTransactions 
      },
      { 
        feature: "Airtime Top-ups", 
        importance: weights.topup * 100, 
        value: data.averageTopup 
      },
      { 
        feature: "Digital Bill Payments", 
        importance: weights.bills * 100, 
        value: data.billsPaid 
      },
      { 
        feature: "Data Usage", 
        importance: weights.data * 100, 
        value: data.dataUsage 
      },
      { 
        feature: "Phone Usage Pattern", 
        importance: weights.usage * 100, 
        value: data.phoneUsageDays 
      },
    ].sort((a, b) => b.importance - a.importance);

    return { score, risk, recommendation, featureImportance };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const creditResult = calculateCreditScore(formData);
      setResult(creditResult);
      setLoading(false);
    }, 2000);
  };

  const handleInputChange = (field: keyof CreditData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  if (result) {
    return (
      <div className="space-y-6">
        <Card className="border-primary/20 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <TrendingUp className="w-6 h-6" />
              Credit Assessment Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Credit Score Display */}
            <div className="text-center space-y-4">
              <div className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {result.score}
              </div>
              <div className="flex items-center justify-center gap-2">
                <Badge 
                  variant={result.risk === "low" ? "default" : result.risk === "medium" ? "secondary" : "destructive"}
                  className="text-sm px-4 py-1"
                >
                  {result.risk.toUpperCase()} RISK
                </Badge>
              </div>
              <Progress 
                value={(result.score - 300) / 5.5} 
                className="w-full max-w-md mx-auto h-3"
              />
              <div className="text-sm text-muted-foreground flex justify-between max-w-md mx-auto">
                <span>300</span>
                <span>850</span>
              </div>
            </div>

            {/* Recommendation */}
            <Card className={`border-2 ${
              result.risk === "low" ? "border-success/30 bg-success/5" :
              result.risk === "medium" ? "border-warning/30 bg-warning/5" :
              "border-risk/30 bg-risk/5"
            }`}>
              <CardContent className="p-4">
                <p className="text-sm font-medium">{result.recommendation}</p>
              </CardContent>
            </Card>

            {/* Feature Importance (Explainability) */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Model Explanation
              </h3>
              {result.featureImportance.map((feature, index) => (
                <div key={feature.feature} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{feature.feature}</span>
                    <span className="text-muted-foreground">
                      {feature.importance.toFixed(1)}% importance
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={feature.importance} className="flex-1 h-2" />
                    <span className="text-xs text-muted-foreground w-16 text-right">
                      {feature.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              onClick={() => setResult(null)} 
              variant="outline" 
              className="w-full"
            >
              New Assessment
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="w-5 h-5" />
          AI Credit Assessment
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Enter your alternative data to get instant creditworthiness analysis
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="transactions" className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                Monthly Mobile Money Transactions
              </Label>
              <Input
                id="transactions"
                type="number"
                placeholder="e.g., 25"
                value={formData.monthlyTransactions || ""}
                onChange={(e) => handleInputChange("monthlyTransactions", e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">Number of transactions per month</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="topup" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Average Airtime Top-up ($)
              </Label>
              <Input
                id="topup"
                type="number"
                placeholder="e.g., 15"
                value={formData.averageTopup || ""}
                onChange={(e) => handleInputChange("averageTopup", e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">Average monthly airtime purchase</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bills" className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Digital Bills Paid Monthly
              </Label>
              <Input
                id="bills"
                type="number"
                placeholder="e.g., 3"
                value={formData.billsPaid || ""}
                onChange={(e) => handleInputChange("billsPaid", e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">Utility bills paid digitally</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="data">Average Data Usage (MB)</Label>
              <Input
                id="data"
                type="number"
                placeholder="e.g., 2000"
                value={formData.dataUsage || ""}
                onChange={(e) => handleInputChange("dataUsage", e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">Monthly mobile data consumption</p>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="usage">Phone Usage Days per Month</Label>
              <Input
                id="usage"
                type="number"
                placeholder="e.g., 28"
                max="31"
                value={formData.phoneUsageDays || ""}
                onChange={(e) => handleInputChange("phoneUsageDays", e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">Active phone usage days (max 31)</p>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary" 
            disabled={loading}
          >
            {loading ? "Analyzing Credit Profile..." : "Calculate Credit Score"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreditAssessment;