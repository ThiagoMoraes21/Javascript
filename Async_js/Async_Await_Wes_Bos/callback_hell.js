// callback hell
makeBreakfast(function() {
    makeCoffee(function() {
        eatBreakfast(function() {
            drinkCoffee(function() {
                cleanUp(function() {
                    console.log(`Finally done it's time for launch!`);
                });
            });
        });
    });
});
