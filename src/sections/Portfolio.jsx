import { useMemo, useState } from 'react';
import projects from '../data/projects.js';
import TiltCard from '../components/TiltCard.jsx';
import GradientBlobs from '../components/GradientBlobs.jsx';

function ProjectCard({ project }) {
  const hasImage = Boolean(project.image);
  const hasUrl = Boolean(project.url);

  return (
    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
      <TiltCard className="project-card" maxTilt={8}>
        {/* Animated Border Ring */}
        <div className="project-card-border"></div>
        
        <div className="project-card-thumb">
          {hasImage ? (
            <img src={project.image} alt={project.title} loading="lazy" />
          ) : (
            <div className="project-card-placeholder">
              <i className="bi bi-globe2"></i>
            </div>
          )}
          <span className="project-card-category">{project.category}</span>
        </div>

        <div className="project-card-body">
          <h4>{project.title}</h4>
          <p>{project.description}</p>

          {project.tags && project.tags.length > 0 && (
            <ul className="project-card-tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}

          {hasUrl ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              Visit Website <i className="bi bi-box-arrow-up-right"></i>
            </a>
          ) : (
            <span className="project-card-link project-card-link-disabled">
              Link coming soon
            </span>
          )}
        </div>
      </TiltCard>
    </div>
  );
}

export default function Portfolio() {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)));
    return ['All', ...unique];
  }, []);

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="portfolio section light-background">
      <GradientBlobs />

      <div className="container section-title" data-aos="fade-up">
        <span className="eyebrow">My Work</span>
        <h2>Portfolio</h2>
        <p>A selection of websites and applications I've designed and built</p>
      </div>

      <div className="container">
        {categories.length > 2 && (
          <ul className="portfolio-filters" data-aos="fade-up" data-aos-delay="100">
            {categories.map((category) => (
              <li
                key={category}
                className={activeCategory === category ? 'filter-active' : ''}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        )}

        <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}