module.exports = {
  apps : [{
    name: 'api-backend', // Nom de votre application dans PM2
    script: './api/backend/index.js', // Chemin relatif vers le script principal DEPUIS cwd
    cwd: '/path/to/your/app', // Remplacez ceci par le chemin absolu ou relatif de votre application
    instances: 1,
    autorestart: true,
    watch: false, // Mettre à false pour la production
    max_memory_restart: '1G', // Optionnel
    env: { // Variables d'environnement pour tous les environnements
      NODE_ENV: 'production', // Ou 'development' si besoin pour certains tests
      PORT: 5000, // Remplacez ceci par le port souhaité
      // Ajoutez d'autres variables d'environnement nécessaires ici
      // Par exemple, si votre .env est géré par Ansible ou directement dans l'ecosystem file
    },
    // Définissez ici les chemins pour les logs si vous ne voulez pas des logs PM2 par défaut
    // error_file: '/var/log/app/api-error.log',
    // out_file: '/var/log/app/api-out.log',
    // merge_logs: true, // si vous voulez un seul fichier de log combiné
    // log_date_format: 'YYYY-MM-DD HH:mm Z'
  }]
};