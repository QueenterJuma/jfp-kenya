

function Mission() {
  return (
    <div className="mission-container">
      {/* Left Side */}
      <div className="mission-left">
        <p className="welcome-text">Welcome</p>
        <div className="thin-line"></div>
        <p className="party-name">Justice & Freedom <br /> Party of Kenya</p>
        <div className="thin-line"></div>
        <h1 className="slogan">Haki na Ukweli</h1>
      </div>

      {/* Right Side */}
      <div className="mission-right">
        <div className="section">
          <h2 className="section-title">Mission</h2>
          <p className="section-text">
            Our mission is to establish justice and equality for all citizens by 
            promoting transparency, accountability, and national development.
          </p>
        </div>
        <div className="section">
          <h2 className="section-title">Vision</h2>
          <p className="section-text">
            Our vision is a prosperous and democratic nation where every 
            citizen enjoys their rights and contributes to national growth.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
