// You will be given a number and you will need to return it as a string in Expanded
// Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// source: https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

function expandedForm(num) {
    let string = num.toString().split('');
    let res = "";
    for (let i = 0; i < string.length; i++) {
      if (i !== string.length - 1 && string[i] !== '0') {
        res += string[i].padEnd(string.length - i,'0') + ` + `;
      } else if (string[i] == 0){
        continue;
      } else {
        res += string[i];
      }
    }
    if (res.endsWith(' ')) {
      return res.substring(0, res.length - 3)
    }
    return res;
  };

// time complexity: O(n^2)
// space complexity: O(n)
