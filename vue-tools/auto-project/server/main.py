from flask import Flask, render_template, send_file, send_from_directory, request, jsonify

app = Flask(__name__,
            static_url_path='', 
            static_folder='static',
            template_folder='templates')


@app.route("/")
def hello():
    return render_template("index.html")

@app.route('/setup', methods=['POST'])
def setup():
    request_json = request.get_json()
    value1 = request_json.get('b')
    print request_json
    print value1
    return "success"

if __name__ == '__main__':
    app.run(port=90,debug=True)