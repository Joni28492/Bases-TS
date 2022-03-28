(()=>{

    



    //no importa la posicion de las propiedades
    // let flash:{name:string, age?:number, powers:string[], getName?: ()=>string} = {
    let flash:{name:string, age?:number, powers:string[], getName?: ()=>string} = {
        name: 'Barry Allen',
        age: 24,
        powers: ['superVelocidad', 'Viajar en el tiempo']
    }
    let superman:{name:string, age?:number, powers:string[], getName?: ()=>string} = {
        name: 'Clark Kent',
        age: 60,
        powers: ['superVelocidad']
    }

    

    // flash = {
    //     name:'Clark Kent',
    //     // age: 60,
    //     powers: ['SuperFuerza'],
    //     getName(){
    //         return this.name;
    //     }
    // }

    // console.log( flash.getName() )

})()