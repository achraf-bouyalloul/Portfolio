import { backendExperience, frontendExperience } from "../utils/constants";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div
      id="experience"
      className="mt-24 mx-4 md:mx-36 text-center font-semibold"
    >
      <p className="text-gray-600 my-2 dark:text-gray-300">Explore My</p>
      <h1 className="text-4xl md:text-6xl my-2">Experience</h1>
      <div className="flex flex-col md:flex-row my-16 md:my-24 items-center gap-10">
        <div className="border-2 border-gray-400 p-4 md:w-3/4 rounded-3xl">
          <h1 className="text-xl md:text-2xl my-2">Frontend Development</h1>
          <div className="grid grid-cols-12 place-items-center">
            <div className="col-span-6 my-2 md:my-4">
              {frontendExperience.panel1.map((item) => (
                <ExperienceCard
                  key={item.id}
                  tech={item.tech}
                  expr={item.expr}
                />
              ))}
            </div>
            <div className="col-span-6 my-4">
              {frontendExperience.panel2.map((item) => (
                <ExperienceCard
                  key={item.id}
                  tech={item.tech}
                  expr={item.expr}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-400 p-4 md:w-3/4 rounded-3xl">
          <h1 className="text-xl md:text-2xl my-2">Backend Development</h1>
          <div className="grid grid-cols-12 place-items-center">
            <div className="col-span-6 my-2 md:my-4">
              {backendExperience.panel1.map((item) => (
                <ExperienceCard
                  key={item.id}
                  tech={item.tech}
                  expr={item.expr}
                />
              ))}
            </div>
            <div className="col-span-6 my-4">
              {backendExperience.panel2.map((item) => (
                <ExperienceCard
                  key={item.id}
                  tech={item.tech}
                  expr={item.expr}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
