# coding=utf-8

import os
from flask import Flask, request, render_template, send_file
from flask.json import jsonify
from flask_cors import CORS, cross_origin

import hashlib
import urllib
import random
import requests
import json
import types  




app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'



appid = '20180206000121301'
secretKey = '3yP2yC5CNWNhHzA3UILu'

 
httpClient = None
myurl = '/api/trans/vip/translate'

fromLang = 'en'
toLang = 'zh'
salt = random.randint(32768, 65536)


baseUrl = 'http://api.fanyi.baidu.com'

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
  return 1

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

@app.route('/getmeaning',  methods=['POST'])
@cross_origin()
def get_mean_from_baidu():
  content = request.form['content']
  sign = appid+content+str(salt)+secretKey
  m1  = hashlib.md5()  
  m1.update(sign.encode("utf-8"))
  sign = m1.hexdigest()

  transurl = baseUrl + myurl+'?appid='+appid+'&q='+urllib.parse.quote(content)+'&from='+fromLang+'&to='+toLang+'&salt='+str(salt)+'&sign='+sign
  print(transurl)
  r = requests.get(transurl, headers={'Connection':'close'})
  print(r.json())
  return jsonify(r.json())



if __name__ == '__main__':
    app.run(debug=True, port=5000)