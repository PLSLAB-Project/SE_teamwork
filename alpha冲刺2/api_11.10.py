from flask import Flask, redirect, request, jsonify
import json

app = Flask(__name__)


@app.route('/alwaysRight/reg', methods=["POST"])
def reg():
    getData = request.get_json()
    Username = getData.get("Username")
    Password = getData.get("Password")
    NickName = getData.get("NickName")
    print(Username, Password, NickName)

    sql = "insert into user(Username,Password,Nickname) values (%s,%s,%s)"

    return jsonify(msg="ok")


@app.route('/alwaysRight/getRandomWork', methods=["POST"])
def getRandomWork():
    getWork = func()

    return jsonify(randomWork=getWork)


@app.route('/alwaysRight/getUserData', methods=["POST"])
def getUserData():
    userData = func()

    return jsonify(randomWork=userData)


@app.route('/alwaysRight/uploadAudio', methods=["POST"])
def upload():
    audio = request.files.get('audio')

    path = "/static/aduio/"
    audioName = audio.filename
    filePath = path + audioName
    audio.save(filePath)
    thisAudioId = func()
    thisAudioId2AScore = func()

    data = {
        'id': thisAudioId,
        'score': thisAudioId2AScore
    }
    return jsonify(data)


def func():
    return 1

@app.route('/alwaysRight/dialect2Mandarin', methods=["POST"])
def trans():
    audio = request.files.get('audio')
    res = func(audio)

    return jsonify(data=res)

if __name__ == '__main__':
    app.run(host="0.0.0.0")
