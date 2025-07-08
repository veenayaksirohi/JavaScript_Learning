/**
 * Adds a language to the list using innerHTML (renders HTML if present in langName)
 * @param {string} langName - The language name to add
 */
function addlang(langName) {
  const newlang = document.createElement('li')
  newlang.innerHTML = langName
  document.querySelector('.language').appendChild(newlang)
  console.log('addlang - newlang:', newlang)
  console.log('==================================================================')
}

addlang('python')
addlang('typescript')
addlang('java')

/**
 * Adds a language to the list using createTextNode (always plain text)
 * @param {string} langName - The language name to add
 */
function addOptilang(langName) {
  const newlang = document.createElement('li')
  newlang.appendChild(document.createTextNode(langName))
  document.querySelector('.language').appendChild(newlang)
  console.log('addOptilang - newlang:', newlang)
  console.log('==================================================================')
}

addOptilang('ruby')
addOptilang('golang')

/**
 * Edits the language at a given position in the list
 * @param {string} langName - The new language name
 * @param {number} position - The 1-based position in the list
 */
function editlang(langName, position) {
  const lang = document.querySelector(`li:nth-child(${position})`)
  lang.innerHTML = langName
  console.log(`editlang - lang at position ${position}:`, lang)
  console.log('==================================================================')
}

editlang('c++', 3)

/**
 * Replaces the <li> at the given position with a new <li> containing the specified text.
 * @param {string} newText - The text content for the new <li>.
 * @param {number} position - The 1-based index of the <li> to replace.
 * @param {string} [ulSelector='.language'] - (Optional) Selector for the parent <ul> or <ol>.
 */
function replaceListItem(newText, position) {
    const oldLi = document.querySelector(`li:nth-child(${position})`)
    const newLi = document.createElement('li')
    newLi.textContent = newText
    oldLi.replaceWith(newLi)
    console.log(`replaceListItem - replaced <li> at position ${position} with:`, newLi)
    console.log('==================================================================')
  }
  replaceListItem('Mojo', 2) // Replaces the 2nd <li> in the list with text 'Mojo'

/**
 * Removes the language at a given position in the list
 * @param {number} position - The 1-based position in the list
 */
function remove(position) {
  const lang = document.querySelector(`li:nth-child(${position})`)
  lang.remove()
  console.log(`remove - removed lang at position ${position}`)
  console.log('==================================================================')
}

remove(1)

