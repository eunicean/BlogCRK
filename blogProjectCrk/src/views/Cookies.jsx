import { useEffect, useState } from "react";

import CookieCard from "@components/CookieCard";

function Cookies({navigator}) {
    const URLAPI = 'http://127.0.0.1:21231/cookies'
    const [cookiescontent, setCookieC] = useState(null)

    const handleCreateCookieNavigation = () => {
        navigator("createCookie")
    }

    async function getCookieContent(){
        try{
            const response = await fetch(URLAPI, {
                method: 'GET',
                headers: {
                  'Content-type': 'application/json'
                }
            });

            if (!response.ok) {
                alert("Ocurrió un error cargado el blogs.");
                return;
            };

            const data = await response.json();

            setCookieC(
                <>
                <div className="contentContainer">
                    <button className="addButton" onClick={handleCreateCookieNavigation}>+</button>

                    <h1 className="pageTittle">Mis galletas</h1>
                    <p className="pageTittle2">*̣̥☆·͙̥‧❄•̥̩̥͙‧·‧̩̥‧̩̥·‧•̥̩̥͙❄•̥̩̥͙‧·‧̩̥‧̩̥·‧•̥̩̥͙‧·‧̩̥˟͙☃˟͙‧̩̥·‧•̥̩̥͙‧·‧̩̥•̥̩̥͙‧·‧̩̥❄•̥̩̥͙‧·‧̩̥•̥̩̥͙‧·‧̩̥❄‧·͙̥̣☆*̣̥</p>

                    {data.map((cookiescontent, index) => {
                        return(
                            <CookieCard
                                key={index}
                                id ={cookiescontent.id}
                                cookieName={cookiescontent.cookie_name}
                                typeCookie={cookiescontent.typeCookie}
                                battleRole={cookiescontent.battle_role}
                                rarity={cookiescontent.rarity}
                                magicCandyLevel={cookiescontent.magicCandyLevel}
                                stateCookie ={cookiescontent.stateCookie}
                                navigator ={navigator}
                            />
                        );
                    })}
                </div>
                </>
            )

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getCookieContent();
    }, []);

    return(
        <div>
            {cookiescontent}
        </div>
    )
}

export default Cookies