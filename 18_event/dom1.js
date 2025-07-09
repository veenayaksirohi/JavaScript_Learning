// Get the owl image and show an alert when clicked
const owl = document.getElementById('owl')
owl.onclick = function () {
  alert('owl image')
}

// Get the japan image and change its src and show an alert when clicked
const japan = document.getElementById('japan')
japan.addEventListener('click', function () {
  this.src = 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFwYW58ZW58MHx8MHx8fDA%3D'
  alert('Japan image clicked!\n image changed')
})

// Get the photoshop image and show an alert when hovered
const photoshop = document.getElementById('photoshop')
const onPhotoshopHover = () => {
  alert('Hovered over photoshop image.')
}
photoshop.addEventListener('mouseover', onPhotoshopHover)

// Log the current timestamp when the body is clicked
const body = document.body
body.addEventListener('click', () => {
  console.log('body click timestamp:', Date.now())
}, false)

// Log when the <ul id="images"> is clicked (event delegation)
document.getElementById('images').addEventListener('click', function (e) {
  console.log('clicked inside the ul-')
}, false)

// Log when the owl image is clicked and stop event propagation
document.getElementById('owl').addEventListener('click', function (e) {
  console.log('owl clicked-')
  e.stopPropagation()
}, false)

// Prevent default navigation and log when the Google link is clicked
const google = document.getElementById('google')
google.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('clicked Google')
})

// Remove the <li> containing the prayer image when it is clicked
const prayer = document.getElementById('prayer')
prayer.addEventListener('click', (e) => {
  console.log('prayer image event:', e)
  const li = e.target.closest('li')
  if (li) li.remove()
})

// Remove any <li> in the #images list when it is clicked (event delegation)
const imagesList = document.getElementById('images')
imagesList.addEventListener('click', function (e) {
  const li = e.target.closest('li')
  if (li && this.contains(li)) {
    li.remove()
  }
})
