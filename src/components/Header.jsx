function Header({ total, passing, avg }) {
    return (
      <header className="header">
        <div className="header-top">
          <div className="header-icon">🎓</div>
          <div>
            <h1 className="header-title">Student <span>Scoreboard</span></h1>
            <p className="header-sub">Track performance & results</p>
          </div>
        </div>
        <div className="stats-row">
          <div className="stat">
            <span className="stat-val">{total}</span>
            <span className="stat-label">Students</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-val">{passing}</span>
            <span className="stat-label">Passing</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-val">{avg}%</span>
            <span className="stat-label">Avg Score</span>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;