import { useState, useEffect } from "react";

//custom hook 
export function usePostTitle(){
    const [post, setPost] = useState({});

    async function getPost(){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        setPost(data);
    }
    useEffect(()=>{
        getPost();
    }, [])

    return post.title
}

//  ageneral hook to fetch data from a url
export function useFetch(url){
    const [finalData, setFinalData] = useState({});
    const [loading, setLoading] = useState(false);

    async function getDetails(){
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setFinalData(data);
        setLoading(false);
    }
    useEffect(()=>{
        getDetails();
    }, [url])
    // useEffect(()=>{
    //     setInterval(getDetails, 10*1000);
    // }, [])

    return {
        finalData,
        loading
    }
}