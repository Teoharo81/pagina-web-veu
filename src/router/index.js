import{createRouter,createWebHistory} from "vue-router";
import Inicio from "../View/Inicio.vue";
import Servicios from "../View/Servicios.vue";
import Contacto from "../View/Contacto.vue";
import Blog from "../View/Blog.vue";
import Producto from "../View/Producto.vue";



const rutas=[
    {
        path:'/',
        component:Inicio

    },

    {
        path:'/blog',
        component:Blog

    },

    {
        path:'/contacto',
        component:Contacto
    },

    {
        path:'/servicios',
        component:Servicios
    },

    {
        path:'/producto',
        component: Producto
    }

  
];

export const router=createRouter({
    history:createWebHistory(),
    routes:rutas,
})