let name1 = 'kim';
let nameArray = ['kim', 'lee'];
let nameObj = { name: 'kim' }; // ? : option
// string, number, boolean, null, undefined, bigint, [], {}, etc...
let name2 = 123; // union type
let nametype = 123;
function newFn(x) {
    return x * 2;
}
let john = [123, true]; // tuple type
let sandy = { name: 'kim' };
let sandy1 = { name: 'kim', age: '123' };
class User {
    constructor(name) {
        this.name = name;
    }
}
