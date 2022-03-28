(()=>{

    const fullName = (firstName:string, lastName?:string):string =>{
        return `${firstName} ${lastName || 'no lastName'}`
    }

    let noName: any;
    // const name= fullName(noName, 'Stark')
    const name= fullName('Tony')
    console.log({name})

})()