"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  experiences,
  highlights,
  journey,
  profile,
  projects,
  sections,
  stacks,
  strengths,
  type Locale
} from "@/app/data";

const localeOptions: Locale[] = ["pt", "en"];

export function PortfolioPage() {
  const [locale, setLocale] = useState<Locale>("pt");

  const navItems = [
    { href: "#projects", label: sections.nav[locale][0] },
    { href: "#experience", label: sections.nav[locale][1] },
    { href: "#stack", label: sections.nav[locale][2] },
    { href: "#journey", label: sections.nav[locale][3] },
    { href: "#contact", label: sections.nav[locale][4] }
  ];

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [locale]);

  return (
    <main className="page-shell" id="top">
      <header className="site-header">
        <Link href="#top" className="brand">
          <span className="brand-mark" />
          <span className="brand-copy">
            <strong>Miguel Lucas</strong>
            <span>Software Developer</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <div className="locale-switcher" aria-label="Language switcher">
            {localeOptions.map((option) => (
              <button
                key={option}
                type="button"
                className={option === locale ? "is-active" : undefined}
                onClick={() => setLocale(option)}
                aria-pressed={option === locale}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="outline-button" href={profile.cv} target="_blank" rel="noreferrer">
            {sections.hero.secondaryCta[locale]}
          </a>
        </div>
      </header>

      <section className="hero-grid">
        <div className="hero-copy reveal-up is-visible tech-frame">
          <span className="section-kicker">{sections.hero.badge[locale]}</span>
          <h1>{profile.role[locale]}</h1>
          <p className="hero-intro">{profile.intro[locale]}</p>
          <p className="hero-status">{profile.status[locale]}</p>

          <div className="hero-actions">
            <Link href="#projects" className="solid-button">
              {sections.hero.primaryCta[locale]}
            </Link>
            <a href={profile.github} target="_blank" rel="noreferrer" className="ghost-link">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="ghost-link">
              LinkedIn
            </a>
          </div>

          <div className="stats-grid">
            {profile.stats.map((stat) => (
              <article key={stat.value} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label[locale]}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-aside">
          <div className="portrait-frame reveal-up is-visible" style={{ transitionDelay: "120ms" }}>
            <Image
              src="/profile2.jpg"
              alt="Foto de Miguel Lucas"
              width={560}
              height={720}
              priority
            />
          </div>
          <div className="focus-panel reveal-up is-visible tech-frame" style={{ transitionDelay: "180ms" }}>
            {strengths.map((item) => (
              <article key={item.title.pt} className="focus-card">
                <h2>{item.title[locale]}</h2>
                <p>{item.description[locale]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section" id="experience-overview">
        <div className="section-heading">
          <span className="section-kicker">
            {locale === "pt" ? "Resumo rápido" : "Quick overview"}
          </span>
          <h2>{sections.highlightsTitle[locale]}</h2>
        </div>

        <div className="highlights-grid">
          {highlights.map((item) => (
            <article key={item.value.pt} className="highlight-card tech-frame reveal-up" data-reveal>
              <span>{item.label[locale]}</span>
              <h3>{item.value[locale]}</h3>
              <p>{item.description[locale]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="projects">
        <div className="section-heading reveal-up" data-reveal>
          <span className="section-kicker">
            {locale === "pt" ? "Projetos" : "Projects"}
          </span>
          <h2>{sections.projectsTitle[locale]}</h2>
          <p>{sections.projectsLead[locale]}</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card tech-frame reveal-up" data-reveal>
              <div className="project-topline">
                <span>{project.kind[locale]}</span>
                <span>{project.repo}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description[locale]}</p>
              <strong>{project.highlight[locale]}</strong>
              <ul className="stack-pills" aria-label={`${project.name} stack`}>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href={project.href} target="_blank" rel="noreferrer" className="project-link">
                {project.linkLabel[locale]}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section dual-section" id="experience">
        <div className="section-heading narrow reveal-up" data-reveal>
          <span className="section-kicker">
            {locale === "pt" ? "Experiência" : "Experience"}
          </span>
          <h2>{sections.experienceTitle[locale]}</h2>
          <p>{sections.experienceLead[locale]}</p>
        </div>

        <div className="journey-list">
          {experiences.map((item) => (
            <article key={item.title.pt} className="journey-card tech-frame reveal-up" data-reveal>
              <span className="card-label">{item.label[locale]}</span>
              <h3>{item.title[locale]}</h3>
              <p>{item.description[locale]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section dual-section" id="stack">
        <div className="section-heading narrow reveal-up" data-reveal>
          <span className="section-kicker">
            {locale === "pt" ? "Stack" : "Stack"}
          </span>
          <h2>{sections.stackTitle[locale]}</h2>
        </div>

        <div className="stack-columns">
          {stacks.map((group) => (
            <article key={group.title} className="stack-card tech-frame reveal-up" data-reveal>
              <h3>{group.title}</h3>
              <ul className="stack-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section dual-section" id="journey">
        <div className="section-heading narrow reveal-up" data-reveal>
          <span className="section-kicker">
            {locale === "pt" ? "Trajetória" : "Journey"}
          </span>
          <h2>{sections.journeyTitle[locale]}</h2>
        </div>

        <div className="journey-list">
          {journey.map((item) => (
            <article key={item.title.pt} className="journey-card tech-frame reveal-up" data-reveal>
              <span className="card-label">{item.label[locale]}</span>
              <h3>{item.title[locale]}</h3>
              <p>{item.description[locale]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-band tech-frame reveal-up" id="contact" data-reveal>
        <div className="section-heading narrow">
          <span className="section-kicker">
            {locale === "pt" ? "Contato" : "Contact"}
          </span>
          <h2>{sections.contactTitle[locale]}</h2>
          <p>{sections.contactLead[locale]}</p>
        </div>

        <div className="contact-grid">
          <a href={`mailto:${profile.email}`} className="contact-card">
            <span>Email</span>
            <strong>{profile.email}</strong>
          </a>
          <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="contact-card">
            <span>{locale === "pt" ? "Telefone" : "Phone"}</span>
            <strong>{profile.phone}</strong>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-card">
            <span>LinkedIn</span>
            <strong>@lucasfreire089</strong>
          </a>
          <a href={profile.lattes} target="_blank" rel="noreferrer" className="contact-card">
            <span>Lattes</span>
            <strong>CNPq</strong>
          </a>
        </div>
      </section>
    </main>
  );
}
