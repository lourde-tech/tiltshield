import { useEffect, useRef, useState } from "react";

const POSTER_SRC = "/images/tiltshield-hero-poster.jpg";
const DESKTOP_VIDEO_SRC = "/videos/tiltshield-hero-1080.mp4";
const MOBILE_VIDEO_SRC = "/videos/tiltshield-hero-720.mp4";

/**
 * Full-background hero video layer.
 *
 * - Fills its positioned parent (absolute inset-0), object-cover
 * - Autoplays muted + inline, native loop, no controls
 * - Pauses when substantially off screen (IntersectionObserver),
 *   when the tab is hidden, or when the user prefers reduced motion
 * - Falls back to the static poster on genuine media errors only
 * - Poster and video share identical geometry, so playback start
 *   causes no layout shift
 */
export function TiltShieldHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasFailed, setHasFailed] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || hasFailed) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isIntersecting = true;

    const synchronizePlayback = async () => {
      const shouldPause = document.hidden || motionPreference.matches || !isIntersecting;
      if (shouldPause) {
        video.pause();
        return;
      }
      video.muted = true;
      try {
        await video.play();
      } catch (err) {
        // Transient rejections (AbortError while sources are still loading,
        // NotAllowedError from an autoplay policy) leave the poster visible
        // and retry on the next canplay/visibility event. Only genuine
        // media errors (onError) permanently fail over to the poster.
        const transient =
          err instanceof DOMException &&
          (err.name === "AbortError" || err.name === "NotAllowedError");
        if (!transient) setHasFailed(true);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        void synchronizePlayback();
      },
      { root: null, rootMargin: "180px 0px", threshold: 0.08 }
    );

    const handleVisibilityChange = () => void synchronizePlayback();
    const handleMotionPreferenceChange = () => void synchronizePlayback();
    const handleCanPlay = () => void synchronizePlayback();

    observer.observe(video);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    motionPreference.addEventListener("change", handleMotionPreferenceChange);
    video.addEventListener("canplay", handleCanPlay);

    void synchronizePlayback();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      motionPreference.removeEventListener("change", handleMotionPreferenceChange);
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, [hasFailed]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-navy">
      <img
        src={POSTER_SRC}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1198}
        className={[
          "absolute inset-0 h-full w-full object-cover object-[62%_42%] lg:object-[center_42%]",
          "transition-opacity duration-500",
          isReady && !hasFailed ? "opacity-0" : "opacity-100",
        ].join(" ")}
      />

      {!hasFailed ? (
        <video
          ref={videoRef}
          aria-hidden="true"
          autoPlay
          className={[
            "pointer-events-none absolute inset-0 h-full w-full select-none",
            "object-cover object-[62%_42%] lg:object-[center_42%]",
            "transition-opacity duration-500",
            isReady ? "opacity-100" : "opacity-0",
          ].join(" ")}
          controls={false}
          controlsList="nodownload nofullscreen noplaybackrate"
          disablePictureInPicture
          disableRemotePlayback
          loop
          muted
          playsInline
          poster={POSTER_SRC}
          preload="metadata"
          tabIndex={-1}
          onCanPlay={() => setIsReady(true)}
          onError={() => {
            // React also routes skipped-<source> selection errors here (the
            // mobile source is legitimately skipped on desktop). Only fail
            // over to the poster when the video element itself reports a
            // MediaError, meaning no playable source remains.
            if (videoRef.current?.error) setHasFailed(true);
          }}
        >
          <source media="(max-width: 767px)" src={MOBILE_VIDEO_SRC} type="video/mp4" />
          <source src={DESKTOP_VIDEO_SRC} type="video/mp4" />
        </video>
      ) : null}

      <span className="sr-only">
        A rotating studio view of the reusable TiltShield cover fitted over an
        institutional tilt truck.
      </span>
    </div>
  );
}
