import psycopg2
import os
from flask import Flask, render_template, send_file, request,Blueprint
from flask.json import jsonify
from flask_cors import CORS, cross_origin
from common.sqlHandle import selectHandle

book = Blueprint('book',__name__) 
con = psycopg2.connect(database='home', user='eason', password='admin') 

@book.route("/bookItems")
@cross_origin()
def getAllBookItems():
    return selectHandle(con, 'book_items', '')

@book.route('/bookItems', methods=['POST'])
@cross_origin()
def addBookItem():
    cur = con.cursor()
    _name = request.form["name"]
    _author = request.form["author"]
    cur.execute("INSERT INTO home.book_items(name, author) VALUES (%s, %s)", (_name, _author))
    con.commit()   
    cur.close() 
    return "success"

@book.route('/bookItems/<id>', methods=['PUT'])
@cross_origin()
def updateBookItem(id):
    cur = con.cursor()
    _name = request.form["name"]
    _author = request.form["author"]
    cur.execute("UPDATE home.book_items SET name=%s, author=%s WHERE id=%s", (_name, _author, id))     
    con.commit()   
    cur.close() 
    return "success"

@book.route('/bookItems/<id>', methods=['DELETE'])
@cross_origin()
def deleteBookItem(id):
    cur = con.cursor()
    cur.execute("Delete from home.book_items WHERE Id=%s", (id))     
    con.commit()   
    cur.close() 
    return "success"
