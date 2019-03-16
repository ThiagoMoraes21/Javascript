function convertDecimal(n){
    let conv = "";

    while(n > 0) {
        conv += n % 2;
        n = parseInt(n / 2);
    }

    return conv.split("").reverse().join();

}

console.log(convertDecimal(156));

