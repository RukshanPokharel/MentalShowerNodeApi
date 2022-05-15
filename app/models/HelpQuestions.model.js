module.exports  = (sequelize, Sequelize) => {
    
    const HelpQuestion = sequelize.define("HelpQuestion", {

        Question: {
            type: Sequelize.STRING
        },
        QuestionFor: {
            type: Sequelize.STRING
        }

    });

    return HelpQuestion;  
};