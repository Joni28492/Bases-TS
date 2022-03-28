(()=>{

    abstract class Mutante {

        constructor(
            public name: string,
            public realName: string,
        ){}

    }

    class Xmen extends Mutante {
        salvarMundo(){
            return 'Mundo a salvo';
        }
    }
    class Villain extends Mutante {
        conquistarMundo(){
            return 'Mundo Conquistado';
        }
    }


    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villain('Magneto', 'Magnus');
    // console.log(wolverine.salvarMundo());
    // console.log(magneto.conquistarMundo());

    const printName = (character: Mutante) =>{
        // console.log(character.name)
    }


    // printName(magneto);


})()