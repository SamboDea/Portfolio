import React from "react";
import { experiences } from "../../constatns/experience";

export default function Experience() {
  return (
    <section className="mt-5" data-aos="zoom-in">
      <div className="timeline row">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <span className="period">{exp.period}</span>

              <ul>
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
