import { Check, FileBadge, GraduationCap } from "lucide-react";
import { activities, education, patents } from "@/data/profile";
import SectionTitle from "./SectionTitle";

const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-gray-700/20 rounded-2xl p-6 backdrop-blur-sm">
    <h3 className="text-lg font-semibold mb-4 text-gray-200">{title}</h3>
    {children}
  </div>
);

const LearningAndAchievement = () => {
  return (
    <section id="achievements" className="py-14 md:py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle eyebrow="Beyond the job" title="Patents, Education & Activities" dark />

        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Patents Filed">
            <ul className="space-y-4">
              {patents.map((p) => (
                <li key={p.number} className="flex gap-3">
                  <FileBadge className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-100 font-medium leading-snug">{p.title}</p>
                    <p className="text-xs text-gray-400 mb-1">Application No. {p.number}</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Education">
            <ul className="space-y-4">
              {education.map((e) => (
                <li key={e.title} className="flex gap-3">
                  <GraduationCap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-100 font-medium leading-snug">{e.title}</p>
                    <p className="text-sm text-gray-300">{e.place}</p>
                    <p className="text-xs text-gray-400">{e.score}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Leadership & More">
            <ul className="space-y-3">
              {activities.map((a) => (
                <li key={a} className="flex gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300 leading-relaxed">{a}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LearningAndAchievement;
