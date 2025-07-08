// Get all elements with class 'parent'
const parent = document.getElementsByClassName('parent')
console.log('parent[0]:', parent[0])
console.log('parent[0].children:', parent[0].children)
console.log('parent[0].children[1]:', parent[0].children[1])

// Log text content of each child of parent[0]
for (let i = 0; i < parent[0].children.length; i++) {
  const element = parent[0].children[i]
  console.log(`parent[0].children[${i}].textContent:`, element.textContent)
}

// Change color of the second child
parent[0].children[1].style.color = 'red'
console.log('==============================')
console.log('parent[0].lastElementChild.textContent:', parent[0].lastElementChild.textContent)
console.log('parent[0].firstElementChild.textContent:', parent[0].firstElementChild.textContent)
console.log('==============================')

// Get the first element with class 'day' and log its parent and next sibling
const dayOne = document.querySelector('.day')
console.log('dayOne:', dayOne)
console.log('dayOne.parentElement:', dayOne.parentElement)
console.log('dayOne.nextElementSibling:', dayOne.nextElementSibling)
console.log('==================================================================')

