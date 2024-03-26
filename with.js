// Define a Cat class
class Cat {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.isHungry = true;
        this.energyLevel = 100; // in percentage
    }

    // Method to feed the cat
    feed() {
        if (this.isHungry) {
            console.log(`${this.name} is eating.`);
            this.isHungry = false;
        } else {
            console.log(`${this.name} is not hungry right now.`);
        }
    }

    // Method to play with the cat
    play() {
        if (this.energyLevel > 20) {
            console.log(`${this.name} is playing.`);
            this.energyLevel -= 20;
        } else {
            console.log(`${this.name} is too tired to play.`);
        }
    }

    // Method to sleep
    sleep() {
        console.log(`${this.name} is sleeping.`);
        this.energyLevel = 100;
    }

    // Method to meow
    meow() {
        console.log(`${this.name} says: Meow!`);
    }
}

// Create instances of Cat
const fluffy = new Cat('Fluffy', 'White', 3);
const whiskers = new Cat('Whiskers', 'Tabby', 5);

// Interact with the cats
fluffy.feed();
fluffy.play();
fluffy.play();
fluffy.meow();
fluffy.sleep();

whiskers.feed();
whiskers.meow();
