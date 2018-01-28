
from flask.json import jsonify

def selectHandle(con, tableName, strWhere):
    result = {"rows": [], "cols": []}
    cur = con.cursor()
    cur.execute('''select column_name from  information_schema.columns
                where table_name=%s''', (tableName,))
    for col in cur.fetchall():
        result["cols"].append(col[0])
    
    cur.execute("Select * from home.%s  %s"%(tableName, strWhere))
    for row in cur.fetchall():
        _row = {}
        for i,col in enumerate(result["cols"]):
            _row[col] = row[i]
            # print(i,col)
        result["rows"].append(_row)
    cur.close()
    return jsonify(result)