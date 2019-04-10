module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('Event', {
    url: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    bannerUrl: DataTypes.STRING,
    date: DataTypes.DATE,
    location: DataTypes.STRING,
    description: DataTypes.STRING,
  });

  Model.associate = function(models) {
    Model.hasMany(models.TicketsType, {
      foreignKey: 'eventUrl',
      as: 'tickets'
    });
  };

  return Model;
}
