import React from "react";
import './index.css';
import {motion} from 'framer-motion';
import Codesvg from  './code_svg'


const LinkToCertificate = (props) =>{
    return(
        <div>
            <a href={props.linki} target="_blank">
            <svg width="32" height="32" viewBox="0 0 100 100" fill="none" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M61.8792 49.6792C61.1333 47.0083 59.7083 44.4875 57.6083 42.3917C51.1 35.8833 40.5458 35.8792 34.0375 42.3917L13.2125 63.2167C6.70416 69.7292 6.7 80.2792 13.2125 86.7875C19.7208 93.3 30.2792 93.2917 36.7792 86.7875L52.7875 70.7833L54.175 70.8208C55.8583 70.8208 57.5167 70.6542 59.1292 70.3333L39.725 89.7333C35.6625 93.8 30.3292 95.8333 24.9958 95.8333C19.6625 95.8333 14.3292 93.8 10.2667 89.7333C2.13333 81.6042 2.13333 68.4 10.2667 60.2708L31.0917 39.4458C35.1542 35.3792 40.4917 33.3458 45.825 33.3458C51.1542 33.3458 56.4917 35.3792 60.5542 39.4458C62.6083 41.5 64.1417 43.875 65.1583 46.4125L61.8792 49.6792ZM38.1167 50.2917C38.8583 52.9708 40.2875 55.5 42.3917 57.6083C48.9 64.1208 59.4583 64.1125 65.9583 57.6083L86.7875 36.7833C93.3 30.275 93.3 19.7208 86.7875 13.2125C80.2792 6.70417 69.725 6.7 63.2167 13.2125L47.2125 29.2167L45.825 29.1792C44.1417 29.1792 42.4833 29.3458 40.8708 29.6667L60.2708 10.2667C64.3333 6.2 69.6708 4.16667 75.0042 4.16667C80.3333 4.16667 85.6708 6.2 89.7333 10.2667C97.8625 18.3958 97.8625 31.5958 89.7333 39.7292L68.9042 60.5542C64.8417 64.6208 59.5083 66.6542 54.175 66.6542C48.8417 66.6542 43.5083 64.6208 39.4458 60.5542C37.3875 58.4917 35.85 56.1083 34.8333 53.5625L38.1167 50.2917Z" fill="#343a40" />
            </svg>

            </a>
        </div>
    )
}

const Bloc = (props) =>{



  
        return(
            <div>
                <div className="Bloc">
                <div className="projectClasse" > <div>{props.project[0]}</div> </div>
                <div className="projectClasse" > <div>{props.project[1]}</div> </div>
                <div className="projectClasse" > <div>{props.project[2]}</div> </div>
                <div className="projectClasse" > <div>{props.project[3]}</div> </div>
                <div className="projectClasse" > <div>{props.project[4]}</div> </div>
                </div>
            </div>
    
        )
   
}



