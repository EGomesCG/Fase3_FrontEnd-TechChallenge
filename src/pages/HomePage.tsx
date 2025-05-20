
import type React from "react";
import { useEffect, useState } from "react";
import type { IPost } from "../interface";
import { dataPostsFake as initialDataPostsFake } from "../services/backEndFake/posts";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/authContext';
import { MdEdit, MdDelete } from 'react-icons/md';
import '../styles/pages.css';
// import api from '../services/api';
// import { getListaPosts } from "../services/modules/posts";



const HomePage:React.FC = () => {
    const [ posts, setPosts ] = useState<IPost[]>(initialDataPostsFake);
    const { isAuth } = useAuth();
    const navigate = useNavigate();

    const handleExcluir = (id:number) => {
        setPosts(prevPosts => {
            const updatePosts = prevPosts.filter(post => post.id !== id);

            return updatePosts;
        });
    };

    useEffect(() => {
        // const result = await getListaPosts();
        // setPosts(result?.data);

        setPosts(initialDataPostsFake.sort((a, b) => {
            if (a.CreateDate && b.CreateDate) {
                return new Date(b.CreateDate).getTime() - new Date(a.CreateDate).getTime(); // Ordena do mais recente para o mais antigo
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

         {posts.map(post => (
            <div className="my-3" key={post.id}>
                <Card  className="shadow w-100 bg-body-secondary">
                    <Row className="rowCard">
                        <Col md={isAuth ? 4 : 6}>
                            <Link to={`/post/${post.id}`}><h6 className="m-0"><strong>{post.titulo}</strong></h6></Link>
                        </Col>
                        <Col md={isAuth ? 4 : 6} >
                            <Link to={`/post/${post.id}`}><p className="m-0">Autor: {post.autor}</p></Link>
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
        ))} 
    </div>
    )
};

export default HomePage;