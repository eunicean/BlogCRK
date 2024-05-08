import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

Post.protoTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

function Post({idPost}){
    const URLAPI = `http://127.0.0.1:21231/general-content/${idPost}`;
    const [postContent, setPost] = useState([]);
    const [formattedDate, setFormattedDate] = useState('');
    
    async function viewPost(){
        try {
            const response = await fetch(URLAPI, {
                method: 'GET',
                headers: {
                  'Content-type': 'application/json'
                }
            });
            if (!response.ok) {
                alert("Ocurrió un error al cargar el contenido del blog");
                return;
            };

            const data = await response.json();
            setPost(data)
            const date = new Date(data.created_at).toISOString().split('T')[0];
            setFormattedDate(date);
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        viewPost();
    }, []);

    return(
        <div className="contentGContainer">
            {postContent.id ? (
                <>
                    <div className="postGCTitle">
                        <p>{postContent.title}</p>
                    </div>
                    <div className="genCardTheme">
                        <p>{postContent.theme}</p>
                    </div>
                    <div className="postGCContent"> 
                        <p>{postContent.content}</p>
                    </div>
                    <div className="postGCdate">
                        <p>Last edited {formattedDate}</p>
                    </div>
                </>
            ) : (
                <p> Waiting</p>
            )}
        </div>
    )
}

export default Post;