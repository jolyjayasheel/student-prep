import { useState } from "react";

function App() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState(null);

  const generate = async () => {
    const response = await fetch("http://127.0.0.1:5000/generate", {
      method: "POST",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify({
      topic: topic,}),
    });

    const data = await response.json();

    setResult(data);
  };

  return (
    <div>
      <h1>Student Prep</h1>

      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter Topic"
      />

      <button onClick={generate}>
        Generate
      </button>

      {result && (
        <div>
          <h2>Summary</h2>
          <p>{result.summary}</p>

          <h2>Quiz Questions</h2>
          <ul>
            {result.quiz_questions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>

          <h2>Interview Questions</h2>
          <ul>
            {result.interview_questions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>

          <h2>Key Concepts</h2>
          <ul>
            {result.key_concepts.map((concept, index) => (
              <li key={index}>{concept}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;