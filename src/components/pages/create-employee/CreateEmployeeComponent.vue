<!-- Neste modelo de arquivo eu crio a configuração de cada tela-->
 <!-- <div class="row justify-contente-center"> tirei essa tag de alinhamento de pag
     e vou substituir para um container -->
        <!-- <h1>Create Employee</h1>
 </div> -->
 <template>
 <div class="container">
   <div class="card">
    <div class="card-header">
      <h3>Add Employee</h3>

  <h1>Create New Employee</h1>
    </div>
    <div class="card body">
      <form v-on:submit.prevent="handleSubmitForm()">
         <!-- INICIO BLOCO: Employee Name-->
        <div class="form-group">
          <label class="font-weight-bold">Employee Name</label>
          <input type="text"
           class="form-control"
           placeholder="Type seu nome aqui"
           v-model="employee.name" required
          >
        </div>
        <!--FIM DO BLOCO: Employee Name-->

        <!-- INICIO BLOCO: Job Role-->
        <div class="form-group">
          <label class="font-weight-bold">Job Role</label>
          <input type="text"
           class="form-control"
           placeholder="Type seu Job Role aqui"
           v-model="employee.job_role" required>
        </div>
        <!--FIM DO BLOCO: Job Role-->

        <!-- INICIO BLOCO: Salary-->
        <div class="form-group">
          <label class="font-weight-bold">Salary</label>
          <input type="number"
           class="form-control"
           placeholder="Type seu Salary aqui"
           v-model="employee.salary" required>
        </div>
        <!--FIM DO BLOCO: Salary-->

        <!-- INICIO BLOCO: Birth-->
        <div class="form-group">
          <label class="font-weight-bold">Birth</label>
          <input type="date"
           class="form-control"
           placeholder="YYYY/MM/DD"
           v-model="birth" required>
        </div>
        <!--FIM DO BLOCO: Birth-->

        <!-- INICIO BLOCO: Employee Registration-->
        <div class="form-group">
          <label class="font-weight-bold">Employee Registration</label>
          <input type="text"
           class="form-control"
           placeholder="Employee Registration"
           v-model="employee.employee_registration" required>
        </div>
        <!--FIM DO BLOCO: Employee Registration-->
        <hr>
        <div class="form-group">
          <button class="btn btn-primary" type="submit">+ Employee</button>
        </div>

      </form>
    </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'CreateEmployeeComponent',
  data() {
    return {
      employee: {
        name: '',
        job_role: '',
        salary: '',
        birth: '',
        employee_registration: '',
      },
    };
  },
  methods: {
    handleSubmitForm() {}, // TODO implementar a lógica do botão
  },
};

</script>
