function ContentsCard({title, content, theme }) {
    return(
        <div>
            <div className="contentCardConatiner">
                <div className="cardTittle">
                    <p>{title}</p>
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