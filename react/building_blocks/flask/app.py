import flask
from flask_cors import CORS
from flask import request
import requests 

app = flask.Flask(__name__, static_folder="./build/static", template_folder="./build")
CORS(app, resources={r"/*": {"origins": "*"}})


app = flask.Flask("__main__")
@app.route("/")


# Data comes in as [makeup category, color]
@app.route('/api/query_zipcode', methods = ['POST'])
def get_query_from_react():

    zipcode = request.json()
    print zipcode


def my_index():
    return flask.render_template("index.html")


app.run(debug=True)