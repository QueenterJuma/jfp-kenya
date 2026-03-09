import Team1 from '../assets/Team1-Justus.png'
import Team6 from '../assets/Team6-Gidhii.png'
import Team2 from '../assets/Team2-Ogendo.png'
import Team3 from '../assets/Team3- Mohamed.png'
import Team4 from '../assets/Hellen-Taam4.png'
import Team5 from '../assets/Team5-Joy.png'


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
  {name: "David Gidhii", role: "Deputy Party Leader", image: Team6},
  { name: "Cervin Ogendo", role: "Secretary General", image: Team2 },
  { name: "Zeinab Hussein Mohamed", role: "National Chairman", image: Team3 },
  { name: "Hellen Mutawali", role: "Organizing Secretary", image: Team4 },
  { name: "Joy Kiruki", role: "Treasurer", image: Team5 },
];
