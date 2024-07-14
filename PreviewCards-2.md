## My Custom Tools

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
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
.preview-card h3, .preview-card p {
  z-index: 1;
  margin: 0;
  /* Modify these properties to change text appearance */
  font-family: 'Helvetica Neue', sans-serif;
  color: #2c3e50;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}
.preview-card h3 {
  font-size: 1.6em;  /* Increase the font size */
  color: #007acc;    /* Change font color */
}
.preview-card p {
  margin: 10px 0 0;
  font-size: 1.2em;  /* Increase the font size */
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
</style>

<div id="card1" class="preview-card">
  <div class="preview-image">
    <a href="https://github.com/Cdaprod/cda.cdactl">
      <img src="https://github.com/Cdaprod/cda.cdactl/raw/main/public/photo.webp" alt="cdaprod/cda.cdactl">
    </a>
  </div>
  <div>
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
  <div>
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
  <div>
    <h3><a href="https://github.com/Cdaprod/hydrate">cdaprod/hydrate</a></h3>
    <p>Hydrate-Minio-Weaviate is a powerful Python package designed to automate the extraction, transformation, and loading of data from web resources directly into MinIO and Weaviate. This tool simplifies the process of hydrating your data lake and knowledge graph with fresh data, enhancing your AI and machine learning workflows with minimal effort.</p>
  </div>
</div>