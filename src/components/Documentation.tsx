import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  FileText, 
  Database, 
  Brain, 
  Shield, 
  Globe, 
  TrendingUp, 
  Users, 
  Smartphone,
  CreditCard,
  Zap,
  BarChart3
} from "lucide-react";

const Documentation = () => {
  const technicalSpecs = [
    { component: "Frontend", technology: "React + TypeScript + Tailwind CSS", purpose: "User interface and data visualization" },
    { component: "ML Pipeline", technology: "Python + Scikit-learn + XGBoost", purpose: "Credit scoring model training and inference" },
    { component: "Data Processing", technology: "Pandas + NumPy + Feature Engineering", purpose: "Alternative data preprocessing and normalization" },
    { component: "Security", technology: "AES-256 + Homomorphic Encryption", purpose: "Privacy-preserving computation" },
    { component: "Database", technology: "PostgreSQL + MongoDB", purpose: "Structured and unstructured data storage" },
    { component: "API Layer", technology: "FastAPI + Pydantic", purpose: "Model serving and data validation" }
  ];

  const datasetFeatures = [
    { 
      feature: "Monthly Mobile Money Transactions", 
      type: "Numerical", 
      importance: "35%",
      description: "Number of mobile money transactions per month indicating financial activity",
      example: "25 transactions/month"
    },
    { 
      feature: "Average Airtime Top-up Amount", 
      type: "Numerical", 
      importance: "25%",
      description: "Average monthly airtime purchase indicating consistent income",
      example: "$15 USD/month"
    },
    { 
      feature: "Digital Bills Paid Monthly", 
      type: "Numerical", 
      importance: "20%",
      description: "Number of utility bills paid digitally showing financial responsibility",
      example: "3 bills/month"
    },
    { 
      feature: "Average Data Usage", 
      type: "Numerical", 
      importance: "10%",
      description: "Mobile data consumption patterns indicating digital engagement",
      example: "2000 MB/month"
    },
    { 
      feature: "Phone Usage Days", 
      type: "Numerical", 
      importance: "10%",
      description: "Active phone usage days per month showing consistency",
      example: "28 days/month"
    }
  ];

  const modelComparison = [
    { model: "Logistic Regression", accuracy: "82.4%", f1Score: "79.8%", rocAuc: "85.1%", speed: "Fast" },
    { model: "Random Forest", accuracy: "87.3%", f1Score: "85.1%", rocAuc: "89.7%", speed: "Medium" },
    { model: "XGBoost", accuracy: "89.1%", f1Score: "87.2%", rocAuc: "91.3%", speed: "Medium" },
    { model: "Neural Network", accuracy: "86.7%", f1Score: "84.6%", rocAuc: "88.9%", speed: "Slow" }
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            Technical Documentation
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Comprehensive technical documentation for the CreSo Credit Scoring AI system using alternative data sources
          </p>
        </div>

      {/* Problem Statement */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Globe className="w-5 h-5" />
            Problem & Context
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-warning">The Challenge</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 600+ million unbanked individuals in Africa</li>
                <li>• 70% of sub-Saharan Africa lacks traditional credit history</li>
                <li>• Limited access to formal financial services</li>
                <li>• High collateral requirements for traditional loans</li>
                <li>• Existing credit scoring models don't work for the unbanked</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-success">Our Solution</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Leverage alternative data sources (mobile money, airtime, bills)</li>
                <li>• AI-powered credit scoring using behavioral patterns</li>
                <li>• Privacy-preserving computation with encryption</li>
                <li>• Real-time creditworthiness assessment</li>
                <li>• Explainable AI for transparency and trust</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dataset Documentation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Database className="w-5 h-5" />
            Dataset Specification
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <div className="text-2xl font-bold text-primary">50,000</div>
              <div className="text-sm text-muted-foreground">Training Samples</div>
            </div>
            <div className="text-center p-4 bg-secondary/5 border border-secondary/20 rounded-lg">
              <div className="text-2xl font-bold text-secondary">5</div>
              <div className="text-sm text-muted-foreground">Alternative Features</div>
            </div>
            <div className="text-center p-4 bg-accent-orange/5 border border-accent-orange/20 rounded-lg">
              <div className="text-2xl font-bold" style={{ color: 'hsl(var(--accent-orange))' }}>12</div>
              <div className="text-sm text-muted-foreground">African Countries</div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Feature Specifications</h4>
            {datasetFeatures.map((feature, index) => (
              <Card key={index} className="border-muted">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h5 className="font-medium">{feature.feature}</h5>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{feature.type}</Badge>
                      <Badge variant="outline">{feature.importance}</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{feature.description}</p>
                  <div className="text-xs bg-muted/50 p-2 rounded">
                    <strong>Example:</strong> {feature.example}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Model Architecture */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Brain className="w-5 h-5" />
            Machine Learning Models
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h4 className="font-semibold">Model Performance Comparison</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Model</th>
                    <th className="text-right py-2">Accuracy</th>
                    <th className="text-right py-2">F1-Score</th>
                    <th className="text-right py-2">ROC-AUC</th>
                    <th className="text-right py-2">Speed</th>
                  </tr>
                </thead>
                <tbody>
                  {modelComparison.map((model, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 font-medium">{model.model}</td>
                      <td className="text-right py-2">{model.accuracy}</td>
                      <td className="text-right py-2">{model.f1Score}</td>
                      <td className="text-right py-2">{model.rocAuc}</td>
                      <td className="text-right py-2">
                        <Badge 
                          variant={model.speed === "Fast" ? "default" : model.speed === "Medium" ? "secondary" : "outline"}
                        >
                          {model.speed}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-3">Preprocessing Pipeline</h4>
            <div className="space-y-2 text-sm bg-card border rounded-lg p-4">
              <div className="text-muted-foreground"># Data preprocessing steps</div>
              <div>1. <span className="text-primary">Data Cleaning:</span> Handle missing values, outliers</div>
              <div>2. <span className="text-secondary">Normalization:</span> StandardScaler for numerical features</div>
              <div>3. <span className="text-accent-orange">Feature Engineering:</span> Create ratio and interaction features</div>
              <div>4. <span className="text-success">Train/Test Split:</span> 80/20 stratified split</div>
              <div>5. <span className="text-warning">Model Training:</span> Cross-validation with hyperparameter tuning</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Architecture */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <BarChart3 className="w-5 h-5" />
            Technical Architecture
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalSpecs.map((spec, index) => (
              <Card key={index} className="border-muted">
                <CardContent className="p-4">
                  <h5 className="font-medium mb-2">{spec.component}</h5>
                  <Badge className="mb-2 text-xs">{spec.technology}</Badge>
                  <p className="text-xs text-muted-foreground">{spec.purpose}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* African FinTech Integration */}
      <Card className="border-accent-orange/30 bg-accent-orange/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Smartphone className="w-5 h-5" />
            African FinTech Ecosystem Integration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                Mobile Money Providers
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>M-Pesa (Kenya/Tanzania):</strong> API integration for transaction history</li>
                <li>• <strong>MTN Mobile Money:</strong> West/Central Africa coverage</li>
                <li>• <strong>Orange Money:</strong> Francophone Africa integration</li>
                <li>• <strong>Airtel Money:</strong> Multi-country presence</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Micro-Lenders & Banks
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Digital lenders:</strong> Branch, Tala, Carbon</li>
                <li>• <strong>Traditional banks:</strong> Equity Bank, Standard Bank</li>
                <li>• <strong>MFIs:</strong> Microfinance institutions partnership</li>
                <li>• <strong>SACCOs:</strong> Cooperative integration</li>
              </ul>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Integration Approach
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card border rounded-lg">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="font-medium">API Integration</div>
                <div className="text-xs text-muted-foreground mt-1">
                  RESTful APIs for real-time data access
                </div>
              </div>
              <div className="text-center p-4 bg-card border rounded-lg">
                <Shield className="w-8 h-8 mx-auto mb-2 text-success" />
                <div className="font-medium">Secure Data Sharing</div>
                <div className="text-xs text-muted-foreground mt-1">
                  OAuth 2.0 + encryption protocols
                </div>
              </div>
              <div className="text-center p-4 bg-card border rounded-lg">
                <Users className="w-8 h-8 mx-auto mb-2 text-secondary" />
                <div className="font-medium">User Consent</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Transparent data usage agreements
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Guide */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <FileText className="w-5 h-5" />
            Implementation Roadmap
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="font-semibold text-primary mb-2">Phase 1: MVP</div>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Basic credit scoring model</li>
                  <li>• Simple web interface</li>
                  <li>• Pilot with 1000 users</li>
                </ul>
              </div>
              <div className="p-4 bg-secondary/5 border border-secondary/20 rounded-lg">
                <div className="font-semibold text-secondary mb-2">Phase 2: Scale</div>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• API integrations</li>
                  <li>• Enhanced security</li>
                  <li>• 50k+ user capacity</li>
                </ul>
              </div>
              <div className="p-4 bg-warning/5 border border-warning/20 rounded-lg">
                <div className="font-semibold text-warning mb-2">Phase 3: Expand</div>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Multi-country deployment</li>
                  <li>• Advanced ML models</li>
                  <li>• Real-time processing</li>
                </ul>
              </div>
              <div className="p-4 bg-success/5 border border-success/20 rounded-lg">
                <div className="font-semibold text-success mb-2">Phase 4: Impact</div>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• 1M+ users served</li>
                  <li>• Financial inclusion metrics</li>
                  <li>• Sustainable ecosystem</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Documentation;