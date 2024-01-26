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
        date:'2023-Ongoing',
        description:'some desctiption',
        category: 'education',
    },

    {
        id: 2,
        title: 'Masters of Financial Engineering',
        subtitle:'Worldquant University',
        date:'2023-Ongoing',
        description:'some desctiption',
        category: 'education',
    },

    {
        id: 3,
        title: 'Masters of Financial Engineering',
        subtitle:'Worldquant University',
        date:'2023-Ongoing',
        description:'some desctiption',
        category: 'education',
    },

    {
        id: 4,
        title: 'Masters of Financial Engineering',
        subtitle:'Worldquant University',
        date:'2023-Ongoing',
        description:'some desctiption',
        category: 'experience',
    },

    {
        id: 5,
        title: 'Masters of Financial Engineering',
        subtitle:'Worldquant University',
        date:'2023-Ongoing',
        description:'some desctiption',
        category: 'experience',
    },

    {
        id: 6,
        title: 'Masters of Financial Engineering',
        subtitle:'Worldquant University',
        date:'2023-Ongoing',
        description:'some desctiption',
        category: 'experience',
    },
]

export default Resume;