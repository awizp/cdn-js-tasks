import './style.css';

let wordsArray = ["Mango", "Orange", "Banana", "Pineapple", "Noon", "Day", "Night", "Morning", "Mom", "Dad"];

// Method 1

const methodOne = (arr) => {
    // used for loop for looping the array words one by one
    for (let i = 0; i < arr.length; i++) {
        let singleWord = arr[i];
        //declaring empty variable so i can use it later
        let reversedWord = "";

        // looping the characters in the arrayWord and join them in reverse order
        for (let j = 0; j < singleWord.length; j++) {
            reversedWord = singleWord[j].toLocaleLowerCase() + reversedWord;
        }

        // exit with palindrome word
        if (reversedWord === singleWord.toLocaleLowerCase()) {
            console.log('Palindrome word is identified in method 1,' + singleWord);
        }
    }
};

// Method 2

const methodTwo = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let singleWord = arr[i];

        // just using simple js string methods to simplify the work
        let reversedWord = singleWord.toLocaleLowerCase().split("").reverse().join().replaceAll(',', '');

        if (reversedWord === singleWord.toLocaleLowerCase()) {
            console.log('Palindrome word is identified in method 2,' + singleWord);
        }
    }
};

// Method 3

const methodThree = (arr) => {
    let i = 0;

    //using while loop to loop through the array words
    while (i < arr.length) {
        let singleWord = arr[i];
        let reversedWord = "";

        //using for...of loop to loop through characters
        for (let char of singleWord) {
            reversedWord = char.toLocaleLowerCase() + reversedWord;
        }

        if (reversedWord === singleWord.toLocaleLowerCase()) {
            console.log('Palindrome word is identified in method 3,' + singleWord);
        }

        i++;
    }
};

// calling the functions
methodOne(wordsArray);
methodTwo(wordsArray);
methodThree(wordsArray);