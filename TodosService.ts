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
        
    }
}