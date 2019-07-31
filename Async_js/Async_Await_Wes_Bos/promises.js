// kick off both things, one after another
const coffeePromise = makeCoffee();
const breakfastPromise = makeBreakfast();

// then once each are done, deal with them
coffeePromise.then(coffee => {
    drinkCoffee();
}).catch(err => console.log(err));

breakfastPromise.then(([eggs, bacon]) => {
    eat(eggs, bacon);
}).catch(err => console.log(err));

// you can also wait ultil both are done
Promise
    .all([coffeePromise, breakfastPromise])
    .then(([coffee, breakfast]) => {
        sitDownWith(coffee, breakfast);
    });


// functions called during the proccess of preparing/eating breakfast
function drinkCoffee() { 
    console.log(`Drinking coffee...`) 
};

function eat(...ingredients) {
    console.log(`Omelete ingredients: eggs(${ingredients[0]}), bacon(${ingredients[1]})`);
};

function sitDownWith(...chilling) { 
    console.log(`Chilling...`) 
};

function makeCoffee() {
    return new Promise((resolve, reject) => {
        resolve();
    }).catch(err => console.log('Error trying to make coffee...'));
}

function makeBreakfast() {
    return new Promise((resolve, reject) => {
        resolve([2, 3]);
    }).catch(err => console.log('Error trying to make breakfast...'));
}