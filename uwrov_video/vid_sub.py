import rospy
from std_msgs.msg import Int16
from flask_socketio import SocketIO

from .subscriber import ServerSub

class VidSub(ServerSub):
  def __init__(self, topic, sio_route, sio):
        super().__init__(topic, String)
        self.sio_route = sio_route
        self.sio = sio

def callback(self, msg):
    packet = {
        'user': msg.data[0],
        'frame': msg.data[1]
    }
    self.sio.emit(self.sio_route, packet, broadcast=True)