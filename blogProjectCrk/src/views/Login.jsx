import { useState } from "react";

function Login({ navigator }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const URLAPI = 'http://127.0.0.1:21231/login';
    
    const handleLogin = async () => {
        try {
            const response = await fetch(URLAPI, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    userpassword: password
                })
            });

            if (!response.ok) {
                setEmail("");
                setPassword("");
                alert("Credenciales inválidas");
                return;
            }
    
            const data = await response.json();
            if (data.success === true) {
                navigator("menu"); 
                
            } else {
                alert("Credenciales inválidas");
            }

        } catch (error) {
            console.log('Error al intentar iniciar sesión', error);
        }
    }

    const registerNav = () =>{
        navigator("register")
    }
    
    return (
        <div className="login">
            <h1 className="pageTittle">Iniciar Sesión</h1>
            <input type="email" placeholder="Correo electrónico" className="loginInput" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Contraseña" className="loginInput" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="buttonContainer">
                <button onClick={handleLogin}>Iniciar Sesión</button>
            </div>
                <p onClick={registerNav}>Registrarse</p>
        </div>
    );
}

export default Login;
