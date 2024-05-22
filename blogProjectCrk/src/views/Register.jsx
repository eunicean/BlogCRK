import { useState } from "react";

function Login({ navigator }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const URLAPI = 'http://127.0.0.1:21231/register';

    const handleLogin = async () => {
        try {
            const response = await fetch(URLAPI, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    userpassword: password
                })
            });

            if (!response.ok) {
                alert("Credenciales inválidas");
                return;
            }
    
            const data = await response.json();
            if (data.success === true) {
                navigator("login"); 
                
            } else {
                alert("Credenciales inválidas");
            }

        } catch (error) {
            console.log('Error al intentar iniciar sesión', error);
        }
    }

    const registerNav = () =>{
        navigator("login")
    }
    
    return (
        <div className="login">
            <h1 className="pageTittle">Iniciar Sesión</h1>
            <input type="text" placeholder="Nombre" className="loginInput" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="Correo electrónico" className="loginInput" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Contraseña" className="loginInput" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="buttonContainer">
                <button onClick={handleLogin}>Register</button>
            </div>
            <p onClick={registerNav}>Iniciar sesion</p>
        </div>
    );
}

export default Login;
