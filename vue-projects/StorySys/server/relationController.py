import psycopg2
import os
from flask import Flask, render_template, send_file, request,Blueprint
from flask.json import jsonify
from flask_cors import CORS, cross_origin
from common.sqlHandle import selectHandle

relation = Blueprint('relation',__name__) 
con = psycopg2.connect(database='home', user='eason', password='admin') 

@relation.route("/book/<id>/charactors/<cid>/relations")
@cross_origin()
def getAllRelationByCId(cid):
    return selectHandle(con, 'book_relationship_view', ' where \"cid1\" =' + cid)

@relation.route("/book/<id>/charactors/<cid>/relations", methods=['POST'])
@cross_origin()
def addCharactor(cid):
    cur = con.cursor()
    _cid1 = request.form["cid"]
    _cid2 = request.form["cid2"]
    _relationship = request.form["_relationship"]
    _result = request.form["result"]
    cur.execute("INSERT INTO home.book_relationship(cid1, cid2, relationship, result) VALUES (%s, %s, %s, %s)", 
        (_cid1, _cid2, _relationship, _result));
    con.commit()   
    cur.close() 
    return "success"


@relation.route('/book/<id>/charactors/<cid>/relations/<rid>', methods=['PUT'])
@cross_origin()
def updateCharactor(rid):
    cur = con.cursor()
    _relationship = request.form["relationship"]
    _result = request.form["result"]
    cur.execute("UPDATE home.book_relationship SET relationship=%s, result=%s WHERE id=%s", (_relationship, _result, rid))     
    con.commit()   
    cur.close() 
    return "success"


@relation.route('/book/<id>/charactors/<cid>/relations/<rid>', methods=['DELETE'])
@cross_origin()
def deleteCharactor(rid):
    cur = con.cursor()
    cur.execute("Delete from home.book_relationship WHERE id=%s", (rid))     
    con.commit()   
    cur.close() 
    return "success"