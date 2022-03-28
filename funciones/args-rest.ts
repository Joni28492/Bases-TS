(()=>{

    const fullName = (firstName: string, ...restArgs: string[]):string=>{
        return `${firstName} ${restArgs.join(' ')}`
    }

    const superman = fullName('Clark', 'Joshep', 'Kent')

    console.log({superman})
})()