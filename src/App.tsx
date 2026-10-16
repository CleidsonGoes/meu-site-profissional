import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Database,
  Menu,
  Monitor,
  Settings,
  X,
  Smartphone
} from 'lucide-react';
import { useState } from 'react';
import './index.css';

const services = [
  {
    number: '01',
    icon: BarChart3,
    title: 'BI & Dados',
    description:
      'Dashboards, indicadores e análises para transformar dados em informações úteis para a tomada de decisão.',
  },
  {
    number: '02',
    icon: Database,
    title: 'Sistemas',
    description:
      'Desenvolvimento de sistemas web para organizar informações, processos e operações.',
  },
  {
    number: '03',
    icon: Settings,
    title: 'Processos',
    description:
      'Automação e organização de processos para reduzir tarefas manuais e melhorar a eficiência.',
  },
  {
    number: '04',
    icon: Monitor,
    title: 'Soluções Digitais',
    description:
      'Integração entre tecnologia, dados e negócio para criar soluções sob medida.',
  },
];


const projects = [
  {
    category: 'BI & DATA',
    title: 'Dashboards Power BI',
    description:
      'Visualização de indicadores, análise de desempenho e acompanhamento de resultados para apoiar decisões.',
    objective:
      'Facilitar a análise de indicadores e tornar informações relevantes mais acessíveis para a tomada de decisão.',
    technologies: ['Power BI', 'DAX', 'Excel', 'MySQL', 'Google planilha', 'ETL'],
    desktopImage: '/images/projetos/powerbi-desktop.png',
    mobileImage: '/images/projetos/powerbi-mobile.png',
    desktopAlt: 'Dashboard Power BI na versão desktop',
    mobileAlt: 'Dashboard Power BI na versão mobile',
    link: 'https://app.powerbi.com/view?r=eyJrIjoiOTJkMmYxYmItN2U0ZC00N2ZjLTk0ODktZTFhZWZhYTliNjc4IiwidCI6Ijk4ZTg4MTVmLTljZWEtNDljNC1iYzhjLTljNWM5ZDRhYjRlZSJ9',
  },
  {
    category: 'SISTEMAS',
    title: 'Sistema DF-e',
    description:
      'Sistema para cadastro, consulta e organização de documentos fiscais eletrônicos.',
    objective:
      'Centralizar os registros de documentos fiscais e facilitar sua consulta e organização.',
    technologies: ['React', 'TypeScript', 'Vite', 'MySQL'],
    desktopImage: '/images/projetos/dfe-desktop.png',
    mobileImage: '/images/projetos/dfe-mobile.png',
    desktopAlt: 'Sistema DF-e na versão desktop',
    mobileAlt: 'Sistema DF-e na versão mobile',
    link: 'https://sistema.cjdatatech.gracigostore.com/login',
  },
  {
    category: 'GESTÃO',
    title: 'Sistema de Almoxarifado',
    description:
      'Sistema para gestão de produtos, categorias, fornecedores, entradas, saídas e estoque.',
    objective:
      'Organizar o controle de estoque e apoiar o acompanhamento das operações de almoxarifado.',
    technologies: ['React', 'TypeScript', 'Vite', 'PWA'],
    desktopImage: '/images/projetos/almoxarifado-desktop.png',
    mobileImage: '/images/projetos/almoxarifado-mobile.png',
    desktopAlt: 'Sistema de Almoxarifado na versão desktop',
    mobileAlt: 'Sistema de Almoxarifado na versão mobile',
    link: 'https://sistema-almoxarifado-ten.vercel.app/',
  },
];


