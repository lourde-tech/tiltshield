import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { IMAGE_PLACEHOLDERS } from "@/lib/image-placeholders";

type ResponsiveImageProps = {
  /** Base name in /images/tiltshield, e.g. "color-gray" (see scripts/optimize-images.mjs). */
  name: string;
  widths: number[];
  sizes: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
  /** Classes for the wrapper that paints the blur placeholder. */
  frameClassName?: string;
};

const DIR = "/images/tiltshield";

/**
 * AVIF/WebP <picture> with intrinsic dimensions and an inline blur placeholder,
 * so the frame is sized and filled before the network image arrives, then the
 * image fades in once decoded instead of painting progressively. Pass hover
 * transforms via className; the opacity/transform transition is set here.
 */
export function ResponsiveImage({
  name,
  widths,
  sizes,
  width,
  height,
  alt,
  className,
  frameClassName,
}: ResponsiveImageProps) {
  const [loaded, setLoaded] = useState(false);
  // Cached images can finish before React attaches onLoad.
  const ref = useCallback((img: HTMLImageElement | null) => {
    if (img?.complete && img.naturalWidth) setLoaded(true);
  }, []);
  const srcSet = (ext: string) => widths.map((w) => `${DIR}/${name}-${w}.${ext} ${w}w`).join(", ");
  const placeholder = IMAGE_PLACEHOLDERS[name];

  return (
    <div
      className={cn("bg-cover bg-center bg-no-repeat", frameClassName)}
      style={placeholder ? { backgroundImage: `url("${placeholder}")` } : undefined}
    >
      <picture className="block h-full w-full">
        <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
        <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
        <img
          ref={ref}
          src={`${DIR}/${name}.png`}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className={cn(
            "transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none",
            loaded ? "opacity-100" : "opacity-0",
            className,
          )}
        />
      </picture>
    </div>
  );
}
