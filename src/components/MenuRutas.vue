<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fs-5">
    <div class="container-fluid">
        <router-link class="navbar-brand" to="/"><img src="./../assets/images/rubik.png" alt="logo" width="60px"></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Marcas
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li v-for="marca in marcas" :key="marca">
                        <router-link class="dropdown-item" :to="'/cubos/' + marca">{{marca}}</router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Seguridad
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                    <li><router-link class="dropdown-item" to="/login">Iniciar sesión</router-link></li>
                    <li><router-link class="dropdown-item" to="/register">Registrarse</router-link></li>
                    <li><router-link class="dropdown-item" to="/logout">Cerrar sesión</router-link></li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Usuario
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                    <li><router-link class="dropdown-item" to="/perfil">Perfil</router-link></li>
                    <li><router-link class="dropdown-item" to="/compras">Compras</router-link></li>
                    <li><router-link class="dropdown-item" to="/pedido">Realizar Pedido</router-link></li>
                </ul>
            </li>
        </ul>
        </div>
    </div>
    </nav>
</template>

<script>
import service from './../services/ServiceCubos'

    export default {
        name: "MenuRutas",
        data() {
            return {
                marcas: []
            }
        },
        mounted() {
            service.getMarcas().then(response => {
                this.marcas = response;
            })
        }
    }
</script>

<style>

</style>