#Informações relevantes
- Para inserir um texto copiado no git bash (CMD) pressione a tecla "Insert";
- Sempre que terminar suas atividades faça um commit e de um push para o git.
- Obter a ultima atualização da branch no github: git push

# Tutorial para baixar e enviar os arquivos 

Criar a pasta workspace e acessar ela: cd workspace

Setar o proxy do SENAI  git config --global http.proxy http://alif_flores:alif2012@10.3.79.253:3128

Clonar o projeto: git clone https://github.com/alifcorrea/infografico

Aguardar o download e acessar a pasta que foi clonada: cd infografico

Criar uma nova branch para fazer as alterações necessárias: git checkout -b nomebranch

Abrir  o eclipse:
File > Import > Import projects into workspace

!Importante: Verificar se a porta do servidor está definida como 8081  

#Enviar as alterações realizadas

Após feitas as alterações abra o git bash (CMD) e acesse a pasta do projeto: cd h:/...

Diga ao git seus dados de acesso através dos comandos:

git	config --global user.name "Seu nome" 
git	config --global user.email "seu@email.com.br"

Setar o proxy novamente caso tenha fechado a janela: git config --global http.proxy http://alif_flores:alif2012@10.3.79.253:3128

Verifique o status da branch (Os arquivos que aparecerem em vermelho são os que foram alterados): git status

Adicione os arquivos para o commit com o comando "git add ." O ponto (.) no fim do comando seleciona todos os arquivos modificados, caso queira adicionar apenas um arquivo digite "git add nomearquivo.extensao"
 
Faça o commit com um comentário explicando o que foi feito. Ex: Correção do bug menu. Comando: git commit -m "comentario"

Agora suba a branch criada para o github: git push origin nomebranch