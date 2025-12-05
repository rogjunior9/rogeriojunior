# Usar uma imagem leve do Node.js
FROM node:18-alpine

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o resto dos arquivos do projeto
COPY . .

# Construir o projeto (Gera a pasta dist)
RUN npm run build

# Expor a porta 3000
EXPOSE 3000

# Iniciar o servidor
CMD ["node", "server.js"]
