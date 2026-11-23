import { projects } from "@/data/profile";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section id="projects" className="py-14 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle eyebrow="Selected work" title="Projects" />
        <p className="text-center text-gray-600 -mt-6 mb-10">
          I prioritize quality over quantity, choosing to work on fewer projects that truly make a difference.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group border rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow flex flex-col">
              <div className="overflow-hidden aspect-[16/9]">
                <img src={p.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="text-sm text-primary mb-3">{p.subtitle}</p>
                <ul className="space-y-1.5 text-sm text-gray-600 list-disc pl-4 marker:text-primary/60 flex-1">
                  {p.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-gray-700 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
