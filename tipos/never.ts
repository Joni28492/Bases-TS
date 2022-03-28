(()=>{

    //esto crashea la aplicacion y no se sigue ejecutando
    //no tiene un punto alcanzable
    const abc = (message:string):(never |number) =>{


        if(false){
            throw new Error(message)
        }

        return 1;
    }
    abc('Auxilio')
})()