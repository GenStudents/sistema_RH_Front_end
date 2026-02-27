import { Github, Linkedin } from "lucide-react";
import teamMembers from "./Equipe";

export default function MembrosEquipe() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-xl border p-6 bg-white"
            >
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
              <p className="mt-3 text-sm">{member.bio}</p>

              <div className="flex gap-3 mt-4">
                <a href={member.github} target="_blank">
                  <Github size={18} />
                </a>
                <a href={member.linkedin} target="_blank">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}