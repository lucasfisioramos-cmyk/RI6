# inciando o projeto
O primeiro passo no desenvolvimento é a criação dos módulos basicos a serem utilizados.

```terminal
npm init -y 
npm install -D typescript ts-node @types/node
npx tsc --init
```

## inicio 
Começo o projeto criando a classe abstrata Calculo, definindo seus atributos, e tipos.
E em seguida crio as classes de cada Operação a ser realizada pelo sistema.
    - O primeiro problema a inicialização, foi necessario alterar alguns elementos do package.json e do tsconfig.json, devido a incompatibilidade nas formas de importação.

