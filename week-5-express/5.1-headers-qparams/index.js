async function get(){

    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();

    // const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");

    document.getElementById("data").innerHTML = data.title;
}

get();
