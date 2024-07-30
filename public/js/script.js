document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login-form');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submission
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      console.log('Form submitted!');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Username:', username);
      console.log('Password:', password);

    });
  });
  