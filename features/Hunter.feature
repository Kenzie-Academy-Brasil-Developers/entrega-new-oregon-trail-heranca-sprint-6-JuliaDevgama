# language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu devo encontrar comida
    Para que eu possa dar comida aos viajantes

Contexto:
    Dado um Hunter de nome 'Lucas'
    E ele sempre começa a viagem com 2 refeições
    E ele sempre começa a viagem saudável

Cenário: Caçou para conseguir mais reifeções
    Quando o Hunter sair para caçar 1 vezes
    Então a quantidade de refeições deve ser igual a 7

Cenário: Comeu e seguiu saudável
    Quando o Hunter parar para comer 1 vezes
    Então a quantidade de refeições deve ser igual a 0
    E o Hunter não ficará doente

Cenário: Comeu e ficou doente
    Quando o Hunter parar para comer 2 vezes
    Então a quantidade de refeições deve ser igual a 0
    E o Hunter ficará doente

Cenário: Transfere refeições para outro
    Quando o Hunter transferir 1 refeições para outro viajante
    Então o viajante recebe 1 refeições

Cenário: Não transfere refeições para outro
    Quando o Hunter transferir 2 refeições para outro viajante
    Então o viajante não recebe refeição
