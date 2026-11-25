const projects = [
  {
    slug: 'odisha-public-health-chatbot', title: 'Odisha Public Health Chatbot', short: 'A grounded, multilingual guide to public health information.', category: 'AI / HEALTH', stack: 'Python · FastAPI · RAG · ChromaDB · React', tone: 'coral', mark: '01',
    github: 'https://github.com/Athmapriyan/publichealthchatbot',
    intro: 'A prototype for the Government of Odisha E&IT Dept MedTech/HealthTech brief, designed to make public health awareness information easier to access across languages.',
    details: ['Built a retrieval-augmented health awareness chatbot prototype using a ChromaDB knowledge base of 13 curated documents covering 12 diseases and topics.', 'Added a safety layer for emergency keywords, response validation that blocks diagnosis and dosage claims, explainable rule-based risk assessment, and a RAG-based misinformation checker.', 'Implemented an LLM provider router with automatic fallback (Groq, Gemini, OpenRouter) and English, Hindi and Odia support through Sarvam AI translation.', 'Exposed the system through FastAPI endpoints, a React web app and a Telegram bot. The bot declines to answer when retrieval finds no relevant source.'],
  },
  {
    slug: 'filamenta-cosmic-web-simulation', title: 'Filamenta', subtitle: 'Cosmic Web Simulation', short: 'Finding structure in the vastness between galaxies.', category: 'SIMULATION / RESEARCH', stack: 'C · raylib', tone: 'violet', mark: '02',
    github: 'https://github.com/Athmapriyan/Filamenta',
    intro: 'A C-based simulation that visualizes the formation of cosmic filaments from point densities, rendering a real-time heatmap and connections with raylib.',
    details: ['Built a real-time visualization of cosmic filament formation from point densities.', 'Rendered a heatmap and connections using raylib.', 'IEEE conference paper: publication pending.'],
  },
  {
    slug: 'coe-grievance-application', title: 'COE Grievance Application', short: 'A clearer route through examination requests.', category: 'FULL-STACK / CAMPUS', stack: 'React · Node.js · Supabase', tone: 'green', mark: '03',
    github: 'https://github.com/Athmapriyan/COE-Grievance-Application',
    intro: 'An in-house project at SRMIST: a role-based platform for students and administrators to submit, track and resolve examination-related requests and grievances.',
    details: ['Developed a full-stack web application with role-based student and admin access.', 'Supports submitting, tracking and resolving examination-related requests and grievances.'],
  },
  {
    slug: 'lockin-task-reminder-app', title: 'Lockin', subtitle: 'Task Reminder App', short: 'A focused place to keep everyday tasks in view.', category: 'MOBILE / PRODUCT', stack: 'Flutter', tone: 'blue', mark: '04',
    github: 'https://github.com/Athmapriyan/lockin',
    intro: 'A cross-platform task reminder app for Android and iOS, built with cloud storage and a focus on secure handling of user tasks.',
    details: ['Developed as a cross-platform Android and iOS app in Flutter.', 'Focused on secure handling of user tasks with cloud storage.', 'The app has not yet been deployed.'],
  },
];

const skills = [
  ['Languages', 'Python, C, Java, JavaScript, Dart, SQL (MySQL)'],
  ['AI / ML', 'TensorFlow, PyTorch, scikit-learn, Hugging Face Transformers, Sentence-Transformers, Pandas, NumPy, Retrieval-Augmented Generation (RAG), LLM APIs'],
  ['Web & Backend', 'FastAPI, React, Node.js, Supabase, ChromaDB, Docker, Flutter'],
  ['Tools & Graphics', 'Figma, Unreal Engine 5, Blender, raylib'],
];

const certifications = [
  'Fortinet Certified Associate in Cybersecurity — Fortinet',
  'Fortinet Certified Fundamentals in Cybersecurity — Fortinet',
  'Network Security Associate Virtual Internship — AICTE',
  'AI–ML Virtual Internship — AICTE',
  'Programming in Java — NPTEL',
  'IEEE Conference Paper (Filamenta) — publication pending',
];

const projectHref = (p) => `/projects/${p.slug}`;
const arrow = '<span class="arrow" aria-hidden="true">↗</span>';
const eyebrow = (text) => `<p class="eyebrow"><span class="eyebrow-dot"></span>${text}</p>`;

