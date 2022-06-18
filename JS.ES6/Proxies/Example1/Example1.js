// Creating a proxy object

// Using get()

let student1 = {
    age: 24,
    name: 'Felix'
}

const handler = {
    get: function(obj, prop) {
        return obj[prop] ? obj[prop] : 'property does not exist';
    }
}

const proxy = new Proxy(student1, handler);

console.log(proxy.name);
console.log(proxy.age);
console.log(proxy.class);
