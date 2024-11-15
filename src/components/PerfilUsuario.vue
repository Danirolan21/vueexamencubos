<template>
  <div v-if="user" class="container">
    <h1>Mi perfil (User {{user.idUsuario}})</h1>
    <hr class="border border-danger border-2 opacity-100">
    <table class="table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{user.nombre}}</td>
                <td>{{user.email}}</td>
            </tr>
        </tbody>
    </table>
    <router-link to="/compras" class="btn btn-primary w-100 mt-3">
        Mostrar Compras
    </router-link>
  </div>
</template>

<script>
import service from './../services/ServiceCubos'

    export default {
        name: "PerfilUsuario",
        data() {
            return {
                user: null
            }
        },
        mounted() {
            if(service.token == null) {
                this.$router.push("/login")
            } else {
                service.getPerfil().then(response => {
                    this.user = response;
                    console.log(response);
                    
                })
            }
        }
    }
</script>

<style>

</style>