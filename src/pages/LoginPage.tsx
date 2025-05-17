import type React from "react";
import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { usuarioFake } from "../services/backEndFake/usuario";
import { useAuth } from '../context/authContext';
import { MdArrowLeft } from 'react-icons/md';

const LoginPage: React.FC = () => {
    const [ email, setEmail] = useState("");
    const [ senha, setSenha] = useState("");
    const navigate = useNavigate();
     const { setIsAuth } = useAuth();

    const handleLogin = async () => {
        console.log("Submit", email, senha);
        await new Promise(res => setTimeout(res, 500));

        if(email === usuarioFake.email && senha === usuarioFake.senha){
            setIsAuth(true);
            navigate("/");
            console.log('Login bem-sucedido!');
        } else{
            console.log("Credenciais inválidas.");
            alert('Email ou senha incorretos.');
        };
    };

    return(
        <div className="container" style={{ justifyItems: "center", marginTop:"100px"}}>
            <div className="card col-md-9 col-xs-12 col-lg-4">
                <h2 className="mb-4">Login do Professor</h2>
                <form onSubmit={(e) =>{
                    e.preventDefault();
                    handleLogin();
                }}>
                    <Row>
                        <Col sm={12} className="mb-3">
                            <input
                                type="email"
                                 className="form-control"
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Col>
                        <Col sm={12} className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </Col>
                        <Col>
                            <Button type="submit" className="w-100">Entrar</Button>
                        </Col>
                    </Row>                    
                </form>
                <Link to={"/"} className="mt-3"><MdArrowLeft /> Voltar </Link>
            </div>
        </div>
    );
};

export default LoginPage;