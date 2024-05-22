import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

function CookiePost({idCookiePost, navigator}){
    const URLAPI = `http://127.0.0.1:21231/cookies/${idCookiePost}`;
    const [postCookieContent, setCookiePost] = useState([]);

    const goToEditCookie = () => {
        navigator("editCookie")
    }

    async function viewCookiePost(){
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
        setCookiePost(data)
    }

    async function deletePost() {
        if (!confirm("¿Estás seguro de que quieres eliminar este post?")) {
            return;
        };
        try {
            const DELETE = `http://127.0.0.1:21231/cookies/${idCookiePost}`;
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

            alert("Galleta eliminado correctamente.")
            navigator("menu");
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        viewCookiePost();
    }, []);

    return(
        <div className="contentGContainer">
            {postCookieContent.id ?(
                <>
                    <div className="postGCTitle"> 
                        <p>{postCookieContent.cookie_name} </p>
                        <div>
                            <button className="postsButtons" onClick={goToEditCookie}>Editar</button>
                            <button className="postsButtons" onClick={deletePost}>Eliminar</button>
                        </div>
                    </div>
                    <div className="cookieGInfo">
                        <p>Tipo: {postCookieContent.typeCookie}</p>
                        <p>Posicion: {postCookieContent.battle_role}</p>
                        <p>Abilidad: {postCookieContent.ability}</p>
                        <p>Skin Actual: {postCookieContent.skins}</p>
                        <p>Rareza: {postCookieContent.rarity}</p>
                        <p>Nivel Magic Candy: {postCookieContent.magicCandyLevel}</p>
                    </div>
                    <div className="CookiePostContent">
                        <p>{postCookieContent.content}</p>
                    </div>
                </>
            ):(
                <p>Waiting</p>
            )}
        </div>
    )
}

export default CookiePost