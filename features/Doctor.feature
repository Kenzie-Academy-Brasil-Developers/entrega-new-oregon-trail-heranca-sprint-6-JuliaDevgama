Funcionalidade: Doctor
    Como um Doctor
    Eu devo curar os viajantes
    Para que eles possam seguir a viagem saudável.

    Contexto:
        Dado um Doctor de nome "Jhon"
        E ele sempre começa a viagem com 1 refeição
        E ele sempre começa a viagem saudável.
    
    Cenário: Curou o viajante doente
        Quando um viajante é curado 
        Então o viajante está saudável
    
    Cenário: Curou o viajante saudável
        Quando um viajante é curado saudável
        Então  o viajante continua saudável