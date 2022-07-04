import React from "react";
import './index.css';
import SideBar from './sidebar.js';
import About from "./aboutSection";
import Projects from "./projects";
import {motion} from 'framer-motion';
import js from './java-script.png';
import css from './css.png';
import html from './html.png';


const Linkedin = () => {
    return(
        <div>
            <svg fill="currentColor" height="32" width="32" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
        </div>
    )
}
const GitHub = () => {
    return(
        <div>
            <svg className="git" height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
        </div>
    )
}
const Foota = () => {
    return(
        <div>
            <div className="footer">
               
                <ul id="footer_col3">
                    <div className="logo_svg">
                       <a href="" target='_blank'><GitHub   /></a> 
                       <a href="" target='_blank'><Linkedin /></a> 
                       <h3>(+216) 56 308 519</h3>
                    </div>
                </ul>
            </div>
        </div>
    )
}
const Insights = () =>{
    return(
        <div>
            <div className="insights">
                <div className="values">
                    <div className="insights_head">
                        <h2>Precision & Quality</h2>
                        <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="22" stroke="currentColor" stroke-width="4"/>
                        <motion.path initial={{pathLength:0}}
                                animate={{pathLength:1}} 
                                transition={{duration:1,repeat:Infinity, repeatDelay:2}}
                                d="M13 22L20 33L35 16" stroke="#1e8927" stroke-width="4"/>
                        </svg>


                    </div>
                    <div className="insights_body">
                        <p>A passion for UI effects, animations</p>
                        <p>Intuitive & dynamic user experience</p>
                    </div>
                </div>
                <div className="values">
                    <div className="insights_head">
                        <h2>Customer-Driven</h2>
                        <svg  width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                        </svg>
                     
                    </div>
                    <div className="insights_body">
                        <p>We shape the Product according to our Client Demands & Needs</p>
                    </div>
                </div>
                <div className="values">
                    <div className="insights_head">
                        <h2>Responsive</h2>
                        <svg height={32} width={32} aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">
                            <path d="M112 48h352v48h48V32a32.09 32.09 0 00-32-32H96a32.09 32.09 0 00-32 32v256H16a16 16 0 00-16 16v16a64.14 64.14 0 0063.91 64H352v-96H112zm492 80H420a36 36 0 00-36 36v312a36 36 0 0036 36h184a36 36 0 0036-36V164a36 36 0 00-36-36zm-12 336H432V176h160z">
                            </path>
                        </svg>
                        
                    </div>
                    <div className="insights_body">
                        <p>My Layouts will work on any devise, big or small</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
class SkillsDisplay extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            inDepth:'css',
            gridCol:'1/2'
            
        }
        
    }
    componentDidMount(){
        let L =['js','css','html','react']
        let i=0;
        
        setInterval(()=>{this.setState({
            inDepth:L[i],
            
            });
            i+=1;
            if(i===4){i=0}
            },3000)
    }

    render (){

        
        return(
            <div>
    
                <div className="micro_scroll">


                    <motion.img src={js} width="24px" height="24px"
                    initial={{height:24,width:24}}
                    animate={{height:this.state.inDepth === 'js'?36:24,width:36,dropShadow:'2px 2px 10px black',filter:this.state.inDepth=='js'?'blur(0px)':'blur(4px)'}} />
                     
                    <motion.img src={css} 
                    initial={{height:24,width:24,}}
                    animate={{height:this.state.inDepth === 'css'?48:24,width:36,filter:this.state.inDepth==='css'?'blur(0px)':'blur(4px)'}}

                    />
                    <motion.img src={html} width="24px" height="24px" viewBox="0 0 24 24" 
                    initial={{height:24,width:24,filter:'blur(2px)'}}
                    animate={{height:this.state.inDepth === 'html'?36:24,width:36,filter:this.state.inDepth==='html'?'blur(0px)':'blur(4px)'}}
                    />
                    <motion.svg width="24px" height="24px" viewBox="-11.5 -10.23174 23 20.46348"
                    initial={{height:24,width:24,filter:'blur(2px)'}}
                    animate={{height:this.state.inDepth === 'react'?36:24,width:36,filter:this.state.inDepth==='react'?'blur(0px)':'blur(4px)'}}
                    >
                      
                        <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
                        <g stroke="#61dafb" stroke-width="1" fill="none">
                            <ellipse rx="11" ry="4.2"/>
                            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                        </g>
                    </motion.svg>
                    
        
                </div>
    
            </div>
        )
    }
}
const Intro = () => {
    return(
        <div className="intro-container">

                <div id="dream1">
                    <p>You dream ... </p>
                    <p>And We Bring it to life ..</p>
                </div>
                <div id='rect-container'>
                    <motion.div initial={{width:120}}   animate={{width:160}}   transition={{duration:0.4,delay:0.2}}   id="screen1"></motion.div>
                    <motion.div initial={{width:80}}    animate={{width:200}}   transition={{duration:0.4,delay:0.5}}   id="screen2">
                    <h4>{'>_ we turn your Idea into action .. '}</h4>
                    </motion.div>
                    <motion.div initial={{width:50}}    animate={{width:110}}   transition={{duration:0.4,delay:1}}     id="screen3"></motion.div>
                    <motion.div initial={{width:60}}    animate={{width:160}}   transition={{duration:0.4,delay:1.5}}   id="screen4"></motion.div>
                    <motion.div initial={{height:100}}  animate={{height:300}}  transition={{duration:0.4,delay:2}}     id="rect"> 
                        
                        <SkillsDisplay />            
                    </motion.div>
                </div>
        </div>
    )
}
const Textanimation = () => {
    const text = ` ` ;
    const variants = {

        hidden:{opacity:1,x:'-4rem'},
        visible:{
            opacity:1,
            x:0,
            transition:{
                delay:0.5,
                staggerChildren:0.08,
                when:'beforeChildren',
                duration:1,
            },
        },
    }
    const letter = {
        hidden:{opacity:0,},
        visible:{opacity:1},
    }
    return(
        <div>
            <motion.h1 className="content"      
                variants={variants}
                initial = 'hidden' 
                animate ="visible"
            >                      
                                
                {text.split('').map( (u,i) =>{return(<motion.span key= {u+'-'+i} variants={letter}> {u} </motion.span>  )})}
                            
            </motion.h1>
        </div>
    )
}



