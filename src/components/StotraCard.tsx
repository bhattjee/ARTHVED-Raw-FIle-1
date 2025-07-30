import { Button } from "@/components/ui/button";
import { Play, Pause, Download, Volume2, VolumeX, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useRef } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface StotraCardProps {
  title: string;
  sanskritText: string;
  englishMeaning: string;
  hindiMeaning?: string;
  audioUrl?: string;
  downloadUrl?: string;
  spotifyUrl?: string;
}

export const StotraCard = ({ title, sanskritText, englishMeaning, hindiMeaning, audioUrl, downloadUrl, spotifyUrl }: StotraCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'english' | 'hindi'>('english');
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleSpotifyPlay = () => {
    if (spotifyUrl) {
      window.open(spotifyUrl, '_blank');
    }
  };

  return (
    <div className="bg-card border-4 border-pop-orange rounded-2xl shadow-comic pop-hover relative overflow-hidden">
      {/* Decorative halftone pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 halftone-md opacity-20"></div>
      
      {/* Comic burst decoration */}
      <div className="absolute -top-3 -right-3 bg-pop-yellow text-comic-black font-comic text-sm px-3 py-1 border-2 border-comic-black rounded-full shadow-comic transform rotate-12">
        BAM!
      </div>

      {/* Header with title and sticky action buttons */}
      <div className="sticky top-0 z-20 bg-card border-b-2 border-pop-orange/30 p-6 backdrop-blur-sm">
        <h2 className="font-comic text-2xl md:text-3xl text-pop-orange mb-4 relative z-10">
          {title.toUpperCase()}
        </h2>
        
        {/* Sticky Action buttons */}
        <div className="flex flex-wrap gap-3 justify-center">
          <Button variant="hero" size="comic" onClick={togglePlay}>
            <Play className="w-5 h-5" />
            PLAY NOW
          </Button>
          {spotifyUrl && (
            <Button variant="comic" size="comic" onClick={handleSpotifyPlay}>
              <span className="text-green-500 mr-2">♪</span>
              SPOTIFY
            </Button>
          )}
          {downloadUrl && (
            <Button variant="download" size="comic">
              <Download className="w-5 h-5" />
              DOWNLOAD
            </Button>
          )}
        </div>
      </div>

      {/* Content area */}
      <div className="p-6 pt-0">
        {/* Collapsible Sanskrit verses and translation */}
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button 
              variant="spiritual" 
              className="w-full justify-between mb-4"
              size="comic"
            >
              <span>VIEW VERSES & MEANING</span>
              {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="space-y-6">
            {/* Sanskrit text */}
            <div className="font-sanskrit text-lg text-foreground leading-relaxed bg-background/20 p-6 rounded-lg border-2 border-pop-orange/30 max-h-64 overflow-y-auto">
              {sanskritText}
            </div>

            {/* Translation section */}
            <div className="space-y-4">
              {/* Language toggle buttons */}
              <div className="flex gap-2 justify-center">
                <Button
                  variant={language === 'english' ? 'comic' : 'spiritual'}
                  size="sm"
                  onClick={() => setLanguage('english')}
                >
                  English
                </Button>
                {hindiMeaning && (
                  <Button
                    variant={language === 'hindi' ? 'comic' : 'spiritual'}
                    size="sm"
                    onClick={() => setLanguage('hindi')}
                  >
                    हिंदी
                  </Button>
                )}
              </div>

              {/* Meaning in speech bubble */}
              <div className="speech-bubble text-base relative z-10 max-h-48 overflow-y-auto">
                <strong className="text-pop-orange">
                  {language === 'english' ? 'Meaning:' : 'अर्थ:'}
                </strong>
                <p className="mt-2">
                  {language === 'english' ? englishMeaning : hindiMeaning || englishMeaning}
                </p>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Audio player section */}
        {audioUrl && (
          <div className="bg-deep-blue/80 border-3 border-pop-yellow rounded-xl p-6 mt-6">
            <audio
              ref={audioRef}
              src={audioUrl}
              onEnded={() => setIsPlaying(false)}
              onLoadedMetadata={() => {
                if (audioRef.current) {
                  audioRef.current.volume = volume;
                }
              }}
            />
            
            {/* Audio controls */}
            <div className="flex items-center gap-4">
              <Button 
                variant="spiritual" 
                size="icon" 
                onClick={toggleMute}
                className="flex-shrink-0"
              >
                {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
              </Button>
              
              {/* Volume slider */}
              <div className="flex items-center gap-2 flex-1">
                <span className="font-body text-pop-yellow text-sm font-bold">VOL:</span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="flex-1 h-2 bg-pop-orange rounded-lg appearance-none cursor-pointer slider-pop"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};