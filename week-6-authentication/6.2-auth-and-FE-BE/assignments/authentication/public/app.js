async function signup(){
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    try{
        const response = await axios.post("http://localhost:3000/signup", {
            username : username,
            password : password
        });
        if(response.status == 201) alert(response.data.msg);
        else alert("Unexpected status code recieved!");
    }
    catch(error){
        alert("An error occured while siging up.")
        console.log(error);
    }
}
async function signin(){
    const username = document.getElementById("signin-username").value;
    const password = document.getElementById("signin-password").value;

    try{
        const response = await axios.post("http://localhost:3000/signin", {
            username : username,
            password : password
        });

        if(response.status == 200){
            localStorage.setItem("token", response.data.token);
            alert(response.data.msg);
        }
        else alert("Unexpected status code recieved!");
    }
    catch(error){
        alert("An error occured while siging in.")
        console.log(error);
    }
}
async function getMyInfo(){
    const response = await axios.get("http://localhost:3000/me",{
        headers:{
            token: localStorage.getItem("token")
        }
    })
    const username = response.data.username;
    const password = response.data.password;
    clearInfo();
    document.getElementById('usernameInfo').innerHTML += username;
    document.getElementById('passInfo').innerHTML += password;
}
function clearInfo(){
    document.getElementById('usernameInfo').innerHTML = "";
    document.getElementById('passInfo').innerHTML = "";
}