const technologies = [
  'Power BI',
  'Python',
  'SQL',
  'MySQL',
  'JavaScript',
  'TypeScript',
  'React',
  'Excel',
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <header className="header">
        <a href="#inicio" className="logo" onClick={closeMenu}>
          CG<span>.</span>
        </a>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#inicio" onClick={closeMenu}>
            Início
          </a>
          <a href="#sobre" onClick={closeMenu}>
            Sobre
          </a>
          <a href="#servicos" onClick={closeMenu}>
            Serviços
          </a>
          <a href="#projetos" onClick={closeMenu}>
            Projetos
          </a>
          <a href="#contato" onClick={closeMenu}>
            Contato
          </a>
        </nav>

        <a href="#contato" className="header-button">
          Vamos conversar
          <ArrowUpRight size={17} />
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-image">
            <div className="hero-image-overlay" />
          </div>

          <div className="hero-background">
            <div className="hero-grid" />
            <div className="hero-glow hero-glow-one" />
            <div className="hero-glow hero-glow-two" />
          </div>

          <div className="hero-content">
            <div className="hero-intro">
              <span className="hero-line" />
              <p>Dados • Tecnologia • Negócios</p>
            </div>

            <h1>
              Transformando
              <br />
              <span>dados em decisões.</span>
            </h1>

            <p className="hero-description">
              Soluções em BI, dados, sistemas e processos para transformar
              informações em resultados.
            </p>

            <div className="hero-actions">
              <a href="#projetos" className="button button-primary">
                Ver projetos
                <ArrowUpRight size={18} />
              </a>

              <a href="#sobre" className="button button-secondary">
                Conheça meu trabalho
              </a>
            </div>
          </div>

          <div className="hero-side-text">
            <span>BI</span>
            <span>DATA</span>
            <span>SYSTEMS</span>
          </div>

          <a href="#sobre" className="scroll-indicator">
            <span>Scroll para explorar</span>
            <ArrowDown size={18} />
          </a>

          <div className="hero-number">01</div>
        </section>

        <section id="sobre" className="section about-section">
          <div className="section-heading">
            <span className="section-kicker">01 / SOBRE</span>
            <h2>
              Tecnologia com propósito.
              <br />
              <span>Dados que geram valor.</span>
            </h2>
          </div>

          <div className="about-content">
            <div className="about-intro">
              <p className="about-lead">
                Olá, sou Cleidson Goes.
              </p>

              <p>
                Atuo na interseção entre dados, tecnologia e negócios,
                desenvolvendo soluções que ajudam a transformar informações
                em decisões mais claras e processos mais eficientes.
              </p>

              <p>
                Minha experiência envolve Business Intelligence, análise de
                dados, automação de tarefas e desenvolvimento de sistemas,
                sempre buscando unir visão analítica e necessidades reais
                da operação.
              </p>

              <a href="#projetos" className="about-link">
                Conheça meus projetos <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="about-highlights">
              <article className="about-highlight">
                <span className="highlight-number">01</span>
                <div>
                  <h3>Visão analítica</h3>
                  <p>
                    Indicadores, dashboards e informações que apoiam
                    decisões de negócio.
                  </p>
                </div>
                <BarChart3 size={24} />
              </article>

              <article className="about-highlight">
                <span className="highlight-number">02</span>
                <div>
                  <h3>Eficiência operacional</h3>
                  <p>
                    Automação e melhoria de processos para reduzir tarefas
                    manuais e retrabalho.
                  </p>
                </div>
                <Settings size={24} />
              </article>

              <article className="about-highlight">
                <span className="highlight-number">03</span>
                <div>
                  <h3>Soluções digitais</h3>
                  <p>
                    Sistemas e ferramentas construídos para resolver
                    problemas práticos.
                  </p>
                </div>
                <Monitor size={24} />
              </article>
            </div>
          </div>
        </section>

        <section id="servicos" className="section services">
          <div className="section-header">
            <div>
              <div className="section-label">02 — SERVIÇOS</div>
              <h2>
                O que posso
                <br />
                <em>desenvolver.</em>
              </h2>
            </div>

            <p>
              Soluções pensadas para conectar dados, tecnologia e processos
              dentro da realidade de cada negócio.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="service-card" key={service.number}>
                  <div className="service-top">
                    <span>{service.number}</span>
                    <Icon size={25} strokeWidth={1.5} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className="card-arrow">
                    <ArrowUpRight size={20} />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="projetos" className="section projects">
          <div className="section-header">
            <div>
              <div className="section-label">03 — PROJETOS</div>
              <h2>
                Projetos que
                <br />
                <em>estou construindo.</em>
              </h2>
            </div>

            <p>
              Alguns dos projetos que representam minha experiência prática
              com dados, desenvolvimento e gestão.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-image project-image--responsive">
                  <div className="project-device project-device--desktop">
                    <div className="project-device-label">
                      <Monitor size={16} />
                      <span>DESKTOP</span>
                    </div>

                    <div className="project-screen">
                      <div className="project-placeholder">
                        <Monitor size={32} />
                      </div>

                      <img
                        src={project.desktopImage}
                        alt={project.desktopAlt}
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                  </div>

                  <div className="project-device project-device--mobile">
                    <div className="project-device-label">
                      <Smartphone size={15} />
                      <span>MOBILE</span>
                    </div>

                    <div className="project-phone">
                      <div className="project-phone-camera" />

                      <div className="project-phone-screen">
                        <div className="project-placeholder">
                          <Smartphone size={24} />
                        </div>

                        <img
                          src={project.mobileImage}
                          alt={project.mobileAlt}
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <span className="project-index">
                    PROJETO 0{index + 1}
                  </span>
                </div>

                <div className="project-info">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>


                  <p>{project.description}</p>

                  <div className="project-objective">
                    <span>OBJETIVO</span>
                    <p>{project.objective}</p>
                  </div>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Acessar projeto <ArrowUpRight size={18} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="technologies">
          <div className="section-label">04 — TECNOLOGIAS</div>

          <h2>
            Ferramentas para
            <br />
            <em>transformar ideias.</em>
          </h2>

          <div className="technology-list">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </section>

        <section id="contato" className="contact">
          <div className="contact-background" />

          <div className="section-label">05 — CONTATO</div>

          <div className="contact-content">
            <p className="eyebrow">Tem um projeto?</p>

            <h2>
              Vamos criar algo
              <br />
              <em>juntos.</em>
            </h2>

            <p>
              Entre em contato para conversar sobre projetos, oportunidades ou
              soluções para sua empresa.
            </p>

            <a href="mailto:seuemail@email.com" className="button button-light">
              Entre em contato
              <ArrowUpRight size={19} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <a href="#inicio" className="logo footer-logo">
            CG<span>.</span>
          </a>

          <p>
            Dados, tecnologia e processos
            <br />
            para transformar negócios.
          </p>

          <div className="footer-links">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Cleidson Goes</span>
          <span>Desenvolvido com tecnologia e dados.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
