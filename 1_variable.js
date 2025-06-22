const accountID=1234
// 'let' is block-scoped. It's the modern way to declare variables that might be reassigned.
let accountEmail="veena@gmail.com"
let accountstate
// 'var' is function-scoped. It's the older way to declare variables. 
// It's generally recommended to use 'let' or 'const' instead.
var accountPassword="8879-9"
accountCity="hapur"

// We cannot change the value of a const variable. The line below would cause a TypeError.
// accountID =567
console.log(accountID)

accountEmail="hfkfds@ngghh"
console.log(accountEmail)

accountPassword = 77890
console.log(accountPassword)

accountCity="ha"
console.log(accountCity)

console.table([accountID,accountEmail,accountPassword,accountPassword,accountCity,accountstate])