import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import DetallesCubo from './components/DetallesCubo.vue';
import CubosXMarca from './components/CubosXMarca.vue';
import LoginComponent from './components/LoginComponent.vue';
import RegisterComponent from './components/RegisterComponent.vue';
import LogoutComponent from './components/LogoutComponent.vue';
import PerfilUsuario from './components/PerfilUsuario.vue';
import ComprasComponent from './components/ComprasComponent.vue';
import PedidosComponent from './components/PedidosComponent.vue';

const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/cubo/:id", component: DetallesCubo
    },
    {
        path: "/cubos/:marca", component: CubosXMarca
    },
    {
        path: "/login", component: LoginComponent
    },
    {
        path: "/register", component: RegisterComponent
    },
    {
        path: "/logout", component: LogoutComponent
    },
    {
        path: "/perfil", component: PerfilUsuario
    },
    {
        path: "/compras", component: ComprasComponent
    },
    {
        path: "/pedido", component: PedidosComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;