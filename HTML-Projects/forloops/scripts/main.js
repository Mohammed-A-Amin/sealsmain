function getAnswers(n){
    let product = 0;
    let timestables = [];
    for (let i = 0; i < 13; i++){
        product = n * i;
        timestables.push(product);
       // console.log(product);
    }
    for (let i = 0; i < 13; i++){
        console.log(timestables[i]);
    }

}

getAnswers(3);