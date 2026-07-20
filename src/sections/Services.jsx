import GradientBlobs from '../components/GradientBlobs.jsx';

const services = [
  {
    icon: 'bi bi-code-slash',
    title: 'Web Development',
    description:
      'Building responsive, cross-browser websites and web apps with clean, maintainable code — from static pages to full-stack platforms.',
  },
  {
    icon: 'bi bi-palette',
    title: 'UI / UX Design',
    description:
      'Designing intuitive, accessible interfaces with a focus on usability, visual hierarchy, and a smooth experience on every screen size.',
  },
  {
    icon: 'bi bi-hdd-network',
    title: 'API & Backend Integration',
    description:
      'Connecting frontends to RESTful APIs and backend services, handling authentication, data flow, and error states cleanly.',
  },
  {
    icon: 'bi bi-database',
    title: 'Database Management',
    description:
      'Designing and managing relational databases — schema design, queries, and data integrity for reliable, scalable applications.',
  },
];

export default function Services() {
  return (
    <section id="services" className="services section">
      <GradientBlobs />

      <div className="container section-title" data-aos="fade-up">
        <span className="eyebrow">What I Do</span>
        <h2>Services</h2>
        <p>A few of the ways I can help bring your project to life</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service) => (
            <div className="col-lg-6" key={service.title} data-aos="fade-up" data-aos-delay="100">
              <div className="service-item d-flex position-relative">
                <div className="icon flex-shrink-0">
                  <i className={service.icon}></i>
                </div>
                <div>
                  <h4 className="title">{service.title}</h4>
                  <p className="description">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
