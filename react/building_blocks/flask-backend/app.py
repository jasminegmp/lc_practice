import flask
from flask_cors import CORS
from flask import request
import requests 

app = flask.Flask("__main__")
@app.route("/")
def my_index():
    return flask.render_template("index.html")

@app.route('/api/query_zipcode', methods = ['POST'])
def get_query_from_react():

    zipcode = request.json()
    print zipcode



app.run(debug=True)