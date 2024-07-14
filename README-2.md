<!-- Include custom CSS to adjust the margins of a specific image -->
<style>
.custom-image {
  margin: 0; /* Remove default margins */
  width: 100%; /* Make the image take the full width */
  padding-top: -20px; /* Adjust the top padding to move the image higher */
}
</style>

<div style="text-align: center;">
  <h1>David's Developer Journey</h1>
</div>

<img src="Cdaprod.png" class="custom-image" alt="Description of the image">

<!-- Include custom CSS to align elements horizontally -->
<style>
.flex-container {
  display: flex;
  justify-content: center; /* Center the items horizontally */
  flex-wrap: wrap; /* Wrap the items to the next line if needed */
  gap: 10px; /* Add some space between the items */
}
.flex-container img {
  max-width: 100%; /* Ensure images do not exceed their container width */
}
</style>

<div class="flex-container">
  <a href="https://twitter.com/cdasmktcda">
    <img src="https://img.shields.io/twitter/follow/cdasmktcda?style=social" alt="Twitter Follow">
  </a>
  <a href="https://www.linkedin.com/in/cdasmkt/">
    <img src="https://img.shields.io/badge/LinkedIn-cdasmkt-blue?style=flat&logo=linkedin" alt="LinkedIn">
  </a>
</div>

<div class="flex-container">
  <img src="https://github-readme-stats.vercel.app/api?username=Cdaprod&show_icons=true&theme=radical" alt="Your GitHub Stats">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=Cdaprod&theme=dark" alt="GitHub Streak">
</div>

<div class="flex-container">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Cdaprod&layout=compact&theme=vision-friendly-dark" alt="Top Langs">
</div>

---

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
  text-align: center;
}
.section-header {
  font-size: 2em;
  color: #000;
  margin-bottom: 20px;
  padding: 10px;
  border-bottom: 2px solid #000;
  display: inline-block;
  text-align: center;
  text-decoration: none;
}
.preview-card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.preview-card {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  z-index: 1;
  width: 80%;
}
.preview-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
}
.preview-image {
  width: 100px;
  height: 100px;
  margin-right: 15px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}
.preview-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.text-container {
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  padding: 10px;
  border-radius: 8px;
  z-index: 2;
  text-align: left; /* Left-aligned text */
}
.preview-card h3, .preview-card p {
  margin: 0;
}
.preview-card h3 {
  font-size: 1.5em;
  color: #007acc;
}
.preview-card p {
  margin: 10px 0 0;
  font-size: 1.1em;
}
.preview-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  opacity: 0.2;
  z-index: 0;
}
#card1::before {
  background-image: url('https://github.com/Cdaprod/cda.cdactl/raw/main/public/photo.webp');
}
#card2::before {
  background-image: url('https://github.com/Cdaprod/cda.cfg/raw/main/public/photo.webp');
}
#card3::before {
  background-image: url('https://github.com/Cdaprod/hydrate/raw/main/public/photo.webp');
}

/* Add animations for loading */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.fade-in {
  animation-name: fadeIn;
}
.slide-in {
  animation-name: slideIn;
}
</style>

<div class="section-header animated fade-in">My Custom Tools</div>

