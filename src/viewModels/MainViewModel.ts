import UserDTO from '@/DTOs/UserDTO';
import { reactive } from 'vue';

interface MainViewModelState {
    user: UserDTO | null;
}

class MainViewModel {

    // Estado da nossa aplicação
    private state = reactive<MainViewModelState>({
        user: null
    });

    // Titulo
    public get user(){
        return this.state.user;
    }
    public set user(value: UserDTO | null) {
        this.state.user = value;
    }

}

export default new MainViewModel();