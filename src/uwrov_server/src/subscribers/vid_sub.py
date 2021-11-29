import rospy
from .subscriber import ServerSub
from flask_socketio import SocketIO
from std_msgs.msg import String
import json

class VidSub(ServerSub):
    """
    Subscriber which receives webcam data from other clients.
    """

    def __init__(self, topic, sio_route, sio):
        super().__init__(topic, String)
        self.sio_route = sio_route
        self.sio = sio
        self.cache = None

    def callback(self, msg):    
        self.cache = json.loads(msg)
        self.send_image_to_client()
    
    def send_image_to_client(self):
        self.sio.emit(self.sio_route, self.cache, broadcast=True)