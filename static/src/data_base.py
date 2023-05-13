from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/data')
def data():
    df = pd.read_csv('./data/steam_games.csv')
    data = df.to_dict(orient='records')
    table = '<thead><tr>'
    for column in df.columns:
        table += '<th>' + column + '</th>'
    table += '</tr></thead><tbody>'
    for row in data:
        table += '<tr>'
        for column in df.columns:
            table += '<td>' + str(row[column]) + '</td>'
        table += '</tr>'
    table += '</tbody>'
    return jsonify({'table': table})

if __name__ == '__main__':
    app.run(debug=True)
