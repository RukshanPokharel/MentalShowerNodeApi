module.exports  = (sequelize, Sequelize) => {
    
    const HelpQuestion = sequelize.define("HelpQuestion", {

        Question: {
            type: Sequelize.STRING
        },
        QuestionNumber: {
            type: Sequelize.INTEGER
        }

    });

    return HelpQuestion;  
};