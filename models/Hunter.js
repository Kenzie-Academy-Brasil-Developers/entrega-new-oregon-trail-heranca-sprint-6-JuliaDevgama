class Hunter extends Traveler{
    constructor(name){
        super(name)
        this.name = name
        this._food = 2
        this.isHealthy = true
    }
    get food(){
        return this._food
    }
    set food(food){
        this._food = food
    }
    hunt(){
        return this._food+=5
    }
    eat(){
       if(this._food < 2){
        this._food = 0
        return this.isHealthy = false
       } else {
         return this._food-=2
       }
    }
    giveFood(traveler, numOfFoodUnits){
        if(this._food >= numOfFoodUnits){
            this._food -= numOfFoodUnits
            traveler._food += numOfFoodUnits
        }
    }
}
module.exports = Hunter;
