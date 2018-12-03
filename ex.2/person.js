export default class Person {
    constructor(name){
        this.name = name;
    }

    getInfo(){
        return `My name is ${this.name}`;
    }
}