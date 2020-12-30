const printHelloex = () => console.log("exports",'hello');

exports.printHelloex = printHelloex;

exports.printMessage2 = (message) => {
    console.log(message);
};

const fs = require('fs');

const contents = 'hello\nbye\n안녕';

fs.writeFileSync('./message.txt', contents);