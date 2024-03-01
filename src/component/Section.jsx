import React from "react";
import { CORE_CONCEPTS } from "../data";

function CoreConcept(props) {
  const { image, title, description } = props;
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
function Section() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        <CoreConcept
          image={CORE_CONCEPTS[0].image}
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
        />

        <CoreConcept
          image={CORE_CONCEPTS[1].image}
          title={CORE_CONCEPTS[1].title}
          description={CORE_CONCEPTS[1].description}
        />

        <CoreConcept
          image={CORE_CONCEPTS[2].image}
          title={CORE_CONCEPTS[2].title}
          description={CORE_CONCEPTS[2].description}
        />

        <CoreConcept
          image={CORE_CONCEPTS[3].image}
          title={CORE_CONCEPTS[3].title}
          description={CORE_CONCEPTS[3].description}
        />
      </ul>
    </section>
  );
}

export default Section;
