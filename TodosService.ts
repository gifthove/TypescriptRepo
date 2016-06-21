/**
 * name
 */
class TodosService {
    
    static __id : number = 0;
    
    todos : any[];
    
    constructor() {
        
        this.todos =[
            {id: TodosService.__id++, name: 'Clean Cave', completed:false},
            {id: TodosService.__id++, name: 'Dryclean cape', completed:false},
            {id: TodosService.__id++, name: 'Save Gotham', completed:false},
        ];
        
    }
    
    clearCompleted(){
        var completed = this.todos.filter(function(x) {
            return x.completed;
        });
        
        var _this = this;
        
        completed.forEach(function(x){
           _this.remove(x);
        });
    }
    
    remove(todo){
       var instance = this._find(todo);
       this.todos.splice(this.todos.indexOf(instance),1);
    }
    
    _find(todoId){
        var filtered = this.todos.filter(function(x) {
            return x.id == todoId;
        });
        return filtered.length ? filtered[0] : null;
    }
}