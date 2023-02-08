document.forms['form'].onsubmit = function (event) {

   mailformat = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
   let correct = true;
   document.getElementById("username").removeAttribute("class");
   document.getElementById("email").removeAttribute("class");
   document.getElementById("password").removeAttribute("class");
   document.getElementById("password1").removeAttribute("class");

   document.getElementById("username-error").setAttribute("class", "message-hidden");
   document.getElementById("email-error").setAttribute("class", "message-hidden");
   document.getElementById("password-error").setAttribute("class", "message-hidden");
   document.getElementById("password1-error").setAttribute("class", "message-hidden");


   if (this.username.value.trim() === "") {
      inputError("username","Rellene este campo");
      correct = false;
   } else if (/\d/.test(this.username.value)) {
      inputError("username","Nombre no puede contener números");
      correct = false;
   } else {
      document.getElementById("username").setAttribute("class", "input-valid");
   }
   if (this.email.value.trim() === "") {
      inputError("email","Rellene este campo");
      correct = false;
   } else if (!mailformat.test(this.email.value)) {
      inputError("email","Email inválido");
      correct = false;
   } else {
      document.getElementById("email").setAttribute("class", "input-valid");
   }
   if (this.password.value.trim() === "") {
      inputError("password","Rellene este campo");
      correct = false;
   } else if (this.password.value.length < 8) {
      inputError("password","Debe tener al menos 8 caracteres");
      correct = false;
   } else {
      document.getElementById("password").setAttribute("class", "input-valid");
   }
   if (this.password1.value.trim() === "") {
      inputError("password1","Rellene este campo");
      correct = false;
   } else if (this.password1.value != this.password.value) {
      inputError("password1","Las contraseñas no coinciden");
      correct = false;
   } else {
      document.getElementById("password1").setAttribute("class", "input-valid");
   }

   if(correct){
      alert("Inscripción correcta!");
   }else{
      event.preventDefault();
   }
} 

function inputError(inputName,errorText){
   document.getElementById(`${inputName}-error`).innerHTML = errorText;
   document.getElementById(inputName).setAttribute("class", "input-error");
   document.getElementById(`${inputName}-error`).setAttribute("class", "message-error");
}