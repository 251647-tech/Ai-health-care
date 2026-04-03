from flask import Flask, request, jsonify
from flask_cors import CORS
from ai import get_ai_response

app = Flask(__name__)
CORS(app)

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json
    symptoms = data.get("symptoms")

    response = get_ai_response(symptoms)

    return jsonify({"result": response})

if __name__ == "__main__":
    app.run(debug=True)