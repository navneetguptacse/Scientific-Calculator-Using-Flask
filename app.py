from flask import Flask, render_template, request
import math

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/calculate", methods=["POST"])
def calculate():
    expression = request.form["expression"]
    result = eval(expression)
    return render_template("result.html", result=result)

if __name__=="__main__":
    app.run(host="0.0.0.0")