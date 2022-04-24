module.exports  = (sequelize, Sequelize) => {
    
    const ZoneInfo = sequelize.define("zoneInfo", {

        zoneNumber: {
            type: Sequelize.INTEGER
        },
        zoneArea: {
            type: Sequelize.STRING
        },

    });

    return ZoneInfo;  
};