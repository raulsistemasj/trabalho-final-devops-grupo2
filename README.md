# How to - Execução e deploy do app

> Pré-requisitos: 
> - Git instalado
> - Npm instalado

1 - Fazer o clone da aplicação do repositório GIT SSH ou HTTPS para baixar o projeto:
```bash
   git clone git@github.com:raulsistemasj/trabalho-final-devops-grupo2.git
   git clone https://github.com/raulsistemasj/trabalho-final-devops-grupo2.git
```
2 - Apos efetuar o clone na maquina entre na pasta do projeto pelo terminal com o comando abaixo:
```bash
    cd trabalho-final-devops-grupo2
```
3 - Instalar o CLI do amplify, para poder usar os comando do amplify via linha de comando:
```bash
    npm install -g @aws-amplify/cli
```
4 - Vamos configurar o acesso ao Amplify existente do projeto na AWS para utilizar o usuario existente:
  Execute o comando - amplify init no terminal 
  Siga os passos escolhendo os paramtros conforme a imagem abaixo:

  ![](img/configuracao.png)

  OBs - o accessKeyId e secretAccessKey estão no txt enviado pelo portal fiap ao professor. 


5 - Baixar as dependências  projeto com o comando abaixo:
```bash
    npm install
```

6 - Subir a aplicação para utilização com o comando:
```bash
    npm start
```
   







### Integrantes do trabalho:

- RM 340931 - Julio Henrique Bitencourt 
- RM 341155 - Marcos Vinicius Amaral Apóstolo
- RM 341282 - Raul Marciano Ferreira
