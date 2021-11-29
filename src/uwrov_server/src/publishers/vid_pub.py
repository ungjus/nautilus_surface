import rospy
from .publisher import ServerPub
from std_msgs.msg import String
import json


class ChannelPub(ServerPub):
    """
    Publisher for switching the viewed camera channel
    """

    def __init__(self, topic, cache):
        super().__init__(topic, String)
        self.cached_object = cache

    def publish(self, data):
        # get author and image
        author = data['author']
        image = data['frame']

        # add author and image to previous cache
        new_video = dict(self.cached_object.cache) 
        new_video[author] = image
        
        # stringify updated cache and publish
        stringified = json.dumps(new_video)
        new_video(stringified)
    
    def disconnect(self, author):
        new_video = dict(self.cached_object.cache) 


        # remove person when they disconnect
        new_video.pop(author)

        # stringify updated cache and publish
        stringified = json.dumps(new_video)
        new_video(stringified)
