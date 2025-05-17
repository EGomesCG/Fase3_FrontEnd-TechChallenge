import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdArrowLeft } from 'react-icons/md';
import { dataPostsFake } from "../services/backEndFake/posts";
import type { IPost } from "../interface";

const CreatePost = () => {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [conteudo, setConteudo] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(id){
            const indexParaEditar = dataPostsFake.findIndex((post) => post.id === Number(id));
            if(indexParaEditar){
                dataPostsFake[indexParaEditar] = { id: Number(id), titulo, autor, conteudo, AtualizacaoDate: new Date()};
                navigate(`/post/${id}`);
            }
        } else{
            const newId = dataPostsFake.length;    
            const novoPost:IPost = {
                id: newId + 1,
                autor: autor,
                conteudo: conteudo,
                titulo: titulo,
                CreateDate: new Date(),
                AtualizacaoDate: new Date(),
            };
            
            dataPostsFake.push(novoPost);
            console.log("novoPost", novoPost);
            navigate("/")
        }
    };

    useEffect(() => {
        if(id){
            const postEdicao = dataPostsFake.find((post) => post.id === Number(id));
            if(postEdicao){
                setTitulo(postEdicao.titulo);
                setAutor(postEdicao.autor);
                setConteudo(postEdicao.conteudo);
            } else{
                navigate('/');
            }
        }
    },[id, navigate]);

    return(
        <div className="container">
            <h2>{id ? 'Editar Post' : 'Criar Novo Post'}</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Título</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite o título dopost"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Autor</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite o nome do autor"
                        value={autor}
                        onChange={(e) => setAutor(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicContent">
                    <Form.Label>Conteúdo</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Digite o conteúdo do post"
                        value={conteudo}
                        onChange={(e) => setConteudo(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    {id ? 'Salvar Edições' : 'Criar Post'}
                </Button>
            </Form>
            
                <Link to={"/"} className="mt-3"><MdArrowLeft />Voltar </Link>
        </div>
    );
};

export default CreatePost;