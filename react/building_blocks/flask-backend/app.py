from flask import Flask, request, jsonify
import flask
from flask_cors import CORS
from flask import request
import requests 
import pandas as pd


app = flask.Flask("__main__")
CORS(app, resources={r"/*": {"origins": "*"}})
@app.route("/")
def my_index():
    return flask.render_template("index.html")

@app.route('/api/query_zipcode', methods = ['POST'])
def get_query_from_react():

    data = request.json
    zipcode =  data.get('data', {})[0]
    print zipcode
    #return jsonify(data)

    r = requests.get('https://api.openbrewerydb.org/breweries?by_postal=' + zipcode).content
    

    # move json data into pandas dataframe
    df = pd.read_json(r)
    df =  df.to_json(orient='split')
    return df


app.run(debug=True)