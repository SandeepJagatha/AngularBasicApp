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

