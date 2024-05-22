import { useState, useEffect } from "react";

function EditGenPost({ id, navigator }) {
    const [title, setTitle] = useState("");
    const [theme, setTheme] = useState("");
    const [content, setContent] = useState("");
    const POSTCONTENT = `http://127.0.0.1:21231/general-content/${id}`;

    const returnToMenu = () => {
        navigator("menu");
    }

    async function fetchPostContent() {
        try {
            const response = await fetch(POSTCONTENT, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            });
            if (!response.ok) {
                alert("Error al cargar el contenido del post.");
                return;
            }
            const data = await response.json();
            setTitle(data.title);
            setTheme(data.theme);
            setContent(data.content);
        } catch (error) {
            console.error('Error al intentar cargar el contenido del post', error);
        }
    }

    async function editPost() {
        try {
            const response = await fetch(POSTCONTENT, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    content: content,
                    theme: theme
                })
            });

            if (!response.ok) {
                alert("Error al editar el post.");
                return;
            }

            alert("Post editado exitosamente.");
            navigator("menu");

        } catch (error) {
            console.log('Error al intentar editar el post', error);
        }
    }

    const titleChange = (e) => {
        setTitle(e.target.value);
    }
    const themeChange = (e) => {
        setTheme(e.target.value);
    }
    const contentChange = (e) => {
        setContent(e.target.value);
    }

    useEffect(() => {
        fetchPostContent();
    }, [id]);

    return (
        <div className="createCookie">
            <h1 className="pageTittle">Edit Post {title}</h1>

            <input type="text" placeholder="Titulo de post general" className="createInput" value={title} onChange={titleChange} />
            <input type="text" placeholder="Tema del post" className="createInput" value={theme} onChange={themeChange} />
            <p> Contenido </p>
            <textarea placeholder="Contenido aqui" className="createTextarea" value={content} onChange={contentChange} />
            <div className="buttonContainer">
                <button onClick={editPost}>Guardar</button>
                <button onClick={returnToMenu}>Cancelar</button>
            </div>
        </div>
    );
}

export default EditGenPost;
