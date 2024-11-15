<template>
  <div class="container">
    <h1>Bienvenido</h1>
    <hr class="border border-danger border-2 opacity-100">
    <div id="cubos" class="row justify-content-between">
        <div v-for="cubo in cubos" :key="cubo" class="card" style="width: 11rem;">
            <img :src="cubo.imagen" class="card-img-top" alt="imagen cubo">
            <div class="card-body">
                <h5 class="card-title">{{cubo.nombre}}</h5>
                <p class="card-text">{{cubo.precio}}€</p>
                <router-link :to="'/cubo/' + cubo.idCubo" class="btn btn-primary">Detalles</router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import service from './../services/ServiceCubos'

    export default {
        name: "HomeComponent",
        data() {
            return {
                cubos: []
            }
        },
        mounted() {
            service.getCubos().then(response => {
                this.cubos = response;
            })
        }
    }
</script>

<style>

</style>