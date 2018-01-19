import psycopg2
import os
from flask import Flask, render_template, send_file, request
from flask.json import jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

con = psycopg2.connect(database='home', user='eason', password='admin') 


@app.route("/")
def index():
    return "Hello World"

@app.route("/bookItems")
@cross_origin()
def getAllBookItems():
    result = {"rows": [], "cols": []}
    cur = con.cursor()

    cur.execute('''select column_name from  information_schema.columns
                where table_name=\'book_items\'''')
    for col in cur.fetchall():
        result["cols"].append(col[0])
    print(result["cols"])
    cur.execute("Select * from home.book_items")
    for row in cur.fetchall():
        _row = {}
        print(row)
        for i,col in enumerate(result["cols"]):
            _row[col] = row[i]
            print(i,col)
        result["rows"].append(_row)
    
    cur.close()
   
    return jsonify(result)

@app.route('/bookItems', methods=['POST'])
@cross_origin()
def addBookItem():
    cur = con.cursor()
    _name = request.form["name"]
    _author = request.form["author"]
    cur.execute("INSERT INTO home.book_items(name, author) VALUES (%s, %s)", (_name, _author))
    con.commit()   
    cur.close() 
    return "success"

@app.route('/bookItems/<id>', methods=['PUT'])
@cross_origin()
def updateBookItem(id):
    cur = con.cursor()
    _name = request.form["name"]
    _author = request.form["author"]
    cur.execute("UPDATE home.book_items SET name=%s, author=%s WHERE id=%s", (_name, _author, id))     
    con.commit()   
    cur.close() 
    return "success"

@app.route('/bookItems/<id>', methods=['DELETE'])
@cross_origin()
def deleteBookItem(id):
    cur = con.cursor()
    cur.execute("Delete from home.book_items WHERE Id=%s", (id))     
    con.commit()   
    cur.close() 
    return "success"


if __name__ == '__main__':
    app.run(debug=True, port=9000)