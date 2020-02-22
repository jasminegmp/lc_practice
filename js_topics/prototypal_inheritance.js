class Parent {
    constructor(){
        this.name ="Parent";
    }
}

Parent.prototype.greet = () =>{
    console.log("Hello from parent");
}

let child = Object.create(Parent.prototype);

child.greet();