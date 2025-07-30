import { Button } from "@/components/ui/button";
import { Play, Pause, Download, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";

interface StotraCardProps {
  title: string;
  sanskritText: string;
  meaning: string;
  audioUrl?: string;
  downloadUrl?: string;
}

export const StotraCard = ({ title, sanskritText, meaning, audioUrl, downloadUrl }: StotraCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
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

  return (
    <div className="bg-card border-4 border-pop-orange rounded-2xl p-8 shadow-comic pop-hover relative overflow-hidden">
      {/* Decorative halftone pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 halftone-md opacity-20"></div>
      
      {/* Comic burst decoration */}
      <div className="absolute -top-3 -right-3 bg-pop-yellow text-comic-black font-comic text-sm px-3 py-1 border-2 border-comic-black rounded-full shadow-comic transform rotate-12">
        BAM!
      </div>

      {/* Title */}
      <h2 className="font-comic text-3xl text-pop-orange mb-6 relative z-10">
        {title.toUpperCase()}
      </h2>

      {/* Sanskrit text */}
      <div className="font-sanskrit text-xl text-foreground mb-6 leading-relaxed bg-background/20 p-4 rounded-lg border-2 border-pop-orange/30">
        {sanskritText}
      </div>

      {/* Meaning in speech bubble */}
      <div className="speech-bubble text-base mb-6 relative z-10">
        <strong>Meaning:</strong> {meaning}
      </div>

      {/* Audio player section */}
      {audioUrl && (
        <div className="bg-deep-blue/80 border-3 border-pop-yellow rounded-xl p-6 mb-6">
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
          <div className="flex items-center gap-4 mb-4">
            <Button 
              variant="comic" 
              size="icon" 
              onClick={togglePlay}
              className="flex-shrink-0"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </Button>
            
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

      {/* Action buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button variant="comic" size="comic">
          <Play className="w-5 h-5" />
          PLAY
        </Button>
        {downloadUrl && (
          <Button variant="download" size="comic">
            <Download className="w-5 h-5" />
            DOWNLOAD
          </Button>
        )}
      </div>
    </div>
  );
};