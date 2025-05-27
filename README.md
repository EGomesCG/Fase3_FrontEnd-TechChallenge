Fase3 - FrontEnd - TechChallenge
Desenvolver uma interface gráfica para a aplicação de blogging utilizando React. A aplicação deve ser responsiva, acessível e fácil de usar, permitindo aos docentes e alunos(as) interagir com os diversos endpoints REST já implementados no back-end.

🚀 Visão Geral
Este é o repositório do front-end da aplicação Fase3_FrontEnd-TechChallenge, desenvolvida em React com TypeScript. Ele oferece uma interface de usuário intuitiva para exibir os posts dos professores da rede pública, visando unir tecnologia e dinâmica na educação. É possível para os professores criar, editar e excluir os posts, e os alunos podem visualizá-los.

✨ Features Principais
Listagem e Detalhes de Posts: Exibe posts recentes com a opção de ver detalhes completos.
Busca de Posts: Permite pesquisar posts por título, autor e conteúdo.
Comentários: Usuários podem visualizar e adicionar comentários aos posts.
Autenticação (Admin): Funcionalidade de login/logout para administradores.
Gerenciamento de Posts (Admin): Criação, edição e exclusão de posts para usuários autenticados.
Design Responsivo: Adaptado para diferentes tamanhos de tela.
💻 Setup Inicial
Pré-requisitos
Node.js (versão recomendada: v18.x ou superior)
npm ou Yarn (gerenciador de pacotes, npm geralmente vem com Node.js)
Instalação
Clone o repositório:
Bash

git clone https://github.com/seu-usuario/seu-repositorio-frontend.git
cd seu-repositorio-frontend
Instale as dependências:
Bash

npm install
# ou
yarn install
Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto (se ainda não existir).
Adicione a seguinte variável (substitua o valor pelo seu):
Snippet de código

REACT_APP_API_BASE_URL=http://localhost:3001/api
Observação: Nunca publique seu arquivo .env em repositórios públicos. Ele já deve estar no .gitignore.
Rodando o Projeto
Para iniciar o servidor de desenvolvimento:

Bash

npm run dev
# ou
yarn run dev
Isso geralmente abrirá o aplicativo em seu navegador padrão em http://localhost:5174/.

⚙️ Arquitetura da Aplicação
Estrutura de Pastas
A organização do projeto segue uma estrutura modular e clara para facilitar a navegação e a manutenção do código.

src/
├── assets/             # Contém arquivos estáticos como imagens (ex: coruja.png).
├── components/         # Componentes React reutilizáveis que compõem as páginas (ex: NavBar.tsx).
├── context/            # Contém a Context API para gerenciamento de estado global, como o contexto de autenticação (authContext.tsx).
├── interface/          # Definições de interfaces TypeScript para tipagem de dados (ex: IPost, IComment).
│   └── index.ts        # Arquivo central para exportar todas as interfaces.
├── pages/              # Componentes React que representam as principais rotas/páginas da aplicação (ex: HomePage.tsx, PostDetail.tsx, LoginPage.tsx, CreatePost.tsx).
├── services/           # Contém a lógica de comunicação com o backend e serviços de dados.
│   ├── backEndFake/    # Módulos com dados mockados/falsos utilizados para desenvolvimento e simulação da API.
│   │   └── posts.ts    # Dados de posts fake.
│   └── modules/        # Funções específicas para cada recurso da API.
│       ├── api.ts      # Configuração da instância do Axios e interceptor.
│       └── posts.ts    # Funções para operações com posts.
├── styles/             # Arquivos CSS para estilização global e específica de componentes/páginas (ex: App.css, pages.css).
├── tests/              # Arquivos relacionados a testes e configurações de ambiente de teste (ex: setupTests.ts).
│   └── NavBar.test.tsx # Exemplo de teste unitário para o componente NavBar.
├── App.tsx             # Componente raiz da aplicação, onde as rotas são definidas.
├── main.tsx            # Ponto de entrada principal da aplicação, responsável por renderizar o componente App.
└── vite-env.d.ts       # Arquivo de declaração de ambiente do Vite.
Fora de src/:

