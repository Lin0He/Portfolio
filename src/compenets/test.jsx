import React, { useState } from 'react';
import "./resume.css";

const Block = ({ id, content, isExpanded, onClick }) => {
  return (
    <div className='grid resume_container'>
      <div className='resume_group education_group'>
        {content.category === 'education' && (
          <div onClick={() => onClick(id)}>
            <p>{content.title}</p>
            {isExpanded && (
              <>
                <p>{content.subtitle}</p>
                <p>{content.date}</p>
                <p>{content.description}</p>
              </>
            )}
          </div>
        )}
      </div>
      <div className='resume_group experience_group'>
        {content.category === 'experience' && (
          <div onClick={() => onClick(id)}>
            <p>{content.title}</p>
            {isExpanded && (
              <>
                <p>{content.subtitle}</p>
                <p>{content.date}</p>
                <p>{content.description}</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};



const Resume = () => {
  const [expandedBlocks, setExpandedBlocks] = useState(false);
  const blocks = [
    {
      id: 1,
      content: {
        title: 'Masters of Financial Engineering',
        subtitle: 'Worldquant University',
        date: '2023-Ongoing',
        description: 'some description',
        category: 'education',
      },
    },
    {
      id: 2,
      content: {
        title: 'Artificial Intelligence Master',
        subtitle: 'Leiden University',
        date: '2022-2024',
        description: 'some description',
        category: 'education',
      },
    },
    {
      id: 3,
      content: {
        title: 'Automation Bachelor',
        subtitle: 'Leiden University',
        date: '2022-2024',
        description: 'some description',
        category: 'education',
      },
    },
    {
      id: 4,
      content: {
        title: 'Machine Learning Engineer',
        subtitle: 'supplai',
        date: '2022-2024',
        description: 'internship',
        category: 'experience',
      },
    },
  ];

  const handleBlockClick = (id) => {
    setExpandedBlocks((currentExpandedBlocks) =>
      currentExpandedBlocks.includes(id)
        ? currentExpandedBlocks.filter((blockId) => blockId !== id)
        : [...currentExpandedBlocks, id]
    );
  };

  return (
    <div>
      {blocks.map((block) => (
        <Block
          key={block.id}
          id={block.id}
          content={block.content}
          isExpanded={expandedBlocks.includes(block.id)}
          onClick={handleBlockClick}
        />
      ))}
    </div>
  );
};

export default Resume;
