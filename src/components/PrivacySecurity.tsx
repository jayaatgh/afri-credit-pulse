import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Database, FileText, AlertTriangle, CheckCircle, Key } from "lucide-react";

const PrivacySecurity = () => {
  const securityFeatures = [
    {
      icon: <Lock className="w-5 h-5" />,
      title: "End-to-End Encryption",
      description: "All data transmissions use AES-256 encryption with TLS 1.3 protocols",
      status: "Active",
      details: [
        "Data encrypted at rest and in transit",
        "Zero-knowledge architecture",
        "Encrypted backups with key rotation"
      ]
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Data Anonymization",
      description: "User identities are completely anonymized using advanced hashing techniques",
      status: "Active",
      details: [
        "SHA-256 hashing of user IDs",
        "No personally identifiable information stored",
        "Differential privacy implementation"
      ]
    },
    {
      icon: <Key className="w-5 h-5" />,
      title: "Homomorphic Encryption",
      description: "Computations performed on encrypted data without decryption",
      status: "Pilot",
      details: [
        "Microsoft SEAL library integration",
        "Privacy-preserving ML computations",
        "Secure multi-party computation ready"
      ]
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Secure Data Storage",
      description: "Distributed storage with access controls and audit trails",
      status: "Active",
      details: [
        "Role-based access control (RBAC)",
        "Immutable audit logs",
        "Regular security assessments"
      ]
    }
  ];

  const complianceStandards = [
    { name: "GDPR", description: "European data protection regulation", status: "Compliant" },
    { name: "ISO 27001", description: "Information security management", status: "Certified" },
    { name: "SOC 2 Type II", description: "Security and availability controls", status: "Audited" },
    { name: "PCI DSS", description: "Payment card industry standards", status: "Level 1" },
    { name: "International Data Protection", description: "Global data governance", status: "Aligned" }
  ];

  const privacyPrinciples = [
    {
      principle: "Data Minimization",
      description: "We collect only the minimum data necessary for credit assessment",
      implementation: "Alternative data sources are limited to essential financial behavior indicators"
    },
    {
      principle: "Purpose Limitation",
      description: "Data is used solely for creditworthiness evaluation",
      implementation: "Strict access controls prevent use for marketing or other purposes"
    },
    {
      principle: "Transparency",
      description: "Users understand exactly what data is used and how",
      implementation: "Clear explanations provided for each data point and its weight in scoring"
    },
    {
      principle: "User Control",
      description: "Users can request data deletion and review their information",
      implementation: "Self-service portal for data management and right to be forgotten"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
          <Shield className="w-8 h-8" />
          Privacy & Cybersecurity
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Protecting global users' financial data with state-of-the-art security measures and privacy-preserving technologies
        </p>
      </div>

      {/* Security Features */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold mb-4">Security Architecture</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  {feature.icon}
                  {feature.title}
                  <Badge 
                    variant={feature.status === "Active" ? "default" : "secondary"}
                    className="ml-auto"
                  >
                    {feature.status}
                  </Badge>
                </CardTitle>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Privacy-Preserving ML Demo */}
      <Card className="border-warning/30 bg-warning/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-warning" />
            Privacy-Preserving Machine Learning Demo
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">
            This system demonstrates how machine learning can be performed on encrypted data using homomorphic encryption:
          </p>
          
          <div className="bg-card border rounded-lg p-4 font-mono text-sm space-y-2">
            <div className="text-muted-foreground"># Simulated homomorphic encryption workflow</div>
            <div className="text-primary">1. encrypt(user_data) → encrypted_features</div>
            <div className="text-secondary">2. ml_model.predict(encrypted_features) → encrypted_score</div>
            <div className="text-accent-orange">3. decrypt(encrypted_score) → final_credit_score</div>
            <div className="text-muted-foreground"># User data never exposed in plaintext</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="text-center p-3 bg-card border rounded">
              <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="font-medium">Data Encrypted</div>
              <div className="text-sm text-muted-foreground">AES-256 + RSA-4096</div>
            </div>
            <div className="text-center p-3 bg-card border rounded">
              <Key className="w-8 h-8 mx-auto mb-2 text-secondary" />
              <div className="font-medium">Computation</div>
              <div className="text-sm text-muted-foreground">On Encrypted Data</div>
            </div>
            <div className="text-center p-3 bg-card border rounded">
              <CheckCircle className="w-8 h-8 mx-auto mb-2 text-success" />
              <div className="font-medium">Result Decrypted</div>
              <div className="text-sm text-muted-foreground">Only Final Score</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Compliance Standards */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Compliance & Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {complianceStandards.map((standard, index) => (
            <Card key={index} className="border-success/20">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{standard.name}</h4>
                  <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                    {standard.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{standard.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Privacy Principles */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Privacy by Design Principles</h3>
        <div className="space-y-4">
          {privacyPrinciples.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <FileText className="w-5 h-5 text-primary mt-1" />
                  <div className="space-y-2">
                    <h4 className="font-semibold">{item.principle}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <div className="bg-muted/50 border rounded p-3 text-sm">
                      <strong>Implementation:</strong> {item.implementation}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Global Context */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Global Data Sovereignty</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Our approach respects global data sovereignty and promotes financial inclusion while maintaining the highest privacy standards:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Global Infrastructure</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Data centers in multiple regions worldwide</li>
                <li>• Edge computing for reduced latency</li>
                <li>• Local regulatory compliance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Community Impact</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Supporting global FinTech development</li>
                <li>• Creating jobs in tech and finance sectors</li>
                <li>• Enabling credit access for 1.7B+ unbanked individuals</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacySecurity;