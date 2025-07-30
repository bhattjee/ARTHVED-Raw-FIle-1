import { Button } from "@/components/ui/button";
import { Play, Download, Volume2 } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with enhanced halftone pattern */}
      <div className="absolute inset-0 bg-gradient-cosmic"></div>
      <div className="absolute inset-0 halftone-lg opacity-30"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 text-6xl animate-bounce-slow opacity-60">🕉️</div>
      <div className="absolute top-40 right-20 text-4xl animate-pulse-slow opacity-40">🔱</div>
      <div className="absolute bottom-32 left-1/4 text-5xl animate-bounce-slow opacity-50">🪘</div>
      
      {/* Main hero content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main title with comic styling */}
        <div className="mb-8">
          <h1 className="font-comic text-6xl md:text-8xl text-pop-orange mb-4 transform hover:scale-105 transition-transform duration-300">
            OM NAMAH
          </h1>
          <h1 className="font-comic text-6xl md:text-8xl text-pop-yellow transform hover:scale-105 transition-transform duration-300">
            SHIVAYA
          </h1>
          
          {/* Decorative underline */}
          <div className="w-32 h-2 bg-pop-orange mx-auto mt-6 shadow-comic"></div>
        </div>
        
        {/* Subtitle with speech bubble */}
        <div className="speech-bubble max-w-2xl mx-auto mb-12 font-body text-lg font-bold">
          Experience Sacred Shiva Stotras with Vibrant Pop Art Aesthetics!
        </div>
        
        {/* Featured stotra preview */}
        <div className="bg-card border-4 border-pop-orange rounded-2xl p-8 mb-12 shadow-pop max-w-2xl mx-auto pop-hover">
          <h2 className="font-comic text-3xl text-pop-orange mb-6">
            FEATURED: SHIVA TANDAVA STOTRAM
          </h2>
          
          {/* Sanskrit preview */}
          <div className="font-sanskrit text-xl text-foreground mb-6 leading-relaxed">
            जटाटवीगलज्जलप्रवाहपावितस्थले<br/>
            गलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम्
          </div>
          
          {/* Meaning in speech bubble */}
          <div className="speech-bubble text-base mb-6">
            Lord Shiva, whose matted hair is purified by the flowing waters of the Ganges, 
            around whose neck hangs a garland of great serpents...
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="comic" size="comic">
              <Play className="w-6 h-6" />
              PLAY NOW!
            </Button>
            <Button variant="spiritual" size="comic">
              <Volume2 className="w-6 h-6" />
              LISTEN
            </Button>
            <Button variant="download" size="comic">
              <Download className="w-6 h-6" />
              DOWNLOAD
            </Button>
          </div>
        </div>
        
        {/* Call to action */}
        <Button variant="hero" size="hero" className="animate-pulse-slow">
          EXPLORE ALL STOTRAS!
        </Button>
        
        {/* Decorative comic burst */}
        <div className="absolute -top-10 -right-10 transform rotate-12">
          <div className="bg-pop-yellow text-comic-black font-comic text-2xl px-6 py-4 border-4 border-comic-black rounded-full shadow-pop">
            POW!
          </div>
        </div>
      </div>
    </div>
  );
};