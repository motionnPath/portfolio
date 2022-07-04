import React from "react";
import './index.css';
import { motion,AnimatePresence } from "framer-motion";




export default class About extends React.Component {
    constructor(props){
        super(props);
        this.state = {

            yPos:0

        }
    }

    componentDidMount(){
        document.addEventListener('scroll',()=>{
            this.setState({yPos:window.pageYOffset})
        })
    }

    render(){
        const begleiterColor = () => {  return 'gray'};
        //const timeLineStart = 160;
        const timeLineStart = 360;
        const step = (i) => 120*i -100;
        const height = '2000px';
        const width = '100px' ; 
        const circleColor = 'rgb(175, 238, 238)';
        const strokeFill = 'rgb(15, 15, 15)';
        const schoolTop = {'top':'500'};
        const babeTop = {'top':schoolTop.top - 100};
        const devJourneyTop = {'top': '820'};



      

        const scrollVariants = {
            hidden : {opacity:0},
            visible:{
                opacity:1,
                transition:{duration:1,repeat:Infinity, repeatType:'reverse'}
            },
            
        }
        const pathScrollVariants = {
            hidden : {y:'-10px',scale:0.6},
            visible:{
                y:'10px',
                scale:0.6,
                transition:{duration:1,repeat:Infinity, repeatType:'reverse'}
            },
            
        }

        const aboutVariants = {
            hidden:{
                opacity:0,
            },
            visible:{
                opacity:1,
                animate:{
                    transition:{
                        duration:8, 
                        when:'beforeChildren'
                    },
                }
            },
        }
        const variants0 = {
            hidden : {
                opacity:0,
                x:'6rem'
                
            },
            visible : {
                opacity:( babeTop.top < this.state.yPos  ) ? 0: 1,
                x:'2rem',
                transition:{duration:2}
            },
        }
        const variants1 = {
            hidden : {
                opacity:0,
                x:'-4rem' 
            },
            visible : {
                opacity:( schoolTop.top < this.state.yPos ) ? 0: 1,
                x:'1rem',
                transition:{duration:2}
            },
        }
        const schoolPathVariants = {
        
            hidden:{
                pathLength:( schoolTop.top < this.state.yPos ) ? 0: 1,
                
            },
            visible:{
                pathLength:( schoolTop.top < this.state.yPos ) ? 0: 1,
                
                transition:{duration:4},
                
            }

        }
        const babyPathVariants = {
            hidden:{
                pathLength:0,
                x:'0rem',
            },
            visible:{
                pathLength:( babeTop.top < this.state.yPos  ) ? 0: 1,
                x:'0rem',
                transition:{duration:8}
            }

        }
        const variants3 = {
            hidden:{
                opacity:0,
                x:'0rem',
            },
            visible:{
                opacity:1,
                transition:{duration:8}
            }

        }
        const devPathVariants = {
            hidden:{
                pathLength:0,
                x:'0rem',
            
            },
            visible:{
                pathLength:1,
                x:'0rem',
               
                transition:{duration:8}
            }

        }
        
        return(


            <div>   
                <AnimatePresence>
                    <motion.div className="about"
                        variants = {aboutVariants}
                        initial = "hidden"
                        animate = "visible"
                        exit={{opacity:0}}
                    >

                            <motion.svg viewBox="0 0 180 132" fill="none" 
                                id="scrollDown"
                                variants={scrollVariants}
                                initial = "hidden"
                                animate = "visible"
                            >
                                <motion.path variants={pathScrollVariants} d="M4.5 3.5L91 122.5L175 3.5" stroke="#767676" stroke-width="10"/>
                            </motion.svg>                

                            <motion.svg id="babe" viewBox="0 0 900 500" fill="none"
                                style={babeTop}
                                variants={variants0}
                                initial = "hidden"
                                animate = "visible"
                            >
                                <motion.path  variants={babyPathVariants} d="M345 153.5C689 -20.9998 588.01 303.564 539.5 305.5C815.642 229.895 582.266 481.364 605 331C430.587 457.561 329.658 367.86 457 228.5M335.5 273.5C419.133 350.171 351.581 421.13 263.5 353.5C239.678 379.581 226.322 374.965 202.5 353.5M319.5 125.5C352.53 53.9723 303.716 -3.31337 279.5 68.5002C34.0386 -136.034 -84.4664 209.814 81.0001 299C246.467 388.186 359.714 310.222 319.5 125.5ZM319.5 125.5C299.373 103.884 297.07 91.3365 302.5 68.5002M210 199C238.01 195.668 247.857 188.483 241 153.5M135.5 291C163.51 287.668 173.357 280.483 166.5 245.5M241 291C269.01 287.668 278.857 280.483 272 245.5M118.5 112.5C156.043 151.228 143.734 166.414 109 191C105.861 167.686 102.72 156.253 75.5 161.5C46.7236 160.308 47.5 125.5 47.5 125.5" stroke="gray" stroke-width="8"/>
                            </motion.svg>
                            <h2 id="birthText"> 1991 : Born and grown up in Tunisia, in a small town on its middleeast coast of the Mediterranean Sea. </h2>

                            <motion.svg id='school' viewBox="0 0 434 552" fill="none"
                                    style={schoolTop} 
                                    variants={variants1}
                                    initial="hidden"
                                    animate = "visible"
                            >   
                                <motion.path variants={schoolPathVariants} d="M359 549V503.5" stroke="#575757" stroke-width="8"/>
                                <motion.path variants={schoolPathVariants} d="M5.5 463.5C5.5 348 73.5 371.5 84.5 362.081" stroke="black"/>
                                <motion.path variants={schoolPathVariants} d="M5.5 463.5C5.5 348 73.5 371.5 84.5 362.081" stroke="#575757" stroke-width="10"/>
                                <motion.path variants={schoolPathVariants} d="M424.5 543.5C436.5 430.5 428.5 370.5 349 361.581" stroke="#575757" stroke-width="10"/>
                                <motion.path variants={schoolPathVariants} d="M425.5 547.5C285.715 547.937 211.368 547.678 76.5 547.5M76.5 547.5C76.5 547.5 76.5 525 76.5 503.5M76.5 547.5C18.6226 550.176 4.27013 539.6 4.49999 503.5" stroke="#575757" stroke-width="8"/>
                                <motion.path variants={schoolPathVariants} d="M216.5 437L93.5 359.5L167 314.5L185.184 359.5M216.5 437L347 359.5L280.5 314.5L256.99 359.5M216.5 437L256.99 359.5M216.5 437L185.184 359.5M256.99 359.5H185.184M328.5 131.5V89M328.5 131.5V171M328.5 131.5H216.5H167M328.5 89L301.5 82.5M328.5 89L393.5 70.5L216.5 5L41.5 70.5L112.5 82.5M112.5 82.5L273.5 70.5M112.5 82.5V131.5M112.5 131.5H167M112.5 131.5V181M280.5 131.5L328.5 171M328.5 171V210.5C328.5 314.5 112.5 314.5 112.5 210.5V181M167 131.5L112.5 181" stroke="#575757" stroke-width="8"/>
                                <motion.path variants={schoolPathVariants} d="M39 73V130.5M39 130.5L32.5 165M39 130.5H64.5V165M32.5 165L20.5 242.5H81.5L64.5 165M32.5 165H64.5" stroke="#575757" stroke-width="8"/>
                                
                            </motion.svg>
                            <h2 id="schoolText">2012-2019 : After having my baccalauréat 2010 i studied Electrical Engeneering at german University. 
                                <p>
                                I spent some of my best years in Germany and it was an amazing experience. Then back to Tunisia. Currently, i am a Finance student
                                </p>  
                                </h2>
                            
                            <motion.svg  id = 'devJourney' viewBox="0 0 512 512" fill="none"
                                style ={devJourneyTop}
                                variants={variants3}
                                initial="hidden"
                                animate="visible"
                            >
                                
                                <motion.path variants={devPathVariants} d="M204.5 252L149.5 302.5L204.5 353.5M312.5 261.5L367 302.5L312.5 353.5M275 224L237.5 382.5M9.50003 161.5C-1.18656 46.4041 20.1476 22.0315 149.5 37.5H367C490.355 30.0739 514.057 45.9908 500.5 161.5M9.50003 161.5V417.5C7.82106 452.664 16.8616 464.372 49.5 472H464.5C489.724 458.149 502.444 449.436 500.5 417.5V161.5M9.50003 161.5H500.5" stroke="#848484" stroke-width="8"/>
                                <motion.path variants={devPathVariants} d="M86 97C86 109.009 75.8462 119 63 119C50.1538 119 40 109.009 40 97C40 84.9907 50.1538 75 63 75C75.8462 75 86 84.9907 86 97Z" stroke="red" stroke-width="8"/>
                                <motion.path variants={devPathVariants} d="M169 97C169 109.009 158.846 119 146 119C133.154 119 123 109.009 123 97C123 84.9907 133.154 75 146 75C158.846 75 169 84.9907 169 97Z" stroke="green" stroke-width="8"/>
                                <motion.path variants={devPathVariants} d="M252 97C252 109.009 241.846 119 229 119C216.154 119 206 109.009 206 97C206 84.9907 216.154 75 229 75C241.846 75 252 84.9907 252 97Z" stroke="yellow" stroke-width="8"/>
                                
                            </motion.svg>
                            <h2 id="devText"><p>
                            Comming to the most exciting part how i start coding ??  </p>
                            <p>
                            well during my studies i learned different languages such as JAVA(OOP) ,C and Assembly wich helped me 
                            a lot to be able to master almost any new language i start working with. 
                            </p>
                            <p>
                                During the pandemic, i found FreeCodeCamp and become hooked to it.
                            </p>
                            <p>
                                I enjoyed solving problems, designing solutions and rethinking ways to 
                                achieve it. 
                            </p>

                            <p>
                                I realised that coding is a way to communicate, to network with members of great communities looking to make 
                                our life easier by building and creating Apps and softwares. 
                            </p>
                            <p>
                                So my Passion led me to start looking for a way that enables me to contribute
                                to real world projects 
                            </p>
                            

                            </h2>
                    </motion.div>
                </AnimatePresence>
            </div>

        )
    }
}