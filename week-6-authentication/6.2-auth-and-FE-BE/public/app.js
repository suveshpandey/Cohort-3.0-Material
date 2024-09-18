async function signup(){
    const username = document.getElementById('signup-username');
    const password = document.getElementById('signup-pass');

    const response = await axios.post("http://localhost:3000/signup",{
        username: username,
        password: password
    });
    alert("You are signedin ...")
}