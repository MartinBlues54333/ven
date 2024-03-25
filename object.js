// Define a clown object
const clown = {
    name: 'Bozo',
    age: 35,
    hairColor: 'red',
    noseType: 'red',
    costume: 'colorful',

    // Method to introduce the clown
    introduce: function() {
        console.log(`Hello! I'm ${this.name}, the friendly clown.`);
    },

    // Method to perform a clown trick
    performTrick: function(trick) {
        console.log(`${this.name} performs the ${trick} trick!`);
    }
};

// Test the clown object
clown.introduce();
clown.performTrick('balloon animal');
