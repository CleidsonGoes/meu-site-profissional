import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Database,
  Menu,
  Monitor,
  Settings,
  X,
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
      'Visualização de indicadores, análise de desempenho e acompanhamento de resultados.',
  },
  {
    category: 'SISTEMAS',
    title: 'Sistema DF-e',
    description:
      'Sistema para cadastro, controle e organização de documentos fiscais eletrônicos.',
  },
  {
    category: 'GESTÃO',
    title: 'Sistema de Almoxarifado',
    description:
      'Controle de produtos, entradas, saídas, movimentações e estoque.',
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

        <section id="sobre" className="section about">
          <div className="section-label">01 — SOBRE</div>

          <div className="about-grid">
            <div className="about-title">
              <p className="eyebrow">Quem está por trás</p>
              <h2>
                Tecnologia com
                <br />
                <em>visão de negócio.</em>
              </h2>
            </div>

            <div className="about-content">
              <p className="large-text">
                Sou <strong>Cleidson Goes</strong>, profissional com atuação
                em dados, Business Intelligence, sistemas e processos.
              </p>

              <p>
                Meu trabalho une tecnologia e conhecimento de negócio para
                desenvolver soluções que ajudam empresas a organizar
                informações, acompanhar indicadores e tomar decisões com mais
                clareza.
              </p>

              <p>
                Tenho experiência com Power BI, SQL, Python, Excel, sistemas
                web e automação de processos.
              </p>

              <a href="#contato" className="text-link">
                Vamos conversar
                <ArrowUpRight size={17} />
              </a>
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
                <div className="project-image">
                  <span>Projeto {String(index + 1).padStart(2, '0')}</span>
                  <div className="project-image-pattern" />
                </div>

                <div className="project-info">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <a href="#contato" className="project-link">
                    Ver projeto
                    <ArrowUpRight size={18} />
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
