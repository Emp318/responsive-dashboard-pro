import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <p>&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
        <div className="social-links">
            <a href="#" className="social-icon">🐦 Twitter</a>
            <a href="#" className="social-icon">📘 Facebook</a>
            <a href="#" className="social-icon">📷 Instagram</a>
        </div>
    </footer>
  )
}

export default Footer