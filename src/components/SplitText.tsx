import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: "chars" | "words" | "lines";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const animationCompletedRef = useRef(false);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current || !text) return;

    const el = ref.current;
    
    animationCompletedRef.current = false;

    // Simple text splitting without GSAP SplitText plugin
    const splitTextIntoElements = (element: HTMLElement, type: string) => {
      const textContent = element.textContent || "";
      element.innerHTML = "";
      
      let elements: HTMLElement[] = [];
      
      if (type === "words") {
        const words = textContent.split(" ");
        words.forEach((word, index) => {
          const span = document.createElement("span");
          span.textContent = word;
          span.style.display = "inline-block";
          span.style.whiteSpace = "nowrap";
          element.appendChild(span);
          if (index < words.length - 1) {
            element.appendChild(document.createTextNode(" "));
          }
          elements.push(span);
        });
      } else if (type === "chars") {
        const chars = textContent.split("");
        chars.forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char;
          span.style.display = "inline-block";
          element.appendChild(span);
          elements.push(span);
        });
      } else if (type === "lines") {
        // For lines, we'll treat each line break as a separate line
        const lines = textContent.split("\n");
        lines.forEach((line, index) => {
          const span = document.createElement("span");
          span.textContent = line;
          span.style.display = "block";
          element.appendChild(span);
          if (index < lines.length - 1) {
            element.appendChild(document.createElement("br"));
          }
          elements.push(span);
        });
      }
      
      return elements;
    };

    const targets = splitTextIntoElements(el, splitType);

    if (!targets || targets.length === 0) {
      console.warn("No targets found for SplitText animation");
      return;
    }

    targets.forEach((t) => {
      t.style.willChange = "transform, opacity";
    });

    const startPct = (1 - threshold) * 100;
    const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
    const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
    const marginUnit = marginMatch ? (marginMatch[2] || "px") : "px";
    const sign = marginValue < 0 ? `-=${Math.abs(marginValue)}${marginUnit}` : `+=${marginValue}${marginUnit}`;
    const start = `top ${startPct}%${sign}`;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
        once: true,
        onToggle: (self) => {
          scrollTriggerRef.current = self;
        },
      },
      smoothChildTiming: true,
      onComplete: () => {
        animationCompletedRef.current = true;
        gsap.set(targets, {
          ...to,
          clearProps: "willChange",
          immediateRender: true,
        });
        onLetterAnimationComplete?.();
      },
    });

    tl.set(targets, { ...from, immediateRender: false, force3D: true });
    tl.to(targets, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      force3D: true,
    });

    return () => {
      tl.kill();
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
      gsap.killTweensOf(targets);
    };
  }, [
    text,
    delay,
    duration,
    ease,
    splitType,
    from,
    to,
    threshold,
    rootMargin,
    onLetterAnimationComplete,
  ]);

  return (
    <p
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        textAlign,
        overflow: "hidden",
        display: "inline-block",
        whiteSpace: "normal",
        wordWrap: "break-word",
      }}
    >
      {text}
    </p>
  );
};

export default SplitText;