import { dataSet } from "./dataSet";

function generateQuestion(redFlags) {
    const errorScores = {};
    for (const flag in redFlags) {
        const [correct, total] = redFlags[flag];
        errorScores[flag] = ((total - correct) + 1) / (total + 2);
    }

    // Compute a weight for each question.
    // For each red flag in the question, add its error score.
    // If a red flag isn't found in the user's stats, assign a default weight (e.g., 0.5).
    const weights = dataSet.map((question) => {
        let weight = 0;
        if (question.redFlags && Array.isArray(question.redFlags) && question.redFlags.length != 0) {
            for (const flag of question.redFlags) {
                weight += errorScores[flag] !== undefined ? errorScores[flag] : 0.5;
            }
        } else {
            weight = 1;
        }
        return weight;
    });

    // Sum all weights.
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);

    // Generate a random number between 0 and totalWeight.
    const randomValue = Math.random() * totalWeight;

    // Select a question based on the cumulative weights.
    let cumulativeWeight = 0;
    for (let i = 0; i < dataSet.length; i++) {
        cumulativeWeight += weights[i];
        if (randomValue < cumulativeWeight) {

            return dataSet[i];
        }
    }

    // Fallback: return the last question (should not happen)
    return dataSet[dataSet.length - 1];
}

export function generateQuestions(redFlags) {
    const generated = [];
    for (let i = 0; i < 10; i++) {
        generated.push(generateQuestion(redFlags));
    }
    return generated;
}