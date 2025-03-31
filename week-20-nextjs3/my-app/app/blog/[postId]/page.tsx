import axios from "axios";

export default async function({params}: any){
    const postId = params.postId;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const blog = response.data;
    
    return(
        <div>
            id- {blog.id}
            <br />
            title- {blog.title}
            <br />
            body- {blog.body}
        </div>
    )
}