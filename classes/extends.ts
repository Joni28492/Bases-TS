(()=>{

    class Avenger {

        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Constructor Avenger llamado')
        }

        protected getFullName(){
            return `${this.name} ${this.realName}`
        }
    }


    //si no tiene el constructor coge el de avenger
    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public isMutant:boolean
        ){
            super(name, realName)
            console.log('Constructor Xmen Llamado')
        }

        get fullName():string {
            return  `${this.name} - ${this.realName}`;
        }

        set fullName(name:string) {
            if(name.length < 3){
                throw new Error('El nombre debe ser mayor de tres')
            }
            this.name = name;
        }

        

        getFullNameDesdeXmen(){
            console.log(super.getFullName())
        }
         
        


    }

    // const wolverine = new Xmen('Wolverin', 'Logan', true)
    // wolverine.fullName='Joni'
    // console.log(wolverine.fullName)

    // wolverine.getFullNameDesdeXmen()

  
})()