import myicon from '@assets/squidface.png';

function Header({ navigator }) {

    const handleDashboardNavigation = () => {
        navigator("dashboard");
        localStorage.clear()
    };

    const handleLoginNavigation = () => {
        navigator("login");
    };

    return(
        <header>
             <img src={myicon} alt="Logo del blog" height={"50px"}/>
             <h1>Cookie Run Kingdom Blog</h1>
        </header>
    );
};

export default Header;