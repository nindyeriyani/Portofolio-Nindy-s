import skills from "@/data/skills.json";

export default function Skills() {
  return (
    <section>
      <h2 className="text-4xl font-bold text-[#E4B04E] mt-10">Skills</h2>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category}>
          <h3 className="text-xl font-semibold text-[#5F84CD] pl-4 mb-3 mt-4">
            {category}:
          </h3>
          <div className="flex flex-wrap gap-3 pl-4 w-2xl">
            {items.map((item) => (
              <span
                key={item}
                className="bg-[#F5C273] text-[#0F121C] font-medium px-4 py-1 rounded-full font-mono text-lg mb-2"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
