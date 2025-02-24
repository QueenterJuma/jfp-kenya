
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
          </div>
        ))}
      </div>
    </div>
  );
}

// team data (Replace with actual images)
const teamData = [
  { name: "Alice Johnson", image: "https://via.placeholder.com/150" },
  { name: "Bob Smith", image: "https://via.placeholder.com/150" },
  { name: "Charlie Davis", image: "https://via.placeholder.com/150" },
  { name: "Diana White", image: "https://via.placeholder.com/150" },
  { name: "Edward Green", image: "https://via.placeholder.com/150" },
];
