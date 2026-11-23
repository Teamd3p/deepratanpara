import { work } from "@/data/profile";
import SectionTitle from "./SectionTitle";

const Work = () => {
  return (
    <section id="work" className="py-14 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle eyebrow="Where I've worked" title="Work Experience" />

        <ol className="relative border-l border-primary/25 ml-2 space-y-8">
          {work.map((job, i) => (
            <li key={i} className="pl-6 relative">
              <span
                className={`absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-primary ${
                  job.current ? "bg-primary" : "bg-white"
                }`}
              />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-xl font-medium text-primary">
                  {job.company}
                  <span className="text-gray-800 font-normal"> · {job.role}</span>
                </h3>
                <span className="text-sm text-gray-400 whitespace-nowrap">{job.period}</span>
              </div>
              <ul className="mt-2 space-y-1.5 text-gray-600 text-[15px] leading-relaxed list-disc pl-4 marker:text-primary/60">
                {job.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {job.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                    {t}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Work;
