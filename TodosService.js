/**
* name
*/
var TodosService = (function () {
    function TodosService() {
        this.todos = [
            { id: TodosService.__id++, name: 'Clean Cave', completed: false },
            { id: TodosService.__id++, name: 'Dryclean cape', completed: false },
            { id: TodosService.__id++, name: 'Save Gotham', completed: false }
        ];
    }
    TodosService.prototype.clearCompleted = function () {
        var completed = this.todos.filter(function (x) {
            return x.completed;
        });

        var _this = this;

        completed.forEach(function (x) {
            _this.remove(x);
        });
    };

    TodosService.prototype.remove = function (todo) {
        var instance = this._find(todo);
        this.todos.splice(this.todos.indexOf(instance), 1);
    };

    TodosService.prototype._find = function (todoId) {
        var filtered = this.todos.filter(function (x) {
            return x.id == todoId;
        });
        return filtered.length ? filtered[0] : null;
    };
    TodosService.__id = 0;
    return TodosService;
})();
