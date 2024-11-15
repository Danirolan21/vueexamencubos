<template>
  <div class="container">
    <h1>Tus compras</h1>
    <hr class="border border-danger border-2 opacity-100">
    <table class="table">
        <thead>
            <tr>
                <th>Núm. Pedido</th>
                <th>ID Cubo</th>
                <th>Fecha</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="compra in compras" :key="compra">
                <td>{{compra.idPedido}}</td>
                <td>{{compra.idCubo}}</td>
                <td>{{compra.fechaPedido}}</td>
            </tr>
        </tbody>
    </table>
    <div class="row justify-content-around"> 
        <router-link to="/perfil" class="btn btn-primary w-25 mt-3">
            Volver al perfil
        </router-link>
        <router-link to="/pedido" class="btn btn-primary w-25 mt-3">
            Realizar pedido
        </router-link>
    </div>
  </div>
</template>

<script>
import service from './../services/ServiceCubos'

    export default {
        name: "ComprasComponent",
        data() {
            return {
                compras: []
            }
        },
        mounted() {
            if(service.token == null) {
                this.$router.push("/login")
            } else {
                service.getCompras().then(response => {
                    this.compras = response;
                })
            }
        }
    }
</script>

<style>

</style>