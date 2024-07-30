# Projeto App Clima ☀🌦⛅

## Escopo do Projeto

O **App Clima** é uma aplicação web que permitirá a busca e visualização de informações climáticas detalhadas para qualquer local ao redor do mundo. Usando uma API de clima, o aplicativo fornecerá dados em tempo real sobre temperatura, umidade, velocidade do vento, sensação térmica entre outros.

## Objetivos do Projeto

### Objetivos Específicos
- **Busca de Local:** Permite ao usuário pesquisar por cidades, estados ou países através de um campo de pesquisa intuitivo.
- **Informações Climáticas Detalhadas:** Retorna dados sobre temperatura, umidade, velocidade do vento, sensação térmica e exibe uma imagem representativa com base na temperatura atual.
- **Mudança de Plano de Fundo:** Alterar o plano de fundo do aplicativo conforme a temperatura atual do local pesquisado.

### Objetivos Mensuráveis
- **Desempenho:** O aplicativo deve responder rapidamente a cada solicitação do usuário.
- **Precisão:** Cada busca deve resultar em uma resposta clara e precisa.
- **Variação de Temperatura:** Desejamos implentar pelo menos duas medições de temperatura: Celsius e Fahrenheit
- **Alertas:** Incorporar um alerta de notificações para temperaturas e niveis de umidade extremos, Avisos de riscos naturais

### Objetivos Atingíveis
- **Interface Dinâmica:** Implementar uma interface que não apenas exiba dados, mas que também ajuste o ambiente visual (como plano de fundo) baseado na temperatura atual.
- **Campos de Visualização:** Adicionar visualizações para umidade, velocidade do vento e outros dados relevantes além da temperatura.

### Objetivos Relevantes
- **Facilidade de Uso:** Proporcionar uma maneira simples e eficiente para que os usuários obtenham informações sobre o clima.
- **Planejamento:** Ajudar os usuários a se organizarem com base nas condições climáticas atuais.

### Objetivos Temporais
- **Prazo de Implementação:** Completar o desenvolvimento do aplicativo em até 4 horas.
- **Protótipo no figma**: Prototipagem das telas, imagens e cores para visualização.
- **Obtenção de uma chave de API**: Criação de uma chave de API e análise do retorno utilizando ferramentas adequadas(thunderclient)
- **Preparação do ambiente de desenvolvimento e versionamento**: Instalação de ferramentas de desenvolvimento (VSCode, Git...) 
- **Início do Desenvolvimento**: Iniciar o desenvolvimento da aplicação, inserir as imagens e configurar a API (definição das rotas(json)).
  
## Cronograma

| Etapa               | Descrição                                | Tempo Estimado |
|---------------------|------------------------------------------|----------------|
| **Planejamento**    | Definição de requisitos, escopo e cronograma          | 30 min         |
| **Desenvolvimento** | Integração com API, Protótipo Figma e Ambiente de desenvolvimento        | 1h 00min       |
| **Codificação** | Codificação do projeto   | 1h 30min         |
| **Finalização**     | Documentação e preparação para entrega    | 30 min         |

![image](https://github.com/user-attachments/assets/18fbe90f-951b-4350-8e20-c27fee02e205)


## Recursos Necessários
- Computador com ambiente de desenvolvimento configurado (HTML, CSS, JavaScript).
- Acesso à API de clima com uma chave válida.

## Análise de Riscos
- **Local Inexistente:** Exibir uma mensagem amigável ou uma imagem padrão quando o local não for encontrado.
- **Problemas com a API:** Caso a chave de API esteja fora do ar, implementar uma mensagem de erro apropriada.
- **Limitações da API:** Gerenciar e otimizar o número de requisições para evitar bloqueios da chave gratuita.
- **Variáveis de tempo e bugs durante o desenvolvimento**: Alternativas para curto tempo e dificuldades durante o desenolvimento.