function projectArt(p, compact = false) {
  return `<div class="project-art art-${p.tone}${compact ? ' compact' : ''}" aria-hidden="true">
    <span class="art-index">${p.mark} / 04</span>
    ${p.tone === 'coral' ? `<div class="chat-orbit orbit-one"></div><div class="chat-orbit orbit-two"></div><div class="chat-card"><span class="chat-dot"></span><span class="chat-line"></span><span class="chat-line short"></span><span class="chat-pill">EN · HI · OD</span></div><span class="art-caption">A little more understood.</span>` : ''}
    ${p.tone === 'violet' ? `<div class="cosmos-core"></div><div class="cosmos-web">${Array.from({length:14},(_,i)=>`<i style="--i:${i}"></i>`).join('')}</div><span class="art-caption">THE SPACE BETWEEN</span>` : ''}
    ${p.tone === 'green' ? `<div class="panel panel-back"></div><div class="panel panel-front"><span class="panel-bar"></span><span class="panel-row"></span><span class="panel-row"></span><span class="panel-row"></span><span class="panel-chip">IN REVIEW</span></div><span class="art-caption">A clearer next step.</span>` : ''}
    ${p.tone === 'blue' ? `<div class="phone-shape"><span class="phone-top"></span><span class="phone-date">MONDAY, 9:41</span><span class="phone-task">Make space<br>for what matters.</span><span class="phone-check">✓</span><span class="phone-task mini">Review project notes</span><span class="phone-task mini">Take a short walk</span></div><span class="art-caption">ONE THING AT A TIME.</span>` : ''}
  </div>`;
}

function card(p, i) {
  return `<div class="project-card reveal" style="--delay:${i * 90}ms">
    <a class="project-card-link" href="${projectHref(p)}" aria-label="View ${p.title}${p.subtitle ? `: ${p.subtitle}` : ''}">
    ${projectArt(p)}<div class="project-card-meta"><div><span class="project-category">${p.category}</span><h3>${p.title}${p.subtitle ? `<em>${p.subtitle}</em>` : ''}</h3></div><span class="card-arrow">↗</span></div><p class="project-short">${p.short}</p>
    </a>${p.github ? `<a class="github-link" href="${p.github}" target="_blank" rel="noopener noreferrer" aria-label="View ${p.title} on GitHub"><svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg> View on GitHub</a>` : ''}
  </div>`;
}

function home() {
  return `<section class="hero wrap">
    <div class="hero-left">${eyebrow('AI · RESEARCH · SOFTWARE')}<h1>Ideas, made<br><em>thoughtful.</em></h1><p class="hero-copy">I’m K Athmapriyan — an Integrated M.Tech Artificial Intelligence student at SRMIST, interested in building useful things at the intersection of intelligence and imagination.</p><div class="hero-actions"><a class="button button-dark" href="/projects">Explore selected work <span>↘</span></a><a class="text-link" href="/about">A little about me ${arrow}</a></div></div>
    <div class="hero-visual" aria-label="Profile photo and orbital illustration"><div class="visual-label top">FIELD NOTES / 2026</div><div class="hero-photo-wrap"><img class="hero-photo" src="/assets/profile.jpg" alt="K Athmapriyan" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"/><div class="hero-photo-fallback" style="display:none"><span>K</span></div></div><div class="hero-disc"><div class="disc-inner"></div><span class="disc-cross">✳</span></div><div class="orbit orbit-a"></div><div class="orbit orbit-b"></div><div class="orbit-label label-a">curiosity</div><div class="orbit-label label-b">with intent</div><div class="visual-label bottom">13° 01′ N &nbsp; 80° 14′ E</div></div>
    <div class="hero-bottom"><span>SCROLL TO EXPLORE</span><span class="scroll-line"></span><span>01 — 06</span></div>
  </section>
  <div class="ticker" aria-label="Areas of interest"><div class="ticker-track"><span>Machine learning</span><b>✳</b><span>Small language models</span><b>✳</b><span>Useful software</span><b>✳</b><span>Visual experiments</span><b>✳</b><span>Machine learning</span><b>✳</b><span>Small language models</span><b>✳</b><span>Useful software</span><b>✳</b><span>Visual experiments</span><b>✳</b></div></div>
  <section class="section wrap selected-section"><div class="section-head">${eyebrow('A FEW THINGS I’VE MADE')}<a class="text-link desktop-only" href="/projects">All projects ${arrow}</a></div><div class="project-grid">${projects.map(card).join('')}</div><a class="text-link mobile-only" href="/projects">All projects ${arrow}</a></section>
  <section class="home-note"><div class="wrap note-grid"><div>${eyebrow('THE THROUGH-LINE')}</div><p>Curiosity is a good starting point.<br><em>Making something useful is the point.</em></p><a href="/about" class="round-link" aria-label="Read about Athmapriyan">↗</a></div></section>
  <section class="section wrap home-next"><div>${eyebrow('CURRENT CHAPTER')}</div><div><h2>Learning in public.<br><em>Building with care.</em></h2><p>From machine learning research to software that helps people get things done — I like work with a clear reason to exist.</p><a class="text-link" href="/experience">More about my experience ${arrow}</a></div><div class="next-stamp">SRMIST<br><span>2023—28</span></div></section>`;
}

