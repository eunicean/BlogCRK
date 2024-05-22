import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

Post.protoTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

Post.propTypes = {
    idPost: PropTypes.number.isRequired,
    navigator: PropTypes.func.isRequired
};

function Post({idPost, navigator}){
    const URLAPI = `http://127.0.0.1:21231/general-content/${idPost}`;
    const [postContent, setPost] = useState([]);
    const [formattedDate, setFormattedDate] = useState('');

    const goToEditPost = () => {
        navigator("editPost")
    }
    
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

    async function deletePost() {
        if (!confirm("¿Estás seguro de que quieres eliminar este post?")) {
            return;
        };
        try {
            const DELETE = `http://127.0.0.1:21231/general-content/${idPost}`;
            const response = await fetch(DELETE, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            if (!response.ok) {
                alert("Ocurrió un error al eliminar el post.")
                return;
            }

            alert("Post eliminado correctamente.")
            navigator("menu");
        } catch (error) {
            console.log(error)
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
                        <div>
                            <button className="postsButtons" onClick={goToEditPost}>Editar</button>
                            <button className="postsButtons" onClick={deletePost}>Eliminar</button>
                        </div>
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