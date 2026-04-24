import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

const projects = [
  {
    title: 'C-Shell',
    description:
      'Custom Linux shell in C with piping, redirection, background execution, and job control.',
    link: 'https://github.com/manjaripandey',
  },
  {
    title: 'Buy-Sell @ MU',
    description:
      'Campus buy/sell platform using React, Node, Express, and MongoDB with secure authentication.',
    link: 'https://github.com/manjaripandey',
  },
  {
    title: 'Python-based Chess Engine',
    description:
      'Negamax + alpha-beta chess engine with NumPy board logic and UCI protocol support.',
    link: 'https://github.com/manjaripandey/ChessEngine-.git',
  },
]

function HomePage() {
  return (
    <main className="page">
      <section className="hero-card">
        <img
          src="/profile.jpg"
          alt="Manjari Pandey"
          className="profile-photo"
          onError={(event) => {
            event.currentTarget.src = '/profile.svg'
          }}
        />
        <div>
          <h1>Manjari Pandey</h1>
          <p className="subtitle">B.Tech CSE Student | Aspiring Software Engineer</p>
        </div>
      </section>

      <section className="card">
        <h2>About Me</h2>
        <p>
          I am a Computer Science student who enjoys building practical software,
          solving algorithmic problems, and creating clean web applications.
        </p>
      </section>

      <section className="card">
        <h2>Research Interests</h2>
        <ul>
          <li>AI / ML</li>
          <li>Systems Programming</li>
          <li>Algorithms</li>
          <li>Web Development</li>
        </ul>
      </section>

      <section className="card">
        <h2>Personal Details</h2>
        <p><strong>Name:</strong> Manjari Pandey</p>
        <p><strong>Phone:</strong> +91 8349811123</p>
        <p><strong>Personal Email:</strong> manjari22pandey@gmail.com</p>
        <p><strong>College Email:</strong> se23ucse108@mahindrauniversity.edu.in</p>
        <p>
          <strong>Skills:</strong> C, C++, Python, Java, JavaScript, React,
          Node.js, Express, Flask, Tailwind CSS, DBMS, OS, DSA
        </p>
      </section>
    </main>
  )
}

function ProjectsPage() {
  return (
    <main className="page">
      <section className="card">
        <h1>Projects</h1>
        <p className="subtitle">Click each project to view its GitHub repository.</p>
      </section>

      <section className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </article>
        ))}
      </section>
    </main>
  )
}

function App() {
  return (
    <div className="app-shell">
      <header className="top-nav">
        <h2>Portfolio</h2>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
