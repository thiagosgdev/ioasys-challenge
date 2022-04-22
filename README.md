# Squad 8 - Trem que voa 8 3/4

## API - Backend

## Tecnologias

    - Redis Cache para armazenar a Blacklist de tokens inválidados.
    - EC2 para configurar o servidor, Postgres na RDS para o banco de dados e SES para envio de e-mail.
    - Winston para realizar o log do console
    - Throttler para proteção contra excesso de acessos em curto período.
    - Helmet e Guard para proteção.

## Configuração

### Usando Docker

    - Após clonar o repositório em algum diretório em seu computador, abra um terminal e vá até a pasta em que se encontra o repositório.
    - No terminal rode o comando para instalar as dependencias:
        - yarn
    - Renomeie o arquivo .env.example para .env e coloque as váriaveis de ambiente de acordo com sua preferência.
    - Execute o comando docker-compose up --build para montar os containers, rodar as migrations e a aplicação.
    - Abra um novo terminal na pasta do repositório se preferir, e execute os comandos: docker exec -it app_ioasys yarn seed:admin e docker exec -it app_ioasys yarn seed:data  para popular o banco de dados
    - Caso de algum erro, tente rodar a aplicação localmente por favor ou entre em contato comigo por e-mail ou  telegram se preferir.

### Usando localmente

    - Após clonar o repositório em algum diretório em seu computador, abra um terminal e vá até a pasta em que se encontra o repositório.
    - No terminal rode o comando para instalar as dependencias:
        - yarn
    - Renomei o arquivo .env.example para .env e coloque as váriaveis de ambiente de acordo com sua preferência.
    - Altere o campo "host" no arquivo ormconfig.json para "localhost"
    - No terminal rode os comandos:
        - Para criar o banco de dados: yarn seed:database
        - Para criar as tabelas: yarn migration:run
        - Para criar os usuarios: yarn seed:admin
        - Para popular o banco de dados: yarn seed:data
        - Para rodar a aplicação: yarn start:dev ou yarn start

## Fluxo da Aplicação

    - Após criar sua conta, o usuário pode: atualizar seus dados e cadastrar seus interesses e caso possua, sua(s) deficiência(s).
    - O usuario pode criar evento, verificar todos os eventos ou eventos recomendados com base no seu interesse.
    - No momento não existe um meio para usuario existente virar usuario premium. Isso é algo que colocamos no roadmap para implementações futuras junto a um sistema de pagamentos de eventos para monetização.
    - Uma série de rotas foram implementadas para alimentar o website e aplicações mobile.
    - Rotas para criar atividades, moods, foram implementadas pensando em futuras funções para um painel administrativo.

## Considerações e Observações

    - O Decoretor @Public permite acesso as rotas sem estar logado. As demais rotas precisa passar o token recebido no Signup ou Signin

    - As rotas que requerem por algum motivo o ID do usuario, pegam o ID do usuario através do Token informado.

    - Os dados de administrador podem ser alterados no arquivo e caso queira adicionar mais de um, basta copiar a query do INSERT e executar mais uma ou editar a já existente: final-challenge/src/infra/typeorm/seeds/create-admin.ts

    - Fiz alguns testes unitários para uma cobertura básica de testes, basta digitar o comando yarn test para executa-los

    - O diagrama e arquivo do Postman se encontram na raiz do projeto.

    - Para resetar a senha, é gerada uma senha nova e enviada por e-mail para o usuario. A configuração foi feita no SES da AWS.

    - O servidor de produção está hospedado numa máquina EC2 da AWS e o banco de dados no RDS também da AWS.

    - Precisei habilitar o protocolo HTTPS na aplicação para a trilha de Android. Usei o Certbot para gerar o certificado e como já tinha um dominio pago, optei por usa-lo para não gerar um custo a mais. Utilizei a Route 53 para controle do dominio e NGINX no servidor para proxy reverso. A documentação do swagger pode ser consultada aqui: thiagosgdev.com/api/docs

### Em caso de dúvidas ou problemas, estou a disposição no e-mail thiagosgdev@gmail.com
