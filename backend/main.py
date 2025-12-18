from flask import Flask
from flask_pymongo import PyMongo  # Correct import

app = Flask(__name__)

# MongoDB connection string
app.config["MONGO_URI"] = "mongodb+srv://complainuser:root@complaintbox-cluster.lspxwhg.mongodb.net/complaintbox?retryWrites=true&w=majority"

mongo = PyMongo(app)

@app.route("/")
def hello_world():
    # Insert a document into the 'inventory' collection
    mongo.db.inventory.insert_one({"a": 1})  # Use quotes for the key
    return "Hello world!"

if __name__ == "__main__":
    app.run(debug=True)
