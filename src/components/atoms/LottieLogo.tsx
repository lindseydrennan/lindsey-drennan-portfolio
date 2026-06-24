"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

const LOTTIE_URL =
  "https://cdn.prod.website-files.com/674b6532c29e9c0c254fa406/674ce69a5c6233fa07195ccd_LottieFiles%20Animation.json";

export default function LottieLogo({ className }: { className?: string }) {
  const [data, setData] = useState<object | null>(null);

  useEffect(() => {
    fetch(LOTTIE_URL)
      .then((r) => r.json())
      .then(setData);
  }, []);

  if (!data) return <div className={className} />;

  return (
    <Lottie
      animationData={data}
      loop={false}
      autoplay
      className={className}
    />
  );
}
