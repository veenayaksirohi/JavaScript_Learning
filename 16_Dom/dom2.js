const parent = document.getElementsByClassName('parent')
console.log(parent[0])
console.log(parent[0].children)
console.log(parent[0].children[1])

for (let i = 0; i < parent[0].children.length; i++) {
    const element = parent[0].children[i];
    console.log(element.textContent)
    
}

parent[0].children[1].style.color="red"
console.log('==============================')
console.log(parent[0].lastElementChild.textContent);
console.log(parent[0].firstElementChild.textContent);
console.log('==============================')
const dayOne = document.querySelector('.day')
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);

