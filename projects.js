/*
        title: ,
        description: ,
        image: ,
        page: ,
        link: 
*/

var projects = [
    {
        title: "Masquerade Murderer",
        description: "My first ever Game Jam made using Godot.",
        image: "/img/masquerade_murderer_gamejam_thumbnail.png",
        page: "projects/masquerade_murderer",
        link: "https://globalgamejam.org/games/2026/masquerade-murderer-9"

    },
    {
        title: "Placeholder",
        description: "Placeholder",
        image: "/img/masquerade_murderer_gamejam_thumbnail.png",
        page: "projects/masquerade_murderer",
        link: "https://globalgamejam.org/games/2026/masquerade-murderer-9"
    },
    {
        title: "Placeholder",
        description: "Placeholder",
        image: "/img/masquerade_murderer_gamejam_thumbnail.png",
        page: "projects/masquerade_murderer",
        link: "https://globalgamejam.org/games/2026/masquerade-murderer-9"
    }
]

const path = window.location.pathname
const project = projects.find(p => path.includes(p.page))

document.querySelector('#project-content').innerHTML =`
    <a href="/">< Back</a>
    <h1>${project.title}</h1>
    <img src="${project.image}" alt="${project.title}">
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">View project</a>
`
document.title = project.title
