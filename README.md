# Projeto App Clima ☀🌦⛅

## Escopo do Projeto

O **App Clima** é uma aplicação web que permitirá a busca e visualização de informações climáticas detalhadas para qualquer local ao redor do mundo. Usando uma API de clima, o aplicativo fornecerá dados em tempo real sobre temperatura, umidade, velocidade do vento, sensação térmica entre outros.

## Objetivos do Projeto

### Objetivos Específicos
- **Busca de Local:** Permite ao usuário pesquisar por cidades, estados ou países através de um campo de pesquisa intuitivo.
- **Informações Climáticas Detalhadas:** Retorna dados sobre temperatura, umidade, velocidade do vento, sensação térmica e exibe uma imagem representativa com base na temperatura atual.
- **Mudança de Plano de Fundo:** Altera o plano de fundo do aplicativo conforme a temperatura atual do local pesquisado.

### Objetivos Mensuráveis
- **Desempenho:** O aplicativo deve responder rapidamente a cada solicitação do usuário.
- **Precisão:** Cada busca deve resultar em uma resposta clara e precisa.

### Objetivos Atingíveis
- **Interface Dinâmica:** Implementar uma interface que não apenas exiba dados, mas que também ajuste o ambiente visual (como plano de fundo) baseado na temperatura atual.
- **Campos de Visualização:** Adicionar visualizações para umidade, velocidade do vento e outros dados relevantes além da temperatura.

### Objetivos Relevantes
- **Facilidade de Uso:** Proporcionar uma maneira simples e eficiente para que os usuários obtenham informações sobre o clima.
- **Planejamento:** Ajudar os usuários a se organizarem com base nas condições climáticas atuais.

### Objetivos Temporais
- **Prazo de Implementação:** Completar o início do desenvolvimento do aplicativo em até 3 horas.
- **Protótipo no figma**: Prototipagem das telas, imagens e cores para visualização.
- **Obtenção de uma chave de API**: Criação de uma chave de API e análise do retorno utilizando ferramentas adequadas(thunderclient)
- **Preparação do ambiente de desenvolvimento e versionamento**: Instalação de ferramentas de desenvolvimento (VSCode, Git...) 

## Cronograma

| Etapa               | Descrição                                | Tempo Estimado |
|---------------------|------------------------------------------|----------------|
| **Planejamento**    | Definição de requisitos, escopo e cronograma          | 30 min         |
| **Desenvolvimento** | Codificação e integração com a API        | 1h 30min       |
| **Teste e Ajustes** | Verificação de funcionalidade e ajustes   | 30 min         |
| **Finalização**     | Documentação e preparação para entrega    | 30 min         |

## Recursos Necessários
- Computador com ambiente de desenvolvimento configurado (HTML, CSS, JavaScript).
- Acesso à API de clima com uma chave válida.

## Análise de Riscos
- **Local Inexistente:** Exibir uma mensagem amigável ou uma imagem padrão quando o local não for encontrado.
- **Problemas com a API:** Caso a chave de API esteja fora do ar, implementar uma mensagem de erro apropriada.
- **Limitações da API:** Gerenciar e otimizar o número de requisições para evitar bloqueios da chave gratuita.
