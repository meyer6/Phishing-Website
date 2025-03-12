// email_selection.js

function selectNextQuestion(userStats) {
    // Step 1: Calculate Error Scores
    let errorScores = {};
    let totalErrorScore = 0;
    
    for (const category in userStats) {
      const { totalAsked, totalCorrect } = userStats[category];
      const incorrect = totalAsked - totalCorrect;
      const errorScore = (incorrect + 1) / (totalAsked + 2);
      
      errorScores[category] = errorScore;
      totalErrorScore += errorScore;
    }
  
    // Step 2: Normalize Error Scores to Create a Probability Distribution
    let probabilities = {};
    for (const category in errorScores) {
      probabilities[category] = errorScores[category] / totalErrorScore;
    }
  
    // Step 3: Select a Question Based on the Probability Distribution
    let randomValue = Math.random();
    let cumulativeProbability = 0;
    
    for (const category in probabilities) {
      cumulativeProbability += probabilities[category];
      if (randomValue <= cumulativeProbability) {
        return category; // Return the selected category
      }
    }
  }
  
  export default selectNextQuestion;
  
