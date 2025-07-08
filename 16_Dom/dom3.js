/**
 * Create a styled div with a span and append to the document body
 */
const div = document.createElement('div')
console.log('div:', div)
div.className = 'main'
div.id = Math.random()
div.setAttribute('title', 'generate title')
div.style.backgroundColor = 'orange'
div.style.padding = '12px'
div.innerText = 'Chai aur code'

// Create a text node (not appended)
const addText = document.createTextNode('Chai aur code')
console.log('addText:', addText)

// Create a span, style it, and append to div
const span = document.createElement('span')
span.innerText = 'Chai aur code'
span.style.color = 'black'
div.appendChild(span)
console.log('span:', span)

// Append the div to the document body
// This will display the div and its child span on the page
// The div will have orange background and padding
// The span will have black text
// The div's id is a random number
// The div's title is 'generate title'
document.body.appendChild(div)
console.log('==================================================================')