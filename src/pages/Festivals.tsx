import { Calendar, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const festivals = [
  {
    name: "Maha Shivratri",
    date: "March 8, 2024",
    description: "The great night of Lord Shiva, celebrated with fasting, prayers, and night-long vigils.",
    significance: "This is the most significant festival dedicated to Lord Shiva.",
    icon: "🕉️"
  },
  {
    name: "Navratri",
    date: "October 3-12, 2024",
    description: "Nine nights dedicated to the worship of Goddess Durga and her nine forms.",
    significance: "Celebrates the victory of good over evil and the divine feminine power.",
    icon: "🌺"
  },
  {
    name: "Hanuman Jayanti",
    date: "April 23, 2024",
    description: "Birth anniversary of Lord Hanuman, the devoted follower of Lord Rama.",
    significance: "Devotees seek strength, courage, and protection from obstacles.",
    icon: "🙏"
  },
  {
    name: "Ganesh Chaturthi",
    date: "September 7, 2024",
    description: "Celebration of Lord Ganesha's birth, the remover of obstacles.",
    significance: "Marks new beginnings and the removal of obstacles from life.",
    icon: "🐘"
  }
];

export const Festivals = () => {
  return (
    <div className="min-h-screen pt-32 py-20 px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="font-comic text-5xl md:text-6xl text-pop-orange mb-4">
          FESTIVAL CALENDAR
        </h1>
        <div className="w-24 h-2 bg-pop-yellow mx-auto shadow-comic mb-6"></div>
        <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
          Celebrate divine occasions with complete festival information and special prayers
        </p>
      </div>

      {/* Festivals Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {festivals.map((festival, index) => (
          <div
            key={index}
            className="bg-card border-4 border-pop-orange rounded-2xl p-8 shadow-comic pop-hover relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 halftone-md opacity-20"></div>
            <div className="absolute -top-3 -right-3 bg-pop-yellow text-comic-black font-comic text-2xl px-4 py-2 border-2 border-comic-black rounded-full shadow-comic">
              {festival.icon}
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="font-comic text-3xl text-pop-orange mb-2">
                {festival.name.toUpperCase()}
              </h3>
              
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-pop-yellow" />
                <span className="font-body text-lg text-muted-foreground">{festival.date}</span>
              </div>

              <p className="font-body text-foreground mb-4 leading-relaxed">
                {festival.description}
              </p>

              <div className="speech-bubble mb-6">
                <div className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-pop-orange mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-pop-orange">Significance:</strong>
                    <p className="mt-1">{festival.significance}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="comic" size="sm">
                  <Heart className="w-4 h-4 mr-2" />
                  SPECIAL PRAYERS
                </Button>
                <Button variant="spiritual" size="sm">
                  LEARN MORE
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Events */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <div className="bg-gradient-to-r from-deep-blue to-pop-orange/20 border-4 border-pop-orange rounded-3xl p-12 shadow-pop">
          <h2 className="font-comic text-4xl text-pop-orange mb-4">
            NEVER MISS A CELEBRATION
          </h2>
          <p className="font-body text-white mb-6">
            Get notified about upcoming festivals and auspicious dates
          </p>
          <Button variant="hero" size="comic">
            <Calendar className="w-5 h-5 mr-2" />
            SUBSCRIBE TO CALENDAR
          </Button>
        </div>
      </div>
    </div>
  );
};