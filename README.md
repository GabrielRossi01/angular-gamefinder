# 🎮 Gamefinder

<div align="center">

![Imagem](https://drive.google.com/uc?export=view&id=1WldCv_EETS5GfI_P-A3dAW-GviVdzWlA)

</div>

Repositório front-end (**Angular**) do **Gamefinder.** A aplicação tem como objetivo principal ajudar o usuário a decidir se vale a pena investir tempo em um determinado jogo, baseando-se em dados reais obtidos através de uma API externa (como a *RAWG API*).

O sistema trabalha em conjunto com uma **API back-end em Java**, que é responsável por processar as regras de negócio e fornecer a recomendação final ao front-end.

## ⚖️ Regras de Negócio (Recomendações)

As recomendações são baseadas nos seguintes critérios:

| Recomendação | Estrelas | Critérios |
| :--- | :---: | :--- |
| **Altamente Recomendado** | ⭐⭐⭐ | • Nota média ≥ 4.5<br>• Alta quantidade de avaliações<br>• Data de lançamento |
| **Vale a pena** | ⭐⭐ | • Nota média entre 3.5 e 4.5<br>• Poucas avaliações<br>• Data de lançamento |
| **Melhor ver um filme** | ⭐ | • Nota menor que 3.5<br>• Baixa popularidade |

## 🛠️ Tecnologias Utilizadas

* **Front-end:** Angular, TypeScript, HTML, TailwindCSS.
* **Back-end:** Java + Spring Boot.
* **Dados:** RAWG API.

## Como executar a aplicação? 💭 

Para rodar esta aplicação, você precisará executar tanto o Back-end (Java) quanto o Front-end (Angular). Siga o passo a passo abaixo:

### Pré-requisitos
* [Node.js](https://nodejs.org/) instalado (para o Angular).
* [Angular CLI](https://angular.io/cli) instalado globalmente (`npm install -g @angular/cli`).
* [Java JDK](https://www.oracle.com/java/technologies/downloads/) instalado (versão 17 ou superior recomendada).
* Maven ou Gradle (geralmente embutidos no projeto Java através do *wrapper*).

* ### Passo 1: executando a API back-end (Java)

Primeiro, precisamos garantir que a API que fornece os dados esteja rodando.

1️⃣ Clone o repositório do back-end:
```bash
git clone https://github.com/GabrielRossi01/java-gamefinder.git
```

2️⃣ Acesse a pasta do projeto e abra na sua IDE preferida:
```bash
cd java-gamefinder
```

3️⃣ Execute a aplicação Java. Utilize o comando para rodar o Gradle

Se for Windows:
```bash
gradlew.bat run
```

Se for Linux/MacOS:
```bash
./gradlew run
```

(A API geralmente iniciará na porta http://localhost:8080, certifique-se de que não há erros no console).

* ### Passo 2: executando a API back-end (Java)

Com a API rodando, agora podemos iniciar a interface do usuário.

1️⃣ Clone este repositório (caso ainda não tenha feito):

```bash
git clone https://github.com/GabrielRossi01/angular-gamefinder.git
```

2️⃣ Acesse a pasta do projeto Angular:

```bash
cd angular-gamefinder
```

3️⃣ Instale as dependências do projeto:

```bash
npm i
```

4️⃣ Inicie o servidor de desenvolvimento:

```bash
ng serve
```

5️⃣ Abra o seu navegador e acesse: http://localhost:4200/

![AGeometrysDashAGeometry&#39;SDashGIF](https://github.com/user-attachments/assets/412e4623-8fd9-49fa-9072-10eb4d396dc2)
