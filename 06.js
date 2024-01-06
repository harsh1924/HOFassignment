let linkedinURL = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/$/;
let url = "https://www.linkedin.com/in/debasish-mitra-139054221/";
function isValidURL(inputURL) {
    return linkedinURL.test(inputURL)
};
if (isValidURL(url)) {
    console.log(`${url} is a valid Linkedin URL`);
}
else
    console.log(`${url} is a not valid Linkedin URL`);


// OUTPUT
// https://www.linkedin.com/in/debasish-mitra-139054221/ is a valid Linkedin URL
