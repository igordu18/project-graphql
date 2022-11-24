# Projeto-Piloto com GraphQL

<h4 align="center"> 
	🚧  Em construção...  🚧
</h4>

<p align="center">
 <a href="#objetivo">Objetivo</a> •
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#Documentação">Documentação</a>
</p>

### Objetivo

<p align="justify">
Projeto desenvolvido a fins de estudo do framework GraphQL utilizando o ecossistema do Apollo Client.
</p>

## Tecnologias

**Front-end:** React, Material UI, Apollo Client.

**Back-end:** Java, Spring boot com GraphQL.


## Instalação

### Pré-requisitos

<p align="justify">
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).
</p>

#### Siga as seguintes instruções para utilizar o projeto no seu computador:

```bash
    # Clone o repositório
    $ git clone https://github.com/igordu18/project-graphql.git

    # Acesse a pasta do projeto clonado
    $ cd project-graphql

    # Instale as dependências
    $ npm install

    #Inicie o projeto em servidor de desenvolvimento
    $ npm run dev
```

#### Alternativa

<p align="justify">
Você também pode dar uma olhada no sistema funcionando clicando [aqui](https://trainee-graphql.vercel.app/).
</p>

## Documentação

#### Por que estamos utilizando o VITE.

<p align="justify">
Com o tempo, a constante evolução na construção de aplicativos, traz cada vez mais ambições.
Portanto, projetos estão consumindo milhares de módulos e, utilizando o CRA (Create-React-App), as aplicações estão começando a atingir limites de desempenho que pode ocasionar demoras excessivamente longas para rodar um servidor de desenvolvimento. As edições dos arquivos também podem levar alguns segundos até serem atualizadas no navegador, consequentemente traz feedbacks mais lentos que podem afetar bastante a produtividade.
</p>
<p align="justify">
O VITE visa resolver esses problemas na hora de início do servidor de desenvolvimento dividindo os módulos em um aplicativo em duas categorias: dependências e código fonte.
Por exemplo, quando um arquivo é editado, o VITE precisa apenas invalidar com precisão a cadeia entre o módulo editado e seu limite HMR mais próximo, tornando as atualizações de HMR consistentemente rápidas, independemente do tamanho do seu aplicativo.
</p>
<p align="justify">
Você pode ler detalhadamente no link abaixo, todos os motivos para utilizar o VITE nas suas aplicações.

[Documentação VITE](https://vitejs.dev/guide/why.html)
</p>


#### Por que estamos utilizando Apollo Client.

<p align="justify">
O Apollo Client é um sistema completo que possibilita construir, gerenciar e acessar dados com GraphQL. Contendo um ecossistema completo que oferece diversas soluções e features completas, ele também é flexível e possibilita uma fácil integração com diversas bibliotecas, por exemplo com o Relay. A abordagem com o Apollo Client simplifica o gerenciamento de dados remotos e locais, iterando rapidamente com pequenos códigos.
</p>
<p align="justify">
É possível utiliza-lo em casos com funcionalidades personalizadas com a arquitetura do Apollo Link.
</p>
<p align="justify">
Você pode ler detalhadamente no link abaixo, toda a documentação e o porque utilizar o Apollo Client nas suas aplicações.

[Documentação Apollo Client](https://www.apollographql.com/docs/react/why-apollo/)
</p>
