const QUIZZES_URL = 'https://mnbatra.herokuapp.com/api/quizzes';

export const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json())
}

const api = {
    findQuestionsForQuiz
}
export default api