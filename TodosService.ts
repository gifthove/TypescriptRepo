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
        let completed = this.todos.filter(function(x) {
            return x.completed;
        });
        
        let _this = this;
        
        completed.forEach(function(x){
            _this.remove(x);
        });
    }
}