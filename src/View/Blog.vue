<template>
    <h1>blog</h1>
    <div v-for="publi in publicaciones">
        <h1>{{ publi.title }}</h1>
        <img :src="publi.cover_image" alt="">

    </div>
    {{ publicaciones }}
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';


const publicaciones=ref([]);

onMounted(() =>{
    listar()
})

//funcion simple
async function listar(){
    const {data}=await axios.get("https://dev.to/api/articles");
    console.log(data);
    publicaciones.value=data;

}
//funcion anonima
const listar2=function(){

}

//funcion flecha
const listar3=() => {

}




</script>