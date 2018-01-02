
from shutil import copyfile, rmtree
import os

import jinja2

PATH = os.path.dirname(os.path.abspath(__file__))

TEMPLATE_ENV = jinja2.Environment(
    loader = jinja2.FileSystemLoader(PATH),
    block_start_string = '<%',
    block_end_string = '%>',
    variable_start_string='%%',
    variable_end_string='%%',
)


def createMainProject():
    if not os.path.exists('dist'):
        os.makedirs('dist')
    else:
        rmtree('dist')
    if not os.path.exists('dist/src'):
        os.makedirs('dist/src')
   
    
    copyfile('repository/index.html', 'dist/index.html')
    copyfile('repository/.babelrc', 'dist/.babelrc')
    copyfile('repository/webpack.config.js', 'dist/webpack.config.js')
    copyfile('repository/src/main.js', 'dist/src/main.js')

    templateApp = TEMPLATE_ENV.get_template('repository/src/App.vue')
    appfile = os.open('dist/src/App.vue', os.O_RDWR|os.O_CREAT)
    os.write(appfile, templateApp.render(className='student'))
    os.close(appfile)
    
    # copyfile('repository/src/App.vue', 'dist/src/App.vue')