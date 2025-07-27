const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const bookList = document.getElementById('book-list');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
  //work on CRUD operation of DOM
  e.preventDefault();
  if (title.value!=""&& author.value!="" && year.value!="") {
  bookList.innerHTML += `<section>
            <div>${title.value}</div>
            <div>${author.value}</div>
            <div>${year.value}</div>
          </section>`
  title.value = '';
  author.value = '';
  year.value = '';
  }
  else{
  alert('Please fill all fields');}
});


