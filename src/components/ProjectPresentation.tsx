import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Brain, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  Smartphone,
  Lock,
  BarChart3,
  CheckCircle,
  Target,
  Zap,
  Database
} from "lucide-react";

const ProjectPresentation = () => {
  const keyMetrics = [
    { label: "Model Accuracy", value: 94, color: "bg-primary" },
    { label: "Privacy Compliance", value: 100, color: "bg-secondary" },
    { label: "Processing Speed", value: 98, color: "bg-accent" },
    { label: "Global Coverage", value: 87, color: "bg-primary/80" }
  ];

  const features = [
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "Ensemble ML with 94% accuracy using XGBoost, Random Forest, and Neural Networks"
    },
    {
      icon: Shield,
      title: "Privacy-First Design",
      description: "Homomorphic encryption and data anonymization for maximum security"
    },
    {
      icon: Smartphone,
      title: "Alternative Data Sources",
      description: "Mobile money, airtime usage, utility payments, and behavioral patterns"
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Designed for emerging markets worldwide with local compliance"
    }
  ];

  const technicalSpecs = [
    { category: "Data Processing", value: "5,000+ samples/sec" },
    { category: "Model Training", value: "4 ML algorithms" },
    { category: "Encryption", value: "AES-256 + Homomorphic" },
    { category: "API Response", value: "<200ms average" },
    { category: "Uptime", value: "99.9% SLA" },
    { category: "Compliance", value: "GDPR, ISO 27001" }
  ];

  const impactMetrics = [
    { label: "Target Users", value: "1.7B+ unbanked globally" },
    { label: "Markets", value: "80+ countries" },
    { label: "Accuracy Improvement", value: "25% over traditional" },
    { label: "Processing Time", value: "Real-time assessment" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Brain className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">AI Credit Scoring Platform</span>
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-foreground to-secondary bg-clip-text text-transparent">
            CreSo
          </h1>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Revolutionizing financial inclusion through AI-powered credit assessment using alternative data sources
          </p>
        </div>

        {/* Key Performance Metrics */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              Performance Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyMetrics.map((metric, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{metric.label}</span>
                    <span className="text-2xl font-bold text-primary">{metric.value}%</span>
                  </div>
                  <Progress value={metric.value} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Core Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                Core Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Database className="h-6 w-6 text-primary" />
                Technical Specifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {technicalSpecs.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm font-medium">{spec.category}</span>
                    <Badge variant="secondary">{spec.value}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Target className="h-6 w-6 text-destructive" />
                The Problem
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-destructive/5 rounded-lg border-l-4 border-destructive">
                <h4 className="font-semibold mb-2">Financial Exclusion Crisis</h4>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• 1.7 billion adults lack access to financial services</li>
                  <li>• 70% of emerging markets have no credit history</li>
                  <li>• Traditional scoring methods fail for unbanked populations</li>
                  <li>• Limited economic opportunities due to credit barriers</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-primary" />
                Our Solution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                <h4 className="font-semibold mb-2">AI-Powered Alternative Scoring</h4>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Machine learning with alternative data sources</li>
                  <li>• Mobile money & digital payment analysis</li>
                  <li>• Privacy-preserving homomorphic encryption</li>
                  <li>• Real-time creditworthiness assessment</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Global Impact */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              Global Impact & Reach
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactMetrics.map((metric, index) => (
                <div key={index} className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Security & Privacy */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Lock className="h-6 w-6 text-primary" />
              Security & Privacy Framework
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Data Protection</h4>
                <p className="text-sm text-muted-foreground">AES-256 encryption with homomorphic processing</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                </div>
                <h4 className="font-semibold mb-2">Compliance</h4>
                <p className="text-sm text-muted-foreground">GDPR, ISO 27001, and local regulations</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold mb-2">User Control</h4>
                <p className="text-sm text-muted-foreground">Full data transparency and user consent</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
          <CardContent className="text-center py-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Financial Inclusion?</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join us in revolutionizing credit assessment and empowering millions of unbanked individuals worldwide with CreSo.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="px-4 py-2">AI-Powered</Badge>
              <Badge variant="secondary" className="px-4 py-2">Privacy-First</Badge>
              <Badge variant="secondary" className="px-4 py-2">Global Scale</Badge>
              <Badge variant="secondary" className="px-4 py-2">Real-time</Badge>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default ProjectPresentation;