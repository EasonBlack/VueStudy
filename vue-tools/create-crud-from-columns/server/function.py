
from shutil import copyfile, rmtree, copytree
import os

import jinja2

CLASSNAME = 'student'
COLS = ['name', 'age']
KEYCOL = COLS[0]

TEMPLATE_DICT = {
    'className':CLASSNAME,
    'cols': COLS,
    'keycol':KEYCOL
}
#className=CLASSNAME, cols=COLS, keycol=KEYCOL

PATH = os.path.dirname(os.path.abspath(__file__))

TEMPLATE_ENV = jinja2.Environment(
    loader = jinja2.FileSystemLoader(PATH),
    block_start_string = '[%',
    block_end_string = '%]',
    variable_start_string='%%',
    variable_end_string='%%',
)

FOLDERS = [
    'dist/src',
    'dist/src/store',
    'dist/src/module',
    'dist/src/module/' + CLASSNAME,
    'dist/src/module/' + CLASSNAME +'/' + CLASSNAME + '-detail',
    'dist/src/module/' + CLASSNAME +'/' + CLASSNAME + '-edit',
    'dist/src/module/' + CLASSNAME +'/' + CLASSNAME + '-list'
]
PROJECT_FILES = [
    'index.html',
    '.babelrc',
    'webpack.config.js',
    'src/main.js'
]
COMMON_FOLDERS = [
    'src/component'
]

TEMPLATE_FILES = [
    {'base': 'src/App.vue', 'dict': 'src/App.vue'},
    {'base': 'src/store/index.js', 'dict': 'src/store/index.js'},
    {'base': 'src/store/base.js', 'dict': 'src/store/'+ CLASSNAME +'.js'},
    {'base': 'src/module/base/base-list/index.vue', 'dict': 'src/module/' + CLASSNAME +'/' + CLASSNAME + '-list/index.vue'},
    {'base': 'src/module/base/base-detail/index.vue', 'dict': 'src/module/' + CLASSNAME +'/' + CLASSNAME + '-detail/index.vue'},
    {'base': 'src/module/base/base-edit/index.vue', 'dict': 'src/module/' + CLASSNAME +'/' + CLASSNAME + '-edit/index.vue'},
]

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

