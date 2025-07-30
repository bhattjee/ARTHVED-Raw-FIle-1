import { StotraCard } from "./StotraCard";

const stotrasData = [
  {
    title: "Shiva Tandava Stotram",
    sanskritText: `जटाटवीगलज्जलप्रवाहपावितस्थले
गलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम्।
डमड्डमड्डमड्डमनिनादवड्डमर्वयं
चकार चण्डतांडवं तनोतु नः शिवः शिवम्॥`,
    englishMeaning: "Lord Shiva, whose matted hair is purified by the flowing waters of the Ganges, around whose neck hangs a garland of great serpents, who performed the fierce Tandava dance to the beat of the Damaru drum - may that Lord Shiva bestow auspiciousness upon us.",
    hindiMeaning: "भगवान शिव, जिनके जटाजूट गंगा के प्रवाहमान जल से पवित्र हैं, जिनके गले में महान सर्पों की माला लटकती है, जिन्होंने डमरू की ध्वनि पर प्रचंड तांडव नृत्य किया - वे भगवान शिव हम पर कल्याण बरसाएं।"
  },
  {
    title: "Mahamrityunjaya Mantra",
    sanskritText: `ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।
उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्॥`,
    englishMeaning: "We worship the Three-Eyed Lord Shiva who is fragrant and nourishes all beings. May He liberate us from death for the sake of immortality, as the cucumber is severed from its bondage to the creeper.",
    hindiMeaning: "हम त्रिनेत्र भगवान शिव की आराधना करते हैं जो सुगंधित हैं और सभी प्राणियों का पोषण करते हैं। वे हमें मृत्यु से मुक्त करें और अमरता प्रदान करें, जैसे खीरा अपनी बेल से अलग हो जाता है।"
  },
  {
    title: "Rudrashtakam",
    sanskritText: `नमामीशमीशान निर्वाणरूपं
विभुं व्यापकं ब्रह्मवेदस्वरूपम्।
निजं निर्गुणं निर्विकल्पं निरीहं
चिदाकाशमाकाशवासं भजेऽहम्॥`,
    englishMeaning: "I bow to that Isha (Shiva), the Lord, whose form is Nirvana, who is omnipresent, all-pervading, and whose nature is Brahman and the Vedas. I worship Him who is self-existent, attribute-less, beyond imagination, desireless, and who dwells in the space of consciousness and in the sky.",
    hindiMeaning: "मैं उन ईश (शिव) को प्रणाम करता हूं, जो भगवान हैं, जिनका रूप निर्वाण है, जो सर्वव्यापी हैं, और जिनका स्वरूप ब्रह्म और वेद है। मैं उनकी पूजा करता हूं जो स्वयंभू, निर्गुण, निर्विकल्प, निरीह और चेतना के आकाश में निवास करने वाले हैं।"
  }
];

export const StotraGrid = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      {/* Section header */}
      <div className="text-center mb-16">
        <h2 className="font-comic text-5xl md:text-6xl text-pop-orange mb-4">
          DIVINE STOTRAS
        </h2>
        <div className="w-24 h-2 bg-pop-yellow mx-auto shadow-comic"></div>
        <p className="font-body text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
          Immerse yourself in the sacred verses of Lord Shiva with our pop art collection
        </p>
      </div>

      {/* Stotras grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {stotrasData.map((stotra, index) => (
          <StotraCard
            key={index}
            title={stotra.title}
            sanskritText={stotra.sanskritText}
            englishMeaning={stotra.englishMeaning}
            hindiMeaning={stotra.hindiMeaning}
            audioUrl={`/audio/${stotra.title.toLowerCase().replace(/\s+/g, '-')}.mp3`}
            downloadUrl={`/downloads/${stotra.title.toLowerCase().replace(/\s+/g, '-')}.pdf`}
          />
        ))}
      </div>

      {/* Footer decoration */}
      <div className="text-center mt-20">
        <div className="inline-block bg-pop-yellow text-comic-black font-comic text-3xl px-8 py-4 border-4 border-comic-black rounded-full shadow-pop transform hover:rotate-6 transition-transform duration-300">
          ॐ NAMAH SHIVAYA ॐ
        </div>
      </div>
    </div>
  );
};