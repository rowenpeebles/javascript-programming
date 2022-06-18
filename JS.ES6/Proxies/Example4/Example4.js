// Using proxy for a read only view of an object

let student = {
    name: 'Jack',
    age: 23
}

const handler = {
    set: function (obj, prop, value) {
        if (obj[prop]) {
            console.log('Read only');
        }
    }
};

const proxy = new Proxy(student, handler);

proxy.name = 'John';
proxy.age = 33;
