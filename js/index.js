function salvar(){
    var email = document.getElementById('email').value
    if (!email) {
        alert("Preencha o campo email")
        return
    }else{
        let emails = new Array()

    /* Adiciona um novo valor no array criado */
    emails.push({ email: email })

    /* Salva o item */
    localStorage.setItem("emails", JSON.stringify(email))
    alert("email cadastrado com sucesso")
    }
  
}