import TodoModel from '@/models/TodoModel';
import { reactive } from 'vue';
import { v4 as uuid } from 'uuid';

interface TodoViewModelState {
    todos: TodoModel[];
    title: string;
    time: string;
}

class TodoViewModel {

    // Estado da nossa aplicação
    private state = reactive<TodoViewModelState>({
        todos: [],
        title: '',
        time: ''
    });

    // TODOs
    public get todos() {
        return this.state.todos.filter(el => el.active);
    }

    // Titulo
    public get title(){
        return this.state.title;
    }
    public set title(value: string) {
        this.state.title = value;
    }

    // Hora
    public get time(){
        return this.state.time;
    }
    public set time(value: string) {
        this.state.time = value;
    }

    // Adicionar TODO
    public addTodo() {
        if(this.state.title.length > 0 && this.state.time.length > 0) {
            this.state.todos.unshift({ id: uuid(), active: true, time: this.state.time, title: this.state.title });
            this.state.title = '';
            this.state.time = '';
        }
        else {
            window.alert("Os campos titulo e horário são obrigatórios");
        }
    }

    // Fechar TODO
    public closeTodo(id: string){
        const todo = this.state.todos.find(el => el.id == id);
        if(todo) {
            todo.active = false;
        }
    }

    // Fetch TODOs
    public fetchTodos() {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.state.todos = [{
                    id: uuid(),
                    active: true,
                    time: "19:30",
                    title: "Ir ao dentista"
                }];
                console.log("resolveu");
                resolve();
            }, 3000);
        });
    }
}

export default new TodoViewModel();