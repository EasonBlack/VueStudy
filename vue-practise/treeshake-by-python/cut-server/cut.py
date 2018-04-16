import os
import re
import shutil

inputProject =  raw_input("please input the project name A or B: ")
sourceSrcDir = "../src/"
dstSrcDir = '../project-src'
shutil.rmtree(dstSrcDir)
shutil.copytree(sourceSrcDir, dstSrcDir)

files = []
for dirpath,_,filenames in  os.walk(dstSrcDir):
  for name in filenames:
        if name.endswith('.html'):
            _file = {
                'name':name, 
                'dirpath' :dirpath
            }
            files.append(_file)
print files

for _file in files:
    _html = open(_file['dirpath'] +'/' + _file['name']).read()
    result = re.findall(r'(<.*myrole=[\'\"]'+ inputProject +'[\'|\"].*</.*>)',_html)
    print result