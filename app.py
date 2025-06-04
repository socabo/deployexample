from flask import Flask, render_template, jsonify
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/data')
def get_data():
    return jsonify({
        'message': 'Hello from Flask!',
        'environment': os.environ.get('ENVIRONMENT', 'development'),
        'server': 'DigitalOcean App Platform' if os.environ.get('ENVIRONMENT') == 'production' else 'Local Docker'
    })

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)