(()=>{

    type Avenger = {
        name:string;
        weapon:string
    }

    const ironman:Avenger ={
        name: 'Ironman',
        weapon: 'ArmorSuite'
    }
    const capitanAmerica:Avenger ={
        name: 'Capitan America',
        weapon: 'Shield'
    }
    const thor:Avenger ={
        name: 'Thot',
        weapon: 'Mjolnir'
    }


    const avengers:Avenger[] = [ironman, thor, capitanAmerica]

    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon)
    }


})()