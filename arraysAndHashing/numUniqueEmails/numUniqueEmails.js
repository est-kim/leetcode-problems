// Given an array of strings emails where we send one email to
// each emails[i], return the number of different addresses that
// actually receive mails.

// source: https://leetcode.com/problems/unique-email-addresses/

var numUniqueEmails = function(emails) {
    let finalEmails = [];
    let finalName = ""

    for (let email of emails) {
        let firstPart = email.slice(0, email.indexOf("@"));

        let removingPeriod = firstPart.replaceAll(".", "");

        if (removingPeriod.includes("+")) {
          finalName = removingPeriod.slice(0, removingPeriod.indexOf("+"));
        } else {
          finalName = removingPeriod;
        }
        let secondPart = email.slice(email.indexOf("@"));
        finalEmails.push(finalName + secondPart);
    }

    let set = new Set(finalEmails);
    return set.size;
};
