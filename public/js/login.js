  async function authorization (){

    const email  = document.getElementById('email').value;
    const password = document.getElementById('password').value;
       
   
     axios.post('http://13.51.161.135:4000/login/validiation',{ email ,password})
      .then( resonse => {
       
         localStorage.setItem('token' , resonse.data.token);

         window.location.href = '/expense-page';

      })
      .catch(errr => {
       console.log(errr);
      })
     

 };