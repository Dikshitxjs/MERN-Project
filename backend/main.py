from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def home():
    return "Flask server is running!"

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json(force=True)

    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"error": "Missing username or password"}), 400

    return jsonify({"user": username}), 200

if __name__ == "__main__":
    app.run(port=3001, debug=True)
