// data/data.js - All static content for the portfolio

export const personalInfo = {
    name: "Shrutam Oswal",
    title: "Mechanical Engineer",
    tagline: "Bridging Digital Design & Physical Reality",
    subtitle: "Results-driven Mechanical Engineer | Robotics Specialist | Lean Six Sigma Green Belt",
    email: "oswalshrutam@outlook.com",
    phone: "+1 (773) 842-8096",
    location: "Chicago, IL, USA",
    linkedin: "https://linkedin.com/in/shrutam",
    github: "https://github.com/shrutam",
    website: "https://shrutamoswal.com",
    summary: "A results-driven Mechanical Engineer who bridges the gap between digital design and physical reality. Combines deep expertise in CAD, FEA, and CFD with hands-on fabrication skills (TIG Welding, 3D Printing) to lead projects from concept to completion. As a Lean Six Sigma Green Belt and former Robotics Team Captain, I bring a unique, data-driven methodology to optimize system performance and deliver tangible business results."
};

export const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/shrutam",
        icon: "linkedin",
        display: "in"
    },
    {
        name: "Email",
        url: "mailto:oswalshrutam@outlook.com",
        icon: "email",
        display: "✉"
    },
    {
        name: "GitHub",
        url: "https://github.com/shrutam",
        icon: "github",
        display: "gh"
    },
    {
        name: "Phone",
        url: "tel:+17738428096",
        icon: "phone",
        display: "☎"
    }
];

export const technologies = [
    {
        name: 'SolidWorks',
        color: '#FF0000',
        category: 'CAD',
        logo: 'https://www.3ds.com/assets/3ds-navigation/3DS_corporate-logo_solidworks.svg'
    },
    {
        name: 'PTC Creo',
        color: '#FF8C00',
        category: 'CAD',
        logo: 'https://ptc-p-001.sitecorecontenthub.cloud/api/public/content/c22e1d0a2ced49ccacb3fae025b2eb00?v=33c3645b'
    },
    {
        name: 'Fusion 360',
        color: '#0696D7',
        category: 'CAD',
        logo: 'https://damassets.autodesk.net/content/dam/autodesk/www/product-imagery/badge-75x75/simplified-badges/fusion-360-product-design-extension-2023-simplified-badge-75x75.png'
    },
    {
        name: 'ANSYS',
        color: '#FF6B6B',
        category: 'Analysis',
        logo: 'https://www.ansys.com/content/dam/company/brand/logos/ansys-logos/ansys-logo.svg'
    },
    {
        name: 'MATLAB',
        color: '#E16737',
        category: 'Analysis',
        logo: 'https://www.mathworks.com/etc.clientlibs/mathworks/clientlibs/customer-ui/templates/common/resources/images/mathworks-logo-rev.20250820203440005.svg'
    },
    {
        name: 'Minitab',
        color: '#4CAF50',
        category: 'Analysis',
        logo: 'https://www.minitab.com/content/dam/minitab/logos/minitab-corp-logo_REV.svg'
    },
    {
        name: 'LabVIEW',
        color: '#FFD700',
        category: 'Analysis',
        logo: 'https://ni.scene7.com/is/image/ni/LabVIEW_152x116?$ni-icon-pm'
    },
    {
        name: 'Python',
        color: '#3776AB',
        category: 'Programming',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png'
    },
    {
        name: 'C',
        color: '#A8B9CC',
        category: 'Programming',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/250px-The_C_Programming_Language_logo.svg.png'
    },
    {
        name: 'C++',
        color: '#00599C',
        category: 'Programming',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/250px-ISO_C%2B%2B_Logo.svg.png'
    },
    {
        name: 'ROS',
        color: '#22314E',
        category: 'Robotics',
        logo: 'https://www.ros.org/imgs/logo-white.png'
    },
    {
        name: 'Arduino',
        color: '#00979D',
        category: 'Embedded',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/1024px-Arduino_Logo.svg.png'
    },
    {
        name: 'Raspberry Pi',
        color: '#C51A4A',
        category: 'Embedded',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Raspberry_Pi_Logo.svg/548px-Raspberry_Pi_Logo.svg.png?20230605225001'
    },
    {
        name: 'OpenCV',
        color: '#5C3EE8',
        category: 'Computer Vision',
        logo: 'https://opencv.org/wp-content/uploads/2022/05/logo.png'
    }
];

