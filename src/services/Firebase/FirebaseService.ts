import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import { ref } from 'vue';

import AuthServiceInitialize, { AuthService } from './AuthService';
import StorageServiceInitialize, { StorageService } from './StorageService';

const firebaseConfig = {
    apiKey: "AIzaSyAn_tUn9oZNyxnFLYShWBEZQ-XrlrhOqmI",
    authDomain: "wanna-know-f25bf.firebaseapp.com",
    projectId: "wanna-know-f25bf",
    storageBucket: "wanna-know-f25bf.appspot.com",
    messagingSenderId: "868546342471",
    appId: "1:868546342471:web:4b36f1144e3c8588ca4b62",
    measurementId: "G-K46V0KEMQ8"
};

export const IsInitialized = ref(false);

// Módulos
export let Auth: AuthService;
export let Storage: StorageService;

// Initialize Firebase
export const Initialize = (): Promise<void> => {
    return new Promise((resolve) => {
        
        firebase.initializeApp(firebaseConfig);

        const auth = firebase.auth();
        const storage = firebase.storage();

        Auth = AuthServiceInitialize(auth);
        Storage = StorageServiceInitialize(storage);

        auth.onAuthStateChanged((user) => {
            if(user) {
                Auth.loadSession(user)
                    .catch(() => {
                        auth.signOut()
                            .finally(() => {
                                console.log("Finalizou o iniciar");
                                resolve();
                            });
                    })
                    .finally(() => {
                        IsInitialized.value = true;
                        resolve();
                    });
            }
            else {
                IsInitialized.value = true;
                resolve();
            }
        });
    });
};