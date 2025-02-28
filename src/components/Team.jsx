import Team1 from '../assets/Team1-Isaac.jpg'
import Team2 from '../assets/Team2-Jennifer.jpg'
import Team3 from '../assets/Team3-Carroly.jpg'
import Team4 from '../assets/Team4-Hellen.jpg'
import Team5 from '../assets/Team5-Kenneth.jpg'

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

// team data (Replace with actual images)
const teamData = [
  { name: "Isaac Aluoch Aluochier", role:"Chairman", image: Team1},
  { name: "Jennifer Njeri Kanari", role:"Secretary General", image: Team2},
  { name: "Carroly's Omulo", role:"Deputy Sec. General", image: Team3 },
  { name: "Hellen Akoth Omolo Mtawali", role:"Organizing Secretary", image: Team4 },
  { name: "Kenneth Mburu Nyoike", role:"Deputy Organizing Secretary", image: Team5 },

];