<div class="preview-card-container animated slide-in">
  <div id="card1" class="preview-card">
    <div class="preview-image">
      <a href="https://github.com/Cdaprod/cda.cdactl">
        <img src="https://github.com/Cdaprod/cda.cdactl/raw/main/public/photo.webp" alt="cdaprod/cda.cdactl">
      </a>
    </div>
    <div class="text-container">
      <h3><a href="https://github.com/Cdaprod/cda.cdactl">cdaprod/cda.cdactl</a></h3>
      <p>A versatile CLI tool for streamlined device management. Features include network management, SSH access, system updates, backups, resource monitoring, dotfile management, and secure credential storage.</p>
    </div>
  </div>

  <div id="card2" class="preview-card">
    <div class="preview-image">
      <a href="https://github.com/Cdaprod/cda.cfg">
        <img src="https://github.com/Cdaprod/cda.cfg/raw/main/public/photo.webp" alt="cdaprod/cda.cfg">
      </a>
    </div>
    <div class="text-container">
      <h3><a href="https://github.com/Cdaprod/cda.cfg">cdaprod/cda.cfg</a></h3>
      <p>Easily manage and synchronize your dotfiles across multiple devices using a bare Git repository setup. Ensure consistent development environments with seamless version control and deployment.</p>
    </div>
  </div>

  <div id="card3" class="preview-card">
    <div class="preview-image">
      <a href="https://github.com/Cdaprod/hydrate">
        <img src="https://github.com/Cdaprod/hydrate/raw/main/public/photo.webp" alt="cdaprod/hydrate">
      </a>
    </div>
    <div class="text-container">
      <h3><a href="https://github.com/Cdaprod/hydrate">cdaprod/hydrate</a></h3>
      <p>Hydrate-Minio-Weaviate is a powerful Python package designed to automate the extraction, transformation, and loading of data from web resources directly into MinIO and Weaviate. This tool simplifies the process of hydrating your data lake and knowledge graph with fresh data, enhancing your AI and machine learning workflows with minimal effort.</p>
    </div>
  </div>
</div>

---

<!-- Include custom CSS to adjust the image size if necessary -->
<style>
.link-image {
  width: 200px; /* Adjust the width as needed */
}
</style>

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
.card {
  text-align: center;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  opacity: 0.5;
  filter: grayscale(100%) brightness(50%);
  z-index: 0;
}
.card .text-container {
  position: relative;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px 15px;
  border-radius: 5px;
  display: inline-block;
}
.card .text-container h3 {
  margin: 0;
  font-size: 1.5em;
  color: #007acc;
}
.card .text-container p {
  margin: 10px 0 0;
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
/* Background images for each card */
#minio-publications {
  background-image: url('./public/photo.webp');
}
#resumes-repo {
  background-image: url('./public/photo.webp');
}
</style>

<div class="card animated fade-in" id="minio-publications">
  <div class="text-container">
    <h3>MinIO Publications List</h3>
    <p>Explore my in-depth articles on MinIO, covering various aspects of cloud storage and DevOps.</p>
    <a href="https://github.com/Cdaprod/david-cannan-minio-blogs">View Publications</a>
  </div>
</div>

<div class="card animated fade-in" id="resumes-repo">
  <div class="text-container">
    <h3>My Resumes Repo</h3>
    <p>Access my professional resumes, showcasing my experience and skills in DevOps and cloud technologies.</p>
    <a href="https://github.com/Cdaprod/cda.resumes">View Resumes</a>
  </div>
</div>

