function CookieCard({id,cookieName, typeCookie,battleRole, rarity,magicCandyLevel, stateCookie, navigator}){
    const handleCookieSelection = () => {
        localStorage.setItem("cookieId", id);
        navigator("cookieContent");
    };
    return(
        <div>
            <div className="cardContent2" onClick={handleCookieSelection}>
                <div className="cardHeader">
                    <div className="cardTittle">
                        <p>{cookieName}</p>
                    </div>
                </div>
                <div className="infoContainer">
                    <div className="cookieInfo">
                        <p>Tipo: {typeCookie}</p>
                        <p>Posicion: {battleRole}</p>
                        <p>Rareza: {rarity}</p>
                    </div>
                    <div className="cookieInfo">
                        <p>Candy nivel: {magicCandyLevel}</p>
                        <p>Estado: {stateCookie}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CookieCard