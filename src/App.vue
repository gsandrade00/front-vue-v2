<!--Neste arquivo vue principal eu faço a configuração do estlo que quero utilizar pro conjunto,
por exemplo da aba de navegação
Dúvida! É aqui que eu defino o estilo artistico de cada tela? Ou faço isso separado dentro
 do arquivo vue de cada tela?-->
<template>
  <div id="app">
    <!--INICIO NAVBAR-->
      <nav class="navbar navbar-expand-sm bg-dark nvbar-dark">
        <a class="navbar-brand order-md-last">CRUD VUE.JS +POSTGRESQL + Node + AZURE</a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Create New Employee</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/list-employees">List All Employees</router-link>
          </li>
        </ul>
      </nav>
      <!--FIM NAVBAR-->

      <div class="container mt-5">
      <router-view></router-view>
      </div>
 </div>
</template>
