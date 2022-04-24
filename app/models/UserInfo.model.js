
module.exports = (sequelize, Sequelize) => {

    const UserInfo = sequelize.define("UserInfo", {

        RoomNumber: {

            type: Sequelize.INTEGER
        },
        CurrentCondition: {
            type: Sequelize.STRING
        }

        // gender
        
    });

    return UserInfo;
};