import type React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { IPost } from "../interface";
import { dataPostsFake } from "../services/backEndFake/posts";
import { Card, Col, Row } from "react-bootstrap";
import { MdArrowLeft } from 'react-icons/md';
import '../styles/pages.css';

// import { getPostId } from "../services/modules/posts";

const PostDetail: React.FC = () => {
    const { id } = useParams();
    const [ postId, setPostId ] = useState<IPost>();
    
    useEffect(() => {
        const postIdNumber = Number(id);

        // const result = await getPostId(postIdNumber);
        // setPostId(result?.data);

        const postEncontrado = dataPostsFake.find((p) => p.id === postIdNumber);
        setPostId(postEncontrado);
    },[id]);

    return(
        <div className="m-0 p-0">
            <Row className="my-4">
                <Col md={10} style={{textAlign:"left"}}>
                    <h3 style={{boxShadow:"initial"}}>Detalhe do Post - {postId?.id}</h3>
                </Col>
                <Col>
                    <Link to={"/"} className="mt-3"><MdArrowLeft /> Voltar </Link>
                </Col>
            </Row>
            <Card>               
                <h4><strong>Título:</strong> {postId?.titulo}</h4>
                <h5>Autor: {postId?.autor}</h5>
                <Card  style={{ backgroundColor: '#c8e2ea'}}>
                    <p>{postId?.conteudo}</p>
                </Card>
            </Card>
        </div>
    );
};

export default PostDetail;