const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)? ", (answer1) => {
  rl.question('What is your favourite activity? ', (answer2) => {
    rl.question('What do you like listening to while doing that? ', (answer3) => {
      rl.question('Which meal of the day is your favourite? ', (answer4) => {
        rl.question('What is your favourite thing to eat for that meal? ', (answer5) => {
          rl.question('What is your favourite movie? ', (answer6) => {
            rl.question('what is your superpower? ', (answer7) => {
            console.log(`${answer1} loves ${answer2} and while he's shredding the slopes he likes to listen to ${answer3}. He loves eating ${answer5} for ${answer4}. His favourite movie is ${answer6}. and his ${answer7} is unstoppable.`);
            })
          })
        })
      })
    });
  });
});
