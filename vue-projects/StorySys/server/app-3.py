import psycopg2
import os
from flask import Flask, render_template, send_file, request,Blueprint
from flask.json import jsonify
from flask_cors import CORS, cross_origin
from bookController import book

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.register_blueprint(book)

@app.route("/")
def index():
    return "Hello World"

if __name__ == '__main__':
    app.run(debug=True, port=9000)