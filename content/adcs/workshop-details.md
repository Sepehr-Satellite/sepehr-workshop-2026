1 Required Equipment 
1. Primary EduSat (per group) 
2. sensor and board kit1 (per group) 
• Arduino Uno board and cable 
• Breadboard and jumper wires 
• IMU sensor 
• Magnetometer 
• Magnet 
2 Course Architecture 
The course is structured into three main modules, following the complete ADCS workflow from 
understanding spacecraft orientation to sensing, controlling, and finally using these capabilities to 
perform spacecraft-level behaviors. 
1. Module 1: Attitude Determination 
“How does the spacecraft know which way it is pointing?” 
This module introduces the concept of spacecraft attitude and explains how a CubeSat can 
determine its orientation using different sensors. Students first learn the basic concepts of attitude, 
reference frames, and rotational motion, and then work with practical sensors such as the IMU, 
and magnetometer. 
The module progresses from sensor measurements to basic calibration and finally to the concept 
of attitude estimation and sensor fusion. 
Main Sections: 
1. What is Attitude?  
2. Understanding Spacecraft Orientation  
3. How Can a Spacecraft Determine Its Attitude?  
4. Introduction to Attitude Representation  
5. Attitude Sensors  
6. Sensor Calibration and Errors  
7. From Sensor Measurements to Attitude Estimation  
1If it is feasible to conduct the related hands-on activities using the Primary EduSat itself, and this approach proves 
more beneficial, this kit may be omitted. 
1 
Hands-on activities: 
• Exploring IMU and other attitude-related sensors  
• Identifying sensor axes and responses  
• Magnetometer calibration and heading calculation  
• IMU calibration and attitude estimation 
2. Module 2: Attitude Control 
“How does the spacecraft change and maintain its orientation?” 
This module introduces the transition from knowing the spacecraft's current attitude to actively 
changing it. Students learn about attitude actuators, with a focus on reaction wheels, and 
understand the physical principle behind their operation. 
The module then introduces the closed-loop control concept and builds toward a simple practical 
controller using gyroscope feedback and a reaction wheel. 
Main Sections: 
1. From Attitude Determination to Attitude Control  
2. Rotational Motion and Torque  
3. Attitude Control Actuators  
4. Reaction Wheels and Conservation of Angular Momentum  
5. Motor Control and PWM  
6. Closed-Loop Attitude Control  
7. Basic P/PD Control Concept  
8. Detumbling, Stabilization, and Pointing (ADCS Modes) 
Hands-on activities: 
• Controlling a DC motor (reaction wheel)  
• Observing the spacecraft's reaction to wheel motion  
• Implementing a basic closed-loop detumbling controller  
3. Module 3: Operational Modes and Mission-Level ADCS 
“How does the spacecraft use ADCS to perform its mission?” 
This module combines the concepts learned in the first two modules and introduces spacecraft 
operational modes. Students learn how different ADCS functions can be organized into modes and 
2 
how the spacecraft can autonomously transition between them based on sensor measurements and 
mission conditions. 
The module concludes with integrated mission scenarios in which students combine sensing, 
decision-making, control, and actuation. 
Main Sections: 
4. Why Does a Spacecraft Need Operational Modes?  
5. ADCS State Machines and Mode Transitions  
6. Safe Mode and Detumble Mode 
7. Sun Acquisition and Sun Pointing  
8. Thermal Reorientation  
9. Mission-Level ADCS Logic  
10. Integrating ADCS with the Onboard Computer and Other Subsystems  
11. Final Integrated Mission Scenario  
Hands-on activities: 
• Implementing a (detumbling) disturbance rejection mode  
• Implementing a thermal-triggered maneuver  
• Finding and pointing toward a light source  
• Building an integrated mission state machine