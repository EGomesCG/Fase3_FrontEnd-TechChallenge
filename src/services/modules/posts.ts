import type { IPost } from "../../interface";
import api from "../api";

const getListaPosts = async () => {
    try {
        const { data } = await api.get("/posts"); 
        return data;
    } catch (error) {
        console.error("Erro ao buscar lista de posts:", error); 
        return null;
    }
};

const getPostId = async (id: number) => {
    try {
        const { data } = await api.get(`/posts/${id}`); 
        return data;
    } catch (error) {
        console.error(`Erro ao buscar post com ID ${id}:`, error); 
        return null;
    }
};

const createPost = async (dados: IPost) => {
    try {
        const { data } = await api.post("/posts", dados); 
        return data;
    } catch (error) {
        console.error("Erro ao criar post:", error); 
        return null;
    }
};

const updatePost = async (id: number, dados: IPost) => {
    try {
        const { data } = await api.put(`/posts/${id}`, dados); 
        return data;
    } catch (error) {
        console.error(`Erro ao atualizar post com ID ${id}:`, error); 
        return null;
    }
};

const deletePost = async (id: number) => {
    try {
        const { data } = await api.delete(`/posts/${id}`);
        return data;
    } catch (error) {
        console.error(`Erro ao excluir post com ID ${id}:`, error); 
        return null;
    }
};

const searchPosts = async (term: string) => {
    try {
        const { data } = await api.get(`/posts?search=${encodeURIComponent(term)}`);
        return data;
    } catch (error) {
        console.error(`Erro ao pesquisar posts com termo "${term}":`, error);
        return null;
    }
};
export {
    getListaPosts,
    getPostId,
    createPost,
    updatePost,
    deletePost,
    searchPosts,
};