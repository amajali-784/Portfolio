"use client";

import { FormEvent, useMemo, useState } from "react";
import Hero3D from "./Hero3D";

const github = "https://github.com/amajali-784";
const linkedIn = "https://www.linkedin.com/in/ankush-majalikar-76bb301a4/";

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Analytics", "#analytics"],
  ["Resume", "#resume"],
  ["Timeline", "#timeline"],
  ["Contact", "#contact"]
] as const;

const projects = [
  {
    title: "30 Days of AI Voice Agents",
    tag: "Voice AI",
    description:
      "Voice-enabled apps using AssemblyAI, FastAPI, WebSockets, and React for real-time AI interactions.",
    link: `${github}/30-Days-of-AI-Voice-Agents`,
    metrics: "Realtime speech pipeline"
  },
  {
    title: "Credit Approval System",
    tag: "Django API",
    description:
      "A backend credit workflow simulation with loan approval logic, REST APIs, and database-driven decisions.",
    link: `${github}/Credit-Approval-System`,
    metrics: "Django REST architecture"
  },
  {
    title: "Handwritten Digits Recognition",
    tag: "Machine Learning",
    description:
      "Image classification project for recognizing handwritten digits with ML model training and evaluation.",
    link: `${github}/Handwritten-Digits-Recognition`,
    metrics: "Computer vision model"
  },
  {
    title: "Sentiment Analysis",
    tag: "NLP",
    description:
      "Natural language processing project that classifies text sentiment and demonstrates practical ML workflows.",
    link: `${github}/Sentiment-Analysis`,
    metrics: "NLP classification"
  },
  {
    title: "House Price Prediction",
    tag: "Regression",
    description:
      "A complete ML case study covering data preparation, EDA, model building, evaluation, and prediction flow.",
    link: `${github}?tab=repositories&q=house&type=&language=&sort=`,
    metrics: "EDA to model delivery"
  },
  {
    title: "Hackathon Projects",
    tag: "AI + Web3",
    description:
      "Experimental builds across AI, generative systems, and modern web stacks from fast-paced hackathon work.",
    link: `${github}?tab=repositories&q=hackathon&type=&language=&sort=`,
    metrics: "Prototype velocity"
  }
];

const skills = [
  { group: "AI/ML", items: ["Machine Learning", "Deep Learning", "NLP", "Generative AI"], level: 88 },
  { group: "Programming", items: ["Python", "SQL", "Java", "C"], level: 84 },
  { group: "Web", items: ["React", "FastAPI", "Django", "REST APIs"], level: 78 },
  { group: "Data", items: ["EDA", "Model Evaluation", "PostgreSQL", "Dashboards"], level: 82 }
];

const timeline = [
  ["2024", "Started focused AI/ML learning"],
  ["2025", "Internship and production-style backend practice"],
  ["2025", "House Price Prediction and ML case studies"],
  ["2026", "Superlegal Doc AI concept and applied NLP direction"],
  ["2026", "AI Interview Assistant and portfolio OS launch"]
];

const quickAnswers: Record<string, string> = {
  ankush:
    "Ankush Majalikar is an AI/ML Engineer, Data Scientist, and Python Developer building ML, NLP, backend, and full-stack projects.",
  projects:
    "Featured work includes AI Voice Agents, Credit Approval System, Handwritten Digits Recognition, Sentiment Analysis, House Price Prediction, and hackathon prototypes.",
  resume: "Use the Resume section to preview, view, or download Ankush_Majalikar.pdf.",
  skills:
    "Core skills: Python, machine learning, deep learning, NLP, generative AI, SQL, Java, C, React, FastAPI, Django, PostgreSQL, and REST APIs.",
  contact:
    "Contact through LinkedIn, GitHub, or the contact form section. The LinkedIn profile is linked in the social controls."
};

