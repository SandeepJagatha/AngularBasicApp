## AngularJS Core Feature:

 - Directives 
 - Data binding
 - Filters
 - Modules
 - Routes
 - Controllers


### AngularJS calling order:

1. app.config()
2. app.run()
3. directive's compile functions (if they are found in the dom)
4. app.controller()
5. directive's link functions (again, if found)

[reference](https://github.com/angular/angular.js/blob/master/docs/content/guide/module.ngdoc)

### Custom event creation:

> .$on(name, listener) - *Listens for a specific event by a given name*

> .$broadcast(name, args) - *Broadcast an event down through the $scope of all children*

> .$emit(name, args) - *Emit an event up the $scope hierarchy to all parents, including the $rootScope*

### Detailed explanation:

- **_$rootScope.$emit_** only lets other $rootScope listeners catch it. This is good when you don't want every $scope to get it. Mostly a high level communication. Think of it as adults talking to each other in a room so the kids can't hear them.

- **_$rootScope.$broadcast_** is a method that lets pretty much everything hear it. This would be the equivalent of parents yelling that dinner is ready so everyone in the house hears it.

- **_$scope.$emit_** is when you want that $scope and all its parents and $rootScope to hear the event. This is a child whining to their parents at home (but not at a grocery store where other kids can hear).

- **_$scope.$broadcast_** is for the $scope itself and its children. This is a child whispering to its stuffed animals so their parents can't hear.



```javascript
// If you want to send an event between services/directives use broadcast:
 $rootScope.$broadcast('buttonPressedEvent');
// If you want you can pass arguments when you $broadcast:
$rootScope.$broadcast('buttonPressedEvent', { any: {} });
```

```javascript
 // And recieve it like this
 $rootScope.$on('buttonPressedEvent', function () { 
   //do stuff 
 }):
 // And then receive them with arguments
 $scope.$on('buttonPressedEvent', function(event, args) {
    var anyThing = args.any;
    // do what you want to do
});
```

- The Object.prototype property represents the Object prototype object.
- prototype is an object from which other objects inherits properties.
- Every JavaScript object has a prototype. The prototype is also an object.
- All JavaScript objects inherit their properties and methods from their prototype.
- All JavaScript objects inherit the properties and methods from their prototype.
- Objects created using an object literal, or with new Object(), inherit from a prototype called Object.prototype.Objects created with new Date() inherit the Date.prototype.The Object.prototype is on the top of the prototype chain.


### Properties

- **_Object.prototype.constructor_**
Specifies the function that creates an object's prototype.
- **_Object.prototype.__proto___** 
Points to the object which was used as prototype when the object was instantiated.
- **_Object.prototype.__noSuchMethod__ _**
Allows a function to be defined that will be executed when an undefined object member is called as a method.
- **_Object.prototype.__count__ _**
Used to return the number of enumerable properties directly on a user-defined object, but has been removed.
- **_Object.prototype.__parent__ _**
Used to point to an object's context, but has been removed.

### Methods

- **_Object.prototype.__defineGetter__()  _**
Associates a function with a property that, when accessed, executes that function and returns its return value.
- **_Object.prototype.__defineSetter__() _** 
Associates a function with a property that, when set, executes that function which modifies the property.
- **_Object.prototype.__lookupGetter__() _** 
Returns the function associated with the specified property by the __defineGetter__() method.
- **_Object.prototype.__lookupSetter__()  _**
Returns the function associated with the specified property by the __defineSetter__() method.
- **_Object.prototype.hasOwnProperty()_**
Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.
- **_Object.prototype.isPrototypeOf()_**
Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.
- **_Object.prototype.propertyIsEnumerable()_**
Returns a boolean indicating if the internal ECMAScript [[Enumerable]] attribute is set.
- **_Object.prototype.toSource() _**
Returns string containing the source of an object literal representing the object that this method is called upon; you can use this value to create a new object.
- **_Object.prototype.toLocaleString()_**
Calls toString().
- **_Object.prototype.toString()_**
Returns a string representation of the object.
- **_Object.prototype.unwatch() _**
Removes a watchpoint from a property of the object.
- **_Object.prototype.valueOf()_**
Returns the primitive value of the specified object.
- **_Object.prototype.watch() _**
Adds a watchpoint to a property of the object.
