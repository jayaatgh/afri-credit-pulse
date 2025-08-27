import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Shield, 
  TrendingUp, 
  Globe, 
  Users, 
  CreditCard, 
  Smartphone, 
  BarChart3,
  FileText,
  ChevronRight,
  Star
} from "lucide-react";
import CreditAssessment from "@/components/CreditAssessment";
import ModelDashboard from "@/components/ModelDashboard";
import PrivacySecurity from "@/components/PrivacySecurity";
import Documentation from "@/components/Documentation";
import ProjectPresentation from "@/components/ProjectPresentation";

const Index = () => {
  const [activeTab, setActiveTab] = useState<'assessment' | 'dashboard' | 'security' | 'docs' | 'presentation' | 'home'>('home');

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Scoring",
      description: "Advanced machine learning models analyze alternative data to predict creditworthiness with 87% accuracy"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy-First Design",
      description: "Homomorphic encryption and data anonymization ensure user privacy while enabling powerful insights"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-Centric Data",
      description: "Leverage mobile money transactions, airtime patterns, and digital bill payments as credit indicators"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Focus",
      description: "Designed for emerging markets worldwide with local data sovereignty and regulatory compliance"
    }
  ];

  const stats = [
    { label: "Unbanked Population Served", value: "600M+", icon: <Users className="w-5 h-5" /> },
    { label: "Model Accuracy", value: "87.3%", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Countries Covered", value: "12", icon: <Globe className="w-5 h-5" /> },
    { label: "Loan Approvals", value: "28K+", icon: <CreditCard className="w-5 h-5" /> }
  ];

  if (activeTab !== 'home') {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={() => setActiveTab('home')}
                className="text-lg font-bold"
              >
                ← CreSo
              </Button>
              <Tabs value={activeTab} onValueChange={(value: string) => setActiveTab(value as 'assessment' | 'dashboard' | 'security' | 'docs' | 'presentation')} className="w-auto">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="assessment">Assessment</TabsTrigger>
                  <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="docs">Docs</TabsTrigger>
                  <TabsTrigger value="presentation">Present</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {activeTab === 'assessment' && <CreditAssessment />}
          {activeTab === 'dashboard' && <ModelDashboard />}
          {activeTab === 'security' && <PrivacySecurity />}
          {activeTab === 'docs' && <Documentation />}
          {activeTab === 'presentation' && <ProjectPresentation />}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-light to-secondary text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            <Star className="w-3 h-3 mr-1" />
            CreSo - AI Credit Scoring
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            CreSo
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Empowering financial inclusion globally using alternative data and privacy-preserving AI to assess creditworthiness for the unbanked population
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
                   onClick={() => setActiveTab('assessment')}
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
            >
              Try Credit Assessment
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
                   onClick={() => setActiveTab('docs')}
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              <FileText className="w-5 h-5 mr-2" />
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-primary/10 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Revolutionary Credit Scoring</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Using AI and alternative data to unlock financial opportunities for millions of unbanked individuals worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="border-primary/10 hover:shadow-lg transition-all hover:border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {feature.icon}
                    </div>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Interactive Demo Section */}
          <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <BarChart3 className="w-6 h-6" />
                Experience the Power of AI Credit Scoring
              </CardTitle>
              <p className="text-muted-foreground">
                Explore our comprehensive platform with real-time assessment, model analytics, and security features
              </p>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button
                  variant="outline"
                  onClick={() => setActiveTab('assessment')}
                  className="h-auto p-6 flex flex-col items-center space-y-2"
                >
                  <CreditCard className="w-8 h-8" />
                  <span>Credit Assessment</span>
                  <span className="text-xs text-muted-foreground">Test the AI model</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setActiveTab('dashboard')}
                  className="h-auto p-6 flex flex-col items-center space-y-2"
                >
                  <BarChart3 className="w-8 h-8" />
                  <span>Model Dashboard</span>
                  <span className="text-xs text-muted-foreground">View performance metrics</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setActiveTab('security')}
                  className="h-auto p-6 flex flex-col items-center space-y-2"
                >
                  <Shield className="w-8 h-8" />
                  <span>Privacy & Security</span>
                  <span className="text-xs text-muted-foreground">Learn about data protection</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setActiveTab('docs')}
                  className="h-auto p-6 flex flex-col items-center space-y-2"
                >
                  <FileText className="w-8 h-8" />
                  <span>Documentation</span>
                  <span className="text-xs text-muted-foreground">Technical specifications</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setActiveTab('presentation')}
                  className="h-auto p-6 flex flex-col items-center space-y-2"
                >
                  <FileText className="w-8 h-8" />
                  <span>Presentation</span>
                  <span className="text-xs text-muted-foreground">Project overview</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Transforming Financial Inclusion Globally</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            CreSo leverages advanced machine learning and alternative data sources to revolutionize credit assessment, 
            providing millions of unbanked individuals worldwide with access to credit and financial services.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <span>• Privacy-Preserving AI</span>
            <span>• Global Data Sovereignty</span>
            <span>• Financial Inclusion</span>
            <span>• Regulatory Compliant</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
