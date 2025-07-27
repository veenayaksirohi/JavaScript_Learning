/**
 * 18_Promise.js
 * Demonstrates the usage of JavaScript Promises, including creation, consumption,
 * chaining, error handling, and async/await syntax.
 * Each example is separated by a boundary for clarity.
 *
 * Topics covered:
 * 1. Basic Promise creation and consumption
 * 2. Inline Promise usage
 * 3. Promise with resolved value (object)
 * 4. Promise chaining and error handling
 * 5. Promise with async/await and try-catch-finally
 */
// ==================================================================

// 1. Basic Promise creation and consumption
const promiseOne= new Promise(function(resolve,reject){
    // Do an async task (e.g., DB calls, cryptography, network)
    setTimeout(() => {
        console.log("promiseOne => async task is completed")
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log("promiseOne => Promise Consumed")
    console.log("==================================================================")
})
// ==================================================================

// 2. Inline Promise usage
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("promiseTwo => async task is completed")
        resolve()
    }, 1000);
}).then(function(){
    console.log("promisetwo => Promise Consumed")
    console.log("==================================================================")
})
// ==================================================================

// 3. Promise with resolved value (object)
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({
            name: "veenayak",
            email: "v@gmail.com"
        })   
    }, 1000);
})

promiseThree.then(function(user){
    console.log(`promiseThree =>`, user)
    console.log("==================================================================")
})
// ==================================================================

// 4. Promise chaining and error handling
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

promiseFour
.then(function(user){
    console.log('promiseFour => ', user)
    return user.username
})
.then(function(username){
    console.log('promiseFour username =>', username)
})
.catch(function(error){
    console.log("promiseFour Error => ", error)
})
.finally(function(){
    console.log('promiseFour => The promise is either resolved or rejected')
    console.log("==================================================================")
})
// ==================================================================

// 5. Promise with async/await and try-catch-finally
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "JavaScript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})

/**
 * Consumes promiseFive using async/await with try-catch-finally.
 * Demonstrates error handling and finalization.
 */
async function consumePromiseFive() {
    try {
        const response  = await promiseFive
        console.log('promiseFive => ', response)
    } catch (error) {
        console.log("promiseFive Error => ", error)
    }
    finally {
        console.log('promiseFive => The promise is either resolved or rejected')
        console.log("==================================================================")
    }
}

consumePromiseFive()


/**
 * 6. Async/Await with Fetch API
 * Demonstrates how to use async/await to fetch data from an API endpoint
 * and handle the response and errors.
 */
async function getAllPosts() {
    try {
        // Fetch posts from a public API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        // Convert the response to JSON (await is needed as this is asynchronous)
        const data = await response.json()
        console.log('getAllPosts =>', data)
    } catch (error) {
        // Handle any errors that occur during fetch or JSON conversion
        console.log('getAllPosts Error =>', error)
    } finally {
        // Boundary for clarity
        console.log("==================================================================")
    }
}

getAllPosts()
// ==================================================================

/**
 * 7. Fetch API with Promises
 * Demonstrates how to use the Fetch API with .then()/.catch() chaining
 * to retrieve and process data from an API endpoint.
 */
fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        // Convert the response to JSON
        return response.json()
    })
    .then((data) => {
        // Log the user data
        console.log('fetch user =>', data)
    })
    .catch((error) => {
        // Handle any errors that occur during fetch or JSON conversion
        console.log('fetch user Error =>', error)
    })
    .finally(() => {
        // Boundary for clarity
        console.log("==================================================================")
    })
// ==================================================================

