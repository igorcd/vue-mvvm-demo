import firebase from 'firebase/app';
import firebaseErrorsMap from '@/utils/firebaseErrorsMap';
import { isAfter } from 'date-fns';
import { DEFAULT_API_ERROR } from '@/utils/constants';

export interface AuthService {
    isAuthenticated: () => boolean;
    loadSession: (user: firebase.User) => Promise<void>;
    signIn: (data: { email: string; password: string}) => Promise<void>;
    register: (data: { email: string; password: string; name: string; phone: string; avatar: string }) => Promise<firebase.User>;
}

export default function AuthServiceInitialize(Auth: firebase.auth.Auth) {
    // Variáveis

    let expirationTime: number;

    // Métodos
    const isAuthenticated = () => {
        return Auth.currentUser != null && isAfter(expirationTime, Date.now());
    };

    const loadSession = (user: firebase.User): Promise<void> => {
        return new Promise((resolve, reject) => {
            user.getIdTokenResult()
                .then(data => {
                    expirationTime = new Date(data.expirationTime).getTime();
                    resolve();
                })
                .catch(error => {
                    reject(error);
                });
        });
    };

    const signIn = (data: { email: string; password: string}): Promise<void> => {
        return new Promise((resolve, reject) => {
            Auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                .then(() => Auth.signInWithEmailAndPassword(data.email, data.password))
                .then(resp => resp.user?.getIdTokenResult())
                .then(authData => {
                    
                    expirationTime = new Date(authData?.expirationTime!).getTime();
                    resolve();
                })
                .catch(error => {
                    reject(firebaseErrorsMap.get(error.code) || DEFAULT_API_ERROR);
                });
        });
    };

    const register = (data: { email: string; password: string; name: string; phone: string; avatar: string }): Promise<firebase.User> => {
        return new Promise((resolve, reject) => {

            // Criar usuário
            Auth.createUserWithEmailAndPassword(data.email, data.password)
            // Atualizar o nome
                .then(resp => {
                    return resp.user?.updateProfile({ displayName: data.name, });
                })
                // Subir a imagem do perfil
                .then(() => resolve(Auth.currentUser!))
                .catch(error => {
                    reject(firebaseErrorsMap.get(error.code) || DEFAULT_API_ERROR);
                });
        });
    };

    const AuthService: AuthService = {
        isAuthenticated,
        loadSession,
        signIn,
        register
    };

    return AuthService;
}