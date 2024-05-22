import { useState } from "react";

function CreateCookie({ navigator }) {
    const [cookieName, setCookieName] = useState("");
    const [typeCookie, setTypeCookie] = useState("");
    const [battleRole, setBattleRole] = useState("");
    const [ability, setAbility] = useState("");
    const [content, setContent] = useState("");
    const [skins, setSkins] = useState("");
    const [rarity, setRarity] = useState("");
    const [magicCandyLevel, setMagicCandyLevel] = useState("");
    const [stateCookie, setStateCookie] = useState("");
    const URLAPI = 'http://127.0.0.1:21231/cookies';
    
    const returnToMenu = () => {
        navigator("galletas");
    }

    async function createCookie() {
        try {
            const response = await fetch(URLAPI, {
                method: 'POST',
                headers: {
                  'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    cookieName: cookieName,
                    typeCookie: typeCookie,
                    battleRole: battleRole,
                    ability: ability,
                    content: content,
                    skins: skins,
                    rarity: rarity,
                    magicCandyLevel: magicCandyLevel,
                    stateCookie: stateCookie
                })
            });

            if (!response.ok) {
                alert("Error al crear la cookie.");
                return;
            };
    
            alert("Cookie creada exitosamente.");
            navigator("galletas");

        } catch (error) {
            console.log('Error al intentar crear cookie', error)
        }
    }

    return (
        <div className="createCookie">
            <h1 className="pageTittle">Nueva galleta</h1>
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
                <button onClick={createCookie}>Guardar</button>
                <button onClick={returnToMenu}>Cancelar</button>
            </div>
        </div>
    );
}

export default CreateCookie;
