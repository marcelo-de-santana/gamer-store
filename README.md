## Motivação

Este projeto foi desenvolvido durante um bootcamp da [COD3R](https://formacao.dev), com o objetivo de demonstrar as habilidades adquiridas nas tecnologias envolvidas. Embora o sistema base tenha sido criado como parte do bootcamp, ele foi aprimorado com minhas contribuições, incluindo novas funcionalidades, documentação e  outras melhorias.

Sinta-se à vontade para clonar, testar e adicionar novas funcionalidades ao projeto. Ele foi desenvolvido para fins de ambiente de teste. **Antes de implantar em produção, certifique-se de ocultar as variáveis de ambiente nos arquivos `.env`** para garantir a segurança e a integridade do sistema.

Caso tenha **dúvidas**, estou à disposição através do [LinkedIn](https://linkedin.com/in/marcelodesantana/) ou [Gmail](mailto:marcelo.255.m.n.s@gmail.com).

## Descrição

Um e-commerce que permite que os clientes realizem pedidos, oferecendo diversas funcionalidades, como:

- [Listagem de produtos](#listagem-de-produtos-frontend)
- [Busca por filtros](#busca-por-filtros-frontend)
- [Detalhamento do produto](#detalhamento-do-produto-frontend)
- [Avaliação de preços (ranking de históricos)](#avaliacao-de-precos-ranking-de-historicos-frontend)
- [Vídeos de review](#videos-de-review-frontend)
- [Carrinho de compras e finalização de pedido](#carrinho-de-compras-e-finalizacao-de-pedido-frontend)


## Tecnologias Utilizadas

- **Frontend:** Next.js e React
- **Backend:** NestJS, Prisma, Docker e PostgreSQL
- **Mobile:** Expo, React Native e React Navigation

## Arquitetura

O repositório é gerenciado pelo [Turborepo](https://turbo.build/repo/docs), permitindo que os três sistemas **(frontend, backend e mobile)** sejam executados simultaneamente com o comando único `yarn run dev`. Essa abordagem possibilita:

- **Compartilhamento de dependências:** As bibliotecas Node.js são compartilhadas entre os projetos, reduzindo o tempo de download, instalação e consequentemente o armazenamento.
- **Regras de negócio centralizadas:** As regras de negócio estão centralizadas no diretório `/packages/core`, localizado na raiz do repositório.

## Limitações e Desafios

Uma das limitações enfrentadas foi a dificuldade em salvar os dados do banco de dados na pasta `.data` do backend, devido a problemas de permissão durante o build do mobile.

## Como testar

### Requisitos necessários:
- [Node.js](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) instalado via npm
- [Android Studio e Java](https://reactnative.dev/docs/set-up-your-environment) (Mobile)

### Passos para testar o projeto:

1. Clone o repositório:

    ```bash
    git clone https://github.com/marcelo-de-santana/gamer-store.git
    ```

2. Acesse o diretório do projeto:

    ```bash
    cd ./gamer-store
    ```

3. Para instalar o banco de dados e as dependências do projeto, execute:

    ```bash
    ./scripts/init.sh
    ```

4. Para iniciar o **Frontend** e **Backend**, execute:

    ```bash
    ./scripts/start.sh
    ```

5. Para iniciar a aplicação **Mobile**, execute:

    ```bash
    ./scripts/start-mobile.sh
    ```

## Anexos - Frontend

<div>
  <table>
    <tr>
      <td><strong>Funcionalidade</strong></td>
      <td><strong>Imagem</strong></td>
    </tr>
    <tr>
      <td><a id="listagem-de-produtos-frontend"></a><strong>Listagem de Produtos</strong></td>
      <td><img src="https://raw.githubusercontent.com/marcelo-de-santana/imagioteca/refs/heads/master/gamer%20store/frontend/01.png" alt="Listagem de Produtos"></td>
    </tr>
    <tr>
      <td><a id="busca-por-filtros-frontend"></a><strong>Busca por Filtros</strong></td>
      <td><img src="https://raw.githubusercontent.com/marcelo-de-santana/imagioteca/refs/heads/master/gamer%20store/frontend/02.png" alt="Busca por filtros"></td>
    </tr>
    <tr>
      <td><a id="detalhamento-do-produto-frontend"></a><strong>Detalhamento do Produto</strong></td>
      <td><img src="https://raw.githubusercontent.com/marcelo-de-santana/imagioteca/refs/heads/master/gamer%20store/frontend/03.png" alt="Detalhamento do produto"></td>
    </tr>
    <tr>
      <td><a id="avaliacao-de-precos-ranking-de-historicos-frontend"></a><strong>Avaliação de Preços (Ranking de Históricos)</strong></td>
      <td><img src="https://raw.githubusercontent.com/marcelo-de-santana/imagioteca/refs/heads/master/gamer%20store/frontend/04.png" alt="Avaliação de preços (ranking de históricos)"></td>
    </tr>
    <tr>
      <td><a id="videos-de-review-frontend"></a><strong>Vídeos de Review</strong></td>
      <td><img src="https://raw.githubusercontent.com/marcelo-de-santana/imagioteca/refs/heads/master/gamer%20store/frontend/05.png" alt="Vídeos de review"></td>
    </tr>
    <tr>
      <td><a id="carrinho-de-compras-e-finalizacao-de-pedido-frontend"></a><strong>Carrinho de Compras e Finalização de Pedido</strong></td>
      <td><img src="https://raw.githubusercontent.com/marcelo-de-santana/imagioteca/refs/heads/master/gamer%20store/frontend/06.png" alt="Carrinho de compras e finalização de pedido"></td>
    </tr>
  </table>
</div>


## Anexos - Mobile

<div>
  <table>
    <tr>
      <th>Funcionalidade</th>
      <th>Imagem</th>
    </tr>
    <tr>
      <td><a id="listagem-de-produtos-mobile"></a><strong>Listagem de Produtos</strong></td>
      <td><img style="height:700px; width:auto" src="https://raw.githubusercontent.com/marcelo-de-santana/imagioteca/refs/heads/master/gamer%20store/mobile/01.png" alt="Listagem de Produtos"></td>
    </tr>
    <tr>
      <td><a id="busca-por-filtros-mobile"></a><strong>Busca por Filtros</strong></td>
      <td><img style="height:700px; width:auto" src="https://raw.githubusercontent.com/marcelo-de-santana/imagioteca/refs/heads/master/gamer%20store/mobile/02.png" alt="Busca por filtros"></td>
    </tr>
    <tr>
      <td><a id="detalhamento-do-produto-mobile"></a><strong>Detalhamento do Produto</strong></td>
      <td><img style="height:700px; width:auto" src="https://raw.githubusercontent.com/marcelo-de-santana/imagioteca/refs/heads/master/gamer%20store/mobile/03.png" alt="Detalhamento do produto"></td>
    </tr>
    <tr>
      <td><a id="avaliacao-de-precos-ranking-de-historicos-mobile"></a><strong>Avaliação de Preços (Ranking de Históricos)</strong></td>
      <td><img style="height:700px; width:auto" src="https://raw.githubusercontent.com/marcelo-de-santana/imagioteca/refs/heads/master/gamer%20store/mobile/04.png" alt="Avaliação de preços"></td>
    </tr>
    <tr>
      <td><a id="videos-de-review-mobile"></a><strong>Vídeos de Review</strong></td>
      <td><img style="height:700px; width:auto" src="https://raw.githubusercontent.com/marcelo-de-santana/imagioteca/refs/heads/master/gamer%20store/mobile/05.png" alt="Vídeos de review"></td>
    </tr>
    <tr>
      <td><a id="carrinho-de-compras-e-finalizacao-de-pedido-mobile"></a><strong>Carrinho de Compras e Finalização de Pedido</strong></td>
      <td><img style="height:700px; width:auto" src="https://raw.githubusercontent.com/marcelo-de-santana/imagioteca/refs/heads/master/gamer%20store/mobile/06.png" alt="Carrinho de compras e finalização de pedido"></td>
    </tr>
  </table>
</div>