[My MinIO Publications List](https://github.com/Cdaprod/david-cannan-minio-blogs)

[My Resumes Repo](https://github.com/Cdaprod/cda.resumes)

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
  text-align: left;
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
.section-content ul {
  list-style-type: none;
  padding: 0;
}
.section-content li {
  background: #007acc;
  color: white;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
}
.section-content li span {
  margin-left: 10px;
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
</style>

<div class="section-header animated fade-in">About Me</div>
<div class="section-content animated fade-in">
  <p>As a MinIO DevOps and an aspiring tech innovator, I'm deeply engaged in building personal AI solutions using the OpenAI API, Python LangChain Framework, and Mistral LLM via LM Studios. My journey into the tech world is self-taught, rooted in a passion for hacking, software engineering, DevOps, programming, cloud technologies, containerization, Infrastructure as Code (IaC), Software as a Service (SaaS), cybersecurity, and bug bounty hunting. Overcoming addiction, I've reshaped my life to focus on being a dedicated single father to my triplet boys, embodying resilience and determination.</p>
  <p>Currently, I'm honing my skills as a DevOps Intern at MinIO, where I'm writing <a href="https://blog.min.io/author/david-cannan">articles</a> and gaining invaluable hands-on experience with cutting-edge cloud storage technologies. My ambition is to establish a strong personal brand as a self-made success in the tech field. I'm particularly interested in projects that offer financial potential, including software development for web apps, digital downloads, custom bots, and data lake applications with machine learning capabilities.</p>
</div>

<div class="section-header animated fade-in">My Approach and Methodology</div>
<div class="section-content animated fade-in">
  <p>My approach to projects is to seek streamlined, structured development guidance for app modules, aiming for efficiency and effectiveness in my work. My social media presence, including this GitHub, <a href="https://x.com/cdasmktcda">Twitter</a>, <a href="https://linkedin.com/in/cdasmkt">LinkedIn</a>, and my <a href="https://Sanity.Cdaprod.dev">blog</a>, reflects my journey and interests. Living in Douglasville, Georgia, USA, I'm an advocate for sharing my experiences and insights with the tech community, using hashtags like #devopsdad, #codenewbie, #tripletdad, and #hacktheplanet to connect with like-minded individuals.</p>
  <p>My methodology emphasizes being <em>extra</em> and overly technical, breaking down tasks into subtasks, prioritizing them, and executing them in sequences. This structured approach helps me tackle complex problems systematically. In coding requests, I prefer detailed, logical responses with necessary imports and logic, and I'm open to using tools like Mermaid.js for class diagrams.</p>
</div>

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
.section-content ul {
  list-style-type: none;
  padding: 0;
}
.section-content li {
  background-size: cover;
  background-position: center;
  color: black;
  margin: 20px auto;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  position: relative;
  overflow: hidden;
  max-width: 90%;
}
.section-content li::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  opacity: 0.2; /* Adjusted opacity */
  z-index: 0;
  filter: grayscale(100%) brightness(50%); /* Apply grayscale and reduce brightness */
}
.section-content li .text-container {
  z-index: 1;
  color: #000;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px 15px;
  border-radius: 5px;
  text-align: center;
}
.section-content li .text-container strong {
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
/* Specific background images for each list item */
#ci-cd {
  background-image: url('./public/photo.webp');
}
#containerization {
  background-image: url('./public/photo-2.webp');
}
#apis {
  background-image: url('./public/photo-3.webp');
}
#languages {
  background-image: url('./public/photo-4.webp');
}
#devops-tools {
  background-image: url('./public/photo-5.webp');
}
#cloud-platforms {
  background-image: url('./public/photo-6.webp');
}
#cyber-security {
  background-image: url('./public/photo-7.webp');
}
</style>

<div class="section-header animated fade-in">Tech Stack and Tools</div>
<div class="section-content animated fade-in">
  <ul>
    <li id="ci-cd">
      <div class="text-container">
        <strong>CI/CD</strong>
        <span>GitHub Actions (Cdaprod/), Data Processing, Extract-Transform-Load, VPN Pipelines</span>
      </div>
    </li>
    <li id="containerization">
      <div class="text-container">
        <strong>Containerization</strong>
        <span>Docker Registry (hub.docker Cdaprod/), Container Registry (Ghcr.io Cdaprod/)</span>
      </div>
    </li>
    <li id="apis">
      <div class="text-container">
        <strong>APIs</strong>
        <span>Fast API, Flask, LangChain API (LCEL) for LLMs, tools, and classes for API and data integration, Golang</span>
      </div>
    </li>
    <li id="languages">
      <div class="text-container">
        <strong>Languages</strong>
        <span>Mastery in Python, JavaScript, Go, Bash, Markup</span>
      </div>
    </li>
    <li id="devops-tools">
      <div class="text-container">
        <strong>DevOps Tools</strong>
        <span>GitHub Actions, Docker, Kubernetes, Terraform, Ansible</span>
      </div>
    </li>
    <li id="cloud-platforms">
      <div class="text-container">
        <strong>Cloud Platforms</strong>
        <span>Tailscale, AWS, GCP, Azure, GitHub</span>
      </div>
    </li>
    <li id="cyber-security">
      <div class="text-container">
        <strong>Cyber Security</strong>
        <span>Bug bounty hunting, digital environment security, web app security, access controls</span>
      </div>
    </li>
  </ul>
  <p>With a goal to generate passive income, I'm keen on outlining key development steps for quick project setup and execution, always looking for ways to leverage my skills for financial and professional growth.</p>
</div>