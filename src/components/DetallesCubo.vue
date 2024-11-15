<template>
  <div class="container">
    <h1>Detalles</h1>
    <hr class="border border-danger border-2 opacity-100">
    <div v-if="cubo" class="card" style="width: 100%">
        <img :src="cubo.imagen" class="card-img-top" alt="imagen cubo">
        <div class="card-body">
            <table class="table table-danger table-striped">
                <thead>
                    <tr>
                        <th>Marca y modelo</th>
                        <th>Valoración</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{cubo.marca}} {{cubo.modelo}}</td>
                        <td>{{cubo.valoracion}}</td>
                        <td>{{cubo.precio}}€</td>
                    </tr>
                </tbody>
            </table>
            <router-link to="/" class="btn btn-warning w-100">Volver</router-link>
        </div>
    </div>
    
    <div class="mt-2" v-if="comentarios.length != 0">
        <h1>Comentarios</h1>
        <hr class="border border-danger border-2 opacity-100">
        <table class="table">
            <tbody>
                <tr v-for="comentario in comentarios" :key="comentario">
                    <td>Usuario {{comentario.idUsuario}}</td>
                    <td>{{comentario.comentario}}</td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import service from './../services/ServiceCubos'

    export default {
        name: "DetallesCubo",
        data() {
            return {
                cubo: null,
                comentarios: []
            }
        },
        mounted() {
            let idCubo = this.$route.params.id;
            
            service.findCubo(idCubo).then(response => {
                this.cubo = response;
            })

            service.getComentariosCubo(idCubo).then(response => {
                this.comentarios = response;
            })
        }
    }
</script>

<style>

</style>