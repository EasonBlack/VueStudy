
import os
from flask import Flask, request, render_template, send_file
from flask.json import jsonify
from flask_cors import CORS, cross_origin
import json



app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
def index():
  return render_template("index.html")

@app.route("/upload",  methods=['POST'])
@cross_origin()
def json_upload():
  if not os.path.exists('source'):
    os.makedirs('source')
  submitted_file = request.files['file']
  submitted_file.save("source/one.json")
  return true

@app.route("/getjson")
@cross_origin()
def json_loader():
  data = {}
  with open('source/one.json', 'r') as json_file:
    data = json.load(json_file)
    
  return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True, port=5000)