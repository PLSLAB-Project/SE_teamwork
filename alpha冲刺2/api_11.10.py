from flask import Flask, redirect, request, jsonify
import json

app = Flask(__name__)


@app.route('/alwaysRight/reg', methods=["POST"])
def reg():
    getData = request.get_json()
    nickName = getData.get("nickName")
    country = getData.get("country")
    province = getData.get("province")
    city = getData.get("city")
    gender = getData.get("gender")
    language = getData.get("language")
    avatarUrl = getData.get("avatarUrl")

    userData = {
        'nickName': nickName,
        'country': country,
        'province': province,
        'city': city,
        'gender': gender,
        'language': language,

    }
    return jsonify(msg="ok")


@app.route('/alwaysRight/getRandomWork', methods=["POST"])
def getRandomWork():
    getWork = func()  # get random TotalWork

    return jsonify(randomWork=getWork)


@app.route('/alwaysRight/getUserInfo', methods=["POST"])
def getUserData():
    func()

    return jsonify()


@app.route('/alwaysRight/getUserLikeById', methods=["POST"])
def getUserLikeById():
    getData = request.get_json()
    id = getData.get("id")
    userData = func()

    return jsonify(randomWork=userData)


@app.route('/alwaysRight/uploadAudio4Score', methods=["POST"])
def upload4Score():
    audio = request.files.get('audio')

    path = "/static/aduio/"
    audioName = audio.filename
    filePath = path + audioName
    audio.save(filePath)
    thisAudioId = func()  # save id
    thisAudioId2Score = func()  # save score

    data = {
        'id': thisAudioId,
        'score': thisAudioId2Score
    }
    return jsonify(data)


@app.route('/alwaysRight/uploadAudio4text', methods=["POST"])
def upload4text():
    audio = request.files.get('audio')
    path = "/static/aduio/"
    audioName = audio.filename
    filePath = path + audioName
    audio.save(filePath)
    thisAudioId = func()  # save id
    thisAudioId2Text = func()  # save score

    data = {
        'id': thisAudioId,
        'text': thisAudioId2Text
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
