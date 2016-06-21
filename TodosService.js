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
    TodosService.__id = 0;
    return TodosService;
})();
