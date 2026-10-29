"use client";

import { useState } from "react";

type Props = { src: string; alt: string; className?: string };

// Plain <img> with a graceful fallback: if the URL fails, the green placeholder behind it shows.
export default function SafeImage({ src, alt, className = "" }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-brand-light ${className}`}
      />
    );
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
