const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function performCalculation() {
    const num1 = await askQuestion('Enter the first number: ');
    const num2 = await askQuestion('Enter the second number: ');
    const operation = await askQuestion('Choose an operation (+, -, *, /): ');

    let result;
    switch (operation) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            if (num2 === '0') {
                console.log('Cannot divide by zero.');
                rl.close();
                return;
            }
            result = parseFloat(num1) / parseFloat(num2);
            break;
        default:
            console.log('Invalid operation.');
            rl.close();
            return;
    }

    console.log(`The result is: ${result}`);
    rl.close();
}

performCalculation();