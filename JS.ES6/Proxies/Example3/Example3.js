// Using proxy for validation 

let student = {
    name: 'Jack',
    age: 24
}

const handler = {
    get(obj, prop) {
        if (prop == 'name') {
            return obj[prop];
        }
        else {
            return 'Not allowed';
        }
    }
}

const proxy = new Proxy(student, handler);
console.log(proxy.name);
console.log(proxy.age);
