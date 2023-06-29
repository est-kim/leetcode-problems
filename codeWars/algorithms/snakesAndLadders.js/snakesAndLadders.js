// This Kata is like the game of Snakes & Ladders

// There is an array representing the squares on the game board.

// The starting square is at array element 0. The final square is the last array element.

// At each "turn" you move forward a number of places (according to the next dice throw).

// The value at the square you end up on determines what happens next:

// 0 Stay where you are (until next turn)
// +n This is a "ladder". Go forward n places
// -n This is a "snake". Go back n places
// Each snake or ladder will always end on a square with a 0, so you will only go up or down
//  one at a time.

// There are no ladders on the starting square, and there are no snakes on the final square.

// source: https://www.codewars.com/kata/5821cd4770ca285b1f0001d5/train/javascript

var snakesAndLadders = function(board, dice) {
    let position = 0;

    for (let roll of dice) {
      if (position + roll < board.length) {
        position += roll;
      }
      while (board[position] !== 0) {
        position += board[position]
      }
      if (position === board.length - 1) break;
    }

    return position;
  }

// time: O(n)
// space: O(1)
