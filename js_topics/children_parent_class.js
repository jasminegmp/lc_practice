
class Parent{
    constructor(){
        this.heritage = 'German';
        this.lastName = 'Gumpert'
    }
    showInfo(){
        console.log(`${this.lastName}'s family is ${this.heritage}`);
    }
}
class Child extends Parent {
    constructor(){
        super();
        this.name = 'Johnny';
        
    }
    showInfo(){
        console.log(`${this.name} ${this.lastName}'s family is ${this.heritage}`)
    }
}

let obj = new Parent();
obj.showInfo();
let child = new Child();
child.showInfo();