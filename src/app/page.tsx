import Image from "next/image";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  GitMerge,
  Github,
  Linkedin,
  MapPin,
} from "lucide-react";
import ClusterDemo from "@/components/portfolio/cluster-demo";
import SiteHeader from "@/components/portfolio/site-header";
import CopyEmail from "@/components/portfolio/copy-email";
import { contributions, profile, projects, toolkit } from "@/data/portfolio";

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  );
}

function SectionHeading({
  number,
  label,
  title,
  children,
  id,
}: {
  id?: string;
  number: string;
  label: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> / {label}
        </p>
        <h2 id={id}>{title}</h2>
      </div>
      {children}
    </div>
  );
}

function RateLimiterVisual() {
  return (
    <div
      className="limiter-visual"
      role="img"
      aria-label="Architecture: requests flow through nginx to three Go replicas and shared Redis"
    >
      <div className="visual-label mono">
        <span>REQUEST FLOW</span>
        <span>ATOMIC BY DESIGN</span>
      </div>
      <div className="request-trails" aria-hidden="true">
        {Array.from({ length: 9 }, (_, i) => (
          <span key={i} style={{ animationDelay: `${i * -0.4}s` }} />
        ))}
      </div>
      <div className="flow-row">
        <div className="flow-box mono">
          nginx<span>LOAD BALANCER</span>
        </div>
        <ArrowRight size={20} className="flow-arrow" />
        <div className="replica-stack mono">
          <span>go / 01</span>
          <span>go / 02</span>
          <span>go / 03</span>
        </div>
        <ArrowRight size={20} className="flow-arrow" />
        <div className="flow-box redis-box mono">
          Redis<span>ATOMIC LUA</span>
        </div>
      </div>
      <div className="visual-foot mono">
        <span>
          <i className="status-dot" /> ONE SHARED SOURCE OF TRUTH
        </span>
        <span>200 / 429</span>
      </div>
    </div>
  );
}