export default function PortfolioOS() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi, I am Ankush's portfolio assistant. Ask about projects, skills, resume, or contact."
    }
  ]);
  const [prompt, setPrompt] = useState("");

  const repoCards = useMemo(
    () => [
      ["16", "Public repositories"],
      ["AI/ML", "Main project focus"],
      ["Python", "Primary language"],
      ["Vercel", "Deployment ready"]
    ],
    []
  );

  const askAssistant = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const clean = prompt.trim();
    if (!clean) return;

    const lower = clean.toLowerCase();
    const key = Object.keys(quickAnswers).find((entry) => lower.includes(entry));
    const answer =
      key && quickAnswers[key]
        ? quickAnswers[key]
        : "I can help with Ankush's projects, skills, resume, GitHub work, and contact details. Try asking: show ML projects.";

    setMessages((current) => [
      ...current,
      { role: "user", text: clean },
      { role: "assistant", text: answer }
    ]);
    setPrompt("");
  };

  return (
    <main className="portfolio-shell">
      <aside className="sidebar" aria-label="Portfolio sections">
        <a className="brand" href="#home" aria-label="Go to home">
          <span className="brand-mark">AM</span>
          <span>
            <strong>Ankush</strong>
            <small>Portfolio OS</small>
          </span>
        </a>
        <nav>
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="system-card">
          <span>Status</span>
          <strong>Open for AI/ML roles</strong>
          <div className="pulse-line" />
        </div>
      </aside>

      <section className="workspace">
        <section id="home" className="hero-section">
          <Hero3D />
          <div className="hero-copy">
            <p className="eyebrow">AI/ML Engineer - Data Scientist - Python Developer</p>
            <h1>Ankush Majalikar</h1>
            <p className="hero-text">
              A portfolio OS for machine learning projects, backend systems, data workflows, and
              real-time AI experiments.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#projects">
                Explore Work
              </a>
              <a className="secondary-action" href="/assets/ankush-majalikar-resume.pdf" target="_blank">
                View Resume
              </a>
            </div>
          </div>
          <div className="profile-panel">
            <img src="/assets/ankush-majalikar.jpg" alt="Ankush Majalikar portrait" />
            <div>
              <span>Live profile</span>
              <strong>AI + Software Development</strong>
            </div>
          </div>
        </section>

        <section id="about" className="section-grid two-cols">
          <article className="panel about-panel">
            <p className="section-kicker">About</p>
            <h2>Building useful AI systems with a developer's eye for shipping.</h2>
            <p>
              Ankush is focused on software development, machine learning, cyber security, and
              open-source practice. The portfolio is designed like a dashboard so recruiters can
              scan capability, project depth, and momentum quickly.
            </p>
          </article>
          <article className="panel command-panel">
            <div className="terminal-row">
              <span />
              <span />
              <span />
            </div>
            <code>
              &gt; profile.run()
              <br />
              loading: Python, AI/ML, React, FastAPI
              <br />
              output: builder with practical ML case studies
            </code>
          </article>
        </section>

        <section id="skills" className="panel">
          <div className="section-header">
            <div>
              <p className="section-kicker">Skills</p>
              <h2>Interactive skill tree</h2>
            </div>
            <span className="badge">animated progress</span>
          </div>
          <div className="skill-grid">
            {skills.map((skill) => (
              <article key={skill.group} className="skill-card">
                <h3>{skill.group}</h3>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="progress-track">
                  <span style={{ width: `${skill.level}%` }} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="panel">
          <div className="section-header">
            <div>
              <p className="section-kicker">Projects</p>
              <h2>Case-study style project console</h2>
            </div>
            <a className="text-link" href={github} target="_blank" rel="noreferrer">
              GitHub profile
            </a>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <span>{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-footer">
                  <small>{project.metrics}</small>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Open
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="analytics" className="section-grid analytics-grid">
          {repoCards.map(([value, label]) => (
            <article className="metric-card" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </section>

        <section id="resume" className="panel resume-panel">
          <div>
            <p className="section-kicker">Resume</p>
            <h2>Recruiter-ready PDF access</h2>
            <p>
              The uploaded resume is packaged in the public assets folder so it works on Vercel and
              can be opened or downloaded directly.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="/assets/ankush-majalikar-resume.pdf" target="_blank">
                View Resume
              </a>
              <a className="secondary-action" href="/assets/ankush-majalikar-resume.pdf" download>
                Download
              </a>
            </div>
          </div>
          <iframe title="Ankush Majalikar resume preview" src="/assets/ankush-majalikar-resume.pdf" />
        </section>

        <section id="timeline" className="panel">
          <p className="section-kicker">Timeline</p>
          <h2>Achievement timeline</h2>
          <div className="timeline">
            {timeline.map(([year, event]) => (
              <div className="timeline-item" key={`${year}-${event}`}>
                <strong>{year}</strong>
                <span>{event}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="panel contact-panel">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>Let's build the next intelligent product.</h2>
            <div className="socials">
              <a href={linkedIn} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="mailto:ankush.majalikar@example.com">Email</a>
              <a href="https://leetcode.com/" target="_blank" rel="noreferrer">
                LeetCode
              </a>
            </div>
          </div>
          <form className="contact-form">
            <input aria-label="Your name" placeholder="Your name" />
            <input aria-label="Your email" placeholder="Your email" type="email" />
            <textarea aria-label="Message" placeholder="Project, role, or collaboration idea" />
            <button type="button">Send Message</button>
          </form>
        </section>
      </section>

      <button className="chat-toggle" type="button" onClick={() => setChatOpen((open) => !open)}>
        AI
      </button>
      {chatOpen ? (
        <aside className="chatbot" aria-label="Portfolio assistant">
          <div className="chat-header">
            <strong>Portfolio Assistant</strong>
            <button type="button" onClick={() => setChatOpen(false)}>
              Close
            </button>
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <p className={message.role} key={`${message.role}-${index}`}>
                {message.text}
              </p>
            ))}
          </div>
          <form onSubmit={askAssistant}>
            <input
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              placeholder="Ask about projects, skills, resume..."
            />
            <button type="submit">Ask</button>
          </form>
        </aside>
      ) : null}
    </main>
  );
}
