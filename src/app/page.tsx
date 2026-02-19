import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const displayName = "Agust\u00edn D\u00edaz";

  const projects = [
    {
      title: "PastelCat",
      summary:
        "Sistema de gestion (SaaS) para pastelerias y servicios de catering que centraliza pedidos, produccion, stock e informacion financiera en una sola plataforma. Esta pensado para ordenar la operacion diaria, reducir errores y tomar decisiones con datos, con un diseno modular y escalable.",
      techIcons: [
        { src: "icons/tech/nextjs.svg", label: "Next.js" },
        { src: "icons/tech/react.svg", label: "React" },
        { src: "icons/tech/tailwindcss.svg", label: "Tailwind CSS" },
        { src: "icons/tech/vercel.svg", label: "Vercel" },
        { src: "icons/tech/nodejs.svg", label: "Node.js" },
        { src: "icons/tech/express.svg", label: "Express.js" },
        { src: "icons/tech/supabase.svg", label: "Supabase" },
      ],
      webUrl: "https://www.youtube.com/watch?v=93Tyy46XBoo",
      repoUrl: "https://github.com/AaguDiaz/pastelcatfront",
      tone: "from-cyan-500/20 via-blue-500/10 to-transparent",
      imageSrc: "imagenes/PastelCat.png",
      imageAlt: "Captura del sistema PastelCat",
    },
    {
      title: "Mutual ACA",
      summary:
        "Sistema de escritorio para gestion administrativa de mutual: ABM, autenticacion, reportes y generacion de documentacion, pensado para procesos internos.",
      techIcons: [
        { src: "icons/tech/csharp.svg", label: "C#" },
        { src: "icons/tech/dotnet.svg", label: ".NET Framework 4.7.2" },
        { src: "icons/tech/windows.svg", label: "Windows Forms" },
        { src: "icons/tech/ado-sqlclient.svg", label: "ADO.NET (SqlClient)" },
        { src: "icons/tech/itextsharp-pdf.svg", label: "iTextSharp (PDF)" },
      ],
      webUrl: null,
      repoUrl: "https://github.com/AaguDiaz/TpDiploma",
      tone: "from-emerald-500/20 via-sky-500/10 to-transparent",
      imageSrc: "imagenes/Mutual%20ACA.jpeg",
      imageAlt: "Captura de pantalla del sistema Mutual ACA",
    },
    {
      title: "Boggle",
      summary:
        "Juego de palabras tipo Boggle: tablero dinamico, validacion de palabras, puntaje, ranking y modos de dificultad para partidas rapidas.",
      techIcons: [
        { src: "icons/tech/html5.svg", label: "HTML" },
        { src: "icons/tech/css3.svg", label: "CSS" },
        { src: "icons/tech/javascript.svg", label: "JavaScript (vanilla)" },
        { src: "icons/tech/github-pages.svg", label: "GitHub Pages" },
      ],
      webUrl: "https://vittorisantiago.github.io/boggle/",
      repoUrl: "https://github.com/vittorisantiago/boggle",
      tone: "from-indigo-500/25 via-violet-500/10 to-transparent",
      imageSrc: "imagenes/Boggle.jpeg",
      imageAlt: "Captura de pantalla del juego Boggle",
    },
    {
      title: "Calculadora de Teoria de Colas (CalcTC)",
      summary:
        "Calculadora web de teoria de colas: resuelve modelos (M/M/1, M/M/2, M/D/1, etc.) con metricas y graficos para analisis y simulacion.",
      techIcons: [
        { src: "icons/tech/react.svg", label: "React" },
        { src: "icons/tech/tailwindcss.svg", label: "Tailwind CSS" },
        { src: "icons/tech/chartjs.svg", label: "Chart.js + react-chartjs-2" },
        { src: "icons/tech/framer-motion.svg", label: "Framer Motion" },
        { src: "icons/tech/github-pages.svg", label: "GitHub Pages" },
      ],
      webUrl: "https://aagudiaz.github.io/CalcTC/",
      repoUrl: "https://github.com/AaguDiaz/CalcTC",
      tone: "from-amber-500/25 via-cyan-400/10 to-transparent",
      imageSrc: "imagenes/Calc.jpeg",
      imageAlt: "Captura de pantalla de la calculadora CalcTC",
    },
  ];

  const stack = [
    { name: "Next.js", icon: "icons/tech/nextjs.svg" },
    { name: "React", icon: "icons/tech/react.svg" },
    { name: "Tailwind CSS", icon: "icons/tech/tailwindcss.svg" },
    { name: "Vercel", icon: "icons/tech/vercel.svg" },
    { name: "Node.js", icon: "icons/tech/nodejs.svg" },
    { name: "Express.js", icon: "icons/tech/express.svg" },
    { name: "Supabase", icon: "icons/tech/supabase.svg" },
    { name: "C#", icon: "icons/tech/csharp.svg" },
    { name: ".NET Framework 4.7.2", icon: "icons/tech/dotnet.svg" },
    { name: "Windows Forms", icon: "icons/tech/windows.svg" },
    { name: "ADO.NET (SqlClient)", icon: "icons/tech/ado-sqlclient.svg" },
    { name: "iTextSharp (PDF)", icon: "icons/tech/itextsharp-pdf.svg" },
    { name: "HTML", icon: "icons/tech/html5.svg" },
    { name: "CSS", icon: "icons/tech/css3.svg" },
    { name: "JavaScript (vanilla)", icon: "icons/tech/javascript.svg" },
    { name: "GitHub Pages", icon: "icons/tech/github-pages.svg" },
    { name: "Chart.js + react-chartjs-2", icon: "icons/tech/chartjs.svg" },
    { name: "Framer Motion", icon: "icons/tech/framer-motion.svg" },
  ];

  return (
    <div className="min-h-screen">
      <header className="border-outline/60 bg-surface/70 sticky top-0 z-30 border-b backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4">
          <p className="text-muted font-mono text-sm">{displayName}</p>
          <nav className="text-muted flex items-center gap-5 text-sm">
            <a className="hover:text-foreground transition-colors" href="#inicio">
              Inicio
            </a>
            <a className="hover:text-foreground transition-colors" href="#sobre-mi">
              Sobre mi
            </a>
            <a className="hover:text-foreground transition-colors" href="#proyectos">
              Proyectos
            </a>
            <a className="hover:text-foreground transition-colors" href="#contacto">
              Contacto
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="section-theme-bg">
        <section id="inicio">
          <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1.08fr_0.92fr] md:py-24">
            <div className="flex flex-col justify-center">
              <p className="text-accent text-2xl font-semibold">Hola, soy</p>
              <h1 className="mt-1 text-5xl font-bold tracking-tight text-slate-900 md:text-7xl dark:text-slate-50">
                {displayName}
              </h1>
              <h2 className="text-accent mt-2 text-2xl font-semibold italic md:text-4xl">
                Ingeniero en Sistemas
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-800 dark:text-slate-100">
                Desarrollo sistemas full stack y tambien me desempeno en infraestructura IT. Integro
                desarrollo con operacion: redes, cableado estructurado, videovigilancia y soporte
                tecnico, para que las soluciones funcionen bien en produccion, no solo en el codigo.
              </p>

              <div className="mt-9 flex items-center gap-3">
                <a
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/35 text-slate-900 transition-colors hover:bg-white/35 dark:border-slate-300/35 dark:text-slate-100 dark:hover:bg-white/15"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M6.94 8.5v8.56H4.08V8.5h2.86Zm.19-2.64c0 .84-.63 1.52-1.62 1.52h-.02c-.96 0-1.59-.68-1.59-1.52 0-.86.65-1.52 1.63-1.52.98 0 1.58.66 1.6 1.52Zm10.79 6.3v4.9h-2.86V12.5c0-1.15-.41-1.93-1.43-1.93-.78 0-1.24.52-1.45 1.03-.08.18-.09.43-.09.68v4.78H9.23s.04-7.76 0-8.56h2.86v1.21c.38-.58 1.06-1.4 2.58-1.4 1.88 0 3.25 1.23 3.25 3.85Z" />
                  </svg>
                </a>
                <a
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/35 text-slate-900 transition-colors hover:bg-white/35 dark:border-slate-300/35 dark:text-slate-100 dark:hover:bg-white/15"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M12 .5A11.5 11.5 0 0 0 .5 12.25c0 5.12 3.29 9.46 7.86 10.99.57.1.78-.26.78-.56 0-.28-.02-1.2-.02-2.18-2.88.54-3.63-.72-3.86-1.39-.13-.35-.67-1.4-1.14-1.68-.39-.21-.95-.74-.02-.75.88-.02 1.5.82 1.71 1.15 1 .71 2.62.51 3.26.38.1-.74.39-1.23.7-1.51-2.55-.3-5.22-1.3-5.22-5.73 0-1.26.44-2.3 1.15-3.11-.11-.29-.5-1.48.11-3.08 0 0 .95-.31 3.14 1.19a10.6 10.6 0 0 1 5.72 0c2.18-1.52 3.13-1.19 3.13-1.19.62 1.6.23 2.79.11 3.08.72.8 1.15 1.84 1.15 3.11 0 4.45-2.69 5.43-5.25 5.72.41.37.77 1.06.77 2.16 0 1.56-.02 2.82-.02 3.22 0 .31.21.67.79.56a11.79 11.79 0 0 0 7.84-10.99A11.5 11.5 0 0 0 12 .5Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="group relative mx-auto h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] md:h-[360px] md:w-[360px]">
              <div className="absolute -inset-3 -z-10 rounded-full bg-cyan-300/45 blur-xl dark:bg-amber-300/35 dark:blur-2xl" />
              <div className="absolute inset-0 rounded-full border border-cyan-600/30 transition-all duration-300 group-hover:border-cyan-500 dark:border-amber-300/45 dark:group-hover:border-amber-300" />

              <div className="border-outline relative h-full w-full overflow-hidden rounded-full border-4 shadow-[0_30px_55px_rgba(2,8,20,0.38)]">
                <Image
                  src="imagenes/Foto-perfil.jpeg"
                  alt="Foto de perfil de Agustin Diaz"
                  width={800}
                  height={800}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-cyan-600/35 transition-all duration-300 group-hover:shadow-[0_0_58px_rgba(8,145,178,0.62)] group-hover:ring-cyan-500 dark:ring-amber-300/40 dark:group-hover:shadow-[0_0_62px_rgba(245,183,0,0.65)] dark:group-hover:ring-amber-300" />
            </div>
          </div>
        </section>

        <section id="sobre-mi">
          <div className="mx-auto w-full max-w-4xl px-6 py-20 md:py-24">
            <h2 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl dark:text-slate-50">
              Quien soy?
            </h2>

            <p className="mt-10 text-base leading-8 text-slate-800 dark:text-slate-200">
              Soy ingeniero en sistemas con perfil hibrido: desarrollo de software +
              infraestructura. Ademas de construir aplicaciones web, tengo experiencia practica en
              campo gracias a mi pasantia en ACA, donde trabaje en preparacion y configuracion de
              camaras Hikvision, armado de cableado UTP Cat-6 con RJ45, ordenado y conexionado en
              racks con patch panels, y conexion de sensores de temperatura en data centers.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-800 dark:text-slate-200">
              Tambien realice soporte tecnico (instalacion de impresoras, software/hardware y
              drivers, y aplicacion de parches de base de datos), auditoria de camaras, gestion de
              inventario, carga de datos en SAP y seguimiento de tickets en Jira.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-800 dark:text-slate-200">
              Me gusta trabajar con entregas claras, buena documentacion y foco en calidad,
              estabilidad y mantenimiento.
            </p>
          </div>
        </section>

        <section id="proyectos">
          <div className="mx-auto w-full max-w-6xl px-6 py-14">
            <h2 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl dark:text-slate-50">
              Proyectos
            </h2>

            <div className="mt-8 grid gap-6 xl:grid-cols-2">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="group relative rounded-2xl border border-slate-300 bg-white p-5 text-slate-900 shadow-[0_16px_40px_rgba(2,8,20,0.14)] transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-cyan-500/0 transition-all duration-300 group-hover:shadow-[0_0_42px_rgba(34,211,238,0.45)] group-hover:ring-cyan-400/70 dark:group-hover:shadow-[0_0_45px_rgba(245,183,0,0.45)] dark:group-hover:ring-amber-300/60" />
                  <div
                    className={`relative mb-6 overflow-hidden rounded-xl ${
                      project.imageSrc
                        ? "bg-slate-100/85"
                        : "border border-slate-300 bg-slate-100 p-4"
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.tone}`} />

                    <div className={`relative ${project.imageSrc ? "h-64" : "h-52"}`}>
                      {project.imageSrc ? (
                        <div className="absolute inset-0 overflow-hidden rounded-xl shadow-[0_20px_45px_rgba(2,8,20,0.35)]">
                          <Image
                            src={project.imageSrc}
                            alt={project.imageAlt}
                            fill
                            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      ) : (
                        <>
                          <div className="absolute top-8 left-5 h-32 w-16 rotate-[-14deg] rounded-xl border border-slate-500/30 bg-slate-700/70 shadow-lg" />
                          <div className="absolute top-5 left-16 h-36 w-20 rotate-[8deg] rounded-xl border border-slate-500/40 bg-slate-100/10 shadow-lg" />
                          <div className="absolute top-12 right-6 h-28 w-14 rounded-lg border border-cyan-500/45 bg-slate-800/70 shadow-lg" />
                          <div className="absolute bottom-3 left-3 rounded-md border border-slate-500/55 bg-slate-800/75 px-2 py-1 text-xs text-slate-200">
                            Preview {index + 1}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <h3 className="text-center text-3xl font-bold text-slate-900">{project.title}</h3>

                  <ul className="mt-4 flex flex-wrap justify-center gap-3">
                    {project.techIcons.map((icon) => (
                      <li
                        key={`${project.title}-${icon.label}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white shadow-sm"
                        title={icon.label}
                        aria-label={icon.label}
                      >
                        <Image src={icon.src} alt={icon.label} width={20} height={20} />
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 text-base leading-8 text-slate-700">{project.summary}</p>

                  <div
                    className={`mt-6 grid gap-3 ${project.webUrl ? "sm:grid-cols-2" : "sm:grid-cols-1"}`}
                  >
                    {project.webUrl ? (
                      <a
                        className="inline-flex items-center justify-center rounded-full bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        href={project.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Sitio Web
                      </a>
                    ) : null}
                    <a
                      className="inline-flex items-center justify-center rounded-full border border-slate-400 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-5xl space-y-10 px-6 py-14">
          <section
            id="stack"
            className="border-outline bg-surface space-y-4 rounded-3xl border p-8 shadow-sm"
          >
            <h2 className="text-foreground text-2xl font-semibold">Stack de trabajo</h2>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {stack.map((item) => (
                <li
                  key={item.name}
                  className="border-outline bg-background flex items-center gap-3 rounded-xl border px-3 py-2"
                >
                  <Image src={item.icon} alt={item.name} width={20} height={20} />
                  <span className="text-muted text-sm">{item.name}</span>
                </li>
              ))}
            </ul>
          </section>

          <section
            id="contacto"
            className="border-outline bg-surface rounded-3xl border p-8 shadow-sm"
          >
            <h2 className="text-foreground text-2xl font-semibold">Contacto</h2>
            <p className="text-muted mt-3 max-w-2xl text-base">
              Escribime por cualquiera de estos canales.
            </p>

            <div className="mt-6 space-y-3">
              <a
                className="border-outline bg-background text-foreground inline-flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm transition-colors hover:bg-slate-100"
                href="tel:+543476588345"
              >
                <span>Telefono</span>
                <span className="font-mono">3476588345</span>
              </a>
              <a
                className="border-outline bg-background text-foreground inline-flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm transition-colors hover:bg-slate-100"
                href="mailto:aaagusrc@gmail.com"
              >
                <span>Email</span>
                <span className="font-mono">aaagusrc@gmail.com</span>
              </a>
              <a
                className="border-outline bg-background text-foreground inline-flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm transition-colors hover:bg-slate-100"
                href="https://www.linkedin.com/in/agustin-diaz-201165300/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>LinkedIn</span>
                <span className="font-mono">Agustin Diaz</span>
              </a>
              <a
                className="border-outline bg-background text-foreground inline-flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm transition-colors hover:bg-slate-100"
                href="https://github.com/AaguDiaz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GitHub</span>
                <span className="font-mono">AaguDiaz</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="text-muted mx-auto w-full max-w-5xl px-6 pb-10 text-sm">
        Hecho con Next.js, Tailwind y GitHub Pages.
      </footer>
    </div>
  );
}