function pageIntro(number, label, title, copy) {
  return `<section class="page-intro wrap"><div class="page-index"><span>${number}</span><i></i>${label}</div><h1>${title}</h1>${copy ? `<p class="intro-copy">${copy}</p>` : ''}</section>`;
}

function about() {
  return `${pageIntro('01','ABOUT','A little context<br><em>for the curiosity.</em>','An AI student, a hands-on maker, and a believer that good technology should feel clear and human.')}
    <section class="about-body wrap"><div class="about-side">${eyebrow('IN BRIEF')}<div class="about-graphic"><div class="about-sun"></div><div class="about-ring"></div><span>LEARN<br>↘<br>MAKE</span></div><p class="small-note">A practice in asking better questions.</p></div><div class="about-copy"><p class="large-serif">I’m K Athmapriyan, an Integrated M.Tech student in Artificial Intelligence at <strong>SRM Institute of Science and Technology.</strong></p><p>I work across machine learning, deep learning and small language models, alongside full-stack and mobile application development. I enjoy moving from a question to a working prototype — and paying attention to how it feels to use.</p><p>My recent work ranges from a multilingual public health chatbot prototype to a real-time cosmic web simulation. I completed a research internship in machine learning and deep learning at IIIT Kottayam.</p><div class="about-facts"><div><span>STUDYING</span><strong>Artificial Intelligence</strong></div><div><span>AT</span><strong>SRMIST</strong></div><div><span>EXPECTED</span><strong>2028</strong></div><div><span>BASED IN</span><strong>India</strong></div></div><a class="button button-dark" href="/assets/K_Athmapriyan_Resume.pdf" download>Download résumé <span>↓</span></a></div></section>
    <section class="quote-band"><div class="wrap">${eyebrow('A WORKING PRINCIPLE')}<p>Stay curious.<br><em>Make it useful.</em></p></div></section>`;
}

function experience() {
  return `${pageIntro('02','EXPERIENCE','Good work is<br><em>shared work.</em>','Research, communication and collaboration have shaped the way I approach a problem.')}
    <section class="timeline wrap"><article class="timeline-item"><div class="timeline-date">JUN — AUG<br>2026</div><div class="timeline-marker"><i></i></div><div class="timeline-content"><span class="project-category">RESEARCH / MACHINE LEARNING</span><h2>Research Intern</h2><h3>Indian Institute of Information Technology (IIIT), Kottayam</h3><p>Completed a two-month research internship in machine learning and deep learning as an institute intern.</p><div class="tag-row"><span>Machine learning</span><span>Deep learning</span><span>Research</span></div></div><div class="timeline-number">01</div></article>
    <article class="timeline-item"><div class="timeline-date">OCT 2024 —<br>OCT 2025</div><div class="timeline-marker"><i></i></div><div class="timeline-content"><span class="project-category">LEADERSHIP / COMMUNICATION</span><h2>Domain Head — Content & Research</h2><h3>IEEE GRSS Student Chapter, SRMIST</h3><p>Led the content and research domain, curating and publishing technical posts and educational content on geoscience and remote sensing. Conducted chapter events and coordinated with student teams to promote remote sensing through social media and campus activities.</p><div class="tag-row"><span>Geoscience</span><span>Remote sensing</span><span>Content</span></div></div><div class="timeline-number">02</div></article></section>
    <section class="education-band"><div class="wrap education-row">${eyebrow('EDUCATION')}<div><span class="project-category">2023 — 2028 (EXPECTED)</span><h2>Integrated M.Tech<br><em>Artificial Intelligence</em></h2><p>SRM Institute of Science and Technology (SRMIST)</p></div><span class="edu-seal">AI<br><i>↗</i></span></div></section>`;
}

