import myicon from '@assets/squidface.png';
import giticon from '@assets/1175028.png'

function Options({navigator}){
    const toMenu = () => {
        navigator("menu");
        localStorage.clear()
    };

    const toCookies = () => {
        navigator("galletas");
    };

    return(
        <nav>
            <a href="javascript:void(0);" onClick={toMenu}>General</a>
            <a href="javascript:void(0);" onClick={toCookies}> Galletas</a>
        </nav>
    )
}

function Header({ navigator }) {

    

    
    return(
        <div>
            <header>
                <div className='leftcontent'>
                    <img className='blogicon' src={myicon} alt="Logo del blog" height={"50px"}/>
                    <h1>Cookie Run Kingdom Blog</h1>
                </div>
             <div className='rigthcontent'>
                <button className='loginButton'>Login</button>
                <a href="https://github.com/eunicean/BlogCRK" className='gitIcon'><img src={giticon} alt="Github" height={"50px"}/></a>
             </div>
             
            </header>
            <Options navigator={navigator}/>
        </div>
        
    );


};

export default Header;