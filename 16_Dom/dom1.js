// Get the element with id 'title' and alert its text content
const title = document.getElementById('title')
alert('title.textContent:', title.textContent)

// Get the first <h2> element and alert its text content
const firstH2 = document.querySelector('h2')
alert('firstH2.textContent:', firstH2.textContent)

// Get all <h2> elements and alert their text content
const allH2 = document.querySelectorAll('h2')
allH2.forEach(element => alert('element.textContent:', element.textContent))

// Change the text and style of the element with id 'title'
const change = document.getElementById('title')
change.textContent = 'DOM learning on Chai aur code => changed by js'
change.style.fontFamily = 'Arial, sans-serif'
change.style.color = 'orange'

// Set background color for all <input> elements
const inputs = document.getElementsByTagName('input')
for (const input of inputs) {
  input.style.backgroundColor = 'orange'
  console.log('input:', input)
}
console.log('==================================================================')

