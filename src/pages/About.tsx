import { Heart, Users, Star, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <div className="min-h-screen pt-32 py-20 px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="font-comic text-5xl md:text-6xl text-pop-orange mb-4">
          ABOUT ARTHVED
        </h1>
        <div className="w-24 h-2 bg-pop-yellow mx-auto shadow-comic mb-6"></div>
        <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
          Where ancient wisdom meets modern art in perfect harmony
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="font-comic text-4xl text-pop-orange mb-6">
              OUR DIVINE MISSION
            </h2>
            <div className="space-y-4 font-body text-lg leading-relaxed">
              <p>
                At Arthved, we believe that spirituality should be accessible, engaging, and 
                visually inspiring. We've revolutionized the way people experience sacred 
                stotras by combining traditional Hindu wisdom with vibrant Pop Art aesthetics.
              </p>
              <p>
                Our platform transforms ancient Sanskrit verses into an immersive digital 
                experience, making it easier for modern devotees to connect with divine energy 
                while preserving the authentic essence of these timeless prayers.
              </p>
            </div>
            <Button variant="hero" size="comic" className="mt-6">
              <Heart className="w-5 h-5 mr-2" />
              JOIN OUR MISSION
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-card border-4 border-pop-orange rounded-2xl p-8 shadow-comic">
              <div className="text-center">
                <div className="w-24 h-24 bg-pop-orange rounded-full flex items-center justify-center mx-auto mb-6 border-3 border-comic-black shadow-comic">
                  <span className="font-comic text-4xl text-white">ॐ</span>
                </div>
                <h3 className="font-comic text-2xl text-pop-orange mb-4">
                  TRADITIONAL MEETS MODERN
                </h3>
                <p className="font-body text-muted-foreground">
                  Preserving the sanctity of ancient prayers while making them 
                  accessible to the digital generation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="font-comic text-4xl text-pop-orange text-center mb-12">
          OUR CORE VALUES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card border-4 border-pop-orange rounded-2xl p-8 shadow-comic text-center">
            <div className="w-16 h-16 bg-pop-yellow rounded-full flex items-center justify-center mx-auto mb-6 border-3 border-comic-black shadow-comic">
              <Star className="w-8 h-8 text-comic-black" />
            </div>
            <h3 className="font-comic text-xl text-pop-orange mb-4">AUTHENTICITY</h3>
            <p className="font-body text-muted-foreground">
              We maintain the original Sanskrit verses and meanings while presenting 
              them in an engaging modern format.
            </p>
          </div>

          <div className="bg-card border-4 border-pop-orange rounded-2xl p-8 shadow-comic text-center">
            <div className="w-16 h-16 bg-deep-blue rounded-full flex items-center justify-center mx-auto mb-6 border-3 border-comic-black shadow-comic">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-comic text-xl text-pop-orange mb-4">ACCESSIBILITY</h3>
            <p className="font-body text-muted-foreground">
              Making spiritual content available to everyone, regardless of their 
              background or familiarity with traditional practices.
            </p>
          </div>

          <div className="bg-card border-4 border-pop-orange rounded-2xl p-8 shadow-comic text-center">
            <div className="w-16 h-16 bg-pop-orange rounded-full flex items-center justify-center mx-auto mb-6 border-3 border-comic-black shadow-comic">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-comic text-xl text-pop-orange mb-4">INNOVATION</h3>
            <p className="font-body text-muted-foreground">
              Continuously exploring new ways to bridge the gap between ancient 
              wisdom and contemporary digital experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-deep-blue to-pop-orange/20 border-4 border-pop-orange rounded-3xl p-12 shadow-pop">
          <h2 className="font-comic text-4xl text-pop-orange mb-6">
            JOIN THE SPIRITUAL REVOLUTION
          </h2>
          <p className="font-body text-white text-lg mb-8 leading-relaxed">
            Be part of a community that's redefining how we experience and share 
            spiritual wisdom in the digital age. Together, we're making ancient 
            prayers accessible to millions worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="comic">
              <Heart className="w-5 h-5 mr-2" />
              START YOUR JOURNEY
            </Button>
            <Button variant="comic" size="comic">
              <Users className="w-5 h-5 mr-2" />
              JOIN COMMUNITY
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};