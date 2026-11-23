import { skills } from "@/data/profile";
import SectionTitle from "./SectionTitle";

const Skills = () => {
  return (
    <section id="skills" className="py-14 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle eyebrow="What I work with" title="Skills" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8">
          {skills.map((s) => (
            <div key={s.group}>
              <h3 className="text-lg font-semibold text-primary mb-3 pb-2 border-b border-primary/20">{s.group}</h3>
              <ul className="space-y-1.5">
                {s.items.map((item) => (
                  <li key={item} className="text-gray-700 text-[15px]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
