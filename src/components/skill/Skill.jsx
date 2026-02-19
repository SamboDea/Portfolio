import { useEffect, useRef } from "react";
import "../../../src/assets/css/skill.css";

export default function Skill({ skill }) {
  const universeRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const items = itemsRef.current;
    const radius = 280; // orbit radius
    let angleOffset = 0;

    // initialize random spherical positions
    const positions = items.map(() => ({
      xAngle: Math.random() * 360,
      yAngle: Math.random() * 360,
      zOffset: radius + Math.random() * 100,
    }));

    const animate = () => {
      angleOffset += 0.2; // control rotation speed
      items.forEach((item, index) => {
        const pos = positions[index];
        const x =
          Math.sin((pos.xAngle + angleOffset) * (Math.PI / 180)) * pos.zOffset;
        const y =
          Math.cos((pos.yAngle + angleOffset) * (Math.PI / 180)) * pos.zOffset;
        const z =
          Math.cos((pos.xAngle + angleOffset) * (Math.PI / 180)) * pos.zOffset;

        item.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(${z}px)`;
      });
      requestAnimationFrame(animate);
    };

    animate();
  }, [skill]);

  return (
    <div className="skill-universe-overlay" ref={universeRef}>
      {skill.map((item, index) => (
        <div
          className="skill-item"
          key={index}
          ref={(el) => (itemsRef.current[index] = el)}
        >
          <div className="img-skill">
            <img
              src={item.images}
              alt={item.title}
              loading="lazy"
              draggable="false"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
