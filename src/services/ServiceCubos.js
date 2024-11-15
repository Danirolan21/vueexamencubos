import Global from "@/Global";
import axios from "axios";

class ServiceCubos {
    constructor() {
        this.token = null
    }

    getCubos() {
        return new Promise((resolve) => {
            let cubos = [];
            let request = "api/Cubos";
            let url = Global.urlApiCubos + request;
            axios.get(url).then(response => {
                cubos = response.data;
                resolve(cubos);
            })
        })
    }

    getMarcas() {
        return new Promise((resolve) => {
            let marcas = [];
            let request = "api/Cubos/Marcas";
            let url = Global.urlApiCubos + request;
            axios.get(url).then(response => {
                marcas = response.data;
                resolve(marcas);
            })
        })
    }

    findCubo(id) {
        return new Promise((resolve) => {
            let cubo = null;
            let request = "/api/Cubos/" + id;
            let url = Global.urlApiCubos + request;
            axios.get(url).then(response => {
                cubo = response.data;
                resolve(cubo);
            })
        })
    }

    getComentariosCubo(id) {
        return new Promise((resolve) => {
            let comentarios = [];
            let request = "/api/ComentariosCubo/GetComentariosCubo/" + id;
            let url = Global.urlApiCubos + request;
            axios.get(url).then(response => {
                comentarios = response.data;
                resolve(comentarios);
            })
        })
    }

    getCubosMarca(marca) {
        return new Promise((resolve) => {
            let cubosXmarca = [];
            let request = "/api/Cubos/CubosMarca/" + marca;
            let url = Global.urlApiCubos + request;
            axios.get(url).then(response => {
                cubosXmarca = response.data;
                resolve(cubosXmarca);
            })
        })
    }

    //DEVUELVE EL TOKEN
    logIn(user) {
        return new Promise((resolve) => {
            let request = "api/Manage/Login";
            let url = Global.urlApiCubos + request;
            axios.post(url, user).then(response => {
                this.token = response.data.response;
                resolve(response.data.response);
            })
        })
    }

    //USA EL TOKEN
    getPerfil() {
        return new Promise((resolve) => {
            let request = "api/Manage/PerfilUsuario";
            let url = Global.urlApiCubos + request;
            axios.get(url, {headers: {
                'Authorization': 'Bearer ' + this.token
            }}).then(response => {
                resolve(response.data);
            })
        })
    }

    //USA EL TOKEN
    getCompras() {
        return new Promise((resolve) => {
            let compras = [];
            let request = "api/Compra/ComprasUsuario";
            let url = Global.urlApiCubos + request;
            axios.get(url, {headers: {
                'Authorization': 'Bearer ' + this.token
            }}).then(response => {
                compras = response.data;
                resolve(compras);
            })
        })
    }

    insertarPedido(idCubo) {
        return new Promise((resolve) => {
            let request = "api/Compra/InsertarPedido/" + idCubo;
            let url = Global.urlApiCubos + request;
            console.log(url);
            axios.post(url, "", {headers: {
                'Authorization': 'Bearer ' + this.token
            }}).then(response => {
                resolve(response);
            })
        })
    }
}

export default new ServiceCubos;