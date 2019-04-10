module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('TicketsType', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    available: {
      type: DataTypes.INTEGER,
      allowsNull: true
    }
  });

  Model.associate = function(models) {
    Model.belongsTo(models.Event, {
      foreignKey: 'eventUrl',
      onDelete: 'CASCADE'
    });
  };

  return Model;
}
