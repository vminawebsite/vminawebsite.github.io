import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Generous Glaring Pheasant</title>
        <meta property="og:title" content="Generous Glaring Pheasant" />
        <link
          rel="canonical"
          href="https://generous-glaring-pheasant-8e65gf.teleporthq.app/"
        />
        <meta
          property="og:url"
          content="https://generous-glaring-pheasant-8e65gf.teleporthq.app/"
        />
      </Helmet>
      <section className="home-thq-hero-section-elm">
        <div className="home-thq-hero-content-elm">
          <h1 className="home-thq-hero-title-elm">VMINawebsite</h1>
          <p className="home-thq-hero-description-elm">
            VMINawebsite is one of the best Unblocked games website, and it has
            100+ fun games to play at school or at home.
          </p>
          <div className="home-thq-hero-buttons-elm">
            <a
              href="https://vminawebsite.github.io/docs/"
              className="home-link1"
            >
              <div className="hero-btn hero-btn-primary">
                <span>Docs</span>
              </div>
            </a>
            <a
              href="https://vminawebsite.github.io/games/"
              className="home-link2"
            >
              <div className="hero-btn hero-btn-secondary">
                <span>Games</span>
              </div>
            </a>
          </div>
        </div>
        <div className="home-thq-hero-geometric-elm">
          <div className="home-thq-geo-shape-elm1 geo-shape"></div>
          <div className="home-thq-geo-shape-elm2 geo-shape"></div>
          <div className="home-thq-geo-shape-elm3 geo-shape"></div>
        </div>
      </section>
      <div>
        <div className="home-container3">
          <Script
            html={`<style>
@keyframes float {
0%, 100% {
  transform: translateY(0);
}
50% {
  transform: translateY(-30px);
}
}

@keyframes rotate {
0% {
  transform: rotate(45deg);
}
100% {
  transform: rotate(405deg);
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <a href="https://play.teleporthq.io/signup" className="home-link3">
        <div aria-label="Sign up to TeleportHQ" className="home-container4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon1"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text3">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
