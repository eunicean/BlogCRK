import { useState } from "react";

import Menu from '@views/Menu'
import Cookies from "@views/Cookies";
import Post from "@views/Post";
import CookiePost from "@views/CookiePost"
import CreatePost from "@views/CreatePost";
import EditGenPost from "@views/EditGenPost";
import CreateCookie from "@views/CreateCookie";
import EditCookie from "@views/EditCookie";
import Login from "@views/Login";
import Register from "@views/Register"

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
            contenido = <Post idPost={parseInt(localStorage.getItem("postId"))} navigator={navigator}/>
            break;
        case "cookieContent":
            contenido = <CookiePost idCookiePost={parseInt(localStorage.getItem("cookieId"))} navigator={navigator}/>
            break;
        case "editPost":
            contenido = <EditGenPost id={parseInt(localStorage.getItem("postId"))} navigator={navigator}/>
            break;
        case "createPost":
            contenido = <CreatePost navigator={navigator} />
            break;
        case "createCookie":
            contenido = <CreateCookie navigator={navigator}/>
            break;
        case "editCookie":
            contenido = <EditCookie id={parseInt(localStorage.getItem("cookieId"))} navigator={navigator}/>
            break;
        case "login":
            contenido = <Login navigator={navigator}/>
            break;
        case "register":
            contenido = <Register navigator={navigator}/>
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