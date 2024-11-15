<template>
  <div class="container">
    <h1>Realizar pedidos</h1>
    <hr class="border border-danger border-2 opacity-100">
    <form v-on:submit.prevent="comprarCubo()">
        <label class="form-label">Elige un cubo: </label>
        <select class="form-select" v-model="selectedCube">
            <option v-for="cubo in cubos" :key="cubo" :value="cubo.idCubo">
                {{cubo.nombre}}
            </option>
        </select>
        <button class="btn btn-primary w-100 mt-3">
            Comprar Cubo
        </button>
    </form>
  </div>
</template>

<script>
import service from './../services/ServiceCubos'

    export default {
        name: "PedidosComponent",
        data() {
            return {
                cubos: [],
                selectedCube: 1
            }
        },
        methods: {
            comprarCubo() {
                service.insertarPedido(this.selectedCube).then(response => {
                    console.log(response);
                    this.$router.push('/compras')
                })
            }
        },
        mounted() {
            if(service.token == null) {
                this.$router.push("/login")
            } else {
                service.getCubos().then(response => {
                    this.cubos = response;
                })
            }
        }
    }
</script>

<style>

</style>