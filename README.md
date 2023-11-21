# GraffWall: Conectando Arte e Espaços

O GraffWall é um projeto concebido como parte do curso de Análise e Desenvolvimento de Sistemas (ADS) do Centro Universitário SENAC (EAD). Trata-se de um aplicativo móvel inovador projetado para unir proprietários de muros ou espaços vazios à artistas e grafiteiros talentosos. Com uma interface intuitiva, nossa plataforma proporciona uma conexão direta entre quem busca transformar seus espaços e artistas disponíveis para expressar sua arte.

Este projeto é resultado do curso de ADS no SENAC EAD, visando oferecer uma plataforma que conecta a visão dos proprietários de espaços à criatividade dos artistas, promovendo a expressão artística em comunidades de forma colaborativa.

## Integrantes do Grupo
- Carollina Guedes Machado
- Danilo Gomes Torquato
- Enzo Adriano Lagoela Souza
- Leonardo Da Silva Oliveira
- Marcelo Alvaro de Sousa
- Rodrigo Schiavone Rosa

## Requisitos

- **Docker** - Para executar o banco de dados e a API. [Instalação do Docker](https://www.docker.com/get-started)
- **Node.js** - Para desenvolvimento local. 
  - [Site oficial - Node.js](https://nodejs.org/)
  - Instalação:
    - Windows: Baixe e execute o instalador no site oficial.
    - Linux: Use o gerenciador de pacotes (`apt`, `yum`, `snap`, etc.) ou instale via Node Version Manager (NVM).
    - Mac: Use o Homebrew ou baixe o instalador no site oficial.
- **React Native e Expo** - Para o desenvolvimento do aplicativo.
  - [Site oficial - React Native](https://reactnative.dev/)
  - [Site oficial - Expo](https://expo.dev/)
  - Instalação:
    - Windows: Instale Node.js, siga o guia oficial do React Native e Expo para Windows.
    - Linux: Siga os guias oficiais para instalar Node.js, React Native e Expo no Linux.
    - Mac: Use o Homebrew para instalar Node.js, siga o guia oficial do React Native e Expo para macOS.

## Configuração Inicial

1. Certifique-se de ter Docker, Node.js, React Native e Expo instalados.
2. Instale as dependências da pasta FrontEnd do projeto:

cd FrontEnd
npm install



3. Construa e inicie os containers do banco de dados e da API com Docker Compose:

docker-compose up --build

markdown

4. Encontre o endereço IP local da sua máquina:
- **Windows**: Abra o prompt de comando e digite `ipconfig`.
- **Mac e Linux**: Abra o terminal e digite `ifconfig` ou `ip addr show`.

## Configuração do IP Local

Após encontrar o endereço IP local da sua máquina, atualize a variável `IP_LOCAL` no arquivo `Config.js` localizado em `/FrontEnd/util/Config.js` com o endereço IP local.

## Executando o Aplicativo

1. Com os containers do banco de dados e da API em execução, execute o aplicativo na pasta FrontEnd:

cd FrontEnd
npm start

css

2. Escaneie o código QR gerado com o app Expo Go no seu dispositivo móvel ou em um emulador Android configurado na sua máquina.


