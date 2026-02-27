const grid = document.querySelector('#projects-grid')
projects.forEach(project => {
  grid.innerHTML += `
    <a href="${project.page}" class="project-card">
        <img src="${project.image}" alt="${project.title}">
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.shortDescription}</p>
        </div>
    </a>
  `
})

emailjs.init('ETXvpDdmqa-i3Q_yE')

function sendMessage() {
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value
  const title = document.getElementById('title').value
  const status = document.getElementById('form-status')

  if (name.trim() === '') {
    status.textContent = 'Please enter your name'
    return
  }

  if (email.trim() === '' || !email.includes('@') || !email.includes('.co')){
    status.textContent = 'Please enter a valid email'
    return
  }

  if (title.trim() === '') {
    status.textContent = 'Please enter a subject'
    return
  }

  if (message.trim() === '') {
    status.textContent = 'Please enter a message'
    return
  }

  emailjs.send('kaiser_belial', 'contact_template', {
    from_name: name,
    from_email: email,
    message: message,
    title: title
  })
  .then(() =>{
    status.textContent = 'Message sent!'
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('title').value = ''
    document.getElementById('message').value = ''
    document.getElementById('send-btn').disabled = true
    
  })
  .catch(() =>{
    status.textContent = 'Something went wrong'
  })
}