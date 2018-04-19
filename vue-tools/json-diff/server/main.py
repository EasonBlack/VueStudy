
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
  submitted_file1 = request.files['file1']
  submitted_file2 = request.files['file2']
  submitted_file1.save("source/one.json")
  submitted_file2.save("source/two.json")
  return true

@app.route("/getjson")
@cross_origin()
def json_loader():
  data1 = {}
  data2 = {}
  with open('source/one.json', 'r') as json_file:
    data1 = json.load(json_file)
  with open('source/two.json', 'r') as json_file:
    data2 = json.load(json_file)
  result = {"one": data1, "two": data2}
  return jsonify(result)



if __name__ == '__main__':
    app.run(debug=True, port=5000)