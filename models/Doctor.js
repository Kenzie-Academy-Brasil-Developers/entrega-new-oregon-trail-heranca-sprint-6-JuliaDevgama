
class Doctor extends Traveler {
    constructor(nome){
        super(nome)
        this.nome = nome
        this.isHealthy = true
    }

    heal(traveler){
        if(traveler.isHealthy == false){
            return traveler.isHealthy == true
        }
    }
}

module.exports = Doctor;