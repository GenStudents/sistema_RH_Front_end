import { Github, Linkedin } from "lucide-react";
import teamMembers from "./Equipe";
import { useState, useEffect } from "react";

export default function MembrosEquipe() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header da seção */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className={`mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Conheça o time
          </p>

          <h2 className={`text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl transition-all duration-1000 delay-100 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Pessoas por trás do RH Tech
          </h2>

          <p className={`mt-4 text-lg leading-relaxed text-muted-foreground transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Desenvolvedores apaixonados por criar soluções que fazem a diferença
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`group rounded-2xl border-2 border-blue-200 dark:border-blue-900 p-8 bg-white dark:bg-slate-800 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer flex flex-col ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Photo */}
              <div className="flex justify-center mb-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-blue-400 dark:border-blue-600 group-hover:animate-pulse-glow">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Name and Role */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1">
                  {member.role}
                </p>
              </div>

              {/* Bio */}
              <p className="text-sm leading-relaxed text-muted-foreground text-center flex-grow group-hover:text-foreground transition-colors line-clamp-4 group-hover:line-clamp-none">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-6 pt-6 border-t border-blue-200 dark:border-blue-900">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-125"
                  aria-label={`GitHub de ${member.name}`}
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-125"
                  aria-label={`LinkedIn de ${member.name}`}
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}