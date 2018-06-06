# server.py
from flask import Flask, render_template

app = Flask(__name__, static_folder="../static/dist", template_folder="../static")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/h")
def hello():
    return "Hello World!"
 
@app.route("/m")
def members():
    return "Members"
 
@app.route("/m/<string:name>/")
def getMember(name):
    return "Members name is: " + name

if __name__ == "__main__":
  app.run(host='127.0.0.1', port=3,debug=True)
