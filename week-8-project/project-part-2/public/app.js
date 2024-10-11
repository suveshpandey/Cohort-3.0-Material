async function adminSection(){
    document.getElementById('adminSignupSection').style.display = "block";
    document.getElementById('firstBlock').style.display = "none";
}
async function adminSignup(event){
    const email = document.getElementById('adminSignupEmail').value;
    const password = document.getElementById('adminSignupPassword').value;
    const firstname = document.getElementById('adminSignupFirstname').value;
    const lastname = document.getElementById('adminSignupLastname').value;

    event.preventDefault();

    try{
        const response = await axios.post('http://localhost:3000/api/v1/admin/signup',{
            email : email,
            password : password,
            firstname : firstname,
            lastname : lastname
        })
        if(response.status == 201){
            alert("Admin successfully signed up.")
        }
    }
    catch(error){
        alert("An error occured while signing up.");
        console.log(error);
    }
    document.getElementById('adminSigninSection').style.display = "block";
    document.getElementById('adminSignupSection').style.display = "none";
}
async function adminSignin(event){
    const email = document.getElementById('adminSigninEmail').value;
    const password = document.getElementById('adminSigninPassword').value;
    const firstname = document.getElementById('adminSigninFirstname').value;
    const lastname = document.getElementById('adminSigninLastname').value;

    event.preventDefault();

    try{
        const response = await axios.post('http://localhost:3000/api/v1/admin/signin',{
            email : email,
            password : password,
            firstname : firstname,
            lastname : lastname
        })
        if(response.status == 200){
            localStorage.setItem("token", response.data.token);
            alert("Admin successfully signed in.")
        }
    }
    catch(error){
        alert("An error occured while signing in.");
        console.log(error);
    }
    document.getElementById('adminSigninSection').style.display = "none";
    document.getElementById('adminSignupSection').style.display = "none";
    document.getElementById('adminCreateCourse').style.display = "block";
}
async function createCourse(event){
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const imageUrl = document.getElementById('imageUrl').value;
    const creatorId = document.getElementById('creatorId').value;

    event.preventDefault();

    try{
        const token = localStorage.getItem("token");
        const response = await axios.post('http://localhost:3000/api/v1/admin/create-course',
            {
                title : title,
                description : description,
                price : price,
                imageUrl : imageUrl,
                creatorId : creatorId
            },
            {
                headers:{
                    token : token
                }
            }
        );  
        if(response.status == 201){
            alert("You have successfully created the course.");
        }
    }
    catch(error){
        alert("An error occured while creating the course.");
        console.log(error);
    }
    document.getElementById('adminSigninSection').style.display = "none";
    document.getElementById('adminSignupSection').style.display = "none";
    document.getElementById('adminCreateCourse').style.display = "none";
}


function userSection(){
    document.getElementById('userSignupSection').style.display = "block";
    document.getElementById('firstBlock').style.display = "none";
}
async function userSignup(event){
    const email = document.getElementById('userSignupEmail').value;
    const password = document.getElementById('userSignupPassword').value;
    const firstname = document.getElementById('userSignupFirstname').value;
    const lastname = document.getElementById('userSignupLastname').value;

    event.preventDefault();

    try{
        const response = await axios.post('http://localhost:3000/api/v1/user/signup',{
            email : email,
            password : password,
            firstname : firstname,
            lastname : lastname
        })
        if(response.status == 201){
            alert("User successfully signed up.")
        }
    }
    catch(error){
        alert("An error occured while signing up.");
        console.log(error);
    }
    document.getElementById('userSigninSection').style.display = "block";
    document.getElementById('userSignupSection').style.display = "none";
}
async function adminSignin(event){
    const email = document.getElementById('userSigninEmail').value;
    const password = document.getElementById('userSigninPassword').value;
    const firstname = document.getElementById('userSigninFirstname').value;
    const lastname = document.getElementById('userSigninLastname').value;

    event.preventDefault();

    try{
        const response = await axios.post('http://localhost:3000/api/v1/user/signin',{
            email : email,
            password : password,
            firstname : firstname,
            lastname : lastname
        })
        if(response.status == 200){
            localStorage.setItem("token", response.data.token);
            alert("User successfully signed in.")
        }
    }
    catch(error){
        alert("An error occured while signing in.");
        console.log(error);
    }
    document.getElementById('userSigninSection').style.display = "none";
    document.getElementById('userSignupSection').style.display = "none";
}