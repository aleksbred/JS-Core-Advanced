"use strick";

function task1(str){
    const listRussian = 'уеыаоэяиюУЕЫАОЭ'
    let counter = 0;
    
    for (let char of str){
        if (listRussian.includes(char)){
            counter++;
        }
    }
    
    return counter;
}