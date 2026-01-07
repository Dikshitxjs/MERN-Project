from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import (
    JWTManager, create_access_token, jwt_required, get_jwt_identity
)
from pymongo import MongoClient
import datetime

app = Flask(__name__)
CORS(app)

# ---- CONFIG ----
app.config["JWT_SECRET_KEY"] = "key-xxx"   

jwt = JWTManager(app)
bcrypt = Bcrypt(app)

# ---- DATABASE ----
client = MongoClient("mongodb://localhost:27017")
db = client["login_db"]
users = db["users"]

#####some routes
@app.route("/", methods=["GET"])
def home():
    return "Flask server is running!"


# ---------- REGISTER ----------
@app.route("/register", methods=["POST"])
def register():
    data = request.json

    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"error": "Missing username or password"}), 400

    if users.find_one({"username": username}):
        return jsonify({"error": "User already exists"}), 400

    hashed = bcrypt.generate_password_hash(password).decode("utf-8")

    users.insert_one({
        "username": username,
        "password": hashed
    })

    return jsonify({"message": "User created successfully"}), 201


# ---------- LOGIN ----------
@app.route("/login", methods=["POST"])
def login():
    data = request.json

    username = data.get("username")
    password = data.get("password")

    user = users.find_one({"username": username})

    if not user:
        return jsonify({"error": "User not found"}), 404

    if not bcrypt.check_password_hash(user["password"], password):
        return jsonify({"error": "Wrong password"}), 401

    token = create_access_token(
        identity=username,
        expires_delta=datetime.timedelta(hours=1)
    )

    return jsonify({"token": token, "user": username}), 200


# ---------- PROTECTED ROUTE ----------
@app.route("/profile", methods=["GET"])
@jwt_required()
def profile():
    user = get_jwt_identity()
    return jsonify({"message": f"Welcome {user}!"})


if __name__ == "__main__":
    app.run(port=3001, debug=True)
