import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import PublicChat from '../pages/PublicChat.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';

// Definimos la lista de rutas de nuestra aplicación.
// Esto es, un array de objetos de "ruta".
// Cada "ruta" debe tener, al menos, dos propiedades:
// 1. path: La URL a partir de la raíz del sitio.
// 2. component: El componente que queremos renderizar para esa URL.
const routes = [
    { path: '/',                component: Home, },
    { path: '/chat',            component: PublicChat, },
    { path: '/login',        component: Login, },
    { path: '/register',    component: Register, },
];

const router = createRouter({
    // routes: routes,
    routes,
    history: createWebHistory(),
});

export default router;