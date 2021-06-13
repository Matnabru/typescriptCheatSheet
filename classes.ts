interface UserInterface{
    name: string;
    email: string;
    age: number;
    payInvoice();
}

class User implements UserInterface{

    // add private or protected
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User Created: ' + this.name)
    }
    payInvoice(){
        console.log("XD");
    }
}
class Member extends User{
    id: number;
    constructor(name: string, email: string, age: number, id:number){
        super(name,email,age)
        this.id = id;
        console.log('User Created: ' + this.name)
    }

    payInvoice(){
        super.payInvoice();
    }
}
let john = new User('John','John@wp.pl',35);