export default function Footer() {
  return (
    <footer className="container footer">
      <div className="footer-all">
        {/* About Section */}
        <div className="footer-section">
          <h3>About</h3>
          <p>To be a conduit to equip, nurture and
protect social and democratic society
for edifying of the citizen to unity till
we be complete and effective globally.</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About JFP</a></li>
            <li><a href="#">Our Partners</a></li>
            <li><a href="#">Membership</a></li>
            <li><a href="#">Latest News</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Phone: +254 701234567</p>
          <p>Email: JFPPartyKe@gmail.com</p>
          <div className="button-group">
            <button className="btn-footer1">Join Now</button>
            <button className="btn-footer">Contact Support</button>
          </div>
        </div>
      </div>

      {/* HR Line Below the Footer Sections */}
      <div className="footer-line">
        <hr className="line-footer" />
        <p>© 2025 JFP Party of Kenya. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
