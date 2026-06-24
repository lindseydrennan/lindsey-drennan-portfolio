"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function StaggerIn({
  children,
  className = "",
  stagger = 60,
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  index?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 0.5s cubic-bezier(0.22,1,0.36,1) ${index * stagger}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${index * stagger}ms`,
      }}
    >
      {children}
    </div>
  );
}
