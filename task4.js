function task4(ar){
    let sum = 0;

    for(let num of ar){
        sum += Math.pow(num, 2);
    }
    
    return sum;
}