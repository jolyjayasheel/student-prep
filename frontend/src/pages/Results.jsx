import { useLocation } from "react-router-dom";

function Results(){
    const location=useLocation();
    const result=location.state.result;


    return(
        <div>
            <h1>
                Results Page
            </h1>
            <h2>Summary</h2>
            <p>{result.summary}</p>

            <h2>Key concepts</h2>
            <ul>
                {result.key_concepts.map((concept,index)=>(
                    <li key={index}>{concept}</li>
                ))}
            </ul>

            <h2>Quiz Questions</h2>
            <ul>
                {result.quiz_questions.map((question,index)=>(
                    <li key={index}>{question}</li>
                ))}
            </ul>

            <h2>Interview Questions</h2>
            <ul>
                {result.interview_questions.map((question,index)=>(
                    <li key={index}>{question}</li>
                ))}
            </ul>
        </div>

    );
}
export default Results;