import React, { useState} from 'react';
import "./resume.css";

const Resume = () => {

    return (
        <section className='resume section' id = "Resume">
            <h2 className='resume_head'>Resume</h2>

            <div className ='resume_container grid'>
                <div className='resume_group'>
                    <h3 className='resume_heading'> Education</h3>
                    <div className='resume_items'>
                        {cv.map((val) =>{
                                if(val.category =='education'){
                                    return <ResumeCard key={val.id} title={val.title} 
                                    subtitle={val.subtitle} date={val.date} 
                                    description={val.description}/>;
                                }
                        })}
                    </div>
                </div>

                <div className='resume_group'>
                    <h3 className='resume_heading'>Experience</h3>
                    <div className='resume_items'>
                        {cv.map((val) =>{
                                if(val.category =='experience'){
                                    return <ResumeCard key={val.id} title={val.title} 
                                    subtitle={val.subtitle} date={val.date} 
                                    description={val.description} />;
                                }
                        })}
                    </div>
                </div>
            </div>

        </section>
    )
}

const ResumeCard =(props) =>{

    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='resume_item'>
            <div className='resume_header' >
                <div className='resume_title' onClick={toggleContent}>
                <span>{`${isOpen ? '- ' : '+ '} `}</span> 
                    {props.title }</div>
                <div className={`resume_content ${isOpen ? 'show' : ''}`}>
                    <div className='grid resume_line'>
                        <h3 className="resume_subtitle">{props.subtitle} 
                        <span className="resume_date">{props.date}</span></h3>
                    </div>
                    <p className='resume_description'>{props.description}</p>
                </div>
            </div>
        </div>
    )
}



const cv = [
    {
        id: 1,
        title: 'Masters of Financial Engineering',
        subtitle:'Worldquant University',
        date:'2023-2025',
        description:'I join an online master program of Worldquant University that introduces financial engineering and econometrics.',
        category: 'education',
    },

    {
        id: 2,
        title: 'Masters of Science - Artificial Intelligence',
        subtitle:'Leiden University',
        date:'2022-2024',
        description:'I a master student at Leiden University, Netherlands.',
        category: 'education',
    },

    {
        id: 3,
        title: 'Bachelor of Engineering - Automation',
        subtitle:'Jiangsu University',
        date:'2018-2022',
        description:'I was majoring in automation in Jiangsu University, China. The automation major combines applied mathematics with electrical engineering, giving me an opportunity to explore the STEM field.',
        category: 'education',
    },

    {
        id: 4,
        title: 'Student Assitant - Math for CS students',
        subtitle:'Leiden University',
        date:'2023-2024',
        description:'Developing the curriculum and lecturing to master computer science student.',
        category: 'experience',
    },

    {
        id: 5,
        title: 'Machine Learning Engineer',
        subtitle:'supplai',
        date:'2023',
        description:'Thesis Internship in supplai, a transformer based OCR Detection and Recognition',
        category: 'experience',
    },

]

export default Resume;