import React, {useState, useEffect} from 'react';

const Result = ({result}) => {
    const [right, setRight] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const rightAns = result.filter((r) => r === true ); 
        setRight(rightAns.length);
        setTotal(result.length);
    }, [result])
    return (
        <>
            <h2>Quiz Result</h2>
            <hr />
            <div className="card mb-4 progress-banner vh-50">
                <div className="card-body d-flex flex-row align-items-center">
                    <h5 className="mb-4 lead text-white">Your Score: </h5>
                    <div role="progressbar" className="progress-bar-circle ml-2 progress-bar-banner position-relative">
                        <svg viewBox="0 0 100 100">
                            <path d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" stroke="rgba(255,255,255,0.2)" strokeWidth="4" fillOpacity="0"></path>
                            <path d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" stroke="white" strokeWidth="4" fillOpacity="0"></path>
                        </svg>
                        <div className="progressbar-text">{right}/{total}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Result
