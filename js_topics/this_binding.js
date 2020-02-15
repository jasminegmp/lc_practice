var sayNameFunction = function(obj){
    obj.sayName = function(){
        console.log(this.name);
    }
}

var me = {
    name: 'Jello',
    age: 80
}

var you = {
    name: 'Sunny',
    age: 70
}
sayNameFunction(me);
sayNameFunction(you);

me.sayName()
you.sayName()