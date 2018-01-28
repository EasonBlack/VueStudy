import psycopg2
import os
from flask import Flask, render_template, send_file, request,Blueprint
from flask.json import jsonify
from flask_cors import CORS, cross_origin
from common.sqlHandle import selectHandle

charactor = Blueprint('charactor',__name__) 
con = psycopg2.connect(database='home', user='eason', password='admin') 

@charactor.route("/book/<id>/charactors")
@cross_origin()
def getAllCharactorByBookId(id):
    return selectHandle(con, 'book_charactors', ' where \"bookId\" =' + id)

@charactor.route("/book/<id>/charactors", methods=['POST'])
@cross_origin()
def addCharactor(id):
    cur = con.cursor()
    _name = request.form["name"]
    _subname = request.form["subname"]
    _bookId = id
    _desc = request.form["desc"]
    cur.execute("INSERT INTO home.book_charactors(name, subname, \"desc\", \"bookId\") VALUES (%s, %s, %s, %s)", (_name, _subname, _desc, _bookId))
    con.commit()   
    cur.close() 
    return "success"


@charactor.route('/book/<id>/charactors/<cid>', methods=['PUT'])
@cross_origin()
def updateCharactor(id, cid):
    cur = con.cursor()
    _name = request.form["name"]
    _subname = request.form["subname"]
    _desc = request.form["desc"]
    cur.execute("UPDATE home.book_charactors SET name=%s, subname=%s, \"desc\"=%s WHERE id=%s", (_name, _subname, _desc, cid))     
    con.commit()   
    cur.close() 
    return "success"


@charactor.route('/book/<id>/charactors/<cid>', methods=['DELETE'])
@cross_origin()
def deleteCharactor(id,cid):
    cur = con.cursor()
    cur.execute("Delete from home.book_charactors WHERE id=%s", (cid))     
    con.commit()   
    cur.close() 
    return "success"