export default function Page() {
  const raftra = projects[0];
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section id="home" className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" /> BACKEND & DISTRIBUTED SYSTEMS
            </p>
            <p className="hero-intro">Hello, I’m Shantanu.</p>
            <h1 id="hero-title">
              Good systems.
              <br />
              Built to <em>hold.</em>
            </h1>
            <p className="hero-description">
              I build the things behind the interface.
              <br className="desktop-break" /> Reliable backends, distributed
              systems, and the occasional controlled failure.
            </p>
            <div className="hero-actions">
              <a href="#work" className="button button-primary">
                Explore my work <ArrowDownRight size={19} />
              </a>
              <ExternalLink href={profile.github} className="text-link">
                <Github size={17} /> GitHub
              </ExternalLink>
            </div>
            <div className="hero-person">
              <Image
                src="/me.png"
                alt="Shantanu Singh"
                width={40}
                height={40}
                priority
              />
              <span>
                Engineer in the making.
                <br />
                <strong>BIT Mesra ’28 · Ranchi, India</strong>
              </span>
            </div>
          </div>
          <div className="hero-system">
            <ClusterDemo />
            <div className="hero-note">
              <span className="note-line" />
              <span>A good system plans for a bad day.</span>
            </div>
          </div>
          <div className="hero-bottom mono">
            <span>GO DEEP. BUILD WELL. KEEP LEARNING.</span>
            <a href="#work">
              SCROLL TO EXPLORE <ArrowDown size={13} />
            </a>
          </div>
        </section>

        <div className="focus-strip">
          <div className="shell">
            <span className="mono strip-label">CURRENTLY THINKING ABOUT</span>
            <p>
              Consensus <span>↗</span> Concurrency <span>↗</span> Resilience{" "}
              <span>↗</span> Open source
            </p>
          </div>
        </div>

        <section
          id="work"
          className="section shell"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span>01</span> / SELECTED WORK
              </p>
              <h2 id="work-title">Built with intent.</h2>
            </div>
            <p className="section-aside">
              From first principles to working systems.
              <br />A few problems I’ve enjoyed taking apart.
            </p>
          </div>
          <article className="project-feature">
            <div className="raftra-visual">
              <div className="visual-label mono">
                <span>RAFTRA / CONSENSUS ENGINE</span>
                <span className="code-window-dots">● ● ●</span>
              </div>
              <div className="raft-terminal mono">
                <p>
                  <span className="terminal-muted">$</span> raftra-cli cluster
                  status
                </p>
                <div className="terminal-table">
                  <div>
                    <span>NODE</span>
                    <span>ROLE</span>
                    <span>STATE</span>
                  </div>
                  <div>
                    <span>node-01</span>
                    <span className="terminal-orange">leader</span>
                    <span>
                      <i /> in sync
                    </span>
                  </div>
                  <div>
                    <span>node-02</span>
                    <span>follower</span>
                    <span>
                      <i /> in sync
                    </span>
                  </div>
                  <div>
                    <span>node-03</span>
                    <span>follower</span>
                    <span>
                      <i /> in sync
                    </span>
                  </div>
                </div>
                <p className="terminal-muted terminal-command">
                  # The interesting part starts when things break.
                </p>
                <p>
                  <span className="terminal-muted">$</span> kill leader{" "}
                  <span className="terminal-orange">↵</span>
                </p>
                <p className="terminal-result">
                  <Check size={14} /> new leader elected. writes continue.
                </p>
              </div>
              <div className="raftra-wordmark" aria-hidden="true">
                raftra<span>_</span>
              </div>
              <div className="visual-foot mono">
                <span>BUILT FROM THE RAFT PAPER</span>
                <span>ILLUSTRATIVE OUTPUT</span>
              </div>
            </div>
            <div className="project-copy">
              <p className="eyebrow">
                <span>{raftra.number}</span> / {raftra.category}
              </p>
              <h3>{raftra.title}</h3>
              <p className="project-tagline">{raftra.tagline}</p>
              <p className="project-description">{raftra.description}</p>
              <ul className="tag-list" aria-label="Technologies">
                {raftra.technologies.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <p className="project-result">
                <span className="small-cross">+</span>
                {raftra.result}
              </p>
              <div className="project-links">
                <ExternalLink href={raftra.demo} className="text-link">
                  Live playground
                </ExternalLink>
                <ExternalLink
                  href={raftra.source}
                  className="text-link muted-link"
                >
                  <Github size={15} /> Source
                </ExternalLink>
              </div>
              <details className="project-details">
                <summary>
                  Inside the build <ChevronDown size={15} />
                </summary>
                <p>{raftra.detail}</p>
              </details>
            </div>
          </article>
          <div className="project-grid">
            {projects.slice(1).map((project) => (
              <article
                className={`project-card project-${project.slug}`}
                key={project.slug}
              >
                {project.slug === "rate-limiter" ? (
                  <RateLimiterVisual />
                ) : (
                  <div className="traffic-visual">
                    <Image
                      src="/images/niyantran.png"
                      alt="Niyantran traffic command center showing the Bengaluru road network, event controls, and congestion overlays"
                      width={1600}
                      height={900}
                      sizes="(max-width: 760px) 100vw, 50vw"
                    />
                    <span className="traffic-caption mono">
                      BENGALURU / 294 JUNCTIONS
                    </span>
                  </div>
                )}
                <div className="project-copy">
                  <p className="eyebrow">
                    <span>{project.number}</span> / {project.category}
                  </p>
                  <h3>{project.title}</h3>
                  <p className="project-tagline">{project.tagline}</p>
                  <p className="project-description">{project.description}</p>
                  <ul className="tag-list" aria-label="Technologies">
                    {project.technologies.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <p className="project-result">
                    <span className="small-cross">+</span>
                    {project.result}
                  </p>
                  <div className="project-links">
                    <ExternalLink href={project.source} className="text-link">
                      Explore the source
                    </ExternalLink>
                  </div>
                  <details className="project-details">
                    <summary>
                      Inside the build <ChevronDown size={15} />
                    </summary>
                    <p>{project.detail}</p>
                  </details>
                </div>
              </article>
            ))}
          </div>
          <div className="more-work">
            <p>
              <span className="mono">ALSO ON THE WORKBENCH</span>{" "}
              <a
                href="https://github.com/shantanu-1607/simple_social"
                target="_blank"
                rel="noreferrer"
              >
                Simple Social <ArrowUpRight size={14} />
              </a>
              <span className="more-description">
                FastAPI · JWT · Async SQLAlchemy
              </span>
            </p>
            <ExternalLink
              href={`${profile.github}?tab=repositories`}
              className="text-link"
            >
              All repositories
            </ExternalLink>
          </div>
        </section>

        <section
          id="open-source"
          className="open-source-section"
          aria-labelledby="opensource-title"
        >
          <div className="shell section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span>02</span> / BUILDING IN THE OPEN
                </p>
                <h2 id="opensource-title">Better, together.</h2>
              </div>
              <p className="section-aside">
                Small, considered changes.
                <br />
                Real contributions to shared tools.
              </p>
            </div>
            <div className="contribution-list">
              {contributions.map((item) => (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contribution-row"
                  key={item.pr}
                >
                  <span className="contribution-project">
                    <span className="contribution-icon">
                      <GitMerge size={19} />
                    </span>
                    <span>
                      <strong>{item.project}</strong>
                      <small>{item.area}</small>
                    </span>
                  </span>
                  <span className="contribution-title">
                    {item.title}
                    <span className="merged-label mono">
                      <Check size={11} /> MERGED <span> / {item.pr}</span>
                    </span>
                  </span>
                  <span className="contribution-type mono">{item.type}</span>
                  <ArrowUpRight size={21} className="row-arrow" />
                </a>
              ))}
            </div>
            <div className="source-footer">
              <span className="mono">
                LEARNING FROM REAL CODEBASES. LEAVING THEM A LITTLE BETTER.
              </span>
              <ExternalLink
                href="https://github.com/search?q=is%3Apr+author%3Ashantanu-1607+is%3Amerged&type=pullrequests"
                className="text-link"
              >
                Contribution history
              </ExternalLink>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="section shell"
          aria-labelledby="about-title"
        >
          <SectionHeading
            number="03"
            label="THE PERSON BEHIND THE CODE"
            title="Curiosity is the constant."
            id="about-title"
          />
          <div className="about-grid">
            <div className="portrait-wrap">
              <Image
                src="/me.png"
                alt="Shantanu Singh in a navy suit"
                width={660}
                height={800}
                sizes="(max-width: 760px) 100vw, 35vw"
                className="portrait"
              />
              <div className="portrait-caption mono">
                <span>SHANTANU KUMAR SINGH</span>
                <span>24° N / 85° E</span>
              </div>
              <span className="portrait-corner" aria-hidden="true">
                +
              </span>
            </div>
            <div className="about-copy">
              <p className="about-lead">
                I like knowing <em>why</em>
                <br />a system works.
                <br />
                And what happens when it doesn’t.
              </p>
              <p>
                I’m an Electrical & Electronics Engineering student at BIT
                Mesra, drawn to the software that keeps things running behind
                the scenes. These days, that means Go, distributed systems, and
                making failure a part of the design.
              </p>
              <p>
                My way of learning is to build it, break it, and understand the
                difference. From writing Raft from the paper to contributing to
                open source, the best questions usually show up in the code.
              </p>
              <div className="about-facts">
                <a href={profile.leetcode} target="_blank" rel="noreferrer">
                  <strong>
                    1,890<span>↗</span>
                  </strong>
                  <span>LeetCode peak · Knight</span>
                </a>
                <a href={profile.codeforces} target="_blank" rel="noreferrer">
                  <strong>
                    1,000+<span>↗</span>
                  </strong>
                  <span>Problems solved across platforms</span>
                </a>
              </div>
              <p className="beyond-code">
                <span className="small-cross">+</span> Beyond the terminal: Tech
                Head at IET Coding Club, hackathon semifinalist, and
                district-level gold medallist in Kho Kho & Kabaddi.
              </p>
            </div>
          </div>
          <div className="experience-grid">
            <div>
              <p className="eyebrow">THE JOURNEY SO FAR</p>
              <div className="timeline-item">
                <span className="timeline-marker" />
                <p className="mono timeline-date">MAY — JUL 2026</p>
                <h3>Software Engineering Intern</h3>
                <ExternalLink
                  href="https://parikshak.ai"
                  className="company-link"
                >
                  Parikshak.ai
                </ExternalLink>
                <p>
                  Built hybrid delay routing with SQS and EventBridge Scheduler,
                  taking scheduled work beyond SQS’s 15-minute limit. Deployed
                  an ARM64 Lambda container through AWS CDK and owned pre-launch
                  QA.
                </p>
              </div>
              <div className="timeline-item">
                <span className="timeline-marker" />
                <p className="mono timeline-date">2024 — 2028</p>
                <h3>B.Tech, Electrical & Electronics</h3>
                <ExternalLink
                  href="https://bitmesra.ac.in"
                  className="company-link"
                >
                  Birla Institute of Technology, Mesra
                </ExternalLink>
                <p>
                  Engineering fundamentals, a lot of problem solving, and a
                  growing interest in the systems that connect it all.
                </p>
              </div>
            </div>
            <div className="toolkit">
              <p className="eyebrow">MY WORKING TOOLKIT</p>
              {toolkit.map((group) => (
                <div className="toolkit-row" key={group.label}>
                  <h3>{group.label}</h3>
                  <p>{group.tools}</p>
                </div>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                The full story, on one page <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-title"
        >
          <div className="shell">
            <div className="contact-top">
              <p className="eyebrow">
                <span>04</span> / WHAT’S NEXT?
              </p>
              <span className="mono">
                <MapPin size={12} /> {profile.location}
              </span>
            </div>
            <div className="contact-main">
              <h2 id="contact-title">
                Have a hard problem?
                <br />
                Let’s <em>figure it out.</em>
              </h2>
              <a
                className="contact-orb"
                href={`mailto:${profile.email}`}
                aria-label="Email Shantanu"
              >
                <ArrowUpRight size={46} />
              </a>
            </div>
            <p className="contact-description">
              I’m keen to talk backend engineering, distributed systems,
              <br className="desktop-break" /> open-source collaboration, and
              opportunities to build.
            </p>
            <div className="contact-links">
              <div className="email-row">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <CopyEmail email={profile.email} />
              </div>
              <div className="social-links">
                <ExternalLink href={profile.github}>
                  <Github size={16} /> GitHub
                </ExternalLink>
                <ExternalLink href={profile.linkedin}>
                  <Linkedin size={16} /> LinkedIn
                </ExternalLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer shell">
        <a href="#home" className="footer-name">
          Shantanu Singh<span> · Built with care.</span>
        </a>
        <span className="mono">© {new Date().getFullYear()}</span>
        <a className="mono back-to-top" href="#home">
          BACK TO TOP <ArrowUpRight size={13} />
        </a>
      </footer>
    </>
  );
}
