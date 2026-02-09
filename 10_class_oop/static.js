class User{
    constructor(username,){
        this.username
    }
    logMe(){
        console.log(`username is ${this.username}`)
    }
    createId(){
        return `123`
    }
}

const hitesh = new User("Hitesh")
console.log(hitesh.createId())

//here create id is unreistricted a user can create only once a ID by adding Static

class User2{
    constructor(username,){
        this.username
    }
    logMe2(){
        console.log(`username is ${this.username}`)
    }
    static createId2(){
        return `123`
    }
}

const hites2h = new User2("Hitesh")
//this id willbe applied to object/class
class Teacher extends User{
    constructor(username,email){
        super(username)
        this.emalil = email

    }
}

const iphone = new Teacher("17pro","apple@com")
iphone.logMe()
consol.log(iphone.createId())//statcni also cannot be acces in child too