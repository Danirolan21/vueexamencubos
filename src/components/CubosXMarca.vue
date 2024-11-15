<template>
  <div class="container">
    <h1>Cubos de la marca <span class="text-danger">{{marca}}</span></h1>
    <hr class="border border-danger border-2 opacity-100">
    <div id="cubos" class="row justify-content-evenly">
        <div v-for="cubo in cubosxMarca" :key="cubo" class="card" style="width: 11rem;">
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
        name: "CubosXMarca",
        watch: {
            '$route.params.marca'(nextVal, oldVal) {
                if (nextVal != oldVal) {
                    this.loadCubos();
                }
            }
        },
        data() {
            return {
                cubosxMarca: [],
                marca: ""
            }
        },
        methods: {
            loadCubos() {
                this.marca = this.$route.params.marca;
                service.getCubosMarca(this.marca).then(response => {
                    this.cubosxMarca = response;
                })
            }
        },
        mounted() {
            this.loadCubos();
        }
    }
</script>

<style>

</style>