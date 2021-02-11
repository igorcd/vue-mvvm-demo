<template>
    <div class="min-h-screen">





        <!-- Capa -->
        <Slide :index="0">
            <div class="flex mb-6 items-end">
                <img src="@/assets/img/tailwind.svg" class="w-28 mx-2"/>
                <img src="@/assets/img/logo.png" class="w-32 mx-2"/>
                <img src="@/assets/img/firebase.svg" class="w-28 mx-2"/>
            </div>
            <p class="text-3xl mb-6 text-center mx-36">
                Desenvolvendo uma Aplicação Realtime com o Firebase
            </p>
            <p class="text-2xl font-medium mb-6 text-center text-gray-600">
                Parte 1: Criando a interface
            </p>
        </Slide>



























        <!-- Slide 1 -->
        <Slide :index="1">
            <img src="@/assets/img/firebase.svg" class="w-36 mb-6"/>
            <p class="text-3xl font-medium mb-6">O que é o Firebase, e quais suas vantagens?</p>
        </Slide>






















        <!-- Slide 2 -->
        <Slide :index="2">
            <img src="@/assets/img/firebase.svg" class="w-36 mb-6"/>
            <p class="text-3xl font-medium mb-6">Banco de dados em tempo real</p>
            <div class="flex items-center mb-6">
                <input placeholder="Nome do contato" v-model="state.contact" class="border border-gray-500 rounded-xl p-3 mr-2"/>
                <button class="p-3 rounded-xl bg-gray-200" @click="addContact">Adicionar</button>
            </div>
            <div class="h-36 px-4 overflow-auto text-center">
                <p v-for="contact in state.contacts" :key="contact.id">{{ contact.name }}</p>
            </div>
        </Slide>



















        <!-- Slide 3 -->
        <Slide :index="3">
            <Lottie animation="dino" size="200px"/>
            <p class="text-3xl font-medium mb-8">Mas primeiro, vamos planejar nosso layout...</p>
        </Slide>

















        <!-- Slide 4 -->
        <Slide :index="4">
            <Lottie animation="brain" size="200px" :loop="true"/>
            <p class="text-3xl font-medium mb-8">Eu preciso de um framework CSS?</p>
        </Slide>

























        <!-- Slide 5 -->
        <Slide :index="5">
            <img src="@/assets/img/tailwind.svg" class="w-40 mb-6"/>
            <p class="text-3xl font-medium mb-6">Tailwind CSS, o melhor de dois mundos!</p>
        </Slide>



















        

        <!-- Slide 6 -->
        <Slide :index="6">
            <p class="text-3xl font-medium text-indigo-600 underline transform -rotate-3 mb-8">1 - Rastreabilidade da estilização</p>
            <p class="rastreabilidade__title">1 - Rastreabilidade da estilização</p>
        </Slide>






















        <!-- Slide 7 -->
        <Slide :index="7">
            <div class="flex flex-col sm:flex-row">
                <div class="p-3 rounded-xl transition-colors duration-1000 bg-blue-300 sm:bg-red-300 md:bg-purple-300 lg:bg-green-300 xl:bg-pink-300 2xl:bg-yellow-300 m-2">
                    <p class="text-lg sm:text-3xl font-medium">Responsividade facilitada</p>
                </div>
                <div class="p-3 rounded-xl transition-colors duration-1000 bg-blue-300 sm:bg-red-300 md:bg-purple-300 lg:bg-green-300 xl:bg-pink-300 2xl:bg-yellow-300 m-2">
                    <p class="text-lg sm:text-3xl font-medium">Responsividade facilitada</p>
                </div>
            </div>
        </Slide>





















        <!-- Slide 8 -->
        <Slide :index="8">
            <img src="@/assets/img/tailwind.svg" class="w-40 mb-6"/>
            <p class="text-3xl font-medium mb-6 dark:text-white">Dark mode fenomenal</p>
            <button class="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 dark:text-white" @click="state.darkMode = !state.darkMode">Toogle</button>
        </Slide>















        
        <!-- Slide 9 -->
        <Slide :index="9">
            <img src="@/assets/img/tailwind.svg" class="w-40 mb-6"/>
            <p class="text-3xl font-medium mb-6 dark:text-white">Customização</p>
        </Slide>























        <!-- Slide 9-->
        <Slide :index="10">
            <p class="text-3xl font-medium mb-4 dark:text-white">Componentização universal</p>
            <button class="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 dark:text-white mb-16" @click="state.attached = !state.attached">Toogle</button>
            <NintendoSwitch :attached="state.attached"/>
        </Slide>



















    </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive, watch } from 'vue';
import Slide from '@/components/Slide.vue';
import Lottie from '@/components/Lottie.vue';
import NintendoSwitch from '@/components/NintendoSwitch.vue';

import firebase from 'firebase/app';
import 'firebase/database';

interface SlidesMainViewState {
    contact: string;
    contacts: {id: string; name: string }[];
    darkMode: boolean;
    attached: boolean;
}

const SlidesMainView = defineComponent({
    components: { Slide, Lottie, NintendoSwitch },
    setup() {
        // State
        const state = reactive<SlidesMainViewState>({
            contact: '',
            contacts: [],
            darkMode: false,
            attached: false
        });

        watch(() => state.darkMode, (active) => {
            active ?
                document.querySelector('html')!.classList.add('dark') :
                document.querySelector('html')!.classList.remove('dark');
        });

        // Inicializar banco de dados
        const initDatabase = () => {
            if(firebase.apps.length == 0) {
                const firebaseConfig = {
                    apiKey: "AIzaSyAn_tUn9oZNyxnFLYShWBEZQ-XrlrhOqmI",
                    authDomain: "wanna-know-f25bf.firebaseapp.com",
                    databaseURL: "https://wanna-know-f25bf-default-rtdb.firebaseio.com",
                    projectId: "wanna-know-f25bf",
                    storageBucket: "wanna-know-f25bf.appspot.com",
                    messagingSenderId: "868546342471",
                    appId: "1:868546342471:web:4b36f1144e3c8588ca4b62",
                    measurementId: "G-K46V0KEMQ8"
                };
    
                firebase.initializeApp(firebaseConfig);

                const contactsRef = firebase.database().ref('contacts');

                contactsRef.on('child_added', (snapshot) => {
                    const data = snapshot.val() as { name: string };
                    if(data) {
                        state.contacts.push({ id: snapshot.key as string, name: data.name });
                    }
                });

                contactsRef.on('child_removed', (snapshot) => {
                    console.log("removeu " + snapshot.key);
                    state.contacts = state.contacts.filter(el => el.id != snapshot.key);
                });

                contactsRef.on('child_changed', (snapshot) => {
                    const newValue = snapshot.val();
                    state.contacts.find(el => el.id == snapshot.key)!.name = newValue.name;
                });
            }
        };

        // Adicionar contato
        const addContact = () => {
            firebase.database().ref('contacts').push({
                name: state.contact
            })
                .then(() => state.contact = '');
            
        };

        onMounted(() => initDatabase());

        return { addContact, state };
    }
});

export default SlidesMainView;
</script>

<style>
.rastreabilidade__title {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 500;
    color: rgb(99, 102, 241);
    text-decoration: underline;
    transform: rotate(-3deg);
}
</style>