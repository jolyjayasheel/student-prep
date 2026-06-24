import { useState,useEffect } from "react";
import ResultCard from "../ResultCard";
import "../App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";



function Home(){
    const navigate=useNavigate();
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    console.log("Topic Changed:",topic);
  }, [topic]);

  const generate = async () => {
    if (topic === "") {
      alert("Please enter a topic");
      return;
    }

    setLoading(true);

    const response = await fetch("http://127.0.0.1:5000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topic: topic,
      }),
    });

    const data = await response.json();

    console.log(data);

    setResult(data);
    navigate("/results",{
        state:{
            result:data,
        },
    });

    setLoading(false);
  };

  return (
    
    <div className="container">
        <Navbar/>
      <h1>Student Prep</h1>

      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter Topic"
      />

      <button onClick={generate} diabled={loading}>
        {loading ? "Generating...":"Generate"}
      </button>

      {loading && <p>Generating...</p>}

      {result && (
        <>
          <ResultCard
            title="Summary"
            content={result.summary}
          />

          <ResultCard
            title="Key Concepts"
            content={result.key_concepts.join(", ")}
          />
        </>
      )}
    </div>
  );
}

export default Home;