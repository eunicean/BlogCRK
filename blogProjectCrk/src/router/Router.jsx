import { useState } from "react";

import Menu from '../views/Menu.jsx'
import Cookies from "../views/Cookies.jsx";

import Header from "@components/Header";

function Router() {
    const [page, setPage] = useState("menu");

    const navigator = (component) => {
        setPage(component);
    };

    let contenido;

    switch (page) {
        case "galletas":
            contenido = <Cookies />
            break;
        case "menu":
            contenido = <Menu />
            break;

    };

    return (
        <div>
            <Header navigator={navigator}/>
            
            {contenido}
        </div>
    )
}

export default Router