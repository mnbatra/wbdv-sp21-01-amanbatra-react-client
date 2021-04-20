import React, {useState, useEffect} from 'react';

const TrueFalseQuestion = ({question, questions, setQuestions, graded}) => {
    const [answer, setAnswer] = useState('');
    const choices = ["true", "false"];
    const rightChoice = answer === question.correct && graded;
    const wrongChoice = graded && answer !== question.correct && graded;
    let count = 0;
    useEffect(() => {
        if (graded) {
            const unrelated = questions.filter(q => q._id !== question._id);
            const target = questions.find(q => q._id === question._id);
            target.answer = answer;
            const updatedQuestions = [...unrelated, target];
            setQuestions(updatedQuestions);
        }
    }, [graded])
    return (
        <div>
            <h4>{question.question}
                {rightChoice && <i className="fas fa-check float-right" style={{color: '#5ab83b'}}/>}
                {wrongChoice && <i className="fas fa-times float-right" style={{color: '#d9161d'}}/>}</h4>
            <ul className='list-group'>
                {
                    choices.map(choice => {
                        const ra = graded && question.correct === choice;
                        const swa = graded && question.correct !== answer && answer === choice;
                        return (<li className={`list-group-item ${ra ? 'list-group-item-success' : ''} ${swa ? 'list-group-item-danger' : ''}`} key={count++}>
                            <label>
                                <input type='radio'
                                       value={choice} checked={answer === choice}
                                       disabled={graded}
                                       onChange={e => setAnswer(e.target.value)}/>
                                {choice}
                            </label>
                            {
                                ra && <i className="fas fa-check float-right" style={{color: '#5ab83b'}}/>
                            }
                            {
                                swa && <i className="fas fa-times float-right" style={{color: '#d9161d'}}/>
                            }
                        </li>)
                    })
                }
            </ul>
            <p>Your Answer: {answer}</p>
        </div>
    );
}

export default TrueFalseQuestion;