.env                 # Arquivo para variáveis de ambiente sensíveis.
.gitignore           # Define arquivos e pastas a serem ignorados pelo Git.
eslint.config.js     # Configuração do ESLint para regras de linting e formatação.
index.html           # O arquivo HTML base da aplicação.
node_modules/        # Pasta gerada pelo gerenciador de pacotes com as dependências do projeto.
package-lock.json    # Garante que as dependências sejam as mesmas em todas as instalações.
package.json         # Contém metadados do projeto e lista de dependências.
public/              # Conteúdo estático que é servido diretamente (ex: favicon).
tsconfig.app.json    # Configuração TypeScript para a aplicação.
tsconfig.json        # Configuração TypeScript geral.
tsconfig.node.json   # Configuração TypeScript para arquivos Node.js.
vite.config.ts       # Configuração do bundler Vite.
Tecnologias Utilizadas
Este projeto front-end foi desenvolvido utilizando as seguintes tecnologias e bibliotecas:

Linguagens e Frameworks
React (^19.1.0): Biblioteca JavaScript para construção de interfaces de usuário reativas e componentes.
TypeScript (~5.8.3): Superset do JavaScript que adiciona tipagem estática, melhorando a robustez e a manutenibilidade do código.
Ferramentas de Build e Desenvolvimento
Vite (^6.3.5): Um bundler rápido para desenvolvimento web moderno, utilizado para configurar o ambiente de desenvolvimento e otimizar o build para produção.
ESLint (^9.25.0): Ferramenta de linting para identificar e relatar padrões problemáticos encontrados no código JavaScript/TypeScript, garantindo a qualidade e consistência do código.
Vitest (^3.1.4): Framework de testes unitários rápido e moderno, compatível com Vite, utilizado para garantir a funcionalidade e estabilidade do código.
@testing-library/react (^16.3.0): Utilities para testar componentes React de forma eficaz, focando no comportamento do usuário.
@testing-library/jest-dom (^6.6.3): Matchers personalizados para Jest (usados com Vitest) que facilitam a escrita de testes no DOM.
@testing-library/user-event (^14.6.1): Simula interações do usuário em testes de forma mais realista.
jsdom (^26.1.0): Implementação de um ambiente de DOM simulado para rodar testes sem um navegador real.
@vitest/coverage-v8 (^3.1.4): Para gerar relatórios de cobertura de testes.
Bibliotecas de UI e Utilidades
Bootstrap (^5.3.6): Framework CSS popular para desenvolvimento responsivo e componentes de interface de usuário.
React Bootstrap (^2.10.10): Implementação dos componentes do Bootstrap como componentes React, facilitando a integração.
React Router DOM (^7.6.0): Biblioteca para gerenciamento de rotas na aplicação React, permitindo navegação entre diferentes visualizações.
Axios (^1.9.0): Cliente HTTP baseado em Promises para o navegador e Node.js, utilizado para fazer requisições a APIs externas.
React Icons (^5.5.0): Coleção popular de ícones (Font Awesome, Material Design, etc.) para uso fácil em componentes React.
Gerenciamento de Estado
Estado Local (useState): Utilizado para o estado de componentes específicos (ex: searchTerm na página inicial).
Context API (useContext): Usado para estado global e acessível em múltiplos componentes (ex: AuthContext para dados de autenticação do usuário).
Comunicação com o Backend
A comunicação com a camada de backend é gerenciada de forma centralizada e modular, utilizando a biblioteca axios para as requisições HTTP.

Configuração da API (src/services/api.ts):

Uma instância do axios é criada com uma baseURL configurada a partir da variável de ambiente import.meta.env.REACT_APP_API. Isso permite fácil alternância entre ambientes de desenvolvimento e produção.
Um Interceptor de Requisição é implementado para automaticamente incluir um token de autenticação (se disponível no localStorage) no cabeçalho Authorization de todas as requisições. Isso simplifica o manuseio da autenticação.
TypeScript

// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.REACT_APP_API,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
Módulos de Serviço (src/services/modules/):

Cada recurso da API (como posts ou usuario) possui seu próprio módulo de serviço (posts.ts, usuario.ts).
Esses módulos contêm funções assíncronas (ex: getListaPosts, getPostId, createPost) que encapsulam as chamadas à API usando a instância api configurada.
Estado Atual (Desenvolvimento): Atualmente, as chamadas diretas à API real dentro desses módulos estão comentadas. O projeto utiliza dados mockados (presentes em src/services/backEndFake/posts.ts) para simular as respostas da API, permitindo o desenvolvimento e teste do front-end de forma independente do backend.
Transição para API Real: Para integrar com um backend real, basta descomentar as chamadas await api.get(), await api.post(), await api.put(), etc., dentro dos módulos de serviço e garantir que a variável de ambiente REACT_APP_API_BASE_URL (corrigi para o nome da sua variável) no seu arquivo .env aponte para a URL correta do backend.
TypeScript

// src/services/modules/posts.ts
import type { IPost } from "../../interface";
import api from "../../api"; // Esta importação será descomentada para usar a API real
import { dataPostsFake as initialDataPostsFake } from "../backEndFake/posts"; // Importação dos dados fake

export const getListaPosts = async () => {
    try {
        // Descomentar a linha abaixo para usar a API real:
        // const { data } = await api.get("/posts");
        // return data;

        // Retorna dados fake para desenvolvimento
        return { data: initialDataPostsFake };
    } catch (error) {
        console.error("Erro ao buscar posts:", error);
        return null;
    }
};

export const getPostId = async (id: number) => {
    try {
        // Descomentar a linha abaixo para usar a API real:
        // const { data } = await api.get(`/posts/${id}`);
        // return data;

        // Retorna post fake para desenvolvimento
        const postEncontrado = initialDataPostsFake.find((p) => p.id === id);
        return { data: postEncontrado };
    } catch (error) {
        console.error(`Erro ao buscar post com ID ${id}:`, error);
        return null;
    }
};

// ... e assim por diante para createPost, updatePost, deletePost
📚 Guia de Uso
Para Usuários
Navegação: Use a barra de navegação superior (se houver) ou os links nas listagens para explorar os posts.
Busca: Utilize o campo de busca na página inicial para filtrar posts por título, autor ou conteúdo.
Comentários: Na página de detalhes de um post, você pode visualizar os comentários existentes e adicionar o seu próprio.
Autenticação (Admin): Na barra de navegação é possível realizar o login e o logout do usuário.
Para Desenvolvedores
Adicionando Novas Rotas/Páginas:

Crie um novo arquivo .tsx em src/pages/.
Defina o componente React para sua nova página.
Adicione a nova rota em seu arquivo de roteamento principal (geralmente App.tsx ou um arquivo routes.tsx).
Criando Componentes Reutilizáveis:

Crie uma nova pasta em src/components/.
Dentro dela, adicione o arquivo .tsx do componente e seu respectivo arquivo de estilo (se houver).
Importe e utilize o componente onde for necessário.
Integração com API:

Descomente e configure as chamadas de API em src/services/modules/ quando o backend estiver pronto.
Ajuste o .env com a REACT_APP_API_BASE_URL correta.
Rodando os Testes:

O projeto inclui testes unitários desenvolvidos com Vitest e Testing Library. Você pode executá-los utilizando os seguintes comandos:

Executar todos os testes: Este comando executa todos os testes uma única vez.
Bash

npm test
# ou
yarn test
Executar testes em modo de observação (watch mode): Este comando executa os testes e os mantém em execução, re-executando-os automaticamente sempre que há alterações nos arquivos. Ideal para o desenvolvimento contínuo.
Bash

