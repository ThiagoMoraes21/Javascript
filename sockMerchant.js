function sockMerchant(n, ar) {
    let pairs = 0;
    ar.sort((a, b) => a - b);
    // for(let i = 0; i <= n; i += 2) {
    //     if(ar[i] == ar[i + 1] && ar[i + 1] != undefined) pairs++;
    // }

    for(let i = 0; i < n; i++) {
        if(ar[i] == ar[i + 1] && ar[i + 1] != undefined) {
            pairs++;
            ar.splice(i, 2);
        }
    }
    return pairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); // 3
console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])); // 4
console.log(sockMerchant(17,[2, 2, 6, 2, 1, 2, 4, 2, 2, 0, 5, 10, 5, 5, 9, 3, 5])); // 5
console.log(sockMerchant(20, [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5])) // 9