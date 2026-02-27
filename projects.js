/*
        title: ,
        shortDescription: ,
        fullDescription: `
        <p>
        </p>
        `,
        image: ,
        page: ,
        link: 
*/

var projects = [
    {
        title: "Masquerade Murderer",
        shortDescription: "My first ever Game Jam made using Godot.",
        fullDescription: `
        <p>
        I participated in the Global Game Jam 2026 at Surrey 
        where developers from different disciplines came together to create a 
        game within a limited time (48 hrs). The theme for this year's jam was 
        "Masks", which engouraged teams to explore ideas about identity, 
        deception and hidden intentions.
        </p>
        <p>
        During the jam, my team created a 2D top-down action game called 
        Masquerade Murderer using the Godot engine. The core gameplay ocuses on 
        stealth and strategy. Players must move through the party and kill 
        without alerting the guards attention. Killing different masked npcs 
        gave you different powers (dash ability, further reach, speed increase etc) 

        This project was a fast-paced collaborative experience where we designed 
        mechanics, implemented gameplay systems, and build a playable game within a 
        short gam jam timeframe. It was a great opportunity to practice teamwork, 
        rapid prototyping, and rapid learning on the job (None of us had previous 
        experience in Godot).
        </p>
        `,
        image: "/img/masquerade_murderer_gamejam_thumbnail.png",
        page: "projects/masquerade_murderer",
        link: "https://globalgamejam.org/games/2026/masquerade-murderer-9"

    },
    {
        title: "Placeholder",
        shortDescription: "Placeholder",
        fullDescription: `
        <p>
        </p>
        `,
        image: "/img/masquerade_murderer_gamejam_thumbnail.png",
        page: "projects/masquerade_murderer",
        link: "https://globalgamejam.org/games/2026/masquerade-murderer-9"
    },
    {
        title: "Placeholder",
        shortDescription: "Placeholder",
        fullDescription: `
        <p>
        </p>
        `,
        image: "/img/masquerade_murderer_gamejam_thumbnail.png",
        page: "projects/masquerade_murderer",
        link: "https://globalgamejam.org/games/2026/masquerade-murderer-9"
    },
    {
        title: "Placeholder",
        shortDescription: "Placeholder",
        fullDescription: `
        <p>
        </p>
        `,
        image: "/img/masquerade_murderer_gamejam_thumbnail.png",
        page: "projects/masquerade_murderer",
        link: "https://globalgamejam.org/games/2026/masquerade-murderer-9"
    },
    {
        title: "Placeholder",
        shortDescription: "Placeholder",
        fullDescription: `
        <p>
        </p>
        `,
        image: "/img/masquerade_murderer_gamejam_thumbnail.png",
        page: "projects/masquerade_murderer",
        link: "https://globalgamejam.org/games/2026/masquerade-murderer-9"
    },
    {
        title: "Placeholder",
        shortDescription: "Placeholder",
        fullDescription: `
        <p>
        </p>
        `,
        image: "/img/masquerade_murderer_gamejam_thumbnail.png",
        page: "projects/masquerade_murderer",
        link: "https://globalgamejam.org/games/2026/masquerade-murderer-9"
    }
]

const path = window.location.pathname
const project = projects.find(p => path.includes(p.page))

if (document.querySelector('#project-content') && project) {
  document.querySelector('#project-content').innerHTML = `
    <a href="/" class="back">< Back</a>
    <h1>${project.title}</h1>
    <img src="${project.image}" alt="${project.title}">
    ${project.fullDescription}
    <a href="${project.link}" class="view" target="_blank">View project</a>
  `
  document.title = project.title
}