export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            section:'one',
            open:false,
        }
        
    }
 
    render (){
        
        
        const undrawVariants = {
            hidden:{x:0},
            visible:{
                x:this.state.open?'4rem':0,
                
            }
        }
        const pathVariants ={
            hidden: {
                
                pathLength:0,
            },
            visible: {
                
                pathLength:this.state.open?0:1,
                transition :{
                    duration:3,
                    ease:'easeInOut',
                    
                },
                
            }

        }
        return (

            <div>

                <div className="bar">        
                    <ul className="a">

                        <li id="one"   onClick={()=>{this.setState({section:'one',open:false})}}>        Intro </li>
                        <li id="two"   onClick={()=>{this.setState({section:'two',open:false})}}>        About        </li>
                        <li id="four"   onClick={()=>{this.setState({section:'four',open:false})}}>      My Projects  </li>


                        <motion.svg className='undraw'
                                viewBox="0 0 344 466"
                                animate='visible'
                                initial='hidden'
                                variants={undrawVariants}
                            >
                                <motion.path variants={pathVariants} d="M231.798 117.404C230.955 117.943 230.955 117.942 230.954 117.941L230.954 117.94L230.951 117.936L230.945 117.926L230.927 117.897C230.913 117.874 230.894 117.841 230.87 117.8C230.822 117.717 230.756 117.597 230.672 117.436C230.505 117.115 230.27 116.629 229.981 115.945C229.402 114.578 228.605 112.418 227.699 109.196C225.889 102.754 223.642 92.0515 221.85 74.9303C221.416 70.7794 220.315 67.6333 218.695 65.2745C217.081 62.9253 214.913 61.2997 212.241 60.2436C206.838 58.1078 199.399 58.3068 190.514 59.7133C183.714 60.7898 176.199 62.5481 168.269 64.4036C165.867 64.9656 163.427 65.5365 160.957 66.1C150.363 68.5175 139.259 70.79 128.456 71.5722C117.993 72.3298 111.334 76.4487 107.145 82.1203C102.925 87.8342 101.134 95.233 100.663 102.655C100.191 110.066 101.041 117.402 102.015 122.9C102.502 125.645 103.017 127.924 103.411 129.515C103.608 130.31 103.774 130.932 103.89 131.354C103.948 131.565 103.994 131.726 104.025 131.833C104.041 131.887 104.052 131.927 104.06 131.954L104.069 131.983L104.071 131.99L104.071 131.991C104.071 131.991 104.071 131.991 104.071 131.991L104.071 131.991L105.07 135.311L102.456 133.033L103.114 132.279C102.456 133.033 102.455 133.032 102.454 133.031L102.452 133.029L102.447 133.024L102.437 133.015C102.43 133.009 102.422 133.001 102.414 132.993C102.396 132.977 102.377 132.957 102.354 132.934C102.308 132.886 102.249 132.823 102.177 132.738C102.033 132.568 101.832 132.31 101.566 131.924C101.035 131.153 100.234 129.855 99.1059 127.695C96.8504 123.378 93.2635 115.575 87.8946 101.582C82.4524 87.3969 82.4634 72.4642 83.814 61.1214C84.4901 55.4428 85.5043 50.6452 86.3502 47.2645C86.7733 45.5738 87.1545 44.2362 87.431 43.3187C87.5692 42.8599 87.6812 42.506 87.7592 42.2654C87.7982 42.1451 87.8286 42.0532 87.8496 41.9905L87.8632 41.9503C88.7089 38.0901 90.317 35.458 92.328 33.7289C94.3431 31.9964 96.6816 31.24 98.859 30.9885C101.03 30.7376 103.075 30.9839 104.562 31.2854C105.218 31.4183 105.772 31.5632 106.19 31.6849C111.373 21.423 118.557 16.1918 124.53 13.5377C127.584 12.1807 130.313 11.5008 132.285 11.1599C133.272 10.9894 134.071 10.9034 134.628 10.86C134.857 10.8422 135.045 10.8316 135.19 10.8253C152.524 -1.64765 169.706 -0.213938 182.509 4.33598C188.932 6.61848 194.264 9.68633 197.988 12.1808C199.852 13.429 201.316 14.5361 202.318 15.3337C202.819 15.7326 203.205 16.0543 203.467 16.2778C203.521 16.3242 203.57 16.3663 203.614 16.4041C213.393 17.2263 219.796 19.9752 223.825 23.7799C227.911 27.6398 229.433 32.4713 229.665 37.1217C229.897 41.7548 228.855 46.2523 227.774 49.5644C227.232 51.2262 226.675 52.6034 226.253 53.5677C226.173 53.7493 226.099 53.9164 226.029 54.068C235.868 57.6668 241.403 63.3527 244.033 69.9738C246.736 76.7816 246.307 84.4232 244.607 91.4964C242.906 98.5805 239.906 105.198 237.344 110.031C236.061 112.451 234.883 114.432 234.025 115.809C233.596 116.498 233.247 117.037 233.003 117.404C232.936 117.506 232.877 117.595 232.826 117.67C232.786 117.731 232.751 117.783 232.721 117.826C232.709 117.844 232.697 117.861 232.687 117.877C232.67 117.9 232.657 117.92 232.646 117.935L232.627 117.964L232.621 117.972L232.62 117.974C232.619 117.975 232.619 117.975 231.798 117.404ZM231.798 117.404L230.955 117.943L231.763 119.206L232.619 117.975L231.798 117.404Z" stroke="#414141" stroke-width="8" fill="none"/>
                                <motion.path variants={pathVariants} d="M2 378H1V379V403.214C0.999988 404.349 1.22358 405.473 1.65797 406.522C2.09235 407.57 2.72903 408.523 3.53169 409.326C4.33435 410.129 5.28726 410.765 6.33597 411.2C7.38467 411.634 8.50867 411.858 9.64383 411.858H133.741V457.644H133.079C132.817 457.644 132.558 457.696 132.316 457.796C132.074 457.896 131.855 458.043 131.669 458.228C131.484 458.413 131.338 458.633 131.237 458.875C131.137 459.116 131.086 459.375 131.086 459.637V462.961C131.086 463.223 131.137 463.482 131.237 463.724C131.338 463.965 131.484 464.185 131.669 464.37C131.854 464.555 132.074 464.702 132.316 464.802C132.558 464.902 132.817 464.954 133.079 464.954H210.737C210.999 464.954 211.258 464.902 211.5 464.802C211.742 464.702 211.961 464.555 212.146 464.37C212.331 464.185 212.478 463.965 212.578 463.724C212.679 463.482 212.73 463.223 212.73 462.961V459.637C212.73 459.376 212.679 459.116 212.578 458.875C212.478 458.633 212.331 458.413 212.146 458.228C211.961 458.043 211.741 457.896 211.5 457.796C211.258 457.696 210.999 457.644 210.737 457.644H210.075V411.858H334.172C335.307 411.858 336.431 411.634 337.48 411.2C338.529 410.765 339.481 410.129 340.284 409.326C341.087 408.523 341.723 407.57 342.158 406.522C342.592 405.473 342.816 404.349 342.816 403.214V379V378H341.816H2Z" stroke="#414141" stroke-width="12" fill="none"/>
                                <motion.path variants={pathVariants} d="M12.3777 174.5V174.5L12.371 174.5C10.2574 174.506 8.24836 175.376 6.7794 176.894C5.31295 178.409 4.50168 180.446 4.5 182.554V182.556V379V381.5H7H336H338.5V379L338.5 182.57C338.5 182.568 338.5 182.566 338.5 182.564C338.506 181.228 338.18 179.908 337.548 178.731C336.881 177.465 335.891 176.399 334.672 175.65C333.45 174.9 332.047 174.5 330.612 174.5H12.3777Z" stroke="#414141" stroke-width="20" fill="none"/>                   
                                
                        </motion.svg>


                    </ul>
                    <motion.div className="circleOne"

                            
                            onClick={()=>{this.setState({open:!this.state.open})}}
                            animate={{
                                x:!this.state.open?0:100,
                                opacity:!this.state.open?1:1,
                                borderRadius:this.state.open?'50%':'20%',
                                border:this.state.open? "solid 2px #efbe25":"solid 2px white",
                            }}
                            initial = {{
                                
                                opacity:1,
                                borderRadius:this.state.open?'50%':'20%',
                                border:"solid 2px white",
                            
                                
                            }}
                            transition={{
                                duration:1,

                            }}
                            >
                            <motion.div className="ligne1" 
                                animate={{rotateZ:!this.state.open?0:'45deg',y:!this.state.open?0:'6px'}} 
                                initial={{rotateZ:'0deg'}}
                                transition ={{duration:2}} > 
                            </motion.div>
                            <motion.div className="ligne1"
                                animate={{opacity:this.state.open?0:1,backgroundColor:'#efbe25'}} 
                                initial={{opacity:1}}
                                transition ={{duration:this.state.open?0.5:4}}
                            >

                            </motion.div>
                            <motion.div className="ligne1" 
                                animate={{rotateZ:!this.state.open?0:'-45deg',y:!this.state.open?0:'-6px'}} 
                                initial={{rotateZ:'0deg'}}
                                transition ={{duration:2}} > 
                            </motion.div>

                            

                    </motion.div>
                </div>

                <div className="bodi">

                        {   this.state.section === 'one'    &&  <Intro />           }
                        {   this.state.section === 'one'    && <Textanimation />    }
                        
                        {   this.state.section === 'one'    && <Insights />         }

                        {   this.state.section ==='two'     && <About />            }

                        

                        {   this.state.section === 'four'   && <Projects />         }

                </div>
                
                
                <Foota />
                <SideBar open={this.state.open} />
                
            </div>
   
        )
    }
}
