import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Target, Shield, Users, AlertCircle, CheckCircle } from "lucide-react";

const ModelDashboard = () => {
  // Simulated model performance data
  const modelMetrics = {
    accuracy: 87.3,
    f1Score: 85.1,
    rocAuc: 89.7,
    precision: 86.5,
    recall: 83.8,
    totalPredictions: 45621,
    correctPredictions: 39857
  };

  const featureImportance = [
    { feature: "Mobile Money Transactions", importance: 35, color: "#3b82f6" },
    { feature: "Airtime Top-ups", importance: 25, color: "#10b981" },
    { feature: "Digital Bill Payments", importance: 20, color: "#f59e0b" },
    { feature: "Data Usage Patterns", importance: 10, color: "#ef4444" },
    { feature: "Phone Usage Days", importance: 10, color: "#8b5cf6" }
  ];

  const riskDistribution = [
    { name: "Low Risk", value: 42, color: "#10b981" },
    { name: "Medium Risk", value: 38, color: "#f59e0b" },
    { name: "High Risk", value: 20, color: "#ef4444" }
  ];

  const monthlyPerformance = [
    { month: "Jan", accuracy: 85.2, predictions: 3200 },
    { month: "Feb", accuracy: 86.1, predictions: 3450 },
    { month: "Mar", accuracy: 87.3, predictions: 3800 },
    { month: "Apr", accuracy: 86.8, predictions: 3600 },
    { month: "May", accuracy: 88.1, predictions: 4100 },
    { month: "Jun", accuracy: 87.9, predictions: 3900 }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">AI Model Performance Dashboard</h2>
        <p className="text-muted-foreground">Real-time analytics for global credit scoring model</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Model Accuracy</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{modelMetrics.accuracy}%</div>
            <p className="text-xs text-muted-foreground">
              +2.1% from last month
            </p>
            <Progress value={modelMetrics.accuracy} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="border-success/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">F1-Score</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{modelMetrics.f1Score}%</div>
            <p className="text-xs text-muted-foreground">
              Balanced precision & recall
            </p>
            <Progress value={modelMetrics.f1Score} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="border-warning/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ROC-AUC Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{modelMetrics.rocAuc}%</div>
            <p className="text-xs text-muted-foreground">
              Excellent discrimination
            </p>
            <Progress value={modelMetrics.rocAuc} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="border-secondary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Predictions</CardTitle>
            <Users className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">{modelMetrics.totalPredictions.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {modelMetrics.correctPredictions.toLocaleString()} correct
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Feature Importance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Feature Importance Analysis
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Which alternative data sources contribute most to predictions
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={featureImportance} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="feature" type="category" width={100} fontSize={12} />
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Importance']}
                  labelStyle={{ fontSize: 12 }}
                />
                <Bar dataKey="importance" fill="#3b82f6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Risk Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Risk Assessment Distribution
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Percentage breakdown of risk categories
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={riskDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {riskDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              {riskDistribution.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Performance Trend */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Monthly Performance Trends
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Model accuracy and prediction volume over time
          </p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={monthlyPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" orientation="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip 
                formatter={(value, name) => [
                  name === 'accuracy' ? `${value}%` : value.toLocaleString(),
                  name === 'accuracy' ? 'Accuracy' : 'Predictions'
                ]}
              />
              <Bar yAxisId="right" dataKey="predictions" fill="#10b981" name="predictions" />
              <Bar yAxisId="left" dataKey="accuracy" fill="#3b82f6" name="accuracy" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Model Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Model Architecture</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Algorithm:</span>
              <Badge>Random Forest</Badge>
            </div>
            <div className="flex justify-between">
              <span>Features:</span>
              <span className="text-sm">5 alternative data points</span>
            </div>
            <div className="flex justify-between">
              <span>Training Data:</span>
              <span className="text-sm">50,000 samples</span>
            </div>
            <div className="flex justify-between">
              <span>Last Updated:</span>
              <span className="text-sm">2 days ago</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Privacy & Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Encryption:</span>
              <Badge variant="secondary">AES-256</Badge>
            </div>
            <div className="flex justify-between">
              <span>Data Anonymization:</span>
              <Badge variant="secondary">Active</Badge>
            </div>
            <div className="flex justify-between">
              <span>GDPR Compliant:</span>
              <Badge variant="secondary">Yes</Badge>
            </div>
            <div className="flex justify-between">
              <span>Audit Trail:</span>
              <Badge variant="secondary">Enabled</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Global Impact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Countries Served:</span>
              <span className="text-sm">12</span>
            </div>
            <div className="flex justify-between">
              <span>Unbanked Users:</span>
              <span className="text-sm">45,621</span>
            </div>
            <div className="flex justify-between">
              <span>Loans Approved:</span>
              <span className="text-sm">28,394</span>
            </div>
            <div className="flex justify-between">
              <span>Success Rate:</span>
              <span className="text-sm text-success">92.3%</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ModelDashboard;