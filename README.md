
# Sistema da igreja

Gostaria de apresentar um sistema desenvolvido para atender às necessidades da equipe de música da minha igreja. Esse sistema tem como objetivo fornecer um controle eficiente das atividades relacionadas aos ensaios e apresentações musicais.

O sistema em questão foi criado para permitir um gerenciamento detalhado de informações importantes, tais como:

1. Agenda de músicos: Possibilita o registro dos músicos disponíveis para tocar em determinados dias e horários, facilitando o planejamento das apresentações musicais.

2. Repertório musical: Permite a definição e atualização das músicas que serão tocadas em cada evento, facilitando a organização das apresentações e garantindo a diversidade de repertório.

3. Calendário de ensaios: Registra as datas e horários dos ensaios, proporcionando uma visão geral das atividades de preparação.

4. Lista de músicas para ensaio: Oferece a opção de criar listas específicas de músicas que devem ser ensaiadas, contribuindo para o aprimoramento e entrosamento da equipe.

5. Notificações e lembretes: Envia avisos automáticos aos membros da equipe sobre datas importantes, ensaios agendados e detalhes das apresentações.

minha intenção é que o sistema seja uma ferramenta útil e eficiente para todos os envolvidos, tornando o processo de preparação e realização das apresentações musicais mais fluido e bem-sucedido.


## Stack utilizada

**Front-end:** React, Scss, Javascript, HTML

**Back-end:** Node, Express, typescript, Prisma, Postegresql


## Autor

