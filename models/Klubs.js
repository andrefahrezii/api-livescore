
module.exports = (sequelize, DataTypes) => {
    const Klubs = sequelize.define(
        "Klubs",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: { notEmpty: true, },
                unique: { args: true, msg: "Email already exists" },
            },
            kota: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
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
        tableName: "klub"
    }, {});


    return Klubs;
};

