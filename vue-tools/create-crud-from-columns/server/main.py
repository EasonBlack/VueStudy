from flask import Flask, render_template, send_file, send_from_directory, request, jsonify
from flask_cors import CORS, cross_origin
import json
import os
import shutil

from function import createMainProject

app = Flask(__name__,
            static_url_path='', 
            static_folder='../client',
            template_folder='templates')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/")
def main():
    return render_template("index.html")

@app.route('/setup', methods=['POST'])
@cross_origin()
def setup():
    print('** create cols **')
    # shutil.rmtree('dist')
    request_json = request.get_json()
    print(request_json["cols"])
    createMainProject()


    return "success"    

if __name__ == '__main__':
    createMainProject()
    app.run(port=90,debug=True)