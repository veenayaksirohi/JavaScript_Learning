const title = document.getElementById('title')
alert(title.textContent)

// and other

const firstH2 = document.querySelector("h2")
alert(firstH2.textContent)

const allH2 = document.querySelectorAll("h2")
allH2.forEach(element => alert(element.textContent));

const change = document.getElementById('title')
change.textContent = "DOM learning on Chai aur code => changed by js";
change.style.fontFamily = "Arial, sans-serif"
change.style.color="orange"

const inputs = document.getElementsByTagName('input')
for (const input of inputs) {
    input.style.backgroundColor = "orange";
}

