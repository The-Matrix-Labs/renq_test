import React from "react";
import TeamOneItem from "./TeamOneItem";

const TeamOne = () => {
  const team_members = [
    {
      src: "/img/team/team1.jpg",
      name: "James Bladen",
      designation: "CPO",
      telegram:"https://t.me/jamiebladen",
    },
    {
      src: "/img/team/team2.jpg",
      name: "Nathan Hudson",
      designation: "Marketing Lead",
      telegram:"https://t.me/hudson121",

    },
    {
      src: "/img/team/team3.jpg",
      name: "Samar",
      designation: "Lead Strategist",
      telegram:"https://t.me/renqsamar",

    },
    {
      src: "/img/team/team4.jpg",
      name: "Johan van Asseldonk",
      designation: "Development Lead",
      linkedin:"https://www.linkedin.com/in/johan-van-asseldonk-91aa8447/",

    },
    {
      src: "/img/team/team5.jpg",
      name: "Markus Trafford",
      designation: "Senior Backend",
      linkedin:"https://www.linkedin.com/in/mark-trafford-7067aa32/",
    },
    {
      src: "/img/team/team6.jpg",
      name: "Hiroyoshi Nozawa",
      designation: "Web3 Engineer",
      linkedin:"",
    },
    {
      src: "/img/team/team7.jpg",
      name: "Zachery Salter",
      designation: "Blockchain Expert",
      linkedin:"https://www.linkedin.com/in/zacrenq",

    },
  
  ];

  return (
    <section className="team-area pt-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-70">
              <span className="sub-title">OUr team</span>
              <h2 className="title">
                The Leadership <br /> <span>Team</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {team_members.map((member, index) => (
            <div key={index} className="col-xl-3 col-md-4 col-sm-6">
              <TeamOneItem item={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamOne;
