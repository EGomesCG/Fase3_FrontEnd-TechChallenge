import type { IPost } from "../../interface";

export const dataPostsFake: IPost[] = [
  {
    id: 1,
    titulo: 'Primeiro Post Incrível',
    autor: 'João da Silva',
    conteudo: 'Este é o conteúdo do meu primeiro post. É muito interessante e cheio de informações relevantes.',
    CreateDate: new Date('2025-05-15T10:00:00Z'),
    AtualizacaoDate: new Date('2025-05-15T10:00:00Z'),
  },
  {
    id: 2,
    titulo: 'Dicas de Programação em React',
    autor: 'Maria Oliveira',
    conteudo: 'Neste post, compartilho algumas dicas valiosas para quem está começando a programar em React. Aprenda os fundamentos e boas práticas.',
    CreateDate: new Date('2025-05-15T10:00:00Z'),
    AtualizacaoDate: new Date('2025-05-15T10:00:00Z'),
  },
  {
    id: 3,
    titulo: 'A História da Inteligência Artificial',
    autor: 'Carlos Pereira',
    conteudo: 'Uma jornada fascinante pela evolução da inteligência artificial, desde seus primórdios até as aplicações mais modernas.',
    CreateDate: new Date('2025-05-15T10:00:00Z'),
    AtualizacaoDate: new Date('2025-05-15T10:00:00Z'),
  },
  {
    id: 4,
    titulo: 'Receita de Bolo de Chocolate Delicioso',
    autor: 'Ana Souza',
    conteudo: 'Para os amantes de chocolate, uma receita simples e deliciosa de bolo para alegrar o seu dia.',    
    CreateDate: new Date('2025-05-15T10:00:00Z'),
    AtualizacaoDate: new Date('2025-05-15T10:00:00Z'),
  },
  {
    id: 5,
    titulo: 'Guia de Viagem para o Nordeste Brasileiro',
    autor: 'Pedro Gomes',
    conteudo: 'Descubra as belezas e os encantos do Nordeste brasileiro, com dicas de praias, cidades históricas e culinária local.',
    CreateDate: new Date('2025-05-15T10:00:00Z'),
    AtualizacaoDate: new Date('2025-05-15T10:00:00Z'),
  },
];
