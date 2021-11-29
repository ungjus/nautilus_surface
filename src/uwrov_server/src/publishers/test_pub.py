import rospy
from .publisher import ServerPub
from std_msgs.msg import String


class ChannelPub(ServerPub):
    """
    Publisher for switching the viewed camera channel
    """

    def __init__(self, topic, cache):
        super().__init__(topic, String)
        self.cached_object = cache


    def add_msg(self, data):
        author = data["author"]
        text = data["body"]

        new_list = list(self.cached_object.cache).append(data)

        self.publish(self, new_list)

    ###


    def publish(self, data):
        new_video = dict(self.cached_object.cache)
        new_video[author] = frame
        # TODO Text
        #   push new message onto previous datasets and then publish
        # TODO VIDEO
        #   Find the author of the given video and update frame and then publish
        stringified = json.dumps(data)

        self.publisher.publish(stringified)

    def disconnect(self, author):


        stringified = json.dumps(data)
        self.publisher.publish(stringified)


{
    <String>: <Int16>
}
