# EBAC - Tech Talks

<!-- Link para página do projeto -->
> Visite a página clicando [aqui](https://zkd-evento-ficticio.netlify.app/ "Visitar página").

### Sobre o projeto:

#### Aviso ⚠️
> Antes de começar a descrever sobre o projeto, **deixo claro** que todos os meus repositórios que iniciam com o nome **"EBAC"**, eu desenvolvi o código desses repositórios junto as aulas que faço no curso ***Full-Stack Java*** na plataforma da **EBAC** ***(Escola Britânica de Artes Criativa & Tecnologia)***. Então, se você entrar em um repositório que **não contenha** o título **EBAC**, se trata de uma criação própria minha, e se entrar em um repositório que **possuí/contenha** o nome **EBAC**, o código dele foi desenvolvido com as experiências e conhecimentos que meus professores passavam enquanto eu assistia as aulas do meu curso e desenvolvia o código junto com eles.

Nesse projeto foi criado uma página com um **Timer** para o evento da **EBAC Tech Talks**, nessa página, existem 4 seções que estão relacionadas ao "_evento_", sendo elas: **Front-end**, **UI/UX**, **Data Science** e **Back-end**.
Caso ainda não tenha visto a página, clique [aqui](https://zkd-evento-ficticio.netlify.app/ "Visitar página").

---

 ### Tecnologias usadas:
 * HTML
 * CSS
 * SASS
 * Parcel
 * AOS - Animate On Scroll Library
---
### Sobre as Tecnologias:

#### HTML
O ***HTML***(HyperText Markup Language) é uma linguagem utilizada para construir a estrutura da uma página, como links, textos, fomulários e etc. Ele faz isso através de **Tags** que são envolvidas por **<>**. O navegador utiliza essa linguagem para interpretar a ***estrutura e semântica*** da página, a **semântica** está relacionada as divisões da página, como por exemplo as tags ***header(cabeçalho), main(principal), section(seção) e footer(rodapé***), cada uma dessas tags, ajuda o navegador interpretar onde fica cada elemento da página. Já a **estrutura**, são os elementos presentes na página que estão ligados com a semântica, por exemplo um título **H1** que é o título principal de uma página.

#### CSS
O ***CSS***(Cascading Style Sheets) é uma linguagem utilizada para construir o design de uma página em si. Enquanto o HTML coloca seus elementos na página, o CSS organiza eles para ficarem mais atrativos ao usuário, ademais o CSS permite criar páginas animadas e dinâmicas. Para usar o CSS, temos que usar os ***seletores, propriedades e valores***. Os **seletores** podem ser definidos por ***Tags, IDs e Classes***, de modo geral, o **seletor é o item(Tag) que vai ser alterado**. As **propriedades** são utilizadas para causar os efeitos, por exemplo '***font-size***', essa propriedade é utilizada para alterar o tamanho da fonte de textos. Já os **valores**, são o efeito em sí, para uma propriedade funcionar ela precisa de um valor para se basear, no mesmo exemplo de antes, digamos que temos o '**font-size**' assim: ***font-size: 16px;***, isso quer dizer que a propriedade ***font-size*** vai ter o valor de ***16px***, ou seja o seletor que contém essa informação vai ter o(s) texto(s) no tamanho de 16px.

#### SASS
O **_SASS_** é um pré-processador de CSS que auxília na contrução e entendimento do código CSS. Com sua sintaxe é possível utilizar **Seletores dentro do código de outros Seletores**, assim ajudando a interpretar melhor o código e ficando com uma maior performace.
Com o SASS é possível utilizar ferramentas que não estão presentes no CSS, como por exemplos **_Módulos_**, **_Funções_**, **_Variáveis_**, **_Mixins_** e etc. O **Módulo** é um arquivo que contém códigos CSS que você pode ser importado em um único ou mais 
arquivos, assim, criando um sistema mais fácil de gerenciamento, pois é possível dividir o código em partes. Já as **Funções**, permitem que adicione uma lógica de programação no código, por exemplo, criar um **Função** que converte **Pixels(px)** em **EMs**,
assim deixando o código flexível e fazendo o desenvolvimento ficar mais prático e rápido, pois, o programador não vai precisar ficar fazendo o cálculo de conversão de cabeça, ademais, isso garante que o cálculo sempre seja certeiro. As **Variáveis** permitem 
guardar um código CSS que pode ser importado em vários arquivos, por exemplo, imagine que você desenvolveu um página que possuía uma cor principal em vários elementos do sites, como botões, background, textos e etc, no entanto, logo quando você terminou a 
construção, o cliente decide mudar a cor principal do site, no modo convencional seria preciso mudar trecho por trecho onde possuía determinada cor, no entanto, se caso estivesse sendo usado variáveis, bastaria você alterar a cor embutida/presa/presente/ligada 
a variável, assim você economizaria tempo para fazer outros afazeres. Os **Mixin** são construídos de forma semelhante as **Funções**, eles servem para reutilizar códigos CSS que estão sendo usados em algumas ou várias partes do código, por exemplo, imagine que 
você tenha dois elementos HTML que possuem algumas características em comum, como **_font-size_**, **_color_** e **_padding_**, para resolver isso, bastaria você criar um **Mixin** que possua os mesmos códigos desses elementos, e após isso, substituir o códigos 
semelhantes pelo **Mixin**. Até o momento, apenas expliquei algumas coisas do **SASS** para mostrar sua importância, mas caso estudar ou apenas ler sobre o SASS, clique [aqui](https://sass-lang.com/documentation/ "Documentação do SASS")

#### Parcel
A ferramenta **_Parcel_** é um empacotador de aplicações web conhecido por sua rapidez e facilidade de uso. Ele se destaca por utilizar processamento multicore e cache do sistema de arquivos para compilar rapidamente, mesmo após reiniciar. Parcel funciona nativamente com 
JavaScript, CSS, HTML e outros tipos de arquivos, sem a necessidade de plugins adicionais. Além disso, ele converte automaticamente o código usando Babel, PostCSS e PostHTML quando necessário. Uma das suas funcionalidades mais úteis é a separação de código, que 
permite carregar apenas o necessário no carregamento inicial, utilizando a sintaxe dinâmica import(). Durante o desenvolvimento, Parcel oferece a atualização automática dos módulos no navegador, sem precisar de configuração, e exibe erros diretamente no código, 
facilitando a identificação e correção. Em resumo, Parcel é uma ferramenta eficiente e sem complicações, ideal para desenvolvedores que buscam otimizar o empacotamento de suas aplicações web. Caso queira estudar sobre essa ferramenta
clique [aqui](https://pt.parceljs.org/ "Documentação do Parcel").

#### AOS - Animate On Scroll Library
O **_AOS(Animate On Scroll Library)_** é uma biblioteca JavaScript que implementa **animações** conforme a rolagem da página desce. Para começar a utilizar ela, devemos adicionar os **CDNs(Content Delivery Network)** de **_CSS_** e **_JavaScript_** no nosso código, após isso, devemos adicionar o 
atributo **data-aos="_Nome da animação_"** aos elementos HTML a serem animados, em seguida escrevemos o script <code>AOS.init()</code> e pronto, está feito a sua animação. Caso queira estudar mais sobre essa biblioteca, 
clique [aqui](https://michalsnik.github.io/aos/ "Documentação do AOS(Animate On Scroll Library")

---
