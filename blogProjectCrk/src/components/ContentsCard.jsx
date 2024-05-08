import { PropTypes } from "prop-types";

ContentsCard.protoTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

function ContentsCard({id, title, content, theme, date , navigator}) {

    //cambiar, la intencion es que si se selecciona el blog que me envie a la vista de este
    const handleBlogSelection = () => {
        localStorage.setItem("postId", id);
        navigator("post");
    };

    return(
        <div>
            <div className="cardContent" onClick={handleBlogSelection}>
                <div className="cardHeader">
                    <div className="cardTittle">
                        <p>{title}</p>
                    </div>
                    <div className="cardDate">
                        <p>{date}</p>
                    </div>
                </div>
                <div className="genCardTheme">
                    <p>{theme}</p>
                </div>
                <div className="genCardContent">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default ContentsCard