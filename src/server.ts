import App from './app';

// Defina a porta do servidor
const PORT = process.env.PORT || 3000;

// Inicialize e inicie o servidor
const appInstance = new App();
appInstance.start(PORT);
