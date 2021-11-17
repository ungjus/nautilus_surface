import rospy
import cv2
import numpy as np
from sensor_msgs.msg import CompressedImage

def main():
  # Create the node
  rospy.init_node('video_publisher', log_level=rospy.DEBUG) # Is this still needed?

  # Create the publisher
  pub = rospy.Publisher('/nautilus/video', CompressedImage, queue_size=0)

  # Open the video camera stream
  video = cv2.VideoCapture(0) # Can adjust param for different cameras

  # Close stream on rospy shutdown
  rospy.on_shutdown(video.release())

  # Create the output foundation
  img = CompressedImage()
  img.format = 'jpeg'

  while not rospy.is_shutdown():
    # Get the video
    tmp, frame = video.read()

    # Make sure there are no errors
    if not tmp:
        print("Could not get frame.")
        break
    
    # Convert to jpeg format
    # Not sure why we need to convert to np.array and .toString, but from prev code.
    img.data = np.array(cv2.imencode('.jpeg', frame)[1]).tostring()
    
    # Publish the final output
    ################# GET THE USER'S NAME #################
    pub.publish({'user': name, 
                'frame': img}) 

if __name__ == '__main__':
  main()