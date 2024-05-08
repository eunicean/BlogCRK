import { useState } from "react";

import Menu from '@views/Menu'
import Cookies from "@views/Cookies";
import Post from "@views/Post";

import Header from "@components/Header";
import pet from '@assets/purevanillacookie.png'

function Router() {
    const [page, setPage] = useState("menu");

    const navigator = (component) => {
        setPage(component);
    };

    let contenido;

    switch (page) {
        case "galletas":
            contenido = <Cookies navigator={navigator}/>
            break;
        case "menu":
            contenido = <Menu navigator={navigator}/>
            break;
        case "post":
            contenido = <Post idPost={parseInt(localStorage.getItem("postId"))} />
            break;
    };

    return (
        <div>
            <Header navigator={navigator}/>
            <img className = 'pagePet'  src={pet} alt="mypet" height={"300px"}/>
            {contenido}
        </div>
    )
}

export default Router