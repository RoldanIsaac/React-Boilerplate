type Props = {
  className?: string;
  gridSize?: number; // Grid size in px
};

const GridPatternOverlay = ({
  className = "",
  gridSize = 60, // Default value: 60px
}: Props) => {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage:
          `repeating-linear-gradient(0deg, rgba(255,255,255,.03) 0px, rgba(255,255,255,.03) 1px, transparent 1px, transparent ${gridSize}px),` +
          `repeating-linear-gradient(90deg, rgba(255,255,255,.03) 0px, rgba(255,255,255,.03) 1px, transparent 1px, transparent ${gridSize}px)`,
        maskImage:
          "linear-gradient(to bottom, transparent, black, transparent)",
      }}
      aria-hidden="true"
    />
  );
};

export default GridPatternOverlay;