npm run test:watch
# ou
yarn test:watch
Executar testes com cobertura de código: Este comando executa os testes e gera um relatório detalhado da cobertura de código, mostrando quais partes do seu código foram testadas.
Bash

npm run test:coverage
# ou
yarn test:coverage
O relatório de cobertura geralmente é gerado em uma pasta coverage/ na raiz do projeto, e você pode abri-lo em seu navegador (coverage/index.html) para uma visualização interativa.
Testes Unitários
O projeto utiliza Vitest como framework de testes e Testing Library para escrever testes que focam no comportamento do usuário, garantindo a funcionalidade e a robustez dos componentes.

Configuração: Os arquivos de configuração de teste (vitest.config.ts, setupTests.ts) e o setup de ambiente de teste com jsdom (para simular o DOM no ambiente Node.js) estão definidos para um desenvolvimento eficiente e rápido.
Localização dos Testes: Os testes unitários estão localizados na pasta src/tests/, seguindo a convenção de nomear os arquivos de teste como [NomeDoComponente].test.tsx (ex: NavBar.test.tsx).
Foco no Comportamento do Usuário: A Testing Library encoraja testes que interagem com o componente da mesma forma que um usuário faria, buscando elementos pelo texto visível, rótulos de acessibilidade, etc., o que resulta em testes mais resilientes a mudanças internas da implementação.
Mocks de Contexto e Navegação: Para testar componentes que dependem de Contextos (como AuthContext) ou de hooks de navegação (useNavigate do React Router DOM), são utilizados mocks (com vi.fn() do Vitest) para simular o comportamento desses dependências, isolando o componente a ser testado.
Exemplo de Teste (src/tests/NavBar.test.tsx):

TypeScript

// src/tests/NavBar.test.tsx
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar/NavBar'; // Ajuste o caminho se necessário
import { AuthContext } from '../context/authContext'; // Importe o AuthContext

describe('NavBar', () => {
  const mockHandleLogout = vi.fn();
  const mockNavigate = vi.fn();

  // Mock do AuthContext para controlar o estado de autenticação nos testes
  const mockAuthContext = {
    isAuth: false, // Pode ser true para testar estados autenticados
    setIsAuth: vi.fn(),
    login: vi.fn(),
    logout: mockHandleLogout,
  };

  it('Renderiza o título do blog e o ícone', () => {
    render(
      // Provedor de contexto para o teste
      <AuthContext.Provider value={mockAuthContext}>
        <NavBar
          isAuthenticated={mockAuthContext.isAuth} // Passa o estado de autenticação para o NavBar
          handleLogout={mockHandleLogout}
          navigate={mockNavigate}
        />
      </AuthContext.Provider>
    );

    // Verifica se o título do blog está presente
    expect(screen.getByText('Blog Educacional')).toBeInTheDocument();

    // Verifica se o ícone da coruja está presente e tem o src correto
    const iconImagem = screen.getByRole('img', { name: /coruja/i });
    expect(iconImagem).toBeInTheDocument();
    expect(iconImagem).toHaveAttribute('src', expect.stringContaining('coruja.png'));
  });

  // Você pode adicionar mais testes aqui, por exemplo:
  // it('Exibe botão de login quando não autenticado', () => { /* ... */ });
  // it('Exibe botões de admin quando autenticado', () => { /* ... */ });
  // it('Chama logout ao clicar no botão de logout', () => { /* ... */ });
});

🤝 Contribuição
Faça um fork do repositório.
Crie uma nova branch para sua feature (git checkout -b feature/minha-nova-funcionalidade).
Faça suas alterações e commit (git commit -m 'feat: adiciona nova funcionalidade X').
Envie para o seu fork (git push origin feature/minha-nova-funcionalidade).
Abra um Pull Request no repositório original.

🐛 Issues
Se encontrar algum bug ou tiver sugestões de melhoria, por favor, abra uma issue no repositório.
