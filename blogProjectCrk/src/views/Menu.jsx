import { useEffect, useState } from "react";
import { Suspense } from 'react';

import Contentcard from "@components/ContentsCard"

function Menu({navigator}) {
    const URLAPI = 'http://127.0.0.1:21231/general-content';
    const [content, setContent] = useState(null);

    const handleCreatePostNavigation = () => {
        navigator("createPost")
    }

    async function getContent() {
        try {
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

            setContent(
                <>
                <div className="contentContainer">
                    <button className="addButton" onClick={handleCreatePostNavigation}>+</button>
                    <h1 className="pageTittle">General Posts</h1>
                    <p className="pageTittle2">*̣̥☆·͙̥‧❄•̥̩̥͙‧·‧̩̥‧̩̥·‧•̥̩̥͙❄•̥̩̥͙‧·‧̩̥‧̩̥·‧•̥̩̥͙‧·‧̩̥˟͙☃˟͙‧̩̥·‧•̥̩̥͙‧·‧̩̥•̥̩̥͙‧·‧̩̥❄•̥̩̥͙‧·‧̩̥•̥̩̥͙‧·‧̩̥❄‧·͙̥̣☆*̣̥</p>

                    {data.map((content, index) => {
                        const formattedDate = new Date(content.created_at).toISOString().split('T')[0];
                        return(
                            <Contentcard 
                                key={index}
                                id={content.id}
                                title={content.title}
                                content={content.content}
                                theme={content.theme}
                                date={formattedDate}
                                navigator={navigator}
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
        getContent();
    }, []);

    return(
        <div>
            {content}
        </div>
    )
}

export default Menu