import { useEffect, useRef, useState } from 'react';
import TiltCard from '../components/TiltCard.jsx';
import GradientBlobs from '../components/GradientBlobs.jsx';

// ============================================
// COUNTER COMPONENT (Stats)
// ============================================
function Counter({ end, icon, label, sublabel }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          const duration = 1000;
          const startTime = performance.now();

          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div className="col-lg-3 col-md-6" ref={ref}>
      <TiltCard className="stats-item" maxTilt={12}>
        <i className={icon}></i>
        <span className="purecounter">{count}</span>
        <p>
          <strong>{label}</strong> <span>{sublabel}</span>
        </p>
      </TiltCard>
    </div>
  );
}

// ============================================
// SKILL BAR COMPONENT (Hard Skills)
// ============================================
function SkillBar({ name, value }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(value);
        }
      },
      { threshold: 0.3 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="progress" ref={ref}>
      <span className="skill">
        <span>{name}</span> <i className="val">{value}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${width}%`, transition: 'width 1s ease-in-out' }}
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}

// ============================================
// SOFT SKILL CARD COMPONENT
// ============================================
function SoftSkillCard({ icon, title, description, delay }) {
  return (
    <div 
      className="col-lg-3 col-md-6"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="soft-skill-card">
        <div className="soft-skill-icon">{icon}</div>
        <h4 className="soft-skill-title">{title}</h4>
        <p className="soft-skill-description">{description}</p>
        <div className="soft-skill-glow"></div>
      </div>
    </div>
  );
}

// ============================================
// MAIN ABOUT COMPONENT
// ============================================
export default function About() {
  const softSkills = [
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Cross-functional teamwork with designers, product managers, and stakeholders',
      delay: 0.05
    },
    {
      icon: '💬',
      title: 'Communication',
      description: 'Clear technical documentation, presentations, and client-facing conversations',
      delay: 0.12
    },
    {
      icon: '🧠',
      title: 'Problem Solving',
      description: 'Analytical thinking to break down complex challenges into actionable solutions',
      delay: 0.19
    },
    {
      icon: '🚀',
      title: 'Adaptability',
      description: 'Fast learner who thrives in agile environments and embraces new technologies',
      delay: 0.26
    },
    {
      icon: '⏱️',
      title: 'Time Management',
      description: 'Prioritization and delivery of high-quality work within tight deadlines',
      delay: 0.33
    },
    {
      icon: '🎨',
      title: 'Design Thinking',
      description: 'User-first mindset bridging the gap between design and development',
      delay: 0.40
    },
    {
      icon: '📈',
      title: 'Leadership',
      description: 'Mentoring junior developers and driving technical decisions',
      delay: 0.47
    },
    {
      icon: '🔍',
      title: 'Attention to Detail',
      description: 'Pixel-perfect implementations with obsessive quality control',
      delay: 0.54
    }
  ];

  return (
    <>
      {/* ==========================================
          ABOUT SECTION
          ========================================== */}
      <section id="about" className="about section">
        <div className="container section-title">
          <span className="eyebrow">Get To Know Me</span>
          <h2>About</h2>
          <p>
            I am CS student with experience in frontend web development and project
            implementation. Developed e-commerce and booking system applications with
            an emphasis on responsive design and user experience. Continuously improving
            programming and networking skills through academic studies and personal
            projects. Passionate about learning new technologies, solving real-world
            problems, and contributing to innovative development teams.
          </p>
        </div>

        <div className="container">
          <div className="row gy-4 justify-content-center align-items-center">
            {/* Profile Image - Left Column with Enhanced Styling */}
            <div className="col-lg-4">
              <div className="profile-image-wrapper">
                <div className="profile-image-glow"></div>
                <img 
                  src="/assets/img/my-profile-img.jpg" 
                  className="img-fluid profile-about-image" 
                  alt="Profile" 
                />
                <div className="profile-image-border"></div>
              </div>
            </div>

            {/* Content - Right Column */}
            <div className="col-lg-8 content">
              <h2>UI/UX Designer &amp; Web Developer.</h2>
              <p className="fst-italic py-3">
                I specialize in designing and developing modern, responsive, and scalable web applications.
                I focus on clean code, intuitive user interfaces, secure backend systems, and optimized performance to deliver reliable digital solutions.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>28 September 2007</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+855 979325903</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Phnom Penh, Cambodia</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>19</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>chheangsamnang.wu@gmail.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
              <p className="py-3">
                Designed and developed a full-stack web application with responsive UI/UX, secure authentication, database management, RESTful APIs, payment integration,
                inventory management, and an admin dashboard for efficient business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          STATS SECTION
          ========================================== */}
      <section id="stats" className="stats section">
        <div className="container">
          <div className="row gy-4">
            {/* <Counter 
              end={12} 
              icon="bi bi-emoji-smile" 
              label="Happy Clients" 
              sublabel="worked with directly" 
            /> */}
            <Counter 
              end={15} 
              icon="bi bi-journal-richtext" 
              label="Projects" 
              sublabel="completed & deployed" 
            />
            <Counter 
              end={10} 
              icon="bi bi-headset" 
              label="Hours Of Support" 
              sublabel="debugging & maintenance" 
            />
            <Counter 
              end={1} 
              icon="bi bi-people" 
              label="Years Experience" 
              sublabel="hands-on development" 
            />
          </div>
        </div>
      </section>

      {/* ==========================================
          SKILLS SECTION (Hard + Soft)
          ========================================== */}
      <section id="skills" className="skills section light-background">
        <GradientBlobs />
        
        <div className="container section-title">
          <span className="eyebrow">What I Work With</span>
          <h2>Skills</h2>
          <p>Technologies and tools I use to design, build, and ship web applications</p>
        </div>

        {/* --- HARD SKILLS --- */}
        <div className="container">
          <div className="row skills-content">
            <div className="col-lg-6">
              <SkillBar name="Frontend" value={100} />
              <SkillBar name="Backend" value={90} />
              <SkillBar name="JavaScript" value={75} />
            </div>
            <div className="col-lg-6">
              <SkillBar name="Python Django" value={80} />
              <SkillBar name="Microsoft Office Access, PostgreSQL , MySQL, SQL Server , SQLite" value={90} />
              <SkillBar name="React" value={55} />
            </div>
          </div>
        </div>

        {/* --- SOFT SKILLS DIVIDER --- */}
        <div className="container soft-skills-wrapper">
          <div className="row soft-skills-header">
            <div className="col-12">
              <div className="soft-skills-divider">
                <span className="divider-line"></span>
                <span className="divider-icon">✩</span>
                <span className="divider-line"></span>
              </div>
              <h3 className="soft-skills-title">Soft Skills</h3>
              <p className="soft-skills-subtitle">
                The human skills that power great collaboration and delivery
              </p>
            </div>
          </div>

          {/* --- SOFT SKILLS GRID --- */}
          <div className="row soft-skills-grid">
            {softSkills.map((skill, index) => (
              <SoftSkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                delay={skill.delay}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}