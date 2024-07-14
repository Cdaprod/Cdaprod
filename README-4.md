<!-- Embed CSS to style the markdown -->
<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
  text-align: center;
}
.section-header {
  font-size: 2em;
  color: #007acc;
  margin-bottom: 20px;
  padding: 10px;
  border-bottom: 2px solid #007acc;
  display: inline-block;
  text-align: center;
  text-decoration: none;
}
.section-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.section-content p {
  margin: 15px 0;
}
.card {
  background-size: cover;
  background-position: center;
  color: black;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  max-width: 90%;
}
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  opacity: 0.3;
  z-index: 0;
  filter: blur(5px);
}
.card .text-container {
  z-index: 1;
  color: #000;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px 15px;
  border-radius: 5px;
  text-align: center;
}
.card .text-container strong {
  display: block;
  font-size: 1.2em;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.fade-in {
  animation-name: fadeIn;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
/* Specific background images for each card */
#cdactl-card {
  background-image: url('./public/photo.webp');
}
#cfg-card {
  background-image: url('./public/photo-2.webp');
}
#hydrate-card {
  background-image: url('./public/photo-3.webp');
}
#minio-publications-card {
  background-image: url('./public/photo-4.webp');
}
#resumes-card {
  background-image: url('./public/photo-5.webp');
}
</style>

<div class="section-header animated fade-in">My Custom Tools</div>
<div class="section-content animated fade-in">
  <div id="cdactl-card" class="card">
    <div class="text-container">
      <h3><a href="https://github.com/Cdaprod/cda.cdactl">cdaprod/cda.cdactl</a></h3>
      <p>A versatile CLI tool for streamlined device management. Features include network management, SSH access, system updates, backups, resource monitoring, dotfile management, and secure credential storage.</p>
    </div>
  </div>
  <div id="cfg-card" class="card">
    <div class="text-container">
      <h3><a href="https://github.com/Cdaprod/cda.cfg">cdaprod/cda.cfg</a></h3>
      <p>Easily manage and synchronize your dotfiles across multiple devices using a bare Git repository setup. Ensure consistent development environments with seamless version control and deployment.</p>
    </div>
  </div>
  <div id="hydrate-card" class="card">
    <div class="text-container">
      <h3><a href="https://github.com/Cdaprod/hydrate">cdaprod/hydrate</a></h3>
      <p>Hydrate-Minio-Weaviate is a powerful Python package designed to automate the extraction, transformation, and loading of data from web resources directly into MinIO and Weaviate. This tool simplifies the process of hydrating your data lake and knowledge graph with fresh data, enhancing your AI and machine learning workflows with minimal effort.</p>
    </div>
  </div>
  <div id="minio-publications-card" class="card">
    <div class="text-container">
      <h3><a href="https://github.com/Cdaprod/david-cannan-minio-blogs">MinIO Publications List</a></h3>
      <p>Explore my in-depth articles on MinIO, covering various aspects of cloud storage and DevOps. <a href="https://github.com/Cdaprod/david-cannan-minio-blogs">View Publications</a></p>
    </div>
  </div>
  <div id="resumes-card" class="card">
    <div class="text-container">
      <h3><a href="https://github.com/Cdaprod/cda.resumes">My Resumes Repo</a></h3>
      <p>Access my professional resumes, showcasing my experience and skills in DevOps and cloud technologies. <a href="https://github.com/Cdaprod/cda.resumes">View Resumes</a></p>
    </div>
  </div>
</div>

<div class="section-header animated fade-in">About Me</div>
<div class="section-content animated fade-in">
  <p>As a MinIO DevOps and an aspiring tech innovator, I'm deeply engaged in building personal AI solutions using the OpenAI API, Python LangChain Framework, and Mistral LLM via LM Studios. My journey into the tech world is self-taught, rooted in a passion for hacking, software engineering, DevOps, programming, cloud technologies, containerization, Infrastructure as Code (IaC), Software as a Service (SaaS), cybersecurity, and bug bounty hunting. Overcoming addiction, I've reshaped my life to focus on being a dedicated single father to my triplet boys, embodying resilience and determination.</p>
  <p>Currently, I'm honing my skills as a DevOps Intern at MinIO, where I'm writing <a href="https://blog.min.io/author/david-cannan">articles</a> and gaining invaluable hands-on experience with cutting-edge cloud storage technologies. My ambition is to establish a strong personal brand as a self-made success in the tech field. I'm particularly interested in projects that offer financial potential, including software development for web apps, digital downloads, custom bots, and data lake applications with machine learning capabilities.</p>
</div>

<div class="section-header animated fade-in">My Approach and Methodology</div>
<div class="section-content animated fade-in">
  <p>My approach to projects is to seek streamlined, structured development guidance for app modules, aiming for efficiency and effectiveness in my work. My social media presence, including this GitHub, <a href="https://twitter.com/cdasmktcda">Twitter</a>, <a href="https://www.linkedin.com/in/cdasmkt/">LinkedIn</a>, and my <a href="https://Sanity.Cdaprod.dev">blog</a>, reflects my journey and interests. Living in Douglasville, Georgia, USA, I'm an advocate for sharing my experiences and insights with the tech community, using hashtags like #devopsdad, #codenewbie, #tripletdad, and #hacktheplanet to connect with like-minded individuals.</p>
  <p>My methodology emphasizes being extra and overly technical, breaking down tasks into subtasks, prioritizing them, and executing them in sequences. This structured approach helps me tackle complex problems systematically. In coding requests, I prefer detailed, logical responses with necessary imports and logic, and I'm open to using tools like Mermaid.js for class diagrams.</p>
</div>

<div class="section-header animated fade-in">Tech Stack and Tools</div>
<div class="section-content animated fade-in">
  <ul>
    <li id="ci-cd" class="card">
      <div class="text-container">
        <strong>CI/CD</strong>
        <span>GitHub Actions (Cdaprod/)</span>
      </div>
    </li>
    <li id="containerization" class="card">
      <div class="text-container">
        <strong>Containerization</strong>
        <span>Docker Registry (hub.docker Cdaprod/), Container Registry (Ghcr.io Cdaprod/)</span>
      </div>
    </li>
    <li id="apis" class="card">
      <div class="text-container">
        <strong>APIs</strong>
        <span>LangChain API (LCEL) for LLMs, tools, and classes for API and data integration</span>
      </div>
    </li>
    <li id="languages" class="card">
      <div class="text-container">
        <strong>Languages</strong>
        <span>Mastery in Python, JavaScript, Go, and Bash</span>
      </div>
    </li>
    <li id="devops-tools" class="card">
      <div class="text-container">
        <strong>DevOps Tools</strong>
        <span>GitHub Actions, Docker, Kubernetes, Terraform</span>
      </div>
    </li>
    <li id="cloud-platforms" class="card">
      <div class="text-container">
        <strong>Cloud Platforms</strong>
        <span>AWS, GCP, Azure</span>
      </div>
    </li>
    <li id="cyber-security" class="card">
      <div class="text-container">
        <strong>Cyber Security</strong>
        <span>Bug bounty hunting, digital environment security</span>
      </div>
    </li>
  </ul>
  <p>With a goal to generate passive income, I'm keen on outlining key development steps for quick project setup and execution, always looking for ways to leverage my skills for financial and professional growth.</p>
</div>