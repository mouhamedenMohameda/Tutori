# Déploiement BrightTutor Backend sur Coolify

## Prérequis
- Serveur avec Coolify installé (207.180.202.96)
- Accès à la base PostgreSQL (déjà configurée)

## Méthode 1: Via Git Repository

### 1. Pousser le code sur Git
```bash
cd /Users/mohameda/Documents/temp/BrightTutor-Backend
git init
git add .
git commit -m "Initial commit - BrightTutor Backend"
git remote add origin <your-git-repo-url>
git push -u origin main
```

### 2. Configurer dans Coolify
1. Aller sur Coolify Dashboard: http://207.180.202.96:8000
2. Créer un nouveau projet → Choisir "Docker" ou "Dockerfile"
3. Connecter le repository Git
4. Configurer les variables d'environnement:

```
NODE_ENV=production
PORT=3001
DATABASE_URL=postgres://mohamedn:PYpMRXgrXrdRbgnRm8KuWDgUPYKXxXIxOXKd7CThz142Vvs3wLwdCqXd8FIRCE7v@207.180.202.96:5432/mohamedn
JWT_SECRET=yt2BIFg+v0r1n2gpSANjaF0GZOvk8WxaIF28xwHUAWqFmsd2/6QeyGuw9pm/85EP
NEXTAUTH_SECRET=yt2BIFg+v0r1n2gpSANjaF0GZOvk8WxaIF28xwHUAWqFmsd2/6QeyGuw9pm/85EP
CRON_SECRET=brighttutor-cron-2024
OPENAI_API_KEY=<your-openai-key>
GEMINI_API_KEY=<your-gemini-key>
```

5. Configurer le port exposé: 3001
6. Déployer

## Méthode 2: Via Docker Compose sur le serveur

### 1. Copier les fichiers sur le serveur
```bash
scp -r . root@207.180.202.96:/opt/brighttutor-backend/
```

### 2. Sur le serveur, créer le fichier .env
```bash
ssh root@207.180.202.96
cd /opt/brighttutor-backend
cat > .env << 'EOF'
NODE_ENV=production
PORT=3001
DATABASE_URL=postgres://mohamedn:PYpMRXgrXrdRbgnRm8KuWDgUPYKXxXIxOXKd7CThz142Vvs3wLwdCqXd8FIRCE7v@207.180.202.96:5432/mohamedn
JWT_SECRET=yt2BIFg+v0r1n2gpSANjaF0GZOvk8WxaIF28xwHUAWqFmsd2/6QeyGuw9pm/85EP
NEXTAUTH_SECRET=yt2BIFg+v0r1n2gpSANjaF0GZOvk8WxaIF28xwHUAWqFmsd2/6QeyGuw9pm/85EP
CRON_SECRET=brighttutor-cron-2024
EOF
```

### 3. Lancer avec Docker Compose
```bash
docker compose up -d --build
```

## Vérifier le déploiement
```bash
curl http://207.180.202.96:3001/api/health
```

## Configuration Mobile App
Une fois déployé, mettre à jour l'URL API dans l'app mobile:
```
API_URL=http://207.180.202.96:3001
```

Ou si vous avez un domaine:
```
API_URL=https://api.brighttutor.com
```
