from Works.webport import translate


class WorksMethod:
    def __init__(self):
        pass

    def publish_comment(self, text):
        pass
        #获取作品类型

    def make_score(self):
        pass
        #给对应作品评分

    def translate_work(self):

        pass
        #语音翻译

    def search_work(self):
        pass
        #搜索作品


class AudioWorkMethod(WorksMethod):
    @classmethod
    def translate_work(self, audiofile):
        result = translate(audiofile)
        return result


class ArticleWorkMethod(WorksMethod):
    def get_work_length(self):
        pass
