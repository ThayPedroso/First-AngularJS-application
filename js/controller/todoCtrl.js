angular.module("todo").controller("todoCtrl", function ($scope){
    $scope.app = "Shopping List"
    $scope.todos = [{text:"Milk", done:false}, {text:"Bread", done:false}]

    $scope.getTotalTodos = function () {
        return $scope.todos.length
    }

    $scope.clearCompleted = function () {
        var todosAux = $scope.todos.filter(function (todo) {
            return !todo.done
        });
        $scope.todos = todosAux;
    }

    $scope.addTodo = function () {
        $scope.todos.push({text: $scope.formTodoText, done: false})
        $scope.formTodoText = ''
    }
})