export const education = [
    {
        degree: "Master of Science",
        field: "Mechanical Engineering",
        institution: "University of Illinois - Chicago",
        location: "Chicago, IL, USA",
        duration: "2023 - May 2025",
        gpa: "3.7/4.0",
        highlights: [
            "Specialized in Mechatronics and Robotics",
            "Advanced coursework in FEA, CFD, and Control Systems",
            "Graduate Research Assistant in UGV Navigation & Control",
            "Focus on autonomous systems and advanced manufacturing"
        ],
        icon: "🎓"
    },
    {
        degree: "Bachelor of Engineering",
        field: "Mechanical Engineering",
        institution: "University of Pune",
        location: "Pune, India",
        duration: "2017 - 2021",
        gpa: "First Class with Distinction",
        highlights: [
            "Robotics Team Captain for ABU Robocon",
            "Hardware Hackathon Winner - 1st Place",
            "Focus on Design, Manufacturing, and Automation",
            "Led multiple competition robot projects"
        ],
        icon: "🎓"
    }
];

export const skills = {
    "Design & Analysis": [
        "SolidWorks", "PTC Creo", "CATIA V6", "Fusion 360",
        "FEA (ANSYS)", "CFD", "DFM/DFA", "GD&T"
    ],
    "Fabrication & Prototyping": [
        "MEMS Cleanroom Fabrication", "3D Printing (FDM/SLA)",
        "Rapid Prototyping", "TIG Welding", "CNC Machining",
        "Sheet Metal Fabrication"
    ],
    "Quality & Process Optimization": [
        "Lean Six Sigma Green Belt", "DMAIC Methodology", "DOE", "SPC",
        "Minitab Statistical Analysis", "Root Cause Analysis", "DFMEA"
    ],
    "Mechatronics & Controls": [
        "System Integration", "Motor Sizing & Selection",
        "Pneumatics & Hydraulics", "Arduino", "Raspberry Pi",
        "C/C++ Embedded Systems", "PLC Programming", "Sensor Integration"
    ],
    "Programming & Data Analysis": [
        "Python", "MATLAB/Simulink", "C++", "C#",
        "ROS (Robot Operating System)", "OpenCV", "Git/GitHub"
    ]
};

export const experiences = [
    {
        title: "Research Assistant - UGV Navigation & Control",
        company: "University of Illinois - Chicago",
        department: "UIC Robotics and Motion Laboratory",
        location: "Chicago, IL, USA",
        duration: "September 2025 - Present",
        type: "Research",
        icon: "🤖",
        description: "Developing autonomous navigation systems for unmanned ground vehicles with focus on sensor fusion and real-time control",
        responsibilities: [
            "Developing an autonomous navigation stack in ROS for an Unmanned Ground Vehicle (UGV)",
            "Integrating and fusing data from LiDAR, IMU, and GPS to enable robust localization and path planning",
            "Applying control theory to optimize navigation stability and authoring Python scripts for autonomous obstacle avoidance",
            "Implementing SLAM algorithms for real-time mapping and localization in dynamic environments",
            "Conducting field tests and validating navigation performance in various terrain conditions"
        ],
        technologies: ["ROS", "Python", "LiDAR", "IMU", "GPS", "C++", "SLAM", "Gazebo", "OpenCV"],
        achievements: [
            "Improved navigation accuracy by 35% through advanced sensor fusion algorithms",
            "Reduced obstacle detection latency by 50ms using optimized processing pipeline",
            "Successfully demonstrated autonomous navigation in complex outdoor environments"
        ],
        color: "#22314E"
    },
    {
        title: "Research and Development Controls Engineer",
        company: "Hyster-Yale Group",
        location: "Pune, MH, India",
        duration: "November 2021 - July 2023",
        type: "Full-time",
        icon: "⚙️",
        description: "Led system validation and safety testing for industrial material handling equipment including forklifts and AGVs",
        responsibilities: [
            "Accelerated system performance validation by 30% by modeling and simulating complex electromechanical systems, including hydraulic actuators and electrical powertrains using MATLAB/Simulink",
            "Ensured 100% compliance to EN 1175 safety standards, leading HIL/SIL/MIL testing and conducting robust root cause analysis on integrated systems",
            "Developed control algorithms for automated guided vehicles (AGVs) and electric forklifts",
            "Collaborated with cross-functional teams spanning mechanical, electrical, and software engineering",
            "Created detailed technical documentation and test procedures for validation processes"
        ],
        technologies: ["MATLAB/Simulink", "HIL Testing", "Hydraulics", "Control Systems", "Safety Standards", "dSPACE"],
        achievements: [
            "30% improvement in system validation efficiency through simulation-based testing",
            "100% safety compliance achieved across all product lines",
            "Reduced system integration issues by 45% through early-stage simulation and testing"
        ],
        color: "#E16737"
    },
    {
        title: "Mechanical Design Engineer Intern",
        company: "Tech Mahindra - Makers Space",
        location: "Pune, MH, India",
        duration: "November 2019 - July 2020",
        type: "Internship",
        icon: "🔧",
        description: "Design and optimization of mechanical systems for aerospace and robotics applications",
        responsibilities: [
            "Optimized a rocker-bogie suspension system for an extraterrestrial rover prototype, achieving a 20% reduction in material usage through iterative FEA simulation in CATIA V6 and SolidWorks",
            "Conducted comprehensive stress analysis and topology optimization for weight-critical components",
            "Created detailed manufacturing drawings with GD&T specifications for fabrication",
            "Collaborated with fabrication team to ensure design manufacturability and assembly efficiency",
            "Performed design validation through physical testing and prototype iteration"
        ],
        technologies: ["CATIA V6", "SolidWorks", "FEA", "ANSYS", "GD&T", "Topology Optimization"],
        achievements: [
            "20% material cost reduction while maintaining structural integrity",
            "Improved rover stability on rough terrain by 15% through suspension optimization",
            "Completed design iterations 25% faster than projected timeline"
        ],
        color: "#0696D7"
    }
];

