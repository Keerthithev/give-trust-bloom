import { Card, CardContent } from "@/components/ui/card";
import { FileText, Search, Heart, Video, Shield, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Find Verified Requests",
      description: "Browse through verified donation requests with full transparency and video introductions.",
      features: ["Video verified recipients", "Document verification", "Community reviews"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Donate Securely",
      description: "Choose your donation amount and payment method. Every transaction is secure and tracked.",
      features: ["Multiple payment options", "Transaction tracking", "Instant receipts"]
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "See Real Impact",
      description: "Receive updates on how your donation was used with photos and progress reports.",
      features: ["Progress updates", "Impact photos", "Thank you messages"]
    }
  ];

  const trustFeatures = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Verification",
      description: "Every recipient records a personal video introduction"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Document Verified",
      description: "All requests backed by verified supporting documents"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Full Transparency",
      description: "Track exactly how your donation makes a difference"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to make a verified, transparent donation that changes lives
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-0 shadow-soft hover:shadow-trust transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gradient-trust rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {step.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {step.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Features */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Why Trust GiveTrue?
            </h3>
            <p className="text-muted-foreground">
              Our verification process ensures every donation reaches real people with genuine needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-success-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <div className="text-success">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;