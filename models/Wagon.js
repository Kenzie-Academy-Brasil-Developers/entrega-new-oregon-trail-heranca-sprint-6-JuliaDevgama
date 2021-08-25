class Wagon {
    constructor(capacidade){
        this.capacity = capacidade
        this.passengers = []
        this.isHealthy = false
    }
    getAvailableSeatCount(){
        return this.capacity - this.passengers.length 
    }
    join(viajante){
        if (this.getAvailableSeatCount() > 0) {
            return this.passengers.push(viajante)
        }
        return `Ocupados os ${this.passengers.length} assentos vazios`
    }
    shouldQuarantine(){
       if(this.isHealthy == false){
           return true
       }else {
           return false
       }
    }
    totalFood(){
        let count = 0
        for(let i = 0; i <= this.capacity; i++){
            count+=i
        }
        return count
    }
}

module.exports = Wagon;