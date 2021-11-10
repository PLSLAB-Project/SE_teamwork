class UserMethod:
    def __init__(self):
        pass

    def register(self, UserId, phoneNumber, userName, profilePicture, userMarks='', userWorks='', userSearchRecord='', userPrefer=''):
        # 插入用户信息
        # users = User.insertUserInfo(userId,phoneNumber,userName,profilePicture = '',userMarks = '',
        # userWorks = '',userSearchRecord = '',userPrefer='')
        pass
        #注册用户

    def view_work(self, userId, workId):
        # 添加用户历史浏览记录
        # new_history = User.insertuserSearchRecord(userId,workId)
        # 仍需获取work信息
        pass
        #浏览作品

    def publish_work(self):
        pass
        #发布作品

    def view_history(self, userId):
        # 获取用户历史浏览记录
        # now_history = User.getUserSearchRecord(userId)
        # return now_history
        pass
        #查看历史

    def view_mark(self, UserId):
        # 获取用户收藏信息
        # now_marks = User.getuserMarks(userId)
        # return now_marks
        pass
        #查看收藏

    def delete_mark(self, userId, workId):
        # 删除用户收藏记录
        # new_marksUser.deleteuserMarks(userId,workId)
        # return new_marks
        pass
        #删除收藏

    def delete_history(self, userId, workId):
        # 删除用户历史浏览记录
        # new_history = User.deleteuserSearchRecord(userId, workId)
        # return new_history
        pass
        #删除历史

    def add_mark(self, userId, workId):
        # 添加用户收藏记录
        # new_mark = User.insertuserMarks(userId,workId)
        # return new_mark
        pass
        #添加收藏
