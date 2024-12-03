const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/database');

class Tarefa extends Model {};

Tarefa.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        checked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    },
    {
        sequelize,
        modelName: 'Tarefa',
    },
);

(async () => {
    try {
        await sequelize.sync({ force: true });
        console.log("Modelos sincronizados!");
    } catch (error) {
        console.error('Erro na sincronização:', error);
    }
})();

module.exports = { Tarefa };