# inciando o projeto
O primeiro passo no desenvolvimento é a criação dos módulos basicos a serem utilizados.

```terminal
npm init -y 
npm install -D typescript ts-node @types/node
npx tsc --init
```

## Desenvolvimento
1. Começo o projeto criando a classe abstrata Calculo, definindo seus atributos, e tipos.
E em seguida crio as classes de cada Operação a ser realizada pelo sistema.
    - O primeiro problema a inicialização, foi necessario alterar alguns elementos do package.json e do tsconfig.json, devido a incompatibilidade nas formas de importação da classes.
    - Preferi organizar as classes de operações em uma pasta dedicada "operacoes". 

2. Resolvidas as inconsistencias, avanço para as mensagens que serão carregadas na inicialização do sistema.

3. desenvolvimento da logica principal - index.ts 
- Utilizado o modulo nativo do node.js - **readline**, conforme sugestão da própria atividade, responsável por receber um fluxo de dados inseridos via linha de comando pelo usuário. 
    - createinterface(): cria a instancia principal de comunicação com 
        - process.stdin(input): captura a entrada do usuario
        - process.stdout(output): resposta impressa no terminal
    - rl.question(mensagem, callback): 
        - Exibe a mensagem no terminal (output).
        - Aguarda o usuário digitar algo e pressionar Enter.
        - Pega o texto digitado e o envia como argumento para uma função de callback.
        - ao encapsular o rl.question em uma função (perguntar), com promise elimina a necessidade de criar um lista aninhada de perguntas, colocando o sistema em espera (await perguntar), até que o usuario digite algo e pressione enter.

- O sistema inicia com uma função assincrona, e um promisse vazio. uma variavel de execução, para acionar e manter o loop até que usuario digite o comando para finalizar a execução. 
- **Polimorfismo**: É aplicado ao criar a classe pai de tipo generico **calculo**, e cada classe filha extende calculo, e executa seus proprio metodo. 
    - Na prática isso permite que o sistema cresça, implementando apenas novas classes filhas que herdem da classe calculo, com sua logica propria, e adiciona-las ao index, sem necessidade de alterar a logica do loop.
    - Alem disso, a interface do usuario fica separada das regras matematicas de cada calculo, sendo responsavel por executar o fluxo do sistema apenas.
