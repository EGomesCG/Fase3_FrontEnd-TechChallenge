export interface IPost {
    id: number;
    titulo: string;
    autor: string;
    conteudo: string;
    CreateDate?: Date;
    AtualizacaoDate?: Date;
}