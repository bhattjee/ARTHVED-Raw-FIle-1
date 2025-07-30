import { StotraCard } from "./StotraCard";

const stotrasData = [
  {
    title: "Shiva Tandava Stotram",
    sanskritText: `जटाटवीगलज्जलप्रवाहपावितस्थले
गलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम्।
डमड्डमड्डमड्डमनिनादवड्डमर्वयं
चकार चण्डतांडवं तनोतु नः शिवः शिवम्॥`,
    meaning: "Lord Shiva, whose matted hair is purified by the flowing waters of the Ganges, around whose neck hangs a garland of great serpents, who performed the fierce Tandava dance to the beat of the Damaru drum - may that Lord Shiva bestow auspiciousness upon us."
  },
  {
    title: "Mahamrityunjaya Mantra",
    sanskritText: `ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।
उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्॥`,
    meaning: "We worship the Three-Eyed Lord Shiva who is fragrant and nourishes all beings. May He liberate us from death for the sake of immortality, as the cucumber is severed from its bondage to the creeper."
  },
  {
    title: "Rudrashtakam",
    sanskritText: `नमामीशमीशान निर्वाणरूपं
विभुं व्यापकं ब्रह्मवेदस्वरूपम्।
निजं निर्गुणं निर्विकल्पं निरीहं
चिदाकाशमाकाशवासं भजेऽहम्॥`,
    meaning: "I bow to that Isha (Shiva), the Lord, whose form is Nirvana, who is omnipresent, all-pervading, and whose nature is Brahman and the Vedas. I worship Him who is self-existent, attribute-less, beyond imagination, desireless, and who dwells in the space of consciousness and in the sky."
  },
  {
    title: "Shiva Panchakshara Stotram",
    sanskritText: `नागेन्द्रहाराय त्रिलोचनाय
भस्माङ्गरागाय महेश्वराय।
नित्याय शुद्धाय दिगम्बराय
तस्मै न काराय नमः शिवाय॥`,
    meaning: "To Him who wears serpents as ornaments, who has three eyes, whose body is smeared with ashes, who is the great Lord, who is eternal, pure, and clothed with directions - to that 'Na'-kara (letter Na), salutations to Shiva."
  },
  {
    title: "Lingashtakam",
    sanskritText: `ब्रह्मुरारिसुरार्चितलिङ्गं
निर्मलभासितशोभितलिङ्गम्।
जन्मजदुःखविनाशकलिङ्गं
तत्प्रणमामि सदाशिवलिङ्गम्॥`,
    meaning: "I bow to that eternal Shiva Linga, which is worshipped by Brahma, Vishnu and other gods, which shines with pure radiance, and which destroys the sorrows of birth and death."
  },
  {
    title: "Shiva Chalisa",
    sanskritText: `जय गिरिजा पति दीन दयाला।
सदा करत सन्तन प्रतिपाला॥
भाल चन्द्रमा सोहत नीके।
कानन कुण्डल नागफनी के॥`,
    meaning: "Glory to the Lord of Parvati, who is compassionate to the poor and always protects the devotees. The moon adorns His forehead beautifully, and His ears are decorated with earrings made of serpent hoods."
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
            meaning={stotra.meaning}
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