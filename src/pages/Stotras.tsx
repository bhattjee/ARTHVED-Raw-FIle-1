import { useState } from "react";
import { StotraCard } from "@/components/StotraCard";

const stotrasData = {
  shivji: [
    {
      title: "Shiva Tandava Stotram",
      sanskritText: `जटाटवीगलज्जलप्रवाहपावितस्थले
गलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम्।
डमड्डमड्डमड्डमनिनादवड्डमर्वयं
चकार चण्डतांडवं तनोतु नः शिवः शिवम्॥

यद्दललीढलीलकाललितललललोललिल्ल
रेतुर्नवाहिणीप्रवाहपावितान्गुलम्।
लेलीढलीलकाललितललललोललिल्ल
रेवतीतनुच्छदातिपावितारिकण्ठकम्॥`,
      englishMeaning: "Lord Shiva, whose matted hair is purified by the flowing waters of the Ganges, around whose neck hangs a garland of great serpents, who performed the fierce Tandava dance to the beat of the Damaru drum - may that Lord Shiva bestow auspiciousness upon us.",
      hindiMeaning: "भगवान शिव, जिनके जटाजूट गंगा के प्रवाहमान जल से पवित्र हैं, जिनके गले में महान सर्पों की माला लटकती है, जिन्होंने डमरू की ध्वनि पर प्रचंड तांडव नृत्य किया - वे भगवान शिव हम पर कल्याण बरसाएं।",
      spotifyUrl: "https://open.spotify.com/track/example1"
    },
    {
      title: "Mahamrityunjaya Mantra",
      sanskritText: `ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।
उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्॥`,
      englishMeaning: "We worship the Three-Eyed Lord Shiva who is fragrant and nourishes all beings. May He liberate us from death for the sake of immortality, as the cucumber is severed from its bondage to the creeper.",
      hindiMeaning: "हम त्रिनेत्र भगवान शिव की आराधना करते हैं जो सुगंधित हैं और सभी प्राणियों का पोषण करते हैं। वे हमें मृत्यु से मुक्त करें और अमरता प्रदान करें, जैसे खीरा अपनी बेल से अलग हो जाता है।"
    }
  ],
  mataji: [
    {
      title: "Durga Chalisa",
      sanskritText: `नमो नमो दुर्गे सुख करनी।
नमो नमो अम्बे दुःख हरनी॥
निराकार है ज्योति तुम्हारी।
तिहूँ लोक फैली उजियारी॥`,
      englishMeaning: "I bow to you, Durga, the giver of happiness. I bow to you, Amba, the remover of sorrows. Your light is formless, spreading illumination across all three worlds.",
      hindiMeaning: "मैं आपको प्रणाम करता हूं, दुर्गा माता, जो सुख देती हैं। मैं आपको प्रणाम करता हूं, अंबे माता, जो दुख हरती हैं। आपकी ज्योति निराकार है, तीनों लोकों में उजाला फैलाती है।"
    },
    {
      title: "Lalita Sahasranama",
      sanskritText: `श्रीमाता श्रीमहाराज्ञी श्रीमत्सिंहासनेश्वरी।
चिदग्निकुण्डसम्भूता देवकार्यसमुद्यता॥`,
      englishMeaning: "She is the Divine Mother, the Great Queen, the Sovereign of the magnificent throne. She is born from the fire-pit of consciousness, ever ready for divine work.",
      hindiMeaning: "वे दिव्य माता हैं, महान रानी हैं, भव्य सिंहासन की स्वामिनी हैं। वे चेतना के अग्निकुंड से जन्मी हैं, सदा दिव्य कार्यों के लिए तत्पर हैं।"
    }
  ],
  hanumanji: [
    {
      title: "Hanuman Chalisa",
      sanskritText: `श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि।
बरनउं रघुवर बिमल जसु जो दायकु फल चारि॥
बुद्धिहीन तनु जानिके सुमिरौं पवन कुमार।
बल बुधि बिद्या देहु मोहिं हरहु कलेस बिकार॥`,
      englishMeaning: "With the dust of my Guru's lotus feet, I clean the mirror of my mind and describe the pure fame of Raghuvir, which bestows the four fruits of life. Knowing myself to be ignorant, I urge you, O Hanuman, to bless me with strength, intelligence and knowledge, removing all my sufferings and impurities.",
      hindiMeaning: "अपने गुरु के चरण कमलों की धूल से मैं अपने मन रूपी दर्पण को साफ करता हूं और रघुवीर के निर्मल यश का वर्णन करता हूं जो चारों फल देता है। अपने को बुद्धिहीन जानकर हे पवन कुमार, मुझे बल, बुद्धि और विद्या दें और मेरे सभी कष्ट और विकार हर लें।"
    }
  ],
  ganesha: [
    {
      title: "Ganesh Aarti",
      sanskritText: `जय गणेश जय गणेश जय गणेश देवा।
माता जाकी पार्वती पिता महादेवा॥
एक दंत दयावंत चार भुजाधारी।
माथे पर तिलक सोहे मूसे की सवारी॥`,
      englishMeaning: "Glory to Lord Ganesha! His mother is Parvati and father is Mahadeva. He has one tusk, is compassionate, has four arms, wears a tilak on his forehead, and rides a mouse.",
      hindiMeaning: "जय गणेश देव! इनकी माता पार्वती और पिता महादेव हैं। ये एक दांत वाले, दयावान, चार भुजाओं वाले हैं, मस्तक पर तिलक शोभता है और मूषक की सवारी करते हैं।"
    }
  ]
};

const categories = [
  { id: 'shivji', name: 'शिव जी', icon: '🕉️' },
  { id: 'mataji', name: 'माता जी', icon: '🌺' },
  { id: 'hanumanji', name: 'हनुमान जी', icon: '🙏' },
  { id: 'ganesha', name: 'गणेश जी', icon: '🐘' }
];

export const Stotras = () => {
  const [activeCategory, setActiveCategory] = useState('shivji');

  return (
    <div className="min-h-screen pt-24 py-20 px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="font-comic text-5xl md:text-6xl text-pop-orange mb-4">
          DIVINE STOTRAS
        </h1>
        <div className="w-24 h-2 bg-pop-yellow mx-auto shadow-comic mb-6"></div>
        <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose your beloved deity and immerse in sacred verses
        </p>
      </div>

      {/* Category Tabs */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`font-comic text-lg px-6 py-3 rounded-xl border-3 border-comic-black shadow-comic transition-all duration-300 hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-pop-orange text-white'
                  : 'bg-white text-comic-black hover:bg-pop-yellow'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Stotras Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stotrasData[activeCategory as keyof typeof stotrasData]?.map((stotra, index) => (
            <StotraCard
              key={index}
              title={stotra.title}
              sanskritText={stotra.sanskritText}
              englishMeaning={stotra.englishMeaning}
              hindiMeaning={stotra.hindiMeaning}
              spotifyUrl={stotra.spotifyUrl}
              audioUrl={`/audio/${stotra.title.toLowerCase().replace(/\s+/g, '-')}.mp3`}
              downloadUrl={`/downloads/${stotra.title.toLowerCase().replace(/\s+/g, '-')}.pdf`}
            />
          ))}
        </div>
      </div>

      {/* Footer decoration */}
      <div className="text-center mt-20">
        <div className="inline-block bg-pop-yellow text-comic-black font-comic text-3xl px-8 py-4 border-4 border-comic-black rounded-full shadow-pop transform hover:rotate-6 transition-transform duration-300">
          ॐ सर्वे भवन्तु सुखिनः ॐ
        </div>
      </div>
    </div>
  );
};