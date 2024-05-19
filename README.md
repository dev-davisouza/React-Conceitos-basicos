
## Pra mim, oq é React?

React é uma lib front-end do JavaScript(JS) orientado a componentes.
Por ser uma lib JS, o React também tem seu comportamento e ciclo
de vida afetado por eventos JavaScript, oque permite controlar estes
eventos e ao mesmo tempo manipular componentes conjuntamente, fazendo
com que o React seja uma boa lib para se trabalhar com front-end,
pois é capaz de implementar interatividade sem a necessidade de recarregar a página.

## Não pra mim, mas profissionalmente, oq é React?

- React é uma biblioteca JS para criação de interfaces;
- Utilizado para construir SPAs (Single page aplication);
- Baseado em componentes;
- Utiliza JSX para renderizar HTML;
- Aplica o Virtual DOM para realizar as aplicações de DOM;
- Podemos adicionar a um projeto ou criar um projeto com ele;

### Sobre componentes:

- Permite dividir a aplicação em partes;
- Os componentes renderizam JSX, assim como App.js (que é um componente);
- Precisamos criar um arquivo de componentes;
- Normamalmente ficam armazenados em uma pasta separada chamada de 'components';
- Há componentes genéricos que você cria que podem ser reutilizáveis e outros que são específicos da sua aplicação;
- Ao usar {} dentro do JSX, você pode executar JS dentro das chaves;

#### Sobre as props:
- "Props" é a versão contraída da palavra "properties" que quer dizer propiedades;
- "props" é um termo que é usado por convenção dos programadores; o motivo se deve ao fato de que geralmente um compomente React genérico recebe valores que são passados dinamicamente para as propiedades das tags HTML. Mas essencialmente, este termo pode ser substituído por qualquer outro por se tratar de uma função JS;

#### Props podem ser mais complexas!
- Você pode desestruturar (destructuring) as props definindo um nome específico para os parâmetros, não mais usando 'props' como prefixo para tudo;
- É possível definir tipos específicos para um prop;
- Depois de criado o componente, você deve adicionar o atributo 'propTypes' e atribuir um objeto JavaScript que pega o mesmo nome que está no parâmetro da função e aplica alguma regra;
- Para tipar basta importar a lib 'PropTypes' e acessá-la (veja [Item.js](/src/components/Item.js));
- Props podem ter um valor padrão;
- Definindo um atributo ao componente chamado 'defaultProps' você segue a mesma lógica de PropTypes para atribuir um valor padrão ao parâmetro da função (neste caso um componente React);


#### Props podem receber métodos como argumento na chamada do componente.
- Podem chamar um método de seu ancestral;
- Útil para manipular diferentes funções para um mesmo evento;

##

### Sobre fragments:
- São tag vazias <></> de abertura e fechamento que envolvem um conteúdo sem a necessidade de uma tag pai entenda mais sobre isso no arquivo [List.js](/src/components/List.js);
- Por exemplo, se há duas tags de mesmo nível, como um h1 e uma ul, você pode envolvê-las em tag vazias, chamadas fragments;
- No HTML não é carregado as tags vazias (<></>), somente os filhos, que quando renderizados sobem ao nível do pai, neste caso, no nível do fragment;

##

### Sobre Eventos do React:
- São os mesmos eventos do DOM;
- Os eventos são atrelados a uma tag que irá executá-lo;
- Geralmente, um método é atribuído ao evento;
- Este método deve ser criado no componente;
- Ao criar uma função filha (método) do componente ela tem acesso aos parâmetros do pai;
- Este método deve ser passado para dentro do evento da tag como referência, ou seja, sem os parênteses para que não ocorra a chamada do método de imediato;
- Este método pode receber um evento como argumento através do parâmetro 'event', ou simplesmente 'e' por convenção, e a partir dele pode-se manipular os eventos que ocorrem no DOM daquele componente, como o 'event.preventDefault()' que foi usado no [Form.js](/src/components/Form.js); 

##

### Sobre os Hooks: 
- Do inglês, significa "ganchos";
- O React já tem um conjunto de hooks built-in;
- Chamam-se assim pois existem problemas que existem cotidianamente no front-end, e que, normalmente, na OO são resolvidos através de classes, porém, no React, isso torna os componentes muito longos e ineficientes, e por vezes é necessário importar métodos de outros componentes para evitar repetição de código, tornando um componente algo não tão independente;
- Por esses problemas serem frequentes, o React implementou os hooks, que resolvem estes problemas de forma fácil, eficiente e direta, sem a necessidade de criar uma espécie de back-end;

#### Hook: useState():
- É built-in;
- É possível manipular o estado de um componente de forma simples;
- Funciona bem com eventos;
- É possível atrelar um evento a mundança de estado;
    
        Conceito de State Lift: 
        - Técnica usada para compartilhar o mesmo state de um componente para outro;
        - É normal vários componentes dependerem do mesmo estado;
        - Centraliza-se o state no pai e então define qual componente setta e quem usa;
- Veja os componentes [Greet.js](/src/components/Greet.js) e [YourName.js](/src/components/YourName.js)

## Renderização programática de conteúdo:

### Renderização condicional:
- Assim como em frameworks back-end, como o django, o React pode fazer o uso do artifício de instrução condicional do JS para renderizar diferentes tipos de conteúdo;
- Pode-se usar state para criar condições;
- Veja [Condition.js](/src/components/Condition.js)

### Renderização de lista:
- Usa-se arrays (óbvio);
- Usa-se a função map() para percorrer cada item da lista (iteração);
- Condições podem ser usadas; cito aqui, mas já é de se esperar;

## Routers no React:

    Não vou mentir, estou surpreso que um framework front-end possa fazer manipulação de caminhos (URLs) semelhantemente a um framework back-end!

- É possível acessar outras views sem page reload (chocado);
- Seguindo o fundamento de ser uma lib construtora de SPAs, o React somente altera o conteúdo da página sem a necessidade de recarregar a página para gerar o novo conteúdo, ou seja, o que muda de view para view;
- É um pacote externo; pode ser instalado usando:
                        
        npm install react-router-dom
- Define-se o componente referente a um certo caminho;
- Veja [App.js](/src/App.js);

## React Icons:
- Pacote externo; deve ser instalado por meio de:

        npm install react-icons
        
- Ele nos permite adicionar ícones ao projeto;
- Há muitos icons disponíveis;

