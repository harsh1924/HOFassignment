const urlPattern = /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[.][a-zA-Z]+$/;
const webUrl = "https://pwskills.com"
const webUrlTwo = "//google.com"
let valid = urlPattern.test(webUrl);
let validTwo = urlPattern.test(webUrlTwo);
console.log(`Is ${webUrl} valid? - ${valid}`);
console.log(`Is ${webUrlTwo} valid? - ${validTwo}`);

/*  OUTPUT
    Is https://pwskills.com valid? - true
    Is //google.com valid? - false
*/
