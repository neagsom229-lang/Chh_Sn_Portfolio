export default function Footer() {
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <div className="copyright text-center ">
          <p>
            © <span>Welcome to my</span> <strong className="px-1 sitename">Portfolio</strong>{' '}
            <span>its my info</span>
              <div className="soft-skills-divider">
                <span className="divider-line"></span>
                <span className="divider-icon">✩</span>
                <span className="divider-icon">✩</span>
                <span className="divider-line"></span>
              </div>
          </p>
        </div>
        <div className="credits">
          Built with React by Chheang Samnang
        </div>
      </div>
    </footer>
  );
}
