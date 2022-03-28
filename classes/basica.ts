(()=>{

    class Avenger {
        //por defecto si no ponemos nada son publicas 
         //forma tradicional
         
        //  private name:string;
        //  private team: string;
        //  public realName?: string;
        //  static avgAge: number = 35;
       
        // constructor(name:string, team:string, realName?:string){
        //     this.name = name;
        //     this.team = team;
        //     this.realName = realName;
        // }

        //forma corta
        
        static avgAge: number = 35;
        static getAvgAge(){
            return this.name; //accede al nombre de la claseno a las propiedades
        }
        
        constructor(
            private name:string, 
            private team:string,
            public realName?:string,
            avgAge:number = 55){
                Avenger.avgAge=avgAge
            }

            //si no se pone es public, no hay forma de hacerlo privado en el ES6
            bio(){
                return `${this.name} (${this.team})`
            }
    }

    const antman:Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    // console.log(antman)
    // console.log(antman.bio())
    // console.log(Avenger.getAvgAge())
    // console.log(Avenger.avgAge)//static property
    // console.log(Avenger.avgAge)

})()