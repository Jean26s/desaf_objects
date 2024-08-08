class Carro{
    constructor(marca,modelo,ano){
        this.marca=marca,
        this.ano=ano,
        this.modelo=modelo
        this.andar=(gasolina)=>{
            if(gasolina>=10){
               alert (`O ${this.marca} ${this.modelo} ${this.ano} esta com nivel de gasolina bom`)
            }
            else{
                alert("Abasteça")
            }
            


        }
    }
}

const carro1 = new Carro("ford","ká",2015)
console.log(carro1.andar(10))
