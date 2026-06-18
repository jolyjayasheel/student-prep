from flask import Flask,request
from flask import jsonify
from flask_cors import CORS
app=Flask(__name__)
CORS(app)
@app.route("/")
def home():
    return "student prep backend running"
@app.route('/generate',methods=['POST'])
def generate():
    data=request.get_json()
    topic=data.get('topic')

    return jsonify({        "summary": f"This is a summary about {topic}",
        "quiz_questions": [
            "Question 1",
            "Question 2"
        ],
        "interview_questions": [
            "Interview Question 1",
            "Interview Question 2"
        ],
        "key_concepts": [
            "Concept 1",
            "Concept 2"
        ]})



if __name__=="__main__":
    app.run(debug=True)
