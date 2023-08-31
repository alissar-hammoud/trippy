import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareBehance,
  FaSquareTwitter,
} from 'react-icons/fa6';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer-background">
      <div className="footer-container">
        <div className="footer-info">
          <div className="footer-text">
            <h2 className="footer-title">Trippy</h2>
            <p className="footer-description">
              Choose your favourite destination
            </p>
          </div>
          <div className="footer-social">
            <FaSquareFacebook />
            <FaSquareInstagram />
            <FaSquareBehance />
            <FaSquareTwitter />
          </div>
        </div>
        <div className="footer-lists">
          <ul>
            <h3>Project</h3>
            <li>Changelog</li>
            <li>Status</li>
            <li>License</li>
            <li>All Versions</li>
          </ul>
          <ul>
            <h3>Community</h3>
            <li>GitHub</li>
            <li>Issues</li>
            <li>Project</li>
            <li>Twitter</li>
          </ul>
          <ul>
            <h3>Help</h3>
            <li>Support</li>
            <li>Troubleshooting</li>
            <li>Contact us</li>
          </ul>
          <ul>
            <h3>Others</h3>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>License</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
