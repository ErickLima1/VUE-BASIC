// main.js ou main.ts
import { createApp } from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar.vue'
import router from './router';
import { createPinia } from 'pinia';
import "./css/style.css";

const pinia = createPinia();

const app = createApp(App);
app.component("NavBar", NavBar);//Global
app.directive('email', { //Diretiva Global
    created(elemento, biding) {
        elemento.innerHTML = `<a href="mailto:${ biding.value }">${ biding.value }</a>`;
    }
}); 

app.use(pinia);
app.use(router);
app.mount('#app')
