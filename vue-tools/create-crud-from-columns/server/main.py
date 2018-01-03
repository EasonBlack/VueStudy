from flask import Flask, render_template, send_file, send_from_directory, request, jsonify
from flask_cors import CORS, cross_origin
import json
import os
import shutil

from function import createMainProject


createMainProject()
