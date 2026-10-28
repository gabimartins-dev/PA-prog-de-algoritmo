let tarefa = [
     {
      id : 3,
       descricao : "Varrer a casa",
        concluida : true,
         prioridade :"média",
          },
           {
            id : 5,
             descricao : "lavar a louça",
              concluida : false,
               prioridade :"Baixa",
                },
                 {
                  id : 8,
                   descricao : "passar a roupa",
                    concluida : false,
                     prioridade :"Baixa",
                      },
                       {
                        id : 1,
                         descricao : "cozinhar",
                          concluida : true,
                           prioridade :"Alta",
                            },
                             {
                              id : 4,
                               descricao : "Compras do mes",
                                concluida : true,
                                 prioridade :"Alta",
                                  }

                                  ]
                                  console.log("-----Atividades Concluidas--------")
                                  for (let i = 0; i < tarefa.length; i++) {

                                   if(tarefa[i].concluida===true){
                                    console.log(tarefa[i].descricao)
                                     }

                                     }
                                     console.log("-----Tarefas de alta prioridade ------")

                                     for (let i = 0; i < tarefa.length; i++) {
                                      if(tarefa[i].prioridade === "Alta"){
                                       console.log(tarefa[i].descricao)
                                        }

                                        }
                                        console.log("------Tarefas Pendentes ----------")

                                        for (let i = 0; i < tarefa.length; i++) {
                                         if(tarefa[i].concluida === false){
                                          console.log(tarefa[i].descricao)
                                           }

                                           }
