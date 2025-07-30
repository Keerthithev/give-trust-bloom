import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Transparent, Verified Donations.{" "}
                <span className="bg-gradient-trust bg-clip-text text-transparent">
                  Help Real People.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Every donation is verified, tracked, and transparent. Connect directly with those in need 
                and see exactly how your contribution makes a difference.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-muted-foreground">Video Verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-success" />
                <span className="text-muted-foreground">Refund Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-success" />
                <span className="text-muted-foreground">Community Verified</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-trust hover:opacity-90 shadow-trust text-lg px-8 py-6"
              >
                Browse Requests
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2"
              >
                Request Help
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$2.4M+</div>
                <div className="text-sm text-muted-foreground">Donated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">12,000+</div>
                <div className="text-sm text-muted-foreground">Lives Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.8%</div>
                <div className="text-sm text-muted-foreground">Verified</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-trust">
              <img 
                src={heroImage} 
                alt="People helping each other through transparent donations" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Trust Badge */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-soft animate-float">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">100% Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;