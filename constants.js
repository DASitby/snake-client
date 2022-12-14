//Define connection constants
const IP = 'localhost';
const PORT =  50541;
const Initials = 'DAS';

//Define Input Constants
const keyBindings = {
  //w, a, s, and d will move the snake
  'w':'Move: up',
  'a':'Move: left',
  's':'Move: down',
  'd':'Move: right',
  //q, e, r, and f will trigger fun emotes
  'q': 'Say: No fair!',
  'e': 'Say: Nice!',
  'r': 'Say: I won\'t lose!',
  'f': 'Say: Good Game!',
};

//Exports
module.exports = {IP, PORT, keyBindings, Initials};