function generateRandomNumber() {
    return Math.floor(Math.random() * 1000);
};

function generateRandomNumberWithDelay(delayInSeconds) {
    console.log(`Generating a random number in ${delayInSeconds} seconds`);
    let countdownInterval = setInterval(() => {
        console.log(`${delayInSeconds} seconds remaining...`);
        delayInSeconds--;
        if (delayInSeconds === 0) {
            clearInterval(countdownInterval);
            const randomNumber = generateRandomNumber();
            console.log(`Random Number Generated is ${randomNumber}`);
        }
    }, 1000)
};

generateRandomNumberWithDelay(4);

// OUTPUT: 
// Generating a random number in 4 seconds
// 4 seconds remaining...
// 3 seconds remaining...
// 2 seconds remaining...
// 1 seconds remaining...
// Random Number Generated is 640