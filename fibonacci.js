function fibonacci(index) {
    let fibo = [0, 1];
    for (let i = 2; i <= index; i++) {
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo[index];
}

console.log(fibonacci(0));