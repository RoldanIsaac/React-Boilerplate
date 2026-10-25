type Props = {
  onStartPlaying?: boolean;
};

const VideoLayer = ({ onStartPlaying }: Props) => {
  return (
    <div className="relative">
      {onStartPlaying && (
        <video
          className="absolute inset-0 z-9999"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://evinra.com/wp-content/themes/evinra/assets/img/home-hero-fair.webp"
        >
          <source
            src="https://evinra.com/wp-content/themes/evinra/assets/video/hero-fair.webm"
            type="video/webm"
          />
          <source
            src="https://evinra.com/wp-content/themes/evinra/assets/video/hero-fair.mp4"
            type="video/mp4"
          />
        </video>
      )}
    </div>
  );
};

export default VideoLayer;
