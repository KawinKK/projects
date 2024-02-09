import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import blogs from "../data/blog";
import "./Detail.css"

export default function Detail() {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    useEffect(()=>{
        const result = blogs.find((item)=>(item.id===parseInt(id)))
        setTitle(result.title);
        setImage(result.image_url);
        setContent(result.content);
        setAuthor(result.author);
    }, []);

    return(
        <div className="container">
            <h2 className="title">Blog : {title}</h2>
            <img src={image} alt={title} className="blog-image"/>
            <div className="blog-detail">
                <strong>Author : {author}</strong>
                <p>{content}</p>
            </div>
        </div>
    );
}