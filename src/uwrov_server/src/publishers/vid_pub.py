#!/usr/bin/env python3
import rospy
import threading
from .publisher import ServerPub
from std_msgs.msg import Int16


class VidPub(ServerPub):
    """
    Publisher for movement commands, dictated by current state of the xbox controller
    """

    def __init__(self, topic):
        super().__init__(topic)
        self.msg = Int16()
        # self.launch_continuous_publisher()
    
    def publish(self, newImage):
        self.msg = newImage
        self.publisher.publish(self.msg)

    # def publish_continuous(self, rate: int):
    #     r = rospy.Rate(rate)
    #     while not rospy.is_shutdown():
    #         self.publish()
    #         r.sleep()

    # def launch_continuous_publisher(self):
    #     self.publisher_thread = threading.Thread(
    #         target=self.publish_continuous, args=(20,), daemon=True)
    #     self.publisher_thread.start()
