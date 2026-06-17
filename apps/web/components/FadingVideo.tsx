"use client";

import React, { useRef, useEffect } from 'react';

interface FadingVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function FadingVideo({ src, className, style }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const fadingOutRef = useRef<boolean>(false);
  const FADE_MS = 500;

  const fadeTo = (targetOpacity: number, duration: number) => {
    const video = videoRef.current;
    if (!video) return;
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    const startOpacity = parseFloat(video.style.opacity) || 0;
    const startTime = performance.now();
    
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
      video.style.opacity = currentOpacity.toString();
      
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        rafRef.current = null;
      }
    };
    rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.style.opacity = '0';
    fadingOutRef.current = false;

    const handleLoadedData = () => {
      video.style.opacity = '0';
      fadingOutRef.current = false;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            fadeTo(1, FADE_MS);
          })
          .catch(err => {
            console.log("Play failed on load:", err);
            fadeTo(1, FADE_MS);
          });
      } else {
        fadeTo(1, FADE_MS);
      }
    };

    const handleTimeUpdate = () => {
      const duration = video.duration;
      const currentTime = video.currentTime;
      if (duration && !fadingOutRef.current) {
        const remaining = duration - currentTime;
        if (remaining <= 0.55 && remaining > 0) {
          fadingOutRef.current = true;
          fadeTo(0, FADE_MS);
        }
      }
    };

    let endedTimeout: NodeJS.Timeout | null = null;
    const handleEnded = () => {
      video.style.opacity = '0';
      endedTimeout = setTimeout(() => {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              fadingOutRef.current = false;
              fadeTo(1, FADE_MS);
            })
            .catch(err => {
              console.log("Play failed on loop end:", err);
              fadingOutRef.current = false;
            });
        } else {
          fadingOutRef.current = false;
          fadeTo(1, FADE_MS);
        }
      }, 100);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    if (video.readyState >= 2) {
      handleLoadedData();
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      if (endedTimeout) clearTimeout(endedTimeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      style={{ ...style, opacity: 0 }}
      autoPlay
      muted
      playsInline
      preload="auto"
    />
  );
}
