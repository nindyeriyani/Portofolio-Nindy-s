import projects from "../../data/projects.json";
import Image from "next/image";

export default function Projects() {
  return (
    <section>
      <h2 className="text-4xl font-bold text-[#F5C273] mb-6 mt-10">Projects</h2>

      <div className="space-y-8 w-2xl">
        {projects.map((project, index) => (
          <div key={index} className="flex gap-4 items-start ml-4">
            <div className="relative w-[193px] h-[102px] flex-shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#E4B04E]">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {project.title} • {project.event}
                </a>
              </h3>
              <p className="text-[#5F84CD]">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <a href="https://github.com/nindyeriyani/" className="block mt-8 text-[#5F84CD] hover:underline text-lg">
        View Full Project Archive...
      </a>
    </section>
  );
}
