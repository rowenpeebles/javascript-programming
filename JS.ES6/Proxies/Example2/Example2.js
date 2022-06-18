// Using the set() value

let student = {
    name: 'John'
}

let setNewValue = {
    set: function(obj, prop, value) {
        obj[prop] = value;
        return;
    }
};

// Setting new proxy
let person = new Proxy(student, setNewValue);

// Setting new key/value
person.age = 25;
console.log(person);
