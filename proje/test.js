function sumAll(){
    var total=0;
    for(let i=0;i<arguments.length;i++){
        total+=arguments[i];
    }
    return total;
}