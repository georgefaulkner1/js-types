

export default class Type {
    constructor(type, value){
        let types = [String, Number, Boolean, Array, Object]
        if(!types.includes(type)){
            throw console.error("Type does not exist")
        }else{
            if(value != undefined) return this.error("Ha")
            this._value = value
            this.type = type
            this.typeValidator()
            this.lock()
        }
    }

    get value() {
        return this._value
    }

    set value(newValue) {
        this._value = newValue
        this.typeValidator()
    }

    typeValidator() {
        //typeSets and typeSetsName arrays both have to be in the same order.
        let typeSets = [Number, String, Boolean, Array, Object]
        let typeSetsName = ["Number", "String", "Boolean", "Array", "Object"]
        if(typeSets.includes(this.type)) {
            //Get the String format of the name of the type
            let type = typeSetsName[typeSets.indexOf(this.type)]
            //Array and Object are dealt differently
            if(this.type == Array || this.type == Object){
                if(this.type == Array){
                    type = "Array"
                    if(!Array.isArray(this._value)) return this.error(type)
                }
                if(this.type == Object){
                    type = "Object"
                    if(typeof this._value !== type.toLowerCase() || Array.isArray(this._value)) return this.error(type)
                }
            } else {
                if(typeof this._value !== type.toLowerCase()) return this.error(type)
            }
        }
    }  

    //Throw a error for miss matched variable 
    error(type){
        this._value = undefined
        throw new Error(`Variable type set as ${type} & the value does not match this type!`)
    }
    
    //Prevent Object structure change 
    lock(){
        Object.seal(this)
    }
}
