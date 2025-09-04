<script>
import DarkNavbar from './components/darkNavbar.vue';
import MyFooter from './components/MyFooter.vue';


// import Home from './pages/Home.vue';

export default {
    name: 'App',
    // La propiedad "components" de Vue indica qué componentes usamos en el template.
    components: { DarkNavbar, MyFooter, },
}
</script>

<template>
    <!-- <header>
        <nav class="flex items-center gap-8 p-4 bg-slate-300">
            <p class="text-xl">DV Social</p>
            <ul class="flex gap-6">
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/login">Login</RouterLink></li>
                <li><RouterLink to="/chat">Chat General</RouterLink></li>
                <li><RouterLink to="/register">Register</RouterLink></li>
            </ul>
        </nav>
    </header>  -->
    <DarkNavbar />

    <main class="container p-8 mx-auto">
            <!-- 
    RouterView es un componete que registra globalmente el use(router) (en main.js).
    Esto define dónde queremos que se monte los componentes de las vistas que 
    correspondan a la URL.
    -->
    <RouterView />
    </main>

    <!-- <footer class="flex justify-center items-center bg-slate-800 text-white p-4 h-25">
        <p>Da Vinci &copy; 2025</p>
    </footer> -->
    <MyFooter />
</template>