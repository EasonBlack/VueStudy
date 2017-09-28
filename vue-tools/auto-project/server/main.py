from flask import Flask, render_template, send_file, send_from_directory, request, jsonify
from flask_cors import CORS, cross_origin
import json
import os

app = Flask(__name__,
            static_url_path='', 
            static_folder='static',
            template_folder='templates')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

 
def setupBox(box, root):
    output = open(root + '/'+ box['title'] +'.vue', 'w')
    html = box['html']
    css = box['css']
    script = box['script']
    htmlTemplate = (
        "<template>\n"
        "{html}"  
        "</template> \n\n"
    )
    htmlTemplate = htmlTemplate.format(html=html)

    scriptTemplate = (
        "<script>\n"
        "{script}"
        "</script>\n\n"
    )
    scriptTemplate = scriptTemplate.format(script=script)

    cssTemplate = (
        "<style lang='scss' scoped>\n"
        "{css}"
        "</style> \n\n"
    ) 
    cssTemplate = cssTemplate.format(css=css)

    template = htmlTemplate + scriptTemplate + cssTemplate
    output.write(template)

def setupBoxes(request_json, root):
    for key in request_json:
        print key
        if "boxes" in request_json[key]:
            setupBoxes(request_json[key]["boxes"], root)
        setupBox(request_json[key], root)

@app.route("/")
def hello():
    return render_template("index.html")

@app.route('/setup', methods=['POST'])
@cross_origin()
def setup():
    request_json = request.get_json()
    for key in request_json:
        if not os.path.exists('dist/' + request_json[key]['title']):
            os.makedirs('dist/' + request_json[key]['title'])
            root = 'dist/' + request_json[key]['title']
        break 
    setupBoxes(request_json, root)
    return "success"

if __name__ == '__main__':
    app.run(port=90,debug=True)