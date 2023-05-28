// Given a string contaning only a, b and c, remove all b and ac.

// removeChars('ab') // 'a'
// removeChars('abc') // ''
// removeChars('cabbaabcca') // 'caa'


function removeChars(input) {
    let newStr = input;
    while (newStr.includes("b") || newStr.includes("ac")) {
      newStr = newStr.replace("b","").replace("ac", "")
    }
    return newStr;
  }

  removeChars('cabbaabcca')
