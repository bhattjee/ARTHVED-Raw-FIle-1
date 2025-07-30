import { Button } from "@/components/ui/button";
import { Play, Music, Calendar, Info } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/shiva-pop-art-hero.jpg";

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 halftone-lg opacity-10 animate-pulse"></div>
        <div className="absolute top-20 left-10 w-32 h-32 halftone-md opacity-20 animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 halftone-sm opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="font-comic text-6xl md:text-8xl text-pop-orange leading-tight animate-fade-in">
                ॐ NAMAH
                <br />
                SHIVAYA
              </h1>
              <div className="w-32 h-2 bg-pop-yellow mx-auto lg:mx-0 shadow-comic"></div>
            </div>

            <div className="speech-bubble max-w-lg mx-auto lg:mx-0">
              <p className="font-body text-lg">
                "Dive into the cosmic rhythm of divine stotras! Experience ancient wisdom through 
                vibrant Pop Art - where tradition meets modern expression in perfect harmony."
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/stotras">
                <Button variant="hero" size="comic" className="group">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  EXPLORE STOTRAS
                </Button>
              </Link>
              <Link to="/festivals">
                <Button variant="comic" size="comic">
                  <Calendar className="w-5 h-5" />
                  FESTIVALS
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative animate-scale-in">
              <img 
                src={heroImage} 
                alt="Pop Art Lord Shiva" 
                className="w-full max-w-lg mx-auto rounded-3xl shadow-pop border-4 border-pop-orange hover:scale-105 transition-transform duration-500"
              />
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-pop-yellow text-comic-black font-comic text-lg px-4 py-2 border-3 border-comic-black rounded-full shadow-comic animate-bounce">
                HAR HAR!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-pop-orange text-white font-comic text-sm px-3 py-1 border-2 border-comic-black rounded-full shadow-comic transform rotate-12">
                MAHADEV
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-comic text-5xl text-pop-orange mb-4">
              DIVINE EXPERIENCE
            </h2>
            <div className="w-24 h-2 bg-pop-yellow mx-auto shadow-comic"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sacred Stotras */}
            <div className="bg-card border-4 border-pop-orange rounded-2xl p-8 shadow-comic pop-hover text-center">
              <div className="w-20 h-20 bg-pop-orange rounded-full flex items-center justify-center mx-auto mb-6 border-3 border-comic-black shadow-comic">
                <Music className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-comic text-2xl text-pop-orange mb-4">SACRED STOTRAS</h3>
              <p className="font-body text-muted-foreground">
                Immerse yourself in powerful stotras dedicated to Lord Shiva, Mata Ji, Hanuman Ji and other deities. 
                Each verse carries divine energy and spiritual healing.
              </p>
              <Link to="/stotras" className="inline-block mt-4">
                <Button variant="comic" size="sm">EXPLORE NOW</Button>
              </Link>
            </div>

            {/* Festival Calendar */}
            <div className="bg-card border-4 border-pop-orange rounded-2xl p-8 shadow-comic pop-hover text-center">
              <div className="w-20 h-20 bg-deep-blue rounded-full flex items-center justify-center mx-auto mb-6 border-3 border-comic-black shadow-comic">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-comic text-2xl text-pop-orange mb-4">FESTIVAL GUIDE</h3>
              <p className="font-body text-muted-foreground">
                Never miss an auspicious occasion! Get complete information about Hindu festivals, 
                their significance, and special prayers for each celebration.
              </p>
              <Link to="/festivals" className="inline-block mt-4">
                <Button variant="comic" size="sm">VIEW CALENDAR</Button>
              </Link>
            </div>

            {/* About Mission */}
            <div className="bg-card border-4 border-pop-orange rounded-2xl p-8 shadow-comic pop-hover text-center">
              <div className="w-20 h-20 bg-pop-yellow rounded-full flex items-center justify-center mx-auto mb-6 border-3 border-comic-black shadow-comic">
                <Info className="w-10 h-10 text-comic-black" />
              </div>
              <h3 className="font-comic text-2xl text-pop-orange mb-4">OUR MISSION</h3>
              <p className="font-body text-muted-foreground">
                Bridging ancient wisdom with modern design. We make spiritual content accessible, 
                engaging, and visually stunning for the digital age.
              </p>
              <Link to="/about" className="inline-block mt-4">
                <Button variant="comic" size="sm">LEARN MORE</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-deep-blue to-pop-orange/20 border-4 border-pop-orange rounded-3xl p-12 shadow-pop">
            <h2 className="font-comic text-4xl md:text-6xl text-pop-orange mb-6">
              START YOUR SPIRITUAL JOURNEY
            </h2>
            <p className="font-body text-xl text-white mb-8 leading-relaxed">
              Join thousands of devotees experiencing divine bliss through our unique Pop Art approach to sacred stotras
            </p>
            <Link to="/stotras">
              <Button variant="hero" size="comic" className="text-xl px-12 py-6">
                <Play className="w-6 h-6 mr-2" />
                BEGIN NOW
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};