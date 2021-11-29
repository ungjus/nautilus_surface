import rospy
import json
from std_msgs.msg import String

from .subscriber import ServerSub
from flask_socketio import SocketIO

class TextSub(ServerSub):

    def __init__(self, topic, sio_route, sio):
        super().__init__(topic, String)
        self.sio_route = sio_route
        self.sio = sio
        self.cache = None

    def callback(self, data):
        self.cache = json.loads(msg) 
        self.send_all_msgs()

    def send_all_msgs():
        self.sio.emit(self.sio_route, self.cache, broadcast=True)
        
        
