// with each character typed in search box, make an API call to randomuserme api and display a card below it. Use debounce concept to reduce api calls.

// Debounce function to limit API calls
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

const userInput = document.getElementById('user-input');
const userCard = document.getElementById('user-card');

function fetchAndDisplayUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            data = data['results'][0];
            userCard.textContent = "";

            const gender = data['gender'];
            const name = `${data['name']['title']} ${data['name']['first']} ${data['name']['last']}`;
            const location = `${data['location']['city']}, ${data['location']['country']}`;
            const email = data['email'];
            const coordinates = `${data['location']['coordinates']['latitude']}, ${data['location']['coordinates']['longitude']}`;
            const mapLink = `https://www.google.com/maps?q=${data['location']['coordinates']['latitude']},${data['location']['coordinates']['longitude']}`;
            const dob = data['dob']['date'];
            const phoneNo = data['phone'];
            const largeImg = data['picture']['large'];

            userCard.innerHTML = `
                <img src="${largeImg}" alt="User Picture">
                <h2>Name: ${name}</h2>
                <h3>Gender: ${gender}</h3>
                <h3>DOB: ${dob}</h3>
                <h3>Email: ${email}</h3>
                <h3>Location: ${location}</h3>
                <h3>Coordinates: <a href="${mapLink}" target="_blank">${coordinates}</a></h3>
                <h3>Phone No: ${phoneNo}</h3>
            `;

            console.log(userCard.innerText);
        });
}

userInput.addEventListener("keydown", debounce(fetchAndDisplayUser, 500));