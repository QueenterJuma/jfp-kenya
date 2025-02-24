import Membership from "./Membership";
import Mission from "./Mission";
import Team from "./Team";

function Banner() {
  return (
    <>
    <div className="banner">
      {/* Left Side - Content */}
      <div className="banner-content">
        <h1 className="banner-title">
          Justice & Freedom <span className="highlight">PARTY OF KENYA</span>
        </h1>
        <p className="banner-text">
          To establish a prosperous, industrialized and modern nation, in which all citizens enjoy 
          equal social, economic and democratic rights, and live in unity.
        </p>
        <div className="banner-buttons">
          <button className="btn btn-primary">REGISTER</button>
          <button className="btn btn-secondary">OUR CONSTITUTION</button>
        </div>
      </div>

      {/* Right Side - Background Image */}
      <div className="banner-image"></div>
    </div>
    <Mission />
    <Membership />
    <Team />
    </>
  );
}

export default Banner;
