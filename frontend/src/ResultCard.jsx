function ResultCard(props){
    return(
        <div
            className="result-box">
            <h2>{props.title}</h2>
            <p>{props.content}</p>

        </div>
    )
}

export default ResultCard