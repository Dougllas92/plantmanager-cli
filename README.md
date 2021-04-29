<h1 align="center">
    <img alt="PlantManager" title="PlantManager" src=".github/logo.svg" />
</h1>

<img src=".github/plantmanager-preview.png" alt="Plant Manager">

### 🚧 Ajustes e melhorias

Após o fim da NLW #5 dei continuidade ao projeto que ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas: 

- [x] Tela de preload - *Verificar se já existe um usuário criado no sistema.*
- [x] Tela UserIdentification - *Opção de inserir foto e desabilitar button caso TextInput esteja vazio.*
- [ ] Tela de Perfil - *Usuário poder trocar nome e foto.*
- [ ] Tela PlantsSelect - *Criar animação no flatlist ir diminuindo o espaço do Header.*
- [ ] MyPlants - *Adicionar mensagem quando o usuário não tiver nenhuma planta ainda.*
- [ ] MyPlants - *Alterar Alert para Modal personalizada.*

### 🧪 Tecnologias
 * Node.js
 * React Native
 * Typescript

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Node.js
* React Native
* Npm ou Yarn

## 🚀 Instalando Plant Manager

Para instalar o Plant Manager, siga estas etapas:

Clone o projeto e acesse a pasta

```
git clone https://github.com/Dougllas92/plantmanager-cli.git
cd plantmanager-cli
```

Instale as dependências
```
yarn install ou npm install
```

Inicie a aplicação
```
npx react-native run-android
```

**Server**

Instale o JSON Server globalmente na sua máquina

```
npm install -g json-server
```

Inicie o servidor
```
json-server ./src/services/server.json --host 192.168.1.1 --port 9000
```

⚠️ *Lembre-se de utilizar o endereço IP da sua máquina* ⚠️


## ☕ Usando Plant Manager

**Alterando o IP do App**

* Abre a pasta plantmanager-cli no editor e acesse o arquivo `src/services/api.tsx`

* Em baseURL coloque o IP:PORT que colocou no Server.


## 📫 Contribuindo para Plant Manager

Para contribuir com Plant Manager, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.