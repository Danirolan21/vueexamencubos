<template>
  <div>
    <h1>Cerrar sesión</h1>
    <p v-if="mensaje != ''">{{mensaje}}</p>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script>
import service from './../services/ServiceCubos'

    export default {
        name: "LogoutComponent",
        data() {
            return {
                mensaje: ""
            }
        },
        mounted() {
            
            if(service.token == null) {
                this.$router.push("/login")
            } else {
                service.token = null;
                this.mensaje = "Usuario logueado, cerrado sesión con exito..."
            }
        }
        
    }
</script>

<style>

</style>