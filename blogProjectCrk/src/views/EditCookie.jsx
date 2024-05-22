import { useState, useEffect } from "react";

function EditCookie({ id, navigator }) {
    const [cookieName, setCookieName] = useState("");
    const [typeCookie, setTypeCookie] = useState("");
    const [battleRole, setBattleRole] = useState("");
    const [ability, setAbility] = useState("");
    const [content, setContent] = useState("");
    const [skins, setSkins] = useState("");
    const [rarity, setRarity] = useState("");
    const [magicCandyLevel, setMagicCandyLevel] = useState("");
    const [stateCookie, setStateCookie] = useState("");
    const COOKIE_CONTENT_URL = `http://127.0.0.1:21231/cookies/${id}`;

    const returnToMenu = () => {
        navigator("galletas");
    }

    async function fetchCookieContent() {
        try {
            const response = await fetch(COOKIE_CONTENT_URL, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            });
            if (!response.ok) {
                alert("Error al cargar el contenido de la galleta.");
                return;
            }
            const data = await response.json();
            setCookieName(data.cookie_name);
            setTypeCookie(data.typeCookie);
            setBattleRole(data.battle_role);
            setAbility(data.ability);
            setContent(data.content);
            setSkins(data.skins);
            setRarity(data.rarity);
            setMagicCandyLevel(data.magicCandyLevel);
            setStateCookie(data.stateCookie);
        } catch (error) {
            console.error('Error al intentar cargar el contenido de la galleta', error);
        }
    }

    async function editCookie() {
        try {
            const response = await fetch(COOKIE_CONTENT_URL, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    cookieName,
                    typeCookie,
                    battleRole,
                    ability,
                    content,
                    skins,
                    rarity,
                    magicCandyLevel,
                    stateCookie
                })
            });

            if (!response.ok) {
                alert("Error al editar la galleta.");
                return;
            }

            alert("Galleta editada exitosamente.");
            navigator("galletas");

        } catch (error) {
            console.log('Error al intentar editar la galleta', error);
        }
    }

    useEffect(() => {
        fetchCookieContent();
    }, [id]);

    return (
        <div className="createCookie">
            <h1 className="pageTittle">Editar galleta {cookieName}</h1>
            <input type="text" placeholder="Nombre de la Galleta" className="createInput" value={cookieName} onChange={(e) => setCookieName(e.target.value)} />
            <input type="text" placeholder="Tipo de Galleta" className="createInput" value={typeCookie} onChange={(e) => setTypeCookie(e.target.value)} />
            <input type="text" placeholder="Rol de batalla" className="createInput" value={battleRole} onChange={(e) => setBattleRole(e.target.value)} />
            <input type="text" placeholder="Habilidad" className="createInput" value={ability} onChange={(e) => setAbility(e.target.value)} />
            <input type="text" placeholder="Skins" className="createInput" value={skins} onChange={(e) => setSkins(e.target.value)} />
            <input type="text" placeholder="Rareza" className="createInput" value={rarity} onChange={(e) => setRarity(e.target.value)} />
            <input type="number" placeholder="Nivel de Magic Candy" className="createInput" value={magicCandyLevel} onChange={(e) => setMagicCandyLevel(e.target.value)} />
            <input type="text" placeholder="Estado de la Galleta" className="createInput" value={stateCookie} onChange={(e) => setStateCookie(e.target.value)} />
            <textarea placeholder="Contenido" className="createTextarea" value={content} onChange={(e) => setContent(e.target.value)} />
            <div className="buttonContainer">
                <button onClick={editCookie}>Guardar</button>
                <button onClick={returnToMenu}>Cancelar</button>
            </div>
        </div>
    );
}

export default EditCookie;
