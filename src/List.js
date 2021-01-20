import React from 'react';

const List = ({people}) => {
  return (
    <>
    {people.map((item)=> {
      const {id, name, year, boxoffice, starring, image} = item;
      return <article key={id} className = "person">
        <img src={image} alt={name}/>
        <div>
          <h4>{name}</h4>
          <p>{year} </p>
          <p>{starring} </p>
          <p>{boxoffice} </p>


        </div>
      </article>
    })}
    </>
  );
};

export default List;