export const projects = {
    mechatronics: [
        {
            id: 1,
            title: "Robotics Team Captain & Lead Design Engineer",
            subtitle: "ABU Robocon Competition Robot",
            duration: "2017 - 2021",
            tier: "Core Experience & Leadership",
            category: "Mechatronics",
            context: "Led a multidisciplinary team of 15 members to design, fabricate, and deliver a 23 kg competition robot from concept to reality, leading all mechanical design and system integration efforts for the ABU Robocon competition.",
            sections: {
                "Mechanical Design": "Engineered a lightweight 11 kg TIG-welded aluminum chassis and a multi-axis pneumatic manipulator in SolidWorks. Performed all motor sizing, torque, and power requirement calculations to integrate a high-performance Mecanum wheel powertrain enabling omnidirectional movement.",
                "System Integration & Control": "Programmed and integrated the full powertrain using C++ on an Arduino Mega. Sized and selected all motor drivers and the 24V Li-Ion battery system. Implemented an open-loop control scheme using a PS3 controller for intuitive teleoperation with real-time responsiveness."
            },
            technologies: ["SolidWorks", "C++", "Arduino Mega", "Mecanum Wheels", "Pneumatics", "TIG Welding", "Motor Control"],
            metrics: {
                "Robot Weight": "23 kg",
                "Chassis Weight": "11 kg",
                "Battery System": "24V Li-Ion",
                "Control Type": "PS3 Wireless Controller",
                "Team Size": "15 members"
            },
            achievements: [
                "Led multidisciplinary team of 15 members across mechanical, electrical, and software domains",
                "Completed full robot design and fabrication in 6 months under tight competition deadline",
                "Successfully competed at national level ABU Robocon with robust performance",
                "Implemented safety systems and redundancy for reliable operation",
                "Mentored junior team members in design and fabrication techniques"
            ],
            featured: true,
            color: "#FF0000"
        },
        {
            id: 2,
            title: "Automated Bottle Capping Station",
            subtitle: "Hardware Hackathon Winner - 1st Place",
            duration: "2019",
            tier: "Core Experience & Leadership",
            category: "Mechatronics",
            context: "As the sole mechatronics engineer for a university hackathon, designed, fabricated, and commissioned a fully automated bottle capping station from scratch in 48 hours, winning the hardware division.",
            sections: {
                "Mechatronic Design & Fabrication": "Owned the end-to-end design in SolidWorks, from the conveyor system to a custom 3D-printed gripper. Selected and integrated all components, including a LiDAR sensor for bottle detection, pneumatic cylinders for clamping and actuation, and a high-torque DC motor for precise capping torque control.",
                "Control & Commissioning": "Developed the complete operational sequence in C++/Arduino implementing state machine logic. Commissioned the system by validating sensor inputs, tuning actuator timings, and optimizing the control logic to achieve a reliable, high-speed throughput of 23 bottles per minute with 95% success rate."
            },
            technologies: ["SolidWorks", "C++", "Arduino", "LiDAR", "Pneumatics", "3D Printing", "DC Motors", "State Machine"],
            metrics: {
                "Throughput": "23 bottles/minute",
                "Development Time": "48 hours",
                "Success Rate": "95%",
                "Award": "1st Place Hardware Division"
            },
            achievements: [
                "Won first place in hardware division against 25+ competing teams",
                "Achieved 95% success rate in automated capping operation",
                "Completed full system design, fabrication, and testing in 48-hour timeframe",
                "Integrated multiple sensor and actuator systems with reliable coordination"
            ],
            featured: true,
            color: "#00979D"
        },
        {
            id: 3,
            title: "Unmanned Ground Vehicle Navigation & Control",
            subtitle: "Autonomous Navigation Research",
            duration: "2023 - Present",
            tier: "Core Experience",
            category: "Mechatronics",
            context: "As a Research Assistant at the UIC Robotics and Motion Laboratory, developing a comprehensive autonomous navigation system for unmanned ground vehicles with real-time obstacle avoidance and path planning.",
            sections: {
                "Robotics Software Development": "Developing and implementing advanced path planning and obstacle avoidance algorithms within the Robot Operating System (ROS) framework, utilizing A* and D* Lite algorithms for efficient path computation.",
                "Sensor Integration & Control": "Integrating and processing data from a suite of sensors including LiDAR, IMU, GPS, and wheel encoders through Extended Kalman Filter for robust state estimation and localization.",
                "Algorithm Implementation": "Applying modern control theory including PID and Model Predictive Control to optimize navigation stability and writing Python-based control scripts for autonomous navigation in complex environments."
            },
            technologies: ["ROS", "Python", "C++", "LiDAR", "IMU", "GPS", "SLAM", "OpenCV", "Gazebo", "Kalman Filter"],
            metrics: {
                "Localization Accuracy": "±5cm",
                "Response Time": "50ms",
                "Improvement": "35% accuracy increase"
            },
            achievements: [
                "Improved localization accuracy by 35% through advanced sensor fusion algorithms",
                "Implemented real-time obstacle avoidance with 50ms response time",
                "Developed robust path planning system for complex outdoor terrains",
                "Successfully validated navigation system in various environmental conditions"
            ],
            featured: true,
            color: "#22314E"
        },
        {
            id: 4,
            title: "4WD Mobile Robot Base",
            subtitle: "Modular Competition Platform",
            duration: "2018",
            tier: "Supporting Evidence",
            category: "Mechatronics",
            context: "Designed and built a robust foundational mobility platform for university robotics team, serving as the base for multiple competition robots.",
            sections: {
                "Design & Fabrication": "Led the full design and fabrication process, creating comprehensive CAD models in SolidWorks with complete assembly documentation, selecting optimal materials for durability and weight, and performing hands-on assembly with the team."
            },
            technologies: ["SolidWorks", "Arduino Mega", "DC Motors", "Motor Drivers", "Power Distribution"],
            metrics: {
                "Drive Type": "4-Wheel Drive",
                "Max Speed": "2 m/s",
                "Max Payload": "15 kg",
                "Battery Life": "3 hours continuous"
            },
            achievements: [
                "Delivered robust, reliable platform used in 3 different competition robots",
                "Platform demonstrated 99% uptime across multiple competitions",
                "Modular design enabled quick adaptation for different competition requirements"
            ],
            featured: false,
            color: "#FF8C00"
        },
        {
            id: 5,
            title: "Ankle-Foot Orthosis Control System",
            subtitle: "Medical Exoskeleton Development",
            duration: "2024",
            tier: "Specialized",
            category: "Mechatronics",
            context: "Contributed to mechanical design of a portable actuator system for an ankle-foot orthosis as part of a biomedical engineering research project.",
            sections: {
                "Mechanical Design": "Redesigned snap-fit connection for mounting rotary encoders in SolidWorks, focusing on Design for Assembly (DFA) principles. Fabricated precision parts using 3D printing with careful tolerance analysis to ensure reliable sensor mounting and easy maintenance access."
            },
            technologies: ["SolidWorks", "3D Printing", "Rotary Encoders", "DFA", "Medical Devices"],
            achievements: [
                "Improved assembly time by 40% with optimized snap-fit design",
                "Enhanced maintainability of sensor system for clinical use",
                "Validated design through repeated assembly/disassembly cycles"
            ],
            featured: false,
            color: "#9C27B0"
        },
        {
            id: 6,
            title: "Automated Agricultural Robot",
            subtitle: "Computer Vision Harvesting System",
            duration: "2020 - 2021",
            tier: "Specialized",
            category: "Mechatronics",
            context: "Undergraduate capstone project developing a semi-autonomous agricultural robot with computer vision for selective bell pepper harvesting.",
            sections: {
                "Robot Design": "Designed semi-autonomous robot with a custom 5-DOF articulated manipulator for precise fruit picking. Implemented forward and inverse kinematics for accurate end-effector positioning.",
                "Vision System": "Developed real-time image processing algorithms using OpenCV for fruit detection, maturity classification based on color analysis, and 3D localization using stereo vision."
            },
            technologies: ["SolidWorks", "Arduino", "OpenCV", "Python", "Servo Motors", "Computer Vision", "Kinematics"],
            metrics: {
                "DOF": "5 axes",
                "Harvest Time": "<30 seconds per pepper",
                "Detection Accuracy": "87%",
                "Success Rate": "82%"
            },
            achievements: [
                "Successfully harvested bell peppers in under 30 seconds per fruit",
                "Achieved 87% detection accuracy in varied lighting conditions",
                "Implemented color-based maturity classification with 85% accuracy"
            ],
            featured: false,
            color: "#4CAF50"
        },
        {
            id: 7,
            title: "IoT-Powered Smart Cabin Automation",
            subtitle: "Connected Home System",
            duration: "2020",
            tier: "Foundational",
            category: "Mechatronics",
            context: "Personal project developing a comprehensive IoT home automation system with mobile control interface.",
            sections: {
                "System Design": "Designed distributed IoT system using Arduino and ESP8266 WiFi modules for controlling motorized blinds, smart lighting, and electronic door locks. Developed custom Android application for real-time monitoring and control with intuitive user interface."
            },
            technologies: ["Arduino", "ESP8266", "Android", "IoT", "Sensors", "MQTT", "WiFi"],
            metrics: {
                "Manual Intervention Reduction": "40%",
                "Devices Controlled": "8 smart devices",
                "Response Time": "<200ms"
            },
            achievements: [
                "Reduced manual intervention by 40% through intelligent automation",
                "Created real-time monitoring system with cloud data logging",
                "Implemented secure communication protocols for device control"
            ],
            featured: false,
            color: "#3776AB"
        },
        {
            id: 8,
            title: "Maze Navigating Robot",
            subtitle: "Autonomous Path Planning",
            duration: "2024",
            tier: "Foundational",
            category: "Mechatronics",
            context: "Graduate project implementing intelligent maze-solving algorithms with ultrasonic sensor array.",
            sections: {
                "Algorithm Development": "Implemented wall-following and flood-fill algorithms in Python within CoppeliaSim simulation environment. Developed decision logic using data from 8 ultrasonic sensors for collision-free navigation. Optimized path selection using A* algorithm for shortest path computation."
            },
            technologies: ["CoppeliaSim", "Python", "Ultrasonic Sensors", "Path Planning", "A* Algorithm"],
            metrics: {
                "Performance Improvement": "40% faster",
                "Sensors": "8 ultrasonic",
                "Success Rate": "95%"
            },
            achievements: [
                "Optimized path-planning for 40% faster maze completion vs baseline",
                "Achieved 95% success rate in maze solving across various configurations",
                "Implemented memory-based mapping for efficient repeat navigation"
            ],
            featured: false,
            color: "#00599C"
        },
        {
            id: 9,
            title: "Real-Time Motor Speed Control",
            subtitle: "Simulink Control Implementation",
            duration: "2024",
            tier: "Foundational",
            category: "Mechatronics",
            context: "Graduate control systems project implementing real-time DC motor control with sensor feedback.",
            sections: {
                "Control Design": "Designed PID control algorithm in MATLAB Simulink for precise motor speed and direction control. Implemented sensor signal processing with Kalman filter for noise reduction and linear regression for speed prediction."
            },
            technologies: ["MATLAB", "Simulink", "DC Motor", "PID Control", "Kalman Filter"],
            metrics: {
                "Sensor Accuracy Improvement": "45%",
                "Settling Time": "<0.5s",
                "Steady-State Error": "<2%"
            },
            achievements: [
                "Enhanced sensor accuracy by 45% through advanced filtering",
                "Achieved <2% steady-state error in speed control",
                "Implemented predictive control for improved response"
            ],
            featured: false,
            color: "#E16737"
        }
    ],
    mechanical: [
        {
            id: 10,
            title: "Six Sigma DMAIC: Wafer-Handling Optimization",
            subtitle: "Semiconductor Process Improvement",
            duration: "2024",
            tier: "Core Experience & Leadership",
            category: "Mechanical",
            context: "Led a comprehensive Six Sigma project to address critical quality issues in a robotic wafer-handling system experiencing 12% defect rate, causing significant yield loss and $500K+ annual rework costs.",
            sections: {
                "Define": "Established project charter with stakeholders, defined critical-to-quality characteristics, and quantified the business impact of the 12% defect rate on production yield and costs.",
                "Measure": "Implemented comprehensive data collection system using SPC charts, collected 500+ data points, calculated process capability (Cpk = 0.85), and established baseline performance metrics.",
                "Analyze": "Applied Fishbone Diagrams, 5-Why analysis, and multivariate regression analysis in Minitab to identify root causes. Discovered inconsistent torque application (p<0.05) and mechanical drift as primary failure modes.",
                "Improve": "Developed automated torque calibration algorithm with real-time monitoring, optimized preventive maintenance schedule using reliability analysis, and piloted improvements on production line.",
                "Control": "Established long-term control plan with SPC charts (Xbar-R charts), created standard operating procedures, trained operators, and implemented continuous monitoring system."
            },
            technologies: ["Minitab", "Six Sigma", "DMAIC", "SPC", "Regression Analysis", "Root Cause Analysis", "DOE"],
            metrics: {
                "Initial Defect Rate": "12%",
                "Final Defect Rate": "4.2%",
                "Defect Reduction": "65%",
                "Annual Savings": "$350K+",
                "Process Cpk": "1.33 (from 0.85)"
            },
            achievements: [
                "Reduced defect rate by 65% from 12% to 4.2%, exceeding <5% target",
                "Achieved annual cost savings of $350K+ through reduced rework and scrap",
                "Improved process capability index (Cpk) from 0.85 to 1.33",
                "Developed automated calibration system reducing manual intervention by 80%",
                "Established sustainable control plan ensuring long-term stability"
            ],
            featured: true,
            color: "#4CAF50"
        },
        {
            id: 11,
            title: "Rocker-Bogie Suspension System",
            subtitle: "Mars Rover Prototype Development",
            duration: "2019 - 2020",
            tier: "Core Experience",
            category: "Mechanical",
            context: "Designed and optimized a rocker-bogie suspension system for an extraterrestrial rover prototype, balancing performance requirements with strict cost constraints.",
            sections: {
                "Design": "Created complete rocker-bogie suspension assembly in CATIA V6 and SolidWorks with parametric modeling for design flexibility. Designed for maximum stability on 45° slopes while maintaining ground contact.",
                "Analysis": "Performed iterative FEA simulations using ANSYS to optimize component geometry. Conducted topology optimization to reduce weight while maintaining structural integrity. Validated design with factor of safety >2.5 for all critical components.",
                "Testing": "Built physical prototype and conducted field testing on simulated Martian terrain with various obstacle configurations."
            },
            technologies: ["CATIA V6", "SolidWorks", "ANSYS", "FEA", "Topology Optimization", "GD&T"],
            metrics: {
                "Material Reduction": "20%",
                "Stability Improvement": "15%",
                "Max Slope": "45°",
                "Weight Savings": "3.2 kg"
            },
            achievements: [
                "Achieved 20% reduction in material usage and cost",
                "Improved stability on rough terrain by 15% through optimized geometry",
                "Met all structural requirements with FOS >2.5",
                "Completed design iterations 25% faster than projected"
            ],
            featured: true,
            color: "#0696D7"
        },
        {
            id: 12,
            title: "Hydraulic & Pneumatic Circuit Design",
            subtitle: "High-Speed Actuation System",
            duration: "2019",
            tier: "Supporting Evidence",
            category: "Mechanical",
            context: "Designed and optimized fluid power systems for competition robot requiring rapid, powerful actuation for kicking mechanism.",
            sections: {
                "Design": "Designed complete pneumatic circuit in FluidSIM including compressor sizing, valve selection, and pressure regulation. Calculated required cylinder force and stroke for projectile velocity requirements.",
                "Optimization": "Integrated quick-release valve at cylinder exhaust port to reduce back-pressure and increase actuation speed. Optimized tube diameter and routing to minimize pressure losses."
            },
            technologies: ["FluidSIM", "Pneumatics", "Hydraulics", "Circuit Design", "Fluid Dynamics"],
            metrics: {
                "Actuation Speed Increase": "75%",
                "Response Time": "<100ms",
                "Operating Pressure": "6 bar"
            },
            achievements: [
                "Increased piston actuation speed by 75% through exhaust optimization",
                "Achieved <100ms response time for competition advantage",
                "Designed fail-safe pressure relief system for safety"
            ],
            featured: false,
            color: "#FFD700"
        },
        {
            id: 13,
            title: "FEA & CFD Design Optimizations",
            subtitle: "Multi-Component Analysis Portfolio",
            duration: "2018 - 2020",
            tier: "Supporting Evidence",
            category: "Mechanical",
            context: "Comprehensive design optimization project analyzing multiple mechanical components for weight reduction and performance improvement.",
            sections: {
                "FEA Analysis": "Performed static and dynamic FEA on various components including brackets, frames, and housings. Conducted fatigue analysis for cyclic loading conditions. Optimized designs using topology optimization and parametric studies.",
                "CFD Analysis": "Performed thermal and fluid flow analysis on heat sinks, cooling channels, and ventilation systems. Optimized geometries for heat dissipation and flow efficiency."
            },
            technologies: ["SolidWorks", "PTC Creo", "Fusion 360", "ANSYS", "FEA", "CFD", "Topology Optimization"],
            metrics: {
                "Avg Material Reduction": "20%",
                "Components Analyzed": "12+",
                "Thermal Performance": "+15%"
            },
            achievements: [
                "Achieved average 20% material reduction across 12+ components",
                "Maintained or improved structural performance in all cases",
                "Improved thermal performance by 15% through CFD optimization",
                "Generated significant cost savings through weight reduction"
            ],
            featured: false,
            color: "#FF6B6B"
        },
        {
            id: 14,
            title: "MEMS Thermal Actuator Fabrication",
            subtitle: "Nanoscale Device Manufacturing",
            duration: "2024",
            tier: "Specialized",
            category: "Mechanical",
            context: "Led complete fabrication process of MEMS thermal actuator in UIC's Nanotechnology Core Facility cleanroom, demonstrating expertise in micro-scale manufacturing.",
            sections: {
                "Fabrication Process": "Executed multi-step cleanroom process: photolithography with 2μm resolution, Cr/Au metallization (20/200nm), Deep Reactive-Ion Etching (DRIE) for silicon structuring, and HF release for freestanding structures. Maintained cleanroom protocol ISO Class 5.",
                "Characterization": "Performed electrical and mechanical characterization including displacement measurement, voltage-deflection curves, and buckling analysis using optical profilometry and SEM imaging."
            },
            technologies: ["MEMS", "Photolithography", "DRIE", "Metallization", "Cleanroom", "SEM", "Profilometry"],
            metrics: {
                "Voltage Tolerance": "+42%",
                "Max Displacement": "15 μm",
                "Critical Dimension": "2 μm",
                "Yield": "78%"
            },
            achievements: [
                "Successfully fabricated functional MEMS actuator with 15μm displacement",
                "Achieved 42% improvement in voltage tolerance through design optimization",
                "Generated critical data on z-axis buckling behavior for future designs",
                "Maintained 78% fabrication yield in cleanroom processes"
            ],
            featured: false,
            color: "#9C27B0"
        },
        {
            id: 15,
            title: "Snap-Fit Enclosure Design",
            subtitle: "IoT Sensor Housing with DFM/DFMEA",
            duration: "2023 - 2024",
            tier: "Specialized",
            category: "Mechanical",
            context: "Designed robust enclosure for IoT sensor module with focus on Design for Manufacturing and comprehensive failure mode analysis.",
            sections: {
                "Design": "Engineered multi-part sensor enclosure in SolidWorks optimized for both injection molding and 3D printing. Applied cantilever beam theory to design robust snap-fit joints with calculated permissible deflection (δ<5mm) and maximum strain (<5%) for 100+ assembly cycles.",
                "Analysis": "Conducted comprehensive DFMEA identifying 15+ potential failure modes. Performed FEA drop-test simulations from 1.5m height. Selected ABS material for optimal balance of elasticity (E=2.3 GPa) and strength."
            },
            technologies: ["SolidWorks", "DFM", "DFMEA", "FEA", "ANSYS", "Injection Molding", "3D Printing"],
            metrics: {
                "Assembly Cycles": "100+",
                "Max Strain": "<5%",
                "Drop Test": "1.5m pass",
                "Wall Thickness": "2mm"
            },
            achievements: [
                "Designed for 100+ assembly/disassembly cycles without failure",
                "Validated structural integrity through FEA drop-test simulations",
                "Optimized for easy manufacturing with both 3D printing and injection molding",
                "Reduced assembly time by 60% through DFA principles"
            ],
            featured: false,
            color: "#3776AB"
        },
        {
            id: 16,
            title: "Dynamic Pogo-Stick Hopper Simulation",
            subtitle: "Legged Locomotion Dynamics Study",
            duration: "2024",
            tier: "Foundational",
            category: "Mechanical",
            context: "Academic research project exploring dynamic legged locomotion through SLIP model simulation.",
            sections: {
                "Modeling": "Implemented Spring-Loaded Inverted Pendulum (SLIP) model in Python with full dynamics equations. Simulated hopping behavior with varying stiffness, damping, and angle of attack parameters. Analyzed energy efficiency and stability across parameter space.",
                "Analysis": "Generated phase portraits and Poincaré maps to analyze system stability. Identified optimal parameters for efficient hopping locomotion."
            },
            technologies: ["Python", "MATLAB", "SLIP Model", "Dynamics Simulation", "Numerical Methods"],
            metrics: {
                "Simulations Run": "500+",
                "Parameter Combinations": "100+",
                "Stability Analysis": "Complete"
            },
            achievements: [
                "Successfully simulated stable hopping dynamics",
                "Identified optimal parameter ranges for efficient locomotion",
                "Provided foundational understanding for legged robot design",
                "Generated comprehensive dataset for future research"
            ],
            featured: false,
            color: "#E16737"
        }
    ],
    robotics: [
        {
            id: 17,
            title: "UGV Autonomous Navigation Stack",
            subtitle: "ROS-Based Navigation System",
            duration: "2023 - Present",
            tier: "Core Experience",
            category: "Robotics",
            context: "Comprehensive research project developing production-grade autonomous navigation system for unmanned ground vehicles with robust sensor fusion and real-time control.",
            sections: {
                "Navigation Architecture": "Designed complete ROS navigation stack with modular architecture: perception layer (sensor processing), localization layer (SLAM/EKF fusion), planning layer (global/local planners), and control layer (trajectory tracking). Implemented fail-safe mechanisms and redundancy.",
                "Sensor Fusion": "Developed Extended Kalman Filter fusing LiDAR, IMU, GPS, and wheel odometry for robust state estimation. Achieved ±5cm localization accuracy through advanced sensor fusion algorithms.",
                "Path Planning": "Implemented hybrid path planning approach: A* for global planning in known environments, Dynamic Window Approach (DWA) for local obstacle avoidance. Optimized for real-time performance with 50ms planning cycle.",
                "SLAM Implementation": "Integrated Cartographer SLAM for simultaneous mapping and localization. Implemented loop closure detection for map consistency in long-duration missions."
            },
            technologies: ["ROS", "Python", "C++", "LiDAR", "IMU", "GPS", "SLAM", "EKF", "Gazebo", "Rviz", "TF2"],
            metrics: {
                "Localization Accuracy": "±5cm",
                "Planning Cycle": "50ms",
                "Max Speed": "3 m/s",
                "Obstacle Detection": "15m range",
                "Accuracy Improvement": "35%"
            },
            achievements: [
                "Improved localization accuracy by 35% over baseline system",
                "Achieved real-time obstacle avoidance with 50ms response time",
                "Successfully navigated complex outdoor environments with 95% success rate",
                "Implemented robust recovery behaviors for challenging scenarios",
                "Demonstrated system in various terrain and weather conditions"
            ],
            featured: true,
            color: "#22314E"
        },
        {
            id: 18,
            title: "ABU Robocon Competition Robot",
            subtitle: "Complete Mechatronic System",
            duration: "2017 - 2021",
            tier: "Core Experience",
            category: "Robotics",
            context: "Full-system robot design for international robotics competition requiring precise mechanical design, electronics integration, and software control.",
            sections: {
                "Mechanical System": "23kg competition robot with custom Mecanum wheel omnidirectional drive enabling precise maneuvering. Multi-axis pneumatic manipulator with 3 DOF for object manipulation. Lightweight TIG-welded aluminum chassis optimized for strength-to-weight ratio.",
                "Electronics & Power": "Designed complete electrical system: 24V Li-Ion battery with BMS, motor driver selection and integration for 4 drive motors, pneumatic solenoid valve control, sensor interfaces (encoders, limit switches, pressure sensors).",
                "Control System": "Implemented Arduino Mega-based control with state machine architecture. PS3 wireless controller interface with button mapping for intuitive operation. Emergency stop system for safety compliance."
            },
            technologies: ["Arduino Mega", "C++", "Mecanum Wheels", "Pneumatics", "Motor Control", "State Machine", "PS3 Controller"],
            metrics: {
                "Weight": "23 kg",
                "Max Speed": "1.5 m/s",
                "Battery Life": "3+ hours",
                "Control Latency": "<50ms"
            },
            achievements: [
                "Successfully competed at national level ABU Robocon",
                "Led team of 15 members to completion in 6-month timeline",
                "Achieved robust performance with 99% uptime in competition",
                "Implemented comprehensive safety systems",
                "Mentored junior team members in all aspects of robot development"
            ],
            featured: true,
            color: "#FF0000"
        }
    ]
};

export const certifications = [
    {
        name: "Lean Six Sigma Green Belt",
        issuer: "American Society for Quality (ASQ)",
        date: "2023",
        credentialId: "LSSGB-2023-12345",
        description: "Advanced training in DMAIC methodology, statistical analysis, and process improvement",
        skills: ["DMAIC", "Statistical Analysis", "Process Optimization", "Root Cause Analysis"]
    }
];

export const awards = [
    {
        title: "Hardware Hackathon Winner - 1st Place",
        organization: "University of Pune",
        year: "2019",
        description: "First place for Automated Bottle Capping Station - Mechatronics Division"
    },
    {
        title: "Best Design Award",
        organization: "ABU Robocon National Competition",
        year: "2019",
        description: "Recognition for innovative mechanical design and system integration"
    }
];

export const navigation = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'About', href: '/about', icon: '👤' },
    { name: 'Experience', href: '/experience', icon: '💼' },
    { name: 'Projects', href: '/projects', icon: '🚀' },
    { name: 'Contact', href: '/contact', icon: '📧' }
];
