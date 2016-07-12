angular.module("todoListApp", [])

.controller('mainCtrl', function($scope, dataService) {
  $scope.addTodo = function() {
    var todo = {name: "This is a new todo."};
    $scope.todos.push(todo);
  };

  $scope.helloConsole=dataService.helloConsole;
  $scope.learningNgChange = function () {
    console.log("input changed");
  };
  dataService.getTodos(function(response) {
    console.log(response.data);
    return response.data;
  });

  $scope.deleteTodo = function(todo, $index) {
    dataService.deleteTodo(todo);
    $scope.todos.splice($index, 1);
  };

  $scope.deleteTodo = function(todo) {
    dataService.deleteTodo(todo);
  };

})
.service('dataService', function($http) {
  this.helloConsole = function() {
    console.log('this is a service');
  };

  this.getTodos = function(callback) {
    $http.get('data/todos.json')
    .then(callback);
  };

  this.deleteTodo = function(todo) {
    console.log("The " + todo.name + " todo had been deleted!");
    //other logic
  };

  this.saveTodo = function(todo) {
    console.log("The " + todo.name + " todo had been saved!");
    //other logic
  };
});

/*
person = {
  name: "Ari Lerner",
  address: "1234 Main St",
  pets: ["dog", "cat", "bird"],
  */
