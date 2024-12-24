## Motivação

Este projeto foi desenvolvido como uma forma de demonstrar minhas habilidades nas tecnologias envolvidas. Embora não seja um sistema completo, ele apresenta funcionalidades que exemplificam como integrar diferentes ferramentas para construir uma aplicação funcional.

Sinta-se à vontade para clonar, testar e adicionar novas funcionalidades.

Caso tenha **dúvidas**, estou à disposição através do [LinkedIn](https://linkedin.com/in/marcelodesantana/) ou [Gmail](mailto:marcelo.255.m.n.s@gmail.com).

## Descrição

Um e-commerce que permite que os clientes realizem pedidos, oferecendo diversas funcionalidades, como:

- Listagem de produtos
- Busca por filtros
- Detalhamento do produto
- Avaliação de preços (ranking de históricos)
- Vídeos de review
- Carrinho de compras e finalização de pedido

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

    git clone repo

    cd ./game-store

    ./scripts/init.sh

    ./scripts/start.sh



Para ativar o banco de dados

pastar backend cd apps/backend
docker compose up -d

Popular o banco de dados
npx prisma migrate dev
prisma db seed

Iniciar projeto
yarn run dev