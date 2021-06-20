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
          <input
           type="text"
           id="name"
           name="name"
           class="form-control"
           placeholder="Type seu nome aqui"
           v-model="employeeForm.name"
           :class="{ 'is-invalid': isSubmitted && $v.employeeForm.name,$error}">
           <div
            v-if="isSubmitted && !$v.employeeForm.name.required"
            class="invalid-feedback"> 'Employee name' field is required!
           </div>
        </div>
        <!--FIM DO BLOCO: Employee Name-->

        <!-- INICIO BLOCO: Job Role-->
        <div class="form-group">
          <label class="font-weight-bold">Job Role</label>
          <input
           type="text"
           id="job-role"
           name="job-role"
           class="form-control"
           placeholder="Type seu Job Role aqui"
           v-model="employeeForm.job_role"
           :class="{ 'is-invalid': isSubmitted && $v.employeeForm.job_role,$error}">
           <div
            v-if="isSubmitted && !$v.employeeForm.job_role.required"
            class="invalid-feedback"> 'Job Role' field is required!
           </div>
        </div>
        <!--FIM DO BLOCO: Job Role-->

        <!-- INICIO BLOCO: Salary-->
        <div class="form-group">
          <label class="font-weight-bold">Salary</label>
          <input
           type="number"
           id="salary"
           name="salary"
           class="form-control"
           placeholder="Type seu Salary aqui"
           v-model="employeeForm.salary"
           :class="{ 'is-invalid': isSubmitted && $v.employeeForm.salary,$error}"/>
           <div
            v-if="isSubmitted && !$v.employeeForm.salary.required"
            class="invalid-feedback"> 'Salary' field is required!
           </div>
        </div>
        <!--FIM DO BLOCO: Salary-->

        <!-- INICIO BLOCO: Birth-->
        <div class="form-group">
          <label class="font-weight-bold">Birth</label>
          <input
           type="date"
           id="employee_registration"
           name="employee_registration"
           class="form-control"
           placeholder="YYYY/MM/DD"
           v-model="employeeForm.birth"
           :class="{ 'is-invalid': isSubmitted && $v.employeeForm.employee_birth,$error}">
           <div
            v-if="isSubmitted && !$v.employeeForm.birth.required"
            class="invalid-feedback"> 'Birth' field is required!
           </div>
        </div>
        <!--FIM DO BLOCO: Birth-->

        <!-- INICIO BLOCO: Employee Registration-->
        <div class="form-group">
          <label class="font-weight-bold">Employee Registration</label>
          <input
           type="text"
           class="form-control"
           placeholder="Employee Registration"
           v-model="employeeForm.employee_registration"
           :class="{ 'is-invalid': isSubmitted && $v.employeeForm.employee_registration,$error}"/>
           <div
            v-if="isSubmitted && !$v.employeeForm.employee_registration.required"
            class="invalid-feedback"> 'Employee Registration' field is required!
           </div>
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

import { required } from 'vuelidate/lib/validators';

export default {
  name: 'CreateEmployeeComponent',
  data() {
    return {
      employeeForm: {
        name: '',
        job_role: '',
        salary: '',
        birth: '',
        employee_registration: '',
      },
      isSubmitted: false,
    };
  },
  validations: {
    employeeForm: {
      name: { required },
      job_role: { required },
      salary: { required },
      birth: { required },
      employee_registration: { required },

    },
  },
  methods: {
    handleSubmitForm() {
      this.isSubmitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
    }, // TO DO implementar a lógica do botão
  },
};

</script>
