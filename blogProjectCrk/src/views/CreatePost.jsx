import { useState } from "react";

function CreatePost({ navigator }){
    const [title, setTitle] = useState("");
    const [theme, setTheme] = useState("");
    const [content, setContent] = useState("");
    const URLAPI = 'http://127.0.0.1:21231/general-content';
    
    const returnToMenu = () =>{
        navigator("menu");
    }

    async function createGenPost() {
        try {
            const response = await fetch(URLAPI, {
                method: 'POST',
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
                alert("Error al crear el post.");
                return;
            };
    
            alert("Post creado exitosamente.");
            navigator("menu");

        } catch (error) {
            console.log('Error al intentar crear psot', error)
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

    return(
        <div className="createCookie">
            <h1 className="pageTittle">Nuevo Post</h1>

            <input type="text" placeholder="Titulo de post general" className="createInput" value={title} onChange={titleChange}/>
            <input type="text" placeholder="Tema del post" className="createInput" value={theme} onChange={themeChange}/>
            <p> Contenido </p>
            <textarea type="text" placeholder="Contenido aqui" className="createTextarea" value={content} onChange={contentChange}/>
            <div className="buttonContainer">
                <button onClick={createGenPost}>Guardar</button>
                <button onClick={returnToMenu}>Cancelar</button>
            </div>
        </div>
    )
    
}

export default CreatePost