// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need
// to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9
// without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarilysolvable.
// Only the filled cells need to be validated according to the mentioned rules.

// source: https://leetcode.com/problems/valid-sudoku/

var isValidSudoku = function(board) {
    function validRow(board) {
        for (let i = 0; i < board.length; i++) {
            let numbers = board[i].filter(numbers => numbers !== ".");
            let set = new Set(numbers);
            if (set.size !== numbers.length) {
                return false;
            }
        }
        return true;
    }

    function validColumn(board) {
        let i = 0;
        while (i < board.length) {
            let column = board.map(space => space[i]);
            let numbers = column.filter(numbers => numbers !== ".");
            let set = new Set(numbers);
            if (set.size !== numbers.length) {
                return false;
            } else {
                i++;
            }
        }
        return true;
    }

    function validBox(board) {
        for (let row = 0; row < 9; row += 3) {
            for (let col = 0; col < 9; col += 3) {
                let grid = [];
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        grid.push(board[row + i][col + j])
                    }
                }
                let numbers = grid.filter(number => number !== ".");
                let set = new Set(numbers);
                if (set.size !== numbers.length) return false;
            }
        }
        return true;
    }

    return validRow(board) && validColumn(board) && validBox(board);
};
