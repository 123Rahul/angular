from flask import Flask, jsonify, abort, request, render_template
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

taskMeta = ['id', 'title', 'description', 'done']

titles = ['wakeup', 'bath', 'fresh', 'learn', 'went', 'go', 'who',
          'they', 'why', 'another', 'okay', 'who', 'they', 'why',
          'aboput', 'pls', 'k', 'doom', 'whether', 'coz']

tasks = []


# get task meta
@app.route('/todo/api/v1.0/task/meta', methods=['GET'])
def get_task_meta():
    return jsonify({'meta': taskMeta})


# get tasks list
@app.route('/todo/api/v1.0/task/list', methods=['GET'])
def get_task_list():
    tasks.clear()
    length = int(request.headers["length"])
    offset = int(request.headers["offset"])
    for title in titles[offset:offset + length]:
        task = {"name": title}
        tasks.append(task)
    return jsonify({
        'data': tasks,
        'length': tasks.__len__()
    })


# get specific task
@app.route('/todo/api/v1.0/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    task = [task for task in tasks if task['id'] == task_id]
    if len(task) == 0:
        abort(404)
    return jsonify({'task': task[0]})


if __name__ == '__main__':
    app.run(debug=True)