class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filterY:{'boxShadow':'1px 1px 1px #efbe25'},
            text:'one',
            styli1:{backgroundColor:'#efbe25'},
            styli2:{backgroundColor:'#efbe25'},
            styli3:{backgroundColor:'#efbe25'},
            transparent:{backgroundColor:'#496ebd00'}

        }


    }
    componentDidMount(){

       
        let L=['one','two','three'];
        let i=0;
        
            setInterval(()=>{this.setState({
                text:L[i]
                });
                
                i+=1;
                if(i===3){i=0}
            },5000)
        
    }

    render() {
        const L1 =['A Tribute Page','A survey form','A product Landing Page','A Technical Documentation Page','A Personal Portfolio Webpage']
        const L2 =['Palindrome Checker',
                    'Roman Numeral Converter',
                    'Caesars Cipher',
                    'Telephone Number Validator',
                    'Cash Register'
    ];
        const L3 =['A Random Quote Machine',
                    'A Markdown Previewer',
                    'A Drum Machine',
                    'A JavaScript Calculator',
                    'A 25 + 5 Clock'
    ];
        const L4 =['Timestamp Microservice',
                    'Request Header Parser Microservice',
                    'URL Shortener Microservice',
                    'Exercise Tracker',
                    'File Metadata Microservice'
    ];
        const L5 =['Arithmetic Formatter',
                    'Time Calculator',
                    'Budget App',
                    'Polygon Area Calculator',
                    'Probability Calculator'
    ];
        const L6 =['Mean-Variance-Standard Deviation Calculator',
                    'Demographic Data Analyzer',
                    'Medical Data Visualizer',
                    'Page View Time Series Visualizer',
                    'Sea Level Predictor'
    ];
        
        return(

            <div>
                    
                    
                    <div className="about_section_container">
                    
                        <div className="expertise">
                        
                            <div className="expertiseContainer">
                            
                        {this.state.text === 'one' &&
                            <motion.div initial={{opacity:0,filter:'blur(1px)',}} animate={{opacity:1,filter:'blur(0px)',transition:{duration:2}}}>
                            <h1 >
                                <p>
                                Knowing is not enough; we must apply.
                                </p> 
                                <p>
                                Wishing is not enough; we must do.
                                </p>
                                
                            </h1>
                            <h3>- Johann Wolfgang von Goethe -</h3>
                            </motion.div>
                            
                        }
                        
                        {this.state.text === 'two' &&

                            <motion.div initial={{opacity:0,filter:'blur(1px)',}} animate={{opacity:this.state.text=== 'two'?1:0,filter:'blur(0px)',transition:{duration:2}}}>
                                <h1 >
                                    <p>Our greatest weakness lies in giving up.</p> 
                                    <p>The most certain way to succeed is always to try just one more time.</p>
                                </h1>
                                <h3>- Thomas A. Edison -</h3>
                            </motion.div>
                        }
                    
                        {this.state.text === 'three' &&

                            <motion.div initial={{opacity:0,filter:'blur(1px)',}} animate={{opacity:this.state.text=== 'three'?1:0,filter:'blur(0px)',transition:{duration:2}}}>
                                <h1 >
                                Quality is not an act, it is a habit.

                                </h1>
                                <h3>- Aristotle -</h3>
                            </motion.div>
                        }
                        
                            </div>
                    
                            <div className="circleContainer">
                                <div id="circle" style={this.state.text === 'one'? this.state.styli1:this.state.transparent}></div>
                                <div id="circle" style={this.state.text === 'two'? this.state.styli1:this.state.transparent}></div>
                                <div id="circle" style={this.state.text === 'three'? this.state.styli1:this.state.transparent}></div>
                            </div>
                        </div>
            
                        
                        <div className="projects">
                        <Codesvg />
                            <h2>HTML & CSS Projects</h2>
                            <Bloc project={L1} />
                            <h2>JavaScript Algorithms and Data Structures  
                                <LinkToCertificate linki={'https://www.freecodecamp.org/certification/oussama91/javascript-algorithms-and-data-structures'}/>
                            </h2>
                            <Bloc project={L2} />
                            <h2>Front End Development Libraries 
                                <LinkToCertificate linki={'https://www.freecodecamp.org/certification/oussama91/front-end-development-libraries'}/>
                            </h2>
                            <Bloc project={L3} />
                            <h2>Back End Development and APIs 
                                <LinkToCertificate linki={'https://www.freecodecamp.org/certification/oussama91/back-end-development-and-apis'}/>
                            </h2>
                            <Bloc project={L4} />
                            <h2>Scientific Computing with Python 
                                <LinkToCertificate linki={'https://www.freecodecamp.org/certification/oussama91/scientific-computing-with-python-v7'}/>
                            </h2>
                            <Bloc project={L5} />
                            <h2>Data Analysis with Python 
                                <LinkToCertificate linki={'https://www.freecodecamp.org/certification/oussama91/data-analysis-with-python-v7'}/>
                            </h2>
                            <Bloc project={L6} />
                            
                        </div>
                    </div>
                
            </div>
        )
    }

}


export default Projects;