module.exports  = (sequelize, Sequelize) => {
    
    const InputClimateNumbers = sequelize.define("InputClimateNumbers", {

        humidity: {
            type: Sequelize.INTEGER
        },
        temperature: {
            type: Sequelize.INTEGER
        },
        airQuality: {
            type: Sequelize.INTEGER
        },
        zoneNo: {
            type: Sequelize.INTEGER
        },
        gender: {
            type: Sequelize.STRING
        }

    });

    return InputClimateNumbers;  
};