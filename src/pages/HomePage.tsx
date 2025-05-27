
import type React from "react";
import { useEffect, useMemo, useState } from "react";
import type { IPost } from "../interface";
import { dataPostsFake as initialDataPostsFake } from "../services/backEndFake/posts";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/authContext';
import { MdEdit, MdDelete, MdSearch } from 'react-icons/md';
import '../styles/pages.css';
// import api from '../services/api';
// import { getListaPosts } from "../services/modules/posts";



const HomePage:React.FC = () => {
    const [ posts, setPosts ] = useState<IPost[]>(initialDataPostsFake);
    const [ searchTerm, setSearchTerm ] = useState<string>('');
    const { isAuth } = useAuth();
    const navigate = useNavigate();

    const handleExcluir = (id:number) => {
        setPosts(prevPosts => {
            const updatePosts = prevPosts.filter(post => post.id !== id);

            return updatePosts;
        });
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        console.log("pESQUIASar", event.target.value);
        setSearchTerm(event.target.value);
    };

    const filteredPosts = useMemo(() => {
        if (!searchTerm) {
            return posts; // Se o termo de busca estiver vazio, retorna todos os posts
        }

        const lowercasedSearchTerm = searchTerm.toLowerCase();

        return posts.filter(post =>
            post.titulo.toLowerCase().includes(lowercasedSearchTerm) ||
            post.autor.toLowerCase().includes(lowercasedSearchTerm) ||
            post.conteudo.toLowerCase().includes(lowercasedSearchTerm)
        );
    }, [posts, searchTerm]);
    
    useEffect(() => {
        // const result = await getListaPosts();
        // setPosts(result?.data);

        setPosts(initialDataPostsFake.sort((a, b) => {
            if (a.CreateDate && b.CreateDate) {
                return new Date(b.CreateDate).getTime() - new Date(a.CreateDate).getTime(); 
            } else if (a.CreateDate) {
                return -1;
            } else if (b.CreateDate) {
                return 1;
            } else {
                return 0;
            }
        }));
    }, []);
  
    return(
    <div className="container">
        <Row className="px-2">
            <h3>Postagens Recentes</h3>
            {isAuth && (
                <Button onClick={() => navigate("/create")}>Novo post</Button>
            )}
        </Row>
        <Row className="my-4">
            <Col>
                <InputGroup>
                    <InputGroup.Text>
                        <MdSearch />
                    </InputGroup.Text>
                    <Form.Control
                        type="text"
                        placeholder="Buscar posts por título, autor ou conteúdo..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </InputGroup>
            </Col>
        </Row>
        {filteredPosts.length === 0 && searchTerm !== '' ? (
            <p className="text-center mt-5">Nenhum post encontrado para "{searchTerm}".</p>
        ) : filteredPosts.length === 0 && searchTerm === '' ? (
            <p className="text-center mt-5">Nenhum post disponível no momento.</p>
        ) : (
            filteredPosts.map(post => (
                <div className="my-3" key={post.id}>
                    <Card  className="shadow w-100 bg-body-secondary">
                        <Row className="rowCard">
                            <Col md={isAuth ? 3 : 4}>
                                <Link to={`/post/${post.id}`}><h6 className="m-0"><strong>{post.titulo}</strong></h6></Link>
                            </Col>
                            <Col md={isAuth ? 3 : 4} >
                                <Link to={`/post/${post.id}`}><p className="m-0">Autor: {post.autor}</p></Link>
                            </Col>
                            <Col md={isAuth ? 3 : 4} >
                                <Link to={`/post/${post.id}`}><p className="m-0"><span className="truncate-single-line">Descrição: {post.conteudo}</span></p></Link>
                            </Col>
                            {isAuth && (
                                <Col md={2}>
                                    <div className="btnCard gap-2">                                    
                                        <Button onClick={() => navigate(`/edit/${post.id}`)} size="sm" variant="outline-primary"><MdEdit /></Button> 
                                        <Button onClick={() => handleExcluir(post.id)} size="sm" variant="outline-danger"><MdDelete /></Button>                    
                                    </div>
                                </Col>
                            )}
                        </Row>
                    </Card>
                </div>
            ))
        )}
    </div>
    )
};

export default HomePage;