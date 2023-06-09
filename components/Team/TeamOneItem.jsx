import React from "react";

const TeamOneItem = (props) => {
  return (
    <div className="team-item">
      <div className="team-thumb">
        <img src={props.item.src} alt={props.item.name} />
      </div>
      <div className="team-content">
        <h2 className="title">{props.item.name}</h2>
        <span>{props.item.designation}</span>

        <ul className="team-social">
         
            {props.item.linkedin ? <li> <a target="_blank" rel="noRefferer" href={props.item.linkedin}> 
              <i className="fab fa-linkedin"></i>
            </a>
          </li> : <li> <a href={props.item.telegram}>   
              <i className="fab fa-telegram"></i>
            </a>
          </li>}
            
        
        </ul>
      </div>
    </div>
  );
};

export default TeamOneItem;
