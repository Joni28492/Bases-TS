(()=>{

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }


    const avengers:Avengers = {
        nick: 'Samule L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    }
    // const {poder, vision} = avengers
    // console.log(poder.toFixed(2), vision.toUpperCase())

    const printAvenger = ({ ironman, ...rest}:Avengers)=>{
        console.log(ironman, rest.nick)
    }


    // printAvenger(avengers)



    const avengersArr:[string,boolean,number] = ['Cap. America', true, 150.5]
    // const ironman = avengersArr[1]
    const [capi,ironman,seriaUnNumero] = avengersArr;
    // console.log({ironman, capi})

})()