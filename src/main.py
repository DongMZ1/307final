from flask import Flask, render_template, request, redirect, url_for, session
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re

app = Flask(__name__)

# Change this to your secret key (can be anything, it's for extra protection)
app.secret_key = 'cs307grp01pass' #password you may change

# Enter your database connection details below
app.config['MYSQL_HOST'] = 'fall2020-comp307.cs.mcgill.ca'
app.config['MYSQL_USER'] = 'cs307-group01'
app.config['MYSQL_PASSWORD'] = 'ng8DCt2qSa7rXHEP'
app.config['MYSQL_DB'] = 'cs307-group01-DB'

# Intialize MySQL
mysql = MySQL(app)

@app.route('/pythonlogin/', methods=['GET', 'POST'])
def login():
    # Output message if something goes wrong...
    msg = ''
    return render_template('loginindex.html', msg='')