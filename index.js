const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const responses = {
  greeting: ['Hello!', 'Hi there!', 'Hey! How can I help you today?'],
  farewell: ['Goodbye!', 'See you later!', 'Take care!'],
  thanks: ['You\'re welcome!', 'No problem!', 'Happy to help!'],
  unknown: ['I didn\'t understand that.', 'Can you clarify?', 'I\'m not sure what you mean.'],
  weather: ['It’s sunny outside!', 'Looks like it might rain later.', 'It’s a bit chilly today.'],
  joke: ['Why don’t skeletons fight each other? They don’t have the guts!', 
         'I told my wife she was drawing her eyebrows too high. She looked surprised.', 
         'Parallel lines have so much in common. It’s a shame they’ll never meet.']
};




function getRandomResponse(category) {
  const options = responses[category];
  return options[Math.floor(Math.random() * options.length)];
}

function handleInput(input) {
  input = input.toLowerCase();

  if (input.includes('hello') || input.includes('hi')) {
    return getRandomResponse('greeting');
  } else if (input.includes('bye') || input.includes('goodbye')) {
    return getRandomResponse('farewell');
  } else if (input.includes('thank')) {
    return getRandomResponse('thanks');
  } else if (input.includes('weather')) {
    return getRandomResponse('weather');
  } else if (input.includes('joke')) {
    return getRandomResponse('joke');
  } else {
    return getRandomResponse('unknown');
  }
}

function showMenu() {
  console.log('\n=== Chatbot ===');
  console.log('Type "hello" or "hi" to greet the bot.');
  console.log('Ask about the "weather" or request a "joke".');
  console.log('Type "thanks" to receive a response.');
  console.log('Type "bye" to exit.');
}

function startChat() {
  showMenu();
  rl.question('\nYou: ', (input) => {
    const response = handleInput(input);
    console.log(`Chatbot: ${response}`);

    if (input.toLowerCase().includes('bye')) {
      console.log('Chatbot: Ending the conversation. Goodbye!');
      rl.close();
    } else {
      startChat();
    }
  });
}

console.log('Starting Chatbot...');
startChat();
