const QUIZZES_URL = "http://localhost:3000/api/quizzes"
const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}
const findQuizById = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())
}
const api = {
    findAllQuizzes, findQuizById
}
export default api