function projectsPage() {
  return `${pageIntro('03','SELECTED WORK','Experiments with<br><em>something to say.</em>','Projects across AI, simulation, campus software and mobile — each one a chance to learn by making.')}
    <section class="section wrap projects-page-grid"><div class="project-grid">${projects.map(card).join('')}</div></section><section class="project-foot wrap"><span>FOUR PROJECTS · SELECTED WORK</span><a href="/contact" class="text-link">Have a question about the work? ${arrow}</a></section>`;
}

function projectDetail(slug) {
  const p = projects.find(x => x.slug === slug);
  if (!p) return notFound();
  return `<section class="detail-hero wrap"><a class="back-link" href="/projects">← All projects</a><div class="detail-topline"><span>${p.category}</span><span>PROJECT &nbsp; / &nbsp; ${p.mark}</span></div><h1>${p.title}${p.subtitle ? `<em>${p.subtitle}</em>` : ''}</h1><p class="detail-intro">${p.intro}</p><div class="detail-art">${projectArt(p)}</div></section>
    <section class="detail-body wrap"><div class="detail-label">${eyebrow('THE NOTES')}</div><div class="detail-main"><h2>What it does</h2><ul class="detail-list">${p.details.map(x => `<li>${x}</li>`).join('')}</ul><div class="detail-stack"><span>TOOLS & TECHNOLOGIES</span><p>${p.stack}</p></div>${p.github ? `<a class="button button-dark github-detail-btn" href="${p.github}" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg> View on GitHub <span>↗</span></a>` : ''}<a class="text-link" href="/projects/${projects[(projects.indexOf(p)+1)%projects.length].slug}">Next project ${arrow}</a></div></section><section class="detail-next"><div class="wrap"><span>MORE FROM THE WORK</span><a href="/projects">See all projects <span>↗</span></a></div></section>`;
}

function skillsPage() {
  return `${pageIntro('04','SKILLS & NOTES','A toolkit for<br><em>curious minds.</em>','Tools I’ve used to explore ideas, build prototypes and bring projects to life.')}
    <section class="skills-wrap wrap"><div class="skills-list">${skills.map(([title, list], i) => `<article class="skill-row"><span class="skill-number">0${i+1}</span><h2>${title}</h2><p>${list}</p><span class="skill-plus">+</span></article>`).join('')}</div><aside class="skills-aside"><div class="skills-orbit"><span>LEARN<br>BY<br>MAKING</span><i></i></div><p>Tools change. The habit of learning stays.</p></aside></section>
    <section class="certifications"><div class="wrap cert-grid"><div>${eyebrow('CERTIFICATIONS & PUBLICATIONS')}<h2>Groundwork<br><em>and next steps.</em></h2><p class="cert-note">Credentials and publication status as listed in my résumé.</p></div><ol>${certifications.map((c,i)=>`<li><span>0${i+1}</span>${c}</li>`).join('')}</ol></div></section>`;
}

function contact() {
  return `${pageIntro('05','CONTACT','Start with<br><em>a hello.</em>','For research, collaboration, thoughtful questions or just a good conversation — my inbox is open.')}
    <section class="contact-body wrap"><div class="contact-left">${eyebrow('GET IN TOUCH')}<a class="email-link" href="mailto:kannanathu07@gmail.com">kannanathu07<br>@gmail.com <span>↗</span></a><p>Usually the best place to reach me is email. I’d be glad to hear what you’re working on.</p></div><div class="contact-right"><a class="contact-channel" href="mailto:kannanathu07@gmail.com"><span>EMAIL</span><strong>kannanathu07@gmail.com</strong><i>↗</i></a><a class="contact-channel" href="tel:+919597098280"><span>PHONE</span><strong>+91 95970 98280</strong><i>↗</i></a><div class="contact-channel"><span>STUDYING AT</span><strong>SRMIST · India</strong><i>✳</i></div><a class="button button-dark resume-button" href="/assets/K_Athmapriyan_Resume.pdf" download>Download résumé <span>↓</span></a></div></section>
    <section class="contact-end"><div class="wrap"><span>THANKS FOR STOPPING BY</span><p>Have a good one. <em>Make something good.</em></p><span class="contact-flower">✳</span></div></section>`;
}

