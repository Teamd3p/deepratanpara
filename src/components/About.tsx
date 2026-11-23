import { MapPin } from "lucide-react";
import { about, profile, stats } from "@/data/profile";

const About = () => {
  return (
    <section id="about" className="py-14 md:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-center gap-10">
          <div className="relative w-56 md:w-72 aspect-square mx-auto">
            <div className="absolute -inset-2 rounded-full border border-primary/30" />
            <img src={profile.photo} alt={profile.name} className="w-full h-full rounded-full object-cover grayscale shadow-lg" />
          </div>

          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-2">About me</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Backend engineer who cares about <span className="text-primary">correct data</span>.
            </h2>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              {about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-gray-500">
              <MapPin className="h-4 w-4 text-primary" /> {profile.location}
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3 max-w-md">
              {stats.map((s) => (
                <div key={s.label} className="bg-white rounded-lg border px-3 py-3 text-center">
                  <div className="text-xl md:text-2xl font-medium text-primary">{s.value}</div>
                  <div className="text-[11px] md:text-xs text-gray-500 leading-tight mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
