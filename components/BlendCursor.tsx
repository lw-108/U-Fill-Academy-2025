"use client";

import { useEffect, useState } from "react";

export default function BlendCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState(40); // Default size

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    const speed = 0.15; // 👈 Adjust this for smoother or faster trail (0.1–0.2 recommended)

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Smooth animation loop
    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;
      setPosition({ x: currentX, y: currentY });
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    // Grow/Shrink effect on hover over interactive elements
    const grow = () => setSize(30);
    const shrink = () => setSize(20);
    const hoverables = document.querySelectorAll("a, button, [data-cursor='hover']");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <div
      id="blend-cursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        backgroundColor: "#fff", // Color that gets inverted
        pointerEvents: "none",
        transform: `translate(${position.x - size / 2}px, ${position.y - size / 2}px)`,
        mixBlendMode: "difference", // ✅ This inverts colors under the cursor
        transition:
          "width 0.25s ease, height 0.25s ease, background-color 0.3s ease",
        zIndex: 9999,
      }}
    />
  );
}
