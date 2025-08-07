export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Badri Nagarjun</h1>
        <p className="subtitle">[Your Tagline or Role Here]</p>
      </section>

      <section className="about">
        <h2>About Me</h2>
        <p>
          [A brief introduction about yourself. Your background, skills, and passions.]
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>[Project Title 1]</h3>
            <p>[Short project description. Tech stack, features, etc.]</p>
          </div>
          <div className="project-card">
            <h3>[Project Title 2]</h3>
            <p>[Short project description. Tech stack, features, etc.]</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <ul>
          <li>
            Email: <a href="mailto:your@email.com">your@email.com</a>
          </li>
          <li>
            GitHub: <a href="https://github.com/badrinagarjun" target="_blank">badrinagarjun</a>
          </li>
          <li>
            LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank">[Your LinkedIn]</a>
          </li>
        </ul>
      </section>
    </main>
  );
}