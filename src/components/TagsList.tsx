import React from 'react';

const TagsList: React.FC = () => {
  const tags = ['designing', 'development', 'deployment'];

  return (
    <div className="flex flex-col gap-10 items-center">
      {tags.map((tag, index) => (
        <span 
          key={index}
          className="text-white font-roboto text-sm tracking-widest uppercase opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagsList;
