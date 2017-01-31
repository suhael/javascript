// Lets create a test function and set a member on its prototype
function foo() { };
foo.prototype.bar = 123;

// Lets create two instances
var bas = new foo();
var qux = new foo();

// Show original value
console.log(bas.bar); // 123
console.log(qux.bar); // 123

// Modify prototype
foo.prototype.bar = 456;

// All instances changed
console.log(bas.bar); // 456
console.log(qux.bar); // 456



// Class definition
function someClass() {
    // Properties go here
    this.someProperty = 'some initial value';
}

// Member functions go here:
someClass.prototype.someMemberFunction = function () {
    /* Do something using this */
    this.someProperty = 'modified value';
}

// Creation
var instance = new someClass();

// Usage
console.log(instance.someProperty); // some initial value
instance.someMemberFunction();
console.log(instance.someProperty); // modified value