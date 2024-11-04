function avg(numbers){
    let s = numbers.reduce((prev, curr) => prev + curr,0);
        return s / numbers.length;
}

function prime(num) {
    if (num == 2){
        return true;
    }
    for (i = 2; i < num ; i++){
        if (num%i == 0){
            return false;
        }
    }
    return true;

}
function factorial(num){
    let result = 1;
    for (let i = 1 ; i <= num ; i++){
        result = result * i;
    }
    return result;
}
module.exports = {
    avg,
    prime,
    factorial
}
