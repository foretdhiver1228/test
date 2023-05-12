let name1 :string = 'kim';
let nameArray :string[] = ['kim', 'lee'];
let nameObj :{name?:string} = {name:'kim'};  // ? : option
// string, number, boolean, null, undefined, bigint, [], {}, etc...

let name2 :string|number = 123; // union type

//Type alias
type NewType = string|number;

let nametype: NewType = 123;


function newFn(x :number) :number {
    return x * 2
}

type Member = [number, boolean];
let john:Member = [123, true]; // tuple type

type obj = {
    name : string
}
let sandy :obj = { name : 'kim'};

type obj1 = {
    [key :string] : string, 
}

let sandy1 :obj1 = { name : 'kim', age : '123'};

class User {
    name :string;
    constructor(name :string) {
        this.name = name;
    }
}