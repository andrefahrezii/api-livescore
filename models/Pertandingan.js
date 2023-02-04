
module.exports = (sequelize, DataTypes) => {
    const Pertandingan = sequelize.define(
        "Pertandingan",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            klubA: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            scoreA: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            klubB: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            scoreB: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false
            }


        }, {
        tableName: "pertandingan"
    });
    return Pertandingan;
};