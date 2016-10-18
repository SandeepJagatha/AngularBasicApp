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

> *If you want to send an event between services/directives use broadcast:*

```javascript
 $rootScope.$broadcast('buttonPressedEvent');
```

> *And recieve it like this*

```javascript
 $rootScope.$on('buttonPressedEvent', function () { 
   //do stuff 
 }):
```
