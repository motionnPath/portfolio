import React from "react";
import './index.css';

import {motion} from 'framer-motion';



class SideBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        const variants = {
            hidden : {
                opacity:0,
            },
            visible : {
                opacity:this.props.open?1:0,
                transition:{duration:2}
            },
        }
        const pathVariants = {
            hidden:{
                pathLength:0
            },
            visible:{
                pathLength:this.props.open?0.5:0,
                transition:{duration:4}
            }

        }
        return(
            <div>
                <motion.div className="side"
                    
                    animate={{
                        x: this.props.open? '0rem' : '-22rem',
                        opacity:this.props.open?1:0,
                        
                        borderRadius:!this.props.open?100:0
                    }}
                    initial = {{
                        opacity:0,
                        borderRadius:0,
                        
                    }}
                    transition={{
                        duration:1,
                    }}
                >
                    
                   
                    <motion.svg className="sideSvg"
                                fill='#414141'
                                viewBox="0 0 200 600" 
                                variants={variants}
                                initial="hidden"
                                animate="visible"
                            
                            >
                            
                        
                            <motion.path variants={pathVariants} d="M71.458 270.908L75.495 351.647L65.403 439.451L95.68 443.488L114.856 332.472L120.911 256.778L71.458 270.908Z" fill="#414141" strokeWidth="4" />
                            <motion.path variants={pathVariants} d="M24.0239 241.64C24.0239 241.64 11.913 321.37 37.1441 347.61C62.3752 373.851 96.6895 420.276 96.6895 420.276L120.911 389.999L59.3475 324.398L71.4584 279.991L120.911 256.778L112.837 201.27L40.1718 200.261L24.0239 241.64Z" fill="#414141" strokeWidth="4"/>
                            <motion.path variants={pathVariants} d="M83.5693 56.9479C95.8319 56.9479 105.773 47.0071 105.773 34.7445C105.773 22.4819 95.8319 12.5411 83.5693 12.5411C71.3067 12.5411 61.366 22.4819 61.366 34.7445C61.366 47.0071 71.3067 56.9479 83.5693 56.9479Z" fill="#414141" strokeWidth="4"/>
                            <motion.path variants={pathVariants} d="M64.3937 39.7907C64.3937 39.7907 63.3844 71.0773 58.3382 75.1143C53.292 79.1512 76.5046 96.3084 76.5046 96.3084L91.6433 72.0865V49.8831L64.3937 39.7907Z" fill="#414141" strokeWidth="4"/>
                            <motion.path variants={pathVariants} d="M125.958 89.2437L134.032 88.2344C134.032 88.2344 136.05 89.2437 137.059 96.3084C138.069 103.373 150.18 165.946 150.18 165.946L134.032 242.649L115.865 218.427L126.967 176.039L115.865 133.65L125.958 89.2437Z" fill="#414141" strokeWidth="4"/>
                            <motion.path variants={pathVariants} d="M23.015 88.234H16.959L1.821 169.983L15.95 233.566L30.079 210.353L26.042 185.122L28.061 162.919L35.126 149.798L23.015 88.234Z" fill="#414141" strokeWidth="4"/>
                            <motion.path variants={pathVariants} d="M112.837 416.239C112.837 416.239 106.782 414.22 106.782 418.257C106.782 422.294 110.819 434.405 110.819 434.405C110.819 434.405 104.763 471.747 113.847 469.729C122.93 467.71 129.995 450.553 131.004 445.507C132.013 440.461 137.059 414.22 137.059 414.22C137.059 414.22 145.133 395.045 140.087 394.035C135.041 393.026 120.911 388.989 120.911 388.989C120.911 388.989 128.985 414.22 112.837 416.239Z" fill="#414141"/>
                            <motion.path variants={pathVariants} d="M83.5693 447.525C83.5693 447.525 67.4214 437.433 64.3937 445.507C62.3857 451.396 61.0318 457.488 60.3567 463.673C60.3567 463.673 56.3197 476.793 72.4676 474.775C88.6156 472.757 86.597 472.756 87.6063 466.701C88.6155 460.645 83.5693 447.525 83.5693 447.525Z" fill="#414141"/>
                            <motion.path variants={pathVariants} d="M70.4492 34.7445L74.4862 33.7353C74.4862 33.7353 77.5139 16.5781 84.5786 18.5966C91.6433 20.6151 109.81 22.6336 109.81 14.5596C109.81 6.48561 92.6526 -0.579062 82.5601 0.430189C72.4677 1.43944 55.3105 4.46718 56.3198 19.6058C57.329 34.7445 63.8414 49.4712 63.8414 49.4712L64.3674 40.4956L70.4492 34.7445Z" fill="#414141" strokeWidth="4"/>
                            <motion.path variants={pathVariants} d="M133.022 88.2345L100.726 75.1143L93.1572 69.5634L70.4491 169.983L55.3105 124.567L59.8521 66.5357L17.9684 88.2345L32.0979 156.863L34.1164 183.103L28.0609 204.298C28.0609 204.298 6.86679 219.436 13.9315 235.584C20.9962 251.732 29.0702 252.741 29.0702 252.741C29.0702 252.741 63.3845 220.445 65.403 212.371C67.4214 204.298 70.4492 190.168 70.4492 190.168C70.4492 190.168 87.6063 254.76 107.791 253.751C127.976 252.741 127.976 231.547 127.976 231.547L122.93 209.344L114.856 186.131L118.893 147.78L133.022 88.2345Z" fill="#414141" strokeWidth="4"/>
                        
                    </motion.svg>

                    <ul className="b">
                        <li>Let's get in touch</li>
                        <li> <a href="mailto:oussama.mathlouthi.91@gmail.com">E-Mail</a></li>
                        
                    </ul>
                    

                </motion.div>
            </div>
        )
    }

}


export default SideBar;