
from shutil import copyfile, rmtree, copytree
import os
import json
import ConfigParser

import jinja2

cf = ConfigParser.ConfigParser()  
cf.read('main.config')

CLASSNAME = cf.get("config", "CLASSNAME")
COLS =  json.loads(cf.get("config", "COLS"))
KEYCOL = json.loads(cf.get("config", "KEYCOL"))
PROJECT_FILES = json.loads(cf.get("config", "PROJECT_FILES"))
COMMON_FOLDERS = json.loads(cf.get("config", "COMMON_FOLDERS"))
FOLDERS = json.loads(cf.get("config", "FOLDERS"))
TEMPLATE_FILES = json.loads(cf.get("config", "TEMPLATE_FILES"))


TEMPLATE_DICT = {
    'className':CLASSNAME,
    'cols': COLS,
    'keycol':KEYCOL
}


PATH = os.path.dirname(os.path.abspath(__file__))

TEMPLATE_ENV = jinja2.Environment(
    loader = jinja2.FileSystemLoader(PATH),
    block_start_string = '[%',
    block_end_string = '%]',
    variable_start_string='%%',
    variable_end_string='%%',
)

def createMainProject():
    if not os.path.exists('dist'):
        os.makedirs('dist')
    else:
        rmtree('dist')

    for folder in FOLDERS:
        os.makedirs(folder)
    
    for _file in PROJECT_FILES:
        copyfile('repository/' + _file, 'dist/' + _file)

    for _tree in COMMON_FOLDERS:
        copytree('repository/' + _tree, 'dist/' + _tree)
    
    for _file in TEMPLATE_FILES:
        _templateFile = TEMPLATE_ENV.get_template('repository/' + _file['base'])
        appfile = os.open('dist/' + _file['dict'], os.O_RDWR|os.O_CREAT)
        os.write(appfile, _templateFile.render(TEMPLATE_DICT))
        os.close(appfile)

