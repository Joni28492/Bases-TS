(()=>{
    let avengers:number = 10;
    console.log(avengers)


    const villains:number = 20;


    if (avengers < villains){
        console.log('Estamos en problemas')
    }else{
        console.log('nos salvamos')
    }
    
    avengers = Number('55A')
    //NaN es considerado un numero
    console.log({avengers})


})()