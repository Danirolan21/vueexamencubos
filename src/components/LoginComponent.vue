<template>
  <div class="container">
    <h1>Login</h1>
    <hr class="border border-danger border-2 opacity-100">
    <form v-on:submit.prevent="iniciarSesion()">
        <label class="form-label">Email: </label>
        <input type="text" class="form-control" v-model="user.email"/>
        <label class="form-label">Password: </label>
        <input type="text" class="form-control" v-model="user.password"/>
        <button class="btn btn-primary w-100 mt-3">
            Iniciar Sesion
        </button>
    </form>
  </div>
</template>

<script>
import service from './../services/ServiceCubos'

    export default {
        name: "LoginComponent",
        data() {
            return {
                user: {
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
            iniciarSesion() {
                service.logIn(this.user).then(response => {
                    console.log(response);
                    this.$router.push("/perfil");
                })
            }
        }
    }
</script>

<style>

</style>