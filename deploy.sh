#!/bin/bash

# install aws-cli windows
# C:\>msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi
# C:\>aws --version

# access configure
# C:\>aws configure
# perguntar as chaves de acesso para o guguinha


# Executa o comando npm run build
npm run build

# Limpa o conteúdo do bucket do S3
aws s3 rm s3://arabela-frontend-app --recursive

# Sincroniza o conteúdo do diretório "out" com o bucket do S3
aws s3 sync ./out s3://arabela-frontend-app