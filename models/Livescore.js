
module.exports = (sequelize, DataTypes) => {
    const Livescore = sequelize.define(
        "Livescore",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            klub: {
                type: DataTypes.STRING,
            },
            ma: {
                type: DataTypes.INTEGER,
            },
            me: {
                type: DataTypes.INTEGER,
            },
            s: {
                type: DataTypes.INTEGER,
            },
            k: {
                type: DataTypes.INTEGER,
            },
            gm: {
                type: DataTypes.INTEGER,
            },
            gk: {
                type: DataTypes.INTEGER,
            },
            point: {
                type: DataTypes.INTEGER,
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
        tableName: "livescore"
    });
    return Livescore;
};