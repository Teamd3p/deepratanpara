const SectionTitle = ({ eyebrow, title, dark = false }: { eyebrow?: string; title: string; dark?: boolean }) => (
  <div className="text-center mb-10">
    {eyebrow && (
      <p className={`text-xs tracking-[0.25em] uppercase mb-2 ${dark ? "text-gray-400" : "text-gray-500"}`}>{eyebrow}</p>
    )}
    <h2 className={`text-3xl md:text-4xl font-light ${dark ? "text-white" : "text-primary"}`}>{title}</h2>
  </div>
);

export default SectionTitle;