function notFound() { return `<section class="not-found wrap"><span class="project-category">404 / NOT HERE</span><h1>This page took<br><em>another path.</em></h1><p>The link may have changed. Let’s get you back to the work.</p><a href="/" class="button button-dark">Back to home <span>↗</span></a></section>`; }

const pages = { '/': home, '/about': about, '/experience': experience, '/projects': projectsPage, '/skills': skillsPage, '/contact': contact };

function route() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if (path.startsWith('/projects/')) return { path, render: () => projectDetail(path.split('/')[2]) };
  return { path, render: pages[path] || notFound };
}

function render(withTransition = false) {
  const { path, render: page } = route();
  const main = document.querySelector('#main');

  function applyContent() {
    main.innerHTML = page();
    const activePath = path.startsWith('/projects') ? '/projects' : path;
    document.querySelectorAll('.nav a').forEach(a => {
      const current = new URL(a.href).pathname === activePath;
      a.classList.toggle('active', current);
      if (current) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    const title = path.startsWith('/projects/') ? `${projects.find(p => p.slug === path.split('/')[2])?.title || 'Project'} — K Athmapriyan` : `${({ '/':'AI, research & software', '/about':'About', '/experience':'Experience', '/projects':'Projects', '/skills':'Skills & notes', '/contact':'Contact' })[path] || 'Page not found'} — K Athmapriyan`;
    document.title = title;
    document.querySelector('meta[name="description"]').content = `K Athmapriyan — ${title.split(' — ')[0]}. Integrated M.Tech Artificial Intelligence student at SRMIST.`;
    document.querySelector('#footer').innerHTML = `<div class="wrap footer-main"><a class="brand footer-brand" href="/"><span class="brand-mark">K<span>.</span></span><span class="brand-name">ATHMAPRIYAN</span></a><p>Curious by nature.<br><em>Building with intent.</em></p><div class="footer-links"><a href="mailto:kannanathu07@gmail.com">Email ${arrow}</a><a href="tel:+919597098280">Phone ${arrow}</a><a href="/assets/K_Athmapriyan_Resume.pdf" download>Résumé ↓</a></div></div><div class="wrap footer-bottom"><span>© ${new Date().getFullYear()} K ATHMAPRIYAN</span><span>DESIGNED WITH CURIOSITY · INDIA</span><a href="#main">BACK TO TOP ↑</a></div>`;
    document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');
    document.querySelector('.nav').classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'instant' });
    reveal();
  }

  // Skip transition for initial load or reduced motion
  if (!withTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    applyContent();
    main.classList.remove('page-exit','page-enter');
    return;
  }

  // Animated transition: fade-out → swap → fade-in
  main.classList.add('page-exit');
  main.addEventListener('transitionend', function swap(e) {
    if (e.target !== main) return;
    main.removeEventListener('transitionend', swap);
    applyContent();
    main.classList.remove('page-exit');
    main.classList.add('page-enter');
    // Force reflow so the browser paints the enter start state
    void main.offsetHeight;
    requestAnimationFrame(() => {
      main.classList.remove('page-enter');
    });
  }, { once: false });
}

function reveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { items.forEach(el => el.classList.add('visible')); return; }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
  items.forEach(el => observer.observe(el));
}

document.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link || link.target === '_blank' || link.hasAttribute('download') || link.origin !== location.origin || link.hash) return;
  const url = new URL(link.href);
  if (!url.pathname.startsWith('/')) return;
  event.preventDefault();
  if (url.pathname === window.location.pathname) return;
  history.pushState({}, '', url.pathname);
  render(true);
});
document.querySelector('.menu-toggle').addEventListener('click', () => {
  const button = document.querySelector('.menu-toggle'); const open = button.getAttribute('aria-expanded') !== 'true';
  button.setAttribute('aria-expanded', String(open)); button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); document.querySelector('.nav').classList.toggle('open', open);
});
window.addEventListener('popstate', () => render(true));
render();
