function traer() {
    document.getElementById('contenedor').hidden = false;
    var con = document.querySelector('#photo');
    var name = document.querySelector('#Name');
    var email1 = document.querySelector('#Email');
    var BD = document.querySelector('#BD');
    var adress = document.querySelector('#Adress');
    var phone = document.querySelector('#Phone');
    var password = document.querySelector('#Password');
    fetch('https://randomuser.me/api/')
        .then(result => result.json())
        .then(data => {
            con.innerHTML =
                `<img src="${data.results[0].picture.large} " alt="User " id="pp" class="img-fluid mt-0 rounded-circle" height="150px" width="150px">`;
            name.innerHTML = `<p class="lead text-center">Mi nombre es:</p>
                            <h2 class="text-center">${data.results[0].name.first} ${data.results[0].name.last}</h2>`;
            email1.innerHTML = `<p class="lead text-center">Mi E-mail es:</p>
                            <h2 class="text-center">${data.results[0].email}</h2>`;
            BD.innerHTML = `<p class="lead text-center">Mi cumpleaños es:</p>
                            <h2 class="text-center">${data.results[0].dob.date}</h2>`;
            adress.innerHTML = `<p class="lead text-center">Vivo en:</p>
                            <h2 class="text-center">${data.results[0].location.city}, ${data.results[0].location.country}</h2>`;
            phone.innerHTML = `<p class="lead text-center">Mi telefono es:</p>
                            <h2 class="text-center">${data.results[0].cell}</h2>`;
            password.innerHTML = `<p class="lead text-center">Mi contraseña es:</p>
                            <h2 class="text-center">${data.results[0].login.password}</h2>`;

        });
}



//Optional JavaScript -->
//jQuery first, then Popper.js, then Bootstrap JS -->
