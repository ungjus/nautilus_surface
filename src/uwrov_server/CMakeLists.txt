cmake_minimum_required(VERSION 3.0.2)
project(uwrov_server)

## Find catkin macros and libraries
## if COMPONENTS list like find_package(catkin REQUIRED COMPONENTS xyz)
## is used, also find other catkin packages
find_package(catkin REQUIRED COMPONENTS
  geometry_msgs
  roscpp
  rospy
  sensor_msgs
  std_msgs
)

catkin_package(DEPENDS
    rospy
)

include_directories(
# include
  ${catkin_INCLUDE_DIRS}
)

catkin_python_setup()

# server launch
catkin_install_python(PROGRAMS
  scripts/main_server.py
  DESTINATION ${CATKIN_PACKAGE_BIN_DESTINATION}
)
