import { skillCard } from "../../constatns/skill";

export default function SkillCard() {
  return (
    <div className="skill-container mt-5">
      {skillCard.map((item, index) => (
        <div key={index} className="skill-card">
          <div className="skill-content">
            <img src={item.images} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
