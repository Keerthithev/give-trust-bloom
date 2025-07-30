import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Calendar, Video, Heart, ExternalLink } from "lucide-react";

const FeaturedRequests = () => {
  const requests = [
    {
      id: 1,
      name: "Sarah Chen",
      location: "Portland, OR",
      title: "Medical Treatment for Rare Condition",
      description: "I'm seeking help for treatment of a rare neurological condition that isn't covered by insurance. Every donation brings me closer to getting the specialized care I need.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=400&h=300&fit=crop&crop=face",
      videoThumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=200&h=150&fit=crop&crop=face",
      goal: 25000,
      raised: 18750,
      donors: 234,
      daysLeft: 12,
      verified: true,
      category: "Medical"
    },
    {
      id: 2,
      name: "Miguel Rodriguez",
      location: "Austin, TX",
      title: "Small Business Recovery After Fire",
      description: "Our family restaurant was damaged in a recent fire. We're working to rebuild and get back to serving our community. Any support helps us get back on our feet.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face",
      videoThumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=150&fit=crop&crop=face",
      goal: 35000,
      raised: 12500,
      donors: 127,
      daysLeft: 25,
      verified: true,
      category: "Business"
    },
    {
      id: 3,
      name: "Emma Thompson",
      location: "Denver, CO",
      title: "Educational Support for Single Mom",
      description: "As a single mother pursuing nursing school, I need help with childcare costs and educational expenses. Your support helps me build a better future for my family.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face",
      videoThumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=150&fit=crop&crop=face",
      goal: 15000,
      raised: 8900,
      donors: 89,
      daysLeft: 18,
      verified: true,
      category: "Education"
    }
  ];

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Medical": return "bg-red-100 text-red-800";
      case "Business": return "bg-blue-100 text-blue-800";
      case "Education": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured Requests
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help real people with verified needs. Every story is authentic, every donation makes a difference.
          </p>
        </div>

        {/* Request Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {requests.map((request) => (
            <Card key={request.id} className="overflow-hidden hover:shadow-trust transition-all duration-300 group border-0 shadow-soft">
              {/* Image Header */}
              <div className="relative">
                <img 
                  src={request.image} 
                  alt={request.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Verified Badge */}
                {request.verified && (
                  <Badge className="absolute top-3 left-3 bg-success text-success-foreground">
                    <Video className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                )}

                {/* Category Badge */}
                <Badge className={`absolute top-3 right-3 ${getCategoryColor(request.category)}`}>
                  {request.category}
                </Badge>

                {/* Video Thumbnail Overlay */}
                <div className="absolute bottom-3 right-3">
                  <div className="relative w-16 h-12 rounded-lg overflow-hidden border-2 border-white shadow-lg">
                    <img 
                      src={request.videoThumbnail} 
                      alt="Video introduction"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Video className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Header Info */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg text-foreground">{request.name}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    {request.location}
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-medium text-foreground mb-3">{request.title}</h4>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                  {request.description}
                </p>

                {/* Progress */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      ${request.raised.toLocaleString()} raised
                    </span>
                    <span className="font-medium text-foreground">
                      ${request.goal.toLocaleString()} goal
                    </span>
                  </div>
                  <Progress 
                    value={getProgressPercentage(request.raised, request.goal)} 
                    className="h-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{request.donors} donors</span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {request.daysLeft} days left
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-trust hover:opacity-90">
                    <Heart className="w-4 h-4 mr-2" />
                    Donate
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2">
            View All Requests
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRequests;