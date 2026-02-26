const grid = document.querySelector('#projects-grid')

projects.forEach(project => {
  grid.innerHTML += `
    <a href="${project.link}" class="project-card">
        <img src="${project.image}" alt="${project.title}">
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </div>
    </a>
  `
})