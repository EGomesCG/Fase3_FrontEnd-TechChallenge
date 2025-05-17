import type { IPost } from "../../interface";
import api from "../api";

const getListaPosts = async () => {
    try {
        const data = await api.get("/posts");
        return data;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return null;
    }
};

const getPostId = async (id:number) => {
    try {
        const data = await api.get(`/posts/${id}`);
        return data;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return null;
    }
};

const createPost = async (dados:IPost) => {
    try {
        const data = await api.put("/posts", dados);
        return data;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return null;
    }
};

export {
    getListaPosts,
    getPostId,
    createPost,
};