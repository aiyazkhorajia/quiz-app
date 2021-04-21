import React from 'react';
import Stepper from 'react-stepper-horizontal';
import {useSelector, useDispatch} from 'react-redux';
import { setNextQuestion, getResult, setActiveOption } from '../store/actions';
import QuizResult from '../components/QuizResult';

const AnswerColumn = ({options, answer}) => {
    const { activeOption } = useSelector(state => state);
    const dispatch = useDispatch();
    
    const handleSelect = (selectedOption) => {
        dispatch(setActiveOption(selectedOption));
    }
    
    return (
        <>
            {options && options.map((o) => (
                <div className="col-lg-2 col-sm-6 col-xs-12" key={o}>
                    <div 
                        className={`ans-content border-radius ${activeOption === o ? "active" : ""}`} 
                        onClick={() => handleSelect(o)} >
                        <img
                            className="img-fluid border-radius"
                            src={require(`../assets/images/quiz-photos/${o}`)}
                            alt="" />
                    </div>
                </div>
            ))}
        </>
    )
}

const Quiz = () => {
    const dispatch = useDispatch();
    const { questions, visibleQuestionIndex, visibleQuestion, activeOption, isCompleted, result } = useSelector(state => state);

    const handleNext = () => {
        const answer = visibleQuestion.answer === activeOption ? true : false;
        dispatch(setNextQuestion(answer));
    }

    const handleSubmit = () => {
        const answer = visibleQuestion.answer === activeOption ? true : false;
        dispatch(getResult(answer));
    }

    return (
        <div className="row">
            <div className="col-12">
                {isCompleted 
                ? <QuizResult result={result} /> 
                :
                <>
                    <h2>Quiz</h2>
                    <div className='py-3'>
                        <Stepper steps={questions} activeStep={ visibleQuestionIndex } titleFontSize={0} circleTop={10} size={28} circleFontSize={12} completeBarColor='#DEDEDE'/>
                    </div>
                    <div className="card mb-4">
                        <div className={`card-body`} >
                            <h5 className="card-title">
                                <span>{visibleQuestion.question}</span>
                            </h5>
                            <div className="row social-image-row gallery">
                                <AnswerColumn options={visibleQuestion.options} answer={visibleQuestion.answer} />
                            </div>
                        </div>
                        {(questions.length - 1) > visibleQuestionIndex 
                        ?   <button 
                                type="button" 
                                className="btn btn-outline-primary btn-lg m-4 btn-custom"
                                onClick={() => handleNext()} 
                            >Next</button>
                        :   <button 
                                type="button" 
                                className="btn btn-outline-primary btn-lg m-4 btn-custom"
                                onClick={() => handleSubmit()} 
                            >Result</button>
                        }
                    </div>
                </>
                }
            </div>
        </div>
    )
}

export default Quiz
