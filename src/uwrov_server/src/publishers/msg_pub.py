import rospy
import json
from .publisher import ServerPub
from std_msgs.msg import String


class MsgPub(ServerPub):
    """
    Publisher for switching the viewed camera channel
    """

    def __init__(self, topic, cache):
        super().__init__(topic, String)
        self.cached_object = cache #subscriber

    
    def publish(self, data):
        stringified = json.dumps(data)
        self.publisher.publish(stringified)

    #TODO text: push new msg onto previous data sets then publish
    def add_msg(self, data):
        author = data["author"]
        text = data["body"]
        new_list = list(self.cached_object.cache).append(data)
        self.publish(self, new_list)
