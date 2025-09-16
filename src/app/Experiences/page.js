import experiences from "@/data/experiences.json";

export default function Experience() {
  return (
    <section className="space-y-10">
      <h2 className="text-4xl font-bold text-[#F5C273] mt-10">Experience</h2>
      {experiences.map((exp) => (
        <div key={exp.title} className="space-y-3 w-2xl ml-4">
          <p className="text-[#5F84CD]">{exp.date}</p>
          <h3 className="font-bold text-[#E4B04E]">{exp.title}</h3>
          <p className="text-[#5F84CD]">{exp.description}</p>
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#F5C273] text-[#0F121C] px-4 py-1 rounded-full font-mono text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}

      <a
        href="#"
        className="block mt-8 text-[#5F84CD] hover:underline text-lg"
      >
        View Full Resume...
      </a>
    </section>
  );
}
