// index.js

// Task 1: writeCards Function
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  // Example usage of writeCards
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
  // Output:
  // [
  //   "Thank you, Charlie, for the wonderful birthday gift!",
  //   "Thank you, Samip, for the wonderful birthday gift!",
  //   "Thank you, Ali, for the wonderful birthday gift!",
  // ]
  
  // Task 2: countDown Function
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Example usage of countDown
  countDown(10);
  // Output:
  // 10
  // 9
  // 8
  // 7
  // 6
  // 5
  // 4
  // 3
  // 2
  // 1
  // 0
  