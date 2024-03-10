import { parascolaire } from "../utils/constants";
import ParascolaireCard from "./parascolaireCard";

const Parascolaire = () => {
  return (
    <div
      id="parascolaire"
      className="mt-24 mx-4 md:mx-36 text-center font-semibold"
    >
      <p className="text-gray-600 my-2 dark:text-gray-300">Browse My Recent</p>
      <h1 className="text-4xl md:text-6xl my-2">Parascolaire</h1>
      <div className="flex flex-col md:flex-row my-12 md:my-24 items-center">
        {parascolaire.map((project) => (
          <ParascolaireCard
            key={project.id}
            imagePath={project.imagePath}
            altText={project.altText}
            title={project.title}
            link={project.link}
            live={project.live}
          />
        ))}
      </div>
    </div>
  );
};

export default Parascolaire;