require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.URI, {
    logging: false
});

(
    async () => {
        try {
            await sequelize.authenticate();
            console.log('Conexão com o banco de dados bem sucedida!');
        } catch (error) {
            console.error('Erro ao conectar com o banco de dados: ' + error);
        }
    }
)();

module.exports = { sequelize };