- [@Brendo Gomes Santana](https://www.linkedin.com/in/brendo-gomes-santana-a90210232/)


## Documentação da API

#### ROTAS ADM
##### Criar um Adm
```http
  POST /create/adm
```
| Data         | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | **Obrigatório**. Nome da pessoa |
| `email` | `string` | **Obrigatório**. email valido |
| `senha` | `string` | **Obrigatório**. Senha |
| `codigo` | `string` | **Obrigatório**. codigo para pode criar adm. |

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |

##### Retorna Informação do Adm - logado
```http
  GET /infor/adm
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |
| `id_adm` | `string` | **Obrigatório**. id do adm para poder pegar informação dele |

##### logar adm
```http
  POST /session/adm
```
| Data         | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**. Email cadastrado |
| `senha` | `string` | **Obrigatório**. Senha Cadastrada |

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |

##### Atualizar Infomação do Adm - logado
```http
  PATCH /update/adm
```
| Data         | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id_adm` | `string` | **Obrigatório**. id do adm |
| `nome` | `string` | **Não Obrigatório**. Nome que quer |
| `email` | `string` | **Não Obrigatório**. email valido |
| `senha` | `string` | **Não Obrigatório**. Senha quer quer |

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |

#### ROTAS MUSICO

##### Criar um musico - adm logado
```http
  POST /create/musico
```
| Data         | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | **Obrigatório**. Nome da pessoa |
| `email` | `string` | **Obrigatório**. email valido |

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |
| `id_adm` | `string` | **Obrigatório**. Só quem pode criar um músico é o adm. |

##### Remove um musico - adm logado
```http
  DELETE /remove/musico
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |
| `id_adm` | `string` | **Obrigatório**. Só quem pode remove um músico é o adm. |
| `id_musico` | `string` | **Obrigatório**. Id do músico que quer deleta |

##### Lista de Músico - adm logado
```http
  GET /lista/musico
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |
| `id_adm` | `string` | **Obrigatório**. Só quem pode lsiatr os músicos é o adm. |

##### Session do Músico
```http
  POST /session/musico
```

| Data   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | **Obrigatório**. Nome do musico |
| `email` | `string` | **Obrigatório**. Email valido do músico |

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |

##### Atualizar Informação do Músico - logado
```http
  PATCH /update/musico
```

| Data   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | **Não Obrigatório**. Nome do musico |
| `email` | `string` | **Não Obrigatório**. Email valido do músico |

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |
| `id_musico` | `string` | **Obrigatório**. O id do musico quer que fazer alteração |

##### Agenda do Músico - logado
```http
  GET /agendar/musico
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |
| `id` | `string` | **Obrigatório**. O id do musico que quer ver sua agenda |

#### ROTAS AGENDAMENTO

##### Criar um agendamento - adm logado
```http
  POST /create/agendamento
```
| Data         | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `data` | `string` | **Obrigatório**. A data que vai ser o Evento |
| `horario_de_chegar` | `string` | **Obrigatório**. Horário que tem que chegar |
| `status` | `string` | **Obrigatório**. Ser vai ser ensaio, culto, etc. |
| `descricao` | `string` | **Não Obrigatório**. |

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |
| `id_adm` | `string` | **Obrigatório**. Só quem pode criar um agendamento é o adm. |

##### Atualizar um agendamento - adm logado
```http
  PATCH /atualizando/agendamento
```
| Data         | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | **Obrigatório**. id do agendamento |
| `data` | `string` | **Não Obrigatório**. A data que vai ser o Evento |
| `horario_de_chegar` | `string` | **Não Obrigatório**. Horário que tem que chegar |
| `status` | `string` | **Não Obrigatório**. Ser vai ser ensaio, culto, etc. |
| `descricao` | `string` | **Não Obrigatório**. |
| `confirmacao` | `boolean` | **Não Obrigatório**. Isso para poder mandar notificação para os musicos. ele vem como falso|

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |
| `id_adm` | `string` | **Obrigatório**. Só quem pode atualizar um agendamento é o adm. |

##### Remove um agendamento - adm logado
```http
  DELETE /remove/agendamento
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | **Obrigatório**. id do agendamento que quer remove |
| `api_key` | `string` | **Obrigatório**. A chave API |
| `id_adm` | `string` | **Obrigatório**. Só quem pode remove um agendamento é o adm. |

##### detalhe de um agendamento - adm logado

```http
  GET /lista/agendamento
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |
| `id_adm` | `string` | **Obrigatório**. Só quem pode listar a agendamento é o adm. |

##### Lista os agendamentos - adm logado

```http
  GET /detalhe/agendamento
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | **Obrigatório**. id do agendamento |
| `api_key` | `string` | **Obrigatório**. A chave API |
| `id_adm` | `string` | **Obrigatório**. Só quem pode ver o detalge da agenda é o adm. |

#### ROTAS BANDA

##### Criar a banda - adm logado
```http
  POST /create/banda
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |
| `id_adm` | `string` | **Obrigatório**. Só quem pode criar um banda é o adm |
| `id_musico` | `string` | **Obrigatório**. id do musico |
| `id_agendamento` | `string` | **Obrigatório**. id do agendamento |

##### lista a banda - adm logado
```http
  GET /lista/banda
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |
| `id_adm` | `string` | **Obrigatório**. Só quem pode ver a lista da banda é o adm |
| `id_agendamento` | `string` | **Obrigatório**. id do agendamento |

##### remove a banda - adm logado
```http
  DELETE /remove/banda
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |
| `id_adm` | `string` | **Obrigatório**. Só quem pode remove um banda é o adm |
| `id` | `string` | **Obrigatório**. id da banda |

##### confirmar a banda - adm logado
```http
  PATCH /atualizando/banda
```
| Data   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `confirmacao` | `boolean` | **Não Obrigatório**. para confirmação de todas as bandas |

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |
| `id_adm` | `string` | **Obrigatório**. Só quem pode atualizar a banda é o adm |
| `id_agendamento` | `string` | **Obrigatório**. id do agendamento |

#### ROTAS LOUVOR

##### Criar o louvor - adm logado
```http
  POST /create/louvor
```
| Data   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | **Obrigatório**. O nome do louvor |
| `link` | `string` | **Não Obrigatório**.  link para acessar o youtube|
| `tom` | `string` | **Não Obrigatório**. se vai ser A, B, C, etc |
| `letra` | `string` | **Não Obrigatório**. letra do louvor |

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |
| `id_adm` | `string` | **Obrigatório**. Só quem pode criar um louvor é o adm |

##### Lista o louvores - adm logado
```http
  GET /lista/louvor
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |
| `id_adm` | `string` | **Obrigatório**. Só quem pode ver a lista de louvores é o adm |

##### remove o louvor - adm logado
```http
  DELETE /remove/louvor
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |
| `id_adm` | `string` | **Obrigatório**. Só quem pode remove um louvor é o adm |
| `id` | `string` | **Obrigatório**. id do louvor  |

##### detalhe do louvor - logado
```http
  GET /detalhe/louvor
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |
| `id` | `string` | **Obrigatório**. id do louvor  |


##### atualizar Informação do louvor - Adm logado
```http
  GET /atualizando/louvor
```
| Data   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | **Obrigatório**. Id do louvor |
| `nome` | `string` | **Não Obrigatório**. O nome do louvor |
| `link` | `string` | **Não Obrigatório**.  link para acessar o youtube|
| `tom` | `string` | **Não Obrigatório**. se vai ser A, B, C, etc |
| `letra` | `string` | **Não Obrigatório**. letra do louvor |

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |
| `id_adm` | `string` | **Obrigatório**. Só quem pode atualizar o louvor é o adm |

#### ROTAS LOUVOR A TOCAR

##### Criar o louvor_agendameto - adm logado
```http
  POST /create/agendamento/louvor
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |
| `id_adm` | `string` | **Obrigatório**. Só quem pode criar um louvor a tocar é o adm |
| `id_agendamento` | `string` | **Obrigatório**. id do agendamento que |
| `id_louvor` | `string` | **Obrigatório**. id do louvor  |

##### lista de o louvor_agendamento - adm logado
```http
  GET /lista/agendamento/louvor
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |
| `id_adm` | `string` | **Obrigatório**. Só quem pode listar os louvores a tocar é o adm |
| `id_agendamento` | `string` | **Obrigatório**. id do agendamento que |

##### Remove o louvor_agendamento - adm logado
```http
  DELETE /remove/agendamento/louvor
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave API |
| `id_adm` | `string` | **Obrigatório**. Só quem pode remove um louvor a tocar é o adm |
| `id` | `string` | **Obrigatório**. id do louvor a tocar |


