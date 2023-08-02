window.addEventListener('load', ()=> {
    const form = document.getElementById('formulario')
    const usuario = document.getElementById('usuario')
    const email = document.getElementById('email')
    const password = document.getElementById('password') 
    const passwordConfirm = document.getElementById('passwordConfirm')
    const apellidop = document.getElementById('apellidop')
    const apellidom = document.getElementById('apellidom')
    const nrocelular = document.getElementById('nrocelular')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        Validar()
    })

    const Validar = () => {
        const usuarioValor = usuario.value.trim()
        const emailValor = email.value.trim()
        const passValor = password.value.trim()
        const passconfirmValor = passwordConfirm.value.trim()
        const apellidopValor = apellidop.value.trim()
        const apellidomValor = apellidom.value.trim()
        const nrocelularValor = nrocelular.value.trim()

        if(!usuarioValor){
            VIncorrecta(usuario, 'Campo vacio')
        }
        else{
            VCorrecta(usuario)
        }

        if(emailValor == ""){
            VIncorrecta(email, 'Campo vacio')
        }
        else if(!VEmail(emailValor)){
            VIncorrecta(email, 'El e-mail no es valido')
        }
        else{
            VCorrecta(email)
        }

        const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/   
        if(!passValor){
            VIncorrecta(password, 'Campo vacio')
        }
        else if(passValor.length < 8){
            VIncorrecta(password, 'Se requiere 8 caracteres como mínimo')
        }
        else if(!passValor.match(er)){
            VIncorrecta(password, 'Se requiere al menos una mayúscula, una minúscula y un número')
        }
        else{
            VCorrecta(password)
        }

        if(!passconfirmValor){
            VIncorrecta(passwordConfirm, 'Confirme su contraseña')
        }
        else if(passValor != passconfirmValor){
            VIncorrecta(passwordConfirm, 'Las contrañseñas no coinciden')
        }
        else{
            VCorrecta(passwordConfirm)
        }

        if(!apellidopValor){
            VIncorrecta(apellidop, 'Campo vacio')
        }
        else{
            VCorrecta(apellidop)
        }

        if(!apellidomValor){
            VIncorrecta(apellidom, 'Campo vacio')
        }
        else{
            VCorrecta(apellidom)
        }

        if(!nrocelularValor){
            VIncorrecta(nrocelular, 'Campo vacio')
        }
        else if(nrocelular.value < 99999999 || nrocelular.value > 1000000000){
            VIncorrecta(nrocelular, 'Se requiere 9 dígitos')
        }
        else{
            VCorrecta(nrocelular)
        }

    }

    const VIncorrecta = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje
        formControl.className = 'form-control i'
    }

    const VCorrecta = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control c'
    }

    const VEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
})