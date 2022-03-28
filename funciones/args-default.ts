(()=>{
    //importante el orden
    const fullName = (firstName:string, lastName?:string, upper:boolean=false):string =>{
        
        if(upper){
            return `${firstName} ${lastName || 'no lastName'}`.toUpperCase()
        }else{
            return `${firstName} ${lastName || 'no lastName'}`
        }
    }

    let noName: any;
    // const name= fullName(noName, 'Stark')
    const name= fullName('Tony','Stark', true)
    console.log({name})

})()