import { useState } from "react";

type Page = "home" | "games" | "movies" | "ai" | "news" | "request" | "rules" | "discord";

const GAMES_URL = "https://sites.google.com/view/vminawebsite/home-page";
const REQUEST_URL = "https://sites.google.com/view/vminawebsite/request-a-game";
const MOVIES_URL = "https://centexvolleyball.org/search?query=bS5mZXJuLmJlc3Q%3D";
const AI_URL = "https://ps279.org/ai";
const DISCORD_URL = "https://discord.com/invite/vminawebsite";

const pages: { id: Page; label: string; href?: string }[] = [
  { id: "home", label: "Home" },
  { id: "games", label: "Games", href: GAMES_URL },
  { id: "movies", label: "Movies" },
  { id: "ai", label: "AI" },
  { id: "news", label: "Game News" },
  { id: "request", label: "Request a Game", href: REQUEST_URL },
  { id: "rules", label: "Rules" },
  { id: "discord", label: "Discord", href: DISCORD_URL },
];

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [query, setQuery] = useState("");

  return (
    <div className="site-shell">
      <header className="top-header">
        <div>
          <h1>VMINawebsite</h1>
          <p>unblocked games &amp; stuff for school and home</p>
        </div>
        <form className="site-search" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="search">Search this site</label>
          <div>
            <input id="search" value={query} onChange={(event) => setQuery(event.target.value)} type="text" />
            <button type="submit">Search</button>
          </div>
        </form>
      </header>

      <nav className="top-menu" aria-label="Main menu">
        {pages.map((item) => (
          item.href ? (
            <a key={item.id} href={item.href} target="_blank" rel="noreferrer">{item.label}</a>
          ) : (
            <button key={item.id} className={page === item.id ? "active" : ""} onClick={() => setPage(item.id)}>
              {item.label}
            </button>
          )
        ))}
        <span className="updated">Last updated: 11/08/2013</span>
      </nav>

      <div className="page-grid">
        <aside className="sidebar">
          <div className="sidebar-title">Navigation</div>
          <ul>
            {pages.map((item) => (
              <li key={item.id}>
                {item.href ? (
                  <a className="plain-links-a" href={item.href} target="_blank" rel="noreferrer">
                    <span className="page-icon" aria-hidden="true" />{item.label}
                  </a>
                ) : (
                  <button className={page === item.id ? "active" : ""} onClick={() => setPage(item.id)}>
                    <span className="page-icon" aria-hidden="true" />{item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>

          <div className="sidebar-title second">Community</div>
          <ul className="plain-links">
            <li><a href={DISCORD_URL} target="_blank" rel="noreferrer">Discord server</a></li>
            <li><a href="#news" onClick={() => setPage("news")}>Game news</a></li>
            <li><a href={REQUEST_URL} target="_blank" rel="noreferrer">Request a game</a></li>
          </ul>

          <div className="visitor-box">
            <strong>Visitors:</strong><br />
            00133742
            <div className="social-links">
              <a href={DISCORD_URL} target="_blank" rel="noreferrer">[ Discord ]</a>
            </div>
          </div>
        </aside>

        <main className="content">
          {page === "home" && (
            <>
              <div className="breadcrumb">Home</div>
              <section className="welcome">
                <h2>Welcome to VMINawebsite!</h2>
                <p>
                  This is a simple hub for free unblocked browser games, movies and
                  an AI chat. Use the menu above to jump to the games site, watch
                  movies, talk to the AI, read the news or join our Discord.
                </p>
                <div className="notice"><b>NOTICE:</b> The games now live on our Google Sites page. Click <strong>Games</strong> in the menu!</div>
                <div className="hub-links">
                  <a className="hub-button" href={GAMES_URL} target="_blank" rel="noreferrer">PLAY GAMES</a>
                  <a className="hub-button" href={DISCORD_URL} target="_blank" rel="noreferrer">JOIN DISCORD</a>
                </div>
              </section>
              <section id="about" className="about-section">
                <h3>About this site</h3>
                <p>VMINawebsite is a small community hub. Please use everything responsibly and be nice in chat.</p>
              </section>
            </>
          )}

          {page === "games" && (
            <section className="frame-page">
              <div className="breadcrumb">Home &gt; Games</div>
              <h2>Games</h2>
              <p>Our full game collection is hosted on Google Sites. Opening it now...</p>
              <div className="frame-wrap">
                <iframe src={GAMES_URL} title="VMINawebsite games" loading="lazy" />
              </div>
              <p className="frame-fallback">
                If the page does not load, <a href={GAMES_URL} target="_blank" rel="noreferrer">open Games in a new tab</a>.
              </p>
            </section>
          )}

          {page === "movies" && (
            <section className="frame-page">
              <div className="breadcrumb">Home &gt; Movies</div>
              <h2>Movies</h2>
              <p>Watch free movies below. Use the search box inside the frame to find something.</p>
              <div className="frame-wrap">
                <iframe src={MOVIES_URL} title="VMINawebsite movies" loading="lazy" />
              </div>
              <p className="frame-fallback">
                If the page does not load, <a href={MOVIES_URL} target="_blank" rel="noreferrer">open Movies in a new tab</a>.
              </p>
            </section>
          )}

          {page === "ai" && (
            <section className="frame-page">
              <div className="breadcrumb">Home &gt; AI</div>
              <h2>AI Chat</h2>
              <p>Talk to the AI assistant below. Ask it anything you like.</p>
              <div className="frame-wrap">
                <iframe src={AI_URL} title="VMINawebsite AI" loading="lazy" />
              </div>
              <p className="frame-fallback">
                If the page does not load, <a href={AI_URL} target="_blank" rel="noreferrer">open AI in a new tab</a>.
              </p>
            </section>
          )}

          {page === "news" && (
            <section>
              <div className="breadcrumb">Home &gt; Game News</div>
              <h2>Game News</h2>
              <ul className="news-list">
                <li><span className="news-date">11/08/2013</span> Site moved to a new look. Games are now on Google Sites!</li>
                <li><span className="news-date">10/22/2013</span> Added the Movies page. Watch stuff during breaks.</li>
                <li><span className="news-date">09/30/2013</span> New AI chat added. Say hi to the bot.</li>
                <li><span className="news-date">08/14/2013</span> Discord server is open. Join to find people to play with.</li>
                <li><span className="news-date">07/02/2013</span> More unblocked games coming soon. Request your favourites!</li>
              </ul>
              <p className="frame-fallback"><a href={DISCORD_URL} target="_blank" rel="noreferrer">Talk about news on our Discord</a>.</p>
            </section>
          )}

          {page === "request" && (
            <section className="frame-page">
              <div className="breadcrumb">Home &gt; Request a Game</div>
              <h2>Request a Game</h2>
              <p>Want a game added? Send your request on our Google Sites form.</p>
              <div className="frame-wrap">
                <iframe src={REQUEST_URL} title="Request a game" loading="lazy" />
              </div>
              <p className="frame-fallback">
                If the form does not load, <a href={REQUEST_URL} target="_blank" rel="noreferrer">open Request a Game in a new tab</a>.
              </p>
            </section>
          )}

          {page === "rules" && (
            <section>
              <div className="breadcrumb">Home &gt; Rules</div>
              <h2>Rules</h2>
              <ol className="rules-list">
                <li>Do not use the site for anything illegal.</li>
                <li>Be respectful to other players and in the Discord.</li>
                <li>Do not try to break or hack the site.</li>
                <li>Use the request page for new game ideas.</li>
                <li>Tell a teacher or parent if something looks wrong.</li>
              </ol>
              <p className="frame-fallback">Breaking the rules can get the site taken down, so please follow them.</p>
            </section>
          )}

          {page === "discord" && (
            <section className="frame-page">
              <div className="breadcrumb">Home &gt; Discord</div>
              <h2>Discord</h2>
              <p>Join our community server to chat with other players.</p>
              <div className="frame-wrap">
                <iframe src="https://discord.com/widget?id=vminawebsite&theme=dark" title="VMINawebsite Discord" loading="lazy" />
              </div>
              <p className="frame-fallback">
                If the widget does not load, <a href={DISCORD_URL} target="_blank" rel="noreferrer">join our Discord in a new tab</a>.
              </p>
            </section>
          )}
        </main>
      </div>

      <footer>
        <span>VMINawebsite (c) 2013</span>
        <span>
          <a href={DISCORD_URL} target="_blank" rel="noreferrer">Discord</a> |
          <a href="#about" onClick={() => setPage("home")}>About</a> |
          <a href={REQUEST_URL} target="_blank" rel="noreferrer">Request</a>
        </span>
      </footer>
    </div>
  );
}
