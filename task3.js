function task3(nb){
    const numStr = nb.toString();
    
    return parseInt(numStr[0]) + parseInt(numStr[numStr.length - 1]);
}