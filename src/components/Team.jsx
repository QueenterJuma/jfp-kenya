import Team1 from '../assets/Team1-Justus.png'
import Team2 from '../assets/Team2-Ruben.png'
import Team3 from '../assets/Team3-Jennifer.jpg'
import Team4 from '../assets/Team4-Isaac.jpg'
import Team5 from '../assets/Team5-Hellen.jpg'
import Team6 from '../assets/Team6-Joy.png'


export default function Team() {
  return (
    <div className="team-container">
      {/* Header Section */}
      <div className="team-header">
        <hr className="line" />
        <h2>JFP Team</h2>
        <hr className="line" />
      </div>

      {/* Team Cards Section */}
      <div className="team-members">
        {teamData.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

//team data 
const teamData = [
  { name: "Justus Juma", role:"Party Leader", image: Team1},
  { name: "Ruben Kigame", role:"Deputy-Party Leader", image: Team2},
  { name: "Isaac Aluoch Aluochier", role:"Chairman", image: Team3},
  { name: "Jennifer Njeri Kanari", role:"Secretary General", image: Team4},
  { name: "Hellen Akoth Omolo Mtawali", role:"Organizing Secretary", image: Team5},
  { name: "Joy Kiruki", role:"Treasure", image: Team6 },
];
