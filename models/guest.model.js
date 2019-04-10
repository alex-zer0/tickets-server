module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('Guest', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      isEmail: true
    },
    phone: DataTypes.STRING,
    tickets: DataTypes.TEXT
  });

  Model.associate = function(models) {
    Model.belongsTo(models.Event, {
      foreignKey: 'eventUrl',
      onDelete: 'CASCADE'
    });
  };

  return Model;
}
