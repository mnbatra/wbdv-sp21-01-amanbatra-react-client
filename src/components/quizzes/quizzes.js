import React, {useState, useEffect} from 'react';
import QuizzesService from '../../services/quizzes-service';
import {Link, useParams} from 'react-router-dom';

const Quizzes = () => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([]);
    useEffect(() => {
        QuizzesService.findAllQuizzes()
            .then(res => setQuizzes(res));
    }, [])
    return (
        <div>
            <div className='row'>
                <Link to='/courses/table' className='fas fa-2x fa-times ml-1'/>
                <h1><br/>
                    Quizzes</h1>
            </div>
            <ul className='list-group'>
                {
                    quizzes.map(quiz => <li className='list-group-item' key={quiz._id}>
                        <Link className='btn' to={`/courses/${courseId}/quizzes/${quiz._id}`}>{quiz.title}</Link>
                        <Link to={`/courses/${courseId}/quizzes/${quiz._id}`} className='btn btn-primary float-right'>Start</Link>
                        <Link className='btn btn-secondary float-right'
                              to={`/courses/${courseId}/quizzes/${quiz._id}/attempts`}>Attempts Histories</Link>
                    </li>)
                }
            </ul>
        </div>
    );
}

export default Quizzes