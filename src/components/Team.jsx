import Team1 from '../assets/Team1-Justus.png'
import Team3 from '../assets/Team3-caroline.png'
import Team4 from '../assets/Team4-Isaac.png'
import Team5 from '../assets/Team5-Hellen.png'
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
            <div className="image-container">
              <img src={member.image} alt={member.name} />
            </div>
            <h3 className="team-name">{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Team data 
const teamData = [
  { name: "Justus Juma", role: "Party Leader", image: Team1 },
  { name: "Caroline Jerotich Chebii", role: "Secretary General", image: Team3 },
  { name: "Isaac Aluoch Aluochier", role: "Chairman", image: Team4 },
  { name: "Hellen Akoth Omolo Mtawali", role: "Organizing Secretary", image: Team5 },
  { name: "Joy Kiruki", role: "Treasurer", image: Team6 },
];
