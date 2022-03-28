(()=>{
//la principal suele ir arriba
    interface Client {
        name: string;
        age?: number;
        adress: Adress;
        getFullAdress(id:string): string;//no es necesario implementarlo, solo definirlo
    }

    interface Adress {
        id:number;
        zip: string;
        city: string;
    }

    const client:Client = {
        name: 'Joni',
        age: 29,
        adress: {
            id: 125,
            zip: 'KYD SUD',
            city: 'Aviles'
        },
        getFullAdress(id:string){
            return this.adress.city
        }
    }

    const client2:Client = {
        name:'Melissa',
        age: 30,
        adress: {
            id: 123,
            city:'Oviedo',
            zip: 'KS2 U2A'
        },
        getFullAdress(id:string){
            return this.adress.city
        }
        
    }
    

})()