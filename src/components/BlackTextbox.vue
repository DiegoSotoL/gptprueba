

<template>
  <div>
    <input type="text" class="black-textbox big big-input" v-model="textInput">
    <input type="text" class="black-textbox big big-input" v-model="result">

    <button class="black-textbox big big-button" @click="callApi">Click me</button>
  </div>
</template>

<script>
import { miServicio } from '../../services.js';
export default {
  data() {
    return {
      result: '',
      textInput: '',
    };
  },
  methods: {
    async callApi() {
      try {
        const resultado = await miServicio(this.textInput);
        this.result = resultado;
      } catch (error) {
        this.result = 'ERROR'+error;
        console.error(error);
      }
    }
  }
}
</script>
  <style>
  .black-textbox {
    background-color: black;
    color: white;
  }
  .big {
  font-size: 20px;
  padding: 100px;
}
input[type="text"] {
    font-size: 30px; /* Aumentar el tamaño de fuente */
    padding: 20px; /* Reducir el padding para que no se vea tan grande */
    display: block; /* Colocar los inputs en una línea separada */
    margin-bottom: 20px; /* Agregar un margen inferior para separar el botón */
  }

  button {
    font-size: 30px; /* Aumentar el tamaño de fuente */
    padding: 20px; /* Aumentar el padding para hacerlo más grande */
    display: block; /* Colocar el botón en una línea separada */
    margin-top: 20px; /* Agregar un margen superior para separarlo de los inputs */
  }
  /* Estilo para el botón cuando está activo */
  button:active {
    background-color: red; /* Cambiar el color de fondo */
    color: black; /* Cambiar el color de texto */
  }
  </style>