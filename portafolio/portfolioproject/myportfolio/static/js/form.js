function validarFormulario(event) {

  event.preventDefault();
  
  
  
  const nombre = document.getElementById('nombre').value.trim();
  
  const email = document.getElementById('correo').value.trim();
  
  const mensaje = document.getElementById('mensaje').value.trim();
  
  
  
  if (nombre === '') {
  
  alert('Por favor ingrese su nombre');
  
  return;
  
  }
  
  
  
  if (asunto === '') {
  
  alert('Por favor ingrese el asunto');
  
  return;
  
  }
  
  
  
  if (email === '') {
  
  alert('Por favor ingrese su correo electrónico');
  
  return;
  
  }
  
  
  
  if (mensaje === '') {
  
  alert('Por favor ingrese su mensaje');
  
  return;
  
  }
  
  
  
  // Si todos los campos están validados, puedes enviar el formulario
  
  enviarFormulario();
  
  }
  
  
  
  function enviarFormulario() {
  
  const btn = document.getElementById('button');
  
  btn.value = 'enviando...';
  
  
  
  const serviceID = 'default_service';
  
  const templateID = 'template_yd5uwfa';
  
  
  
  emailjs.sendForm(serviceID, templateID, document.getElementById('form'))
  
  .then(() => {
  
  btn.value = 'Enviar mensaje';
  
  alert('MENSAJE ENVIADO CORRECTAMENTE!');
  
  }, (err) => {
  
  btn.value = 'Enviar mensaje';
  
  alert(JSON.stringify(err));
  
  });
  
  }
  
  
  
  document.getElementById('form').addEventListener('submit', validarFormulario);

  //borra campos  despues de la alerta enviado

  function borrarCampos() {

    document.getElementById('nombre').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('mensaje').value = '';
  }

  document.getElementById('form').addEventListener('submit', borrarCampos);

  

