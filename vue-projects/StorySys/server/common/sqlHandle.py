
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

def selectById(con, tableName, id):
    cur = con.cursor()
    result = {}
    cols = []
    cur.execute('''select column_name from  information_schema.columns
                where table_name=%s''', (tableName,))
    for col in cur.fetchall():
        cols.append(col[0])
        
    cur.execute("select * from  home.%s where id=%s"%(tableName, id,))
    row = cur.fetchone()
    if row:
        for i,col in enumerate(row):
            result[cols[i]] = col
    else:
        for col in cols:
            result[col] = ''
    
    return jsonify(result)