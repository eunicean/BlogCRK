import { useState } from "react";

import Menu from '../views/Menu.jsx'

import Header from "@components/Header";
import Dashboard from "../Dashboard";
import Reporte from "../Reporte";

function Router() {
    const [page, setPage] = useState("dashboard");

    const navegar = (enlace) => {
        setPage(enlace);
    };

    let contenido;

    switch (page) {
        case "dashboard":
            contenido = <Dashboard navigator={navegar}/>
            break;
        case "galletas":
            contenido = <Reporte />
            break;
        case "menu":
            contenido = <Menu />
            break;

    };

    return (
        <div>
            <Header navigator={navigator}/>
            <nav>
                <a href="javascript:void(0);" onClick={() => navegar("menu")}> Menu</a>
                <a href="javascript:void(0);" onClick={() => navegar("galletas")}> Menu</a>
            </nav>
            <p>{page}</p>
            {contenido}
        </div>
    )
}

export default Router