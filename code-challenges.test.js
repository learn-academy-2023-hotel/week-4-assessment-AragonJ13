// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


describe("switchedColors", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining items", () => {
        expect(switchedColors(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(switchedColors(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
})

// b) Create the function that makes the test pass.
//Created a new variable called switchedColors
const switchedColors = (array) => {
//created a new array using the spread operator called swap
    const [...swap] = array
//Tried using the fisher-yates method to shuffle the array
    for (let i = swap.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        [swap[i], swap[j]] = [swap[j], swap[i]]  
    }
//Tried returning swap to get expected outcome but kept getting ReferenceError: Cannot access 'j' before initialization 
    return swap
}
console.log(switchedColors(colors1))
console.log(switchedColors(colors2))





// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
// describe("allTheVotes", () => {
//     it("takes in an object that contains up votes and down votes and returns the end tally" , () => {
//         expect(allTheVotes(votes1)).toEqual(11)
//         expect(allTheVotes(votes2)).toEqual(-31)
//     })
// })
// // b) Create the function that makes the test pass.
// const votes1 = { upVotes: 13 , downVotes: 2,
//   }
  
// const votes2 = { upVotes: 2, downVotes: 33,
//   }
// //Created a function name allTheVotes that takes the parameter votes
// function allTheVotes(votes) {
// // made 2 varibles upVotes & downVotes that equal parameter votes and using dot notation calling upvotes and downVotes on each variable.
//     const upVotes = votes.upVotes
//     const downVotes = votes.downVotes
// //Made another variable tally that subtracts downNotes from upNotes which gives me my expected output.
//     const tally = upVotes - downVotes
//     return tally
// }


//This was the original way i wrote the functions but i felt like I wasnt writing dynamic code and in a real world case if i had multiple votes i would be repeating myself (ex. votes3 , votes4) and im trying to learn not to DRY, so I went ahead and took another aproach to writing the function 

// const votes1 = { 
//     upVotes: 13, 
//     downVotes: 2, 
//     endTally: function () {
//     return this.upVotes - this.downVotes
// }
// }

// console.log(votes1.endTally())

// // Expected output: 11

// const votes2 = { 
//     upVotes: 2, 
//     downVotes: 33,
//     endTally: function () {
//     return this.upVotes - this.downVotes
// }
// }

// console.log(votes2.endTally()) 

// Expected output: -31



 



