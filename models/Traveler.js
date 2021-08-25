class Traveler {
    constructor(nome){
        this.name = nome
        this._food = 1
        this.isHealthy = true
    }
     
    get food(){
        return this._food;
    }

    set food(value) {
        this._food = value
    }
    
    hunt(){
        let qtd = this.food += 2
        return qtd 
    }

    eat(){
       if(this.qtdFood === 0){
          this.isHealthy = false
          return this.isHealthy
       } else{
           let qtd = this.qtdFood -=1
           return qtd
       }
    }
}

module.exports = Traveler;