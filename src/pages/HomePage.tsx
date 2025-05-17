
import type React from "react";
import { useEffect, useState } from "react";
import type { IPost } from "../interface";
import { dataPostsFake } from "../services/backEndFake/posts";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/authContext';
import { MdEdit } from 'react-icons/md';
// import api from '../services/api';
// import { getListaPosts } from "../services/modules/posts";



const HomePage:React.FC = () => {
    const [ posts, setPosts ] = useState<IPost[]>([]);
    const { isAuth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // const result = await getListaPosts();
        // setPosts(result?.data);

        setPosts(dataPostsFake.sort((a, b) => {
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
    }, [])
  
    return(
    <div className="container">
        <Row>
            <h3>Postagens Recentes</h3>
            {isAuth && (
                <Button onClick={() => navigate("/create")}>Novo post</Button>
            )}
        </Row>

         {posts.map(post => (
            <div className="my-3" key={post.id}>
                <Card  className="shadow w-100 bg-body-secondary">
                    <Row className="w-100" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Col md={isAuth ? 4 : 6}>
                            <Link to={`/post/${post.id}`}><h6 className="m-0"><strong>{post.titulo}</strong></h6></Link>
                        </Col>
                        <Col md={isAuth ? 4 : 6} >
                            <Link to={`/post/${post.id}`}><p className="m-0">Autor: {post.autor}</p></Link>
                        </Col>
                            {isAuth && (
                                <Col md={4}>
                                    <Button onClick={() => navigate(`/edit/${post.id}`)}><MdEdit /></Button> 
                                    {/* <Button onClick={() => ""}><MdDelete /></Button>                     */}
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