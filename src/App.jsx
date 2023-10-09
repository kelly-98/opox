import "./App.scss";
import logo from "./assets/images/logo.png";
import logo2 from "./assets/images/logo-2.png";
import ImgIntro from "./assets/images/img-intro.png";
import ImgIntroBg from "./assets/images/intro-bg.png";
import ImgAboutUs from "./assets/images/img-about-us.png";
import ImgGroup1 from "./assets/images/img-group1.png";
import ImgGroup2 from "./assets/images/img-group2.png";
import ImgGroup3 from "./assets/images/img-group3.png";
import ImgGroup4 from "./assets/images/img-group4.png";

function App() {
  return (
    <div className="App">
      <header className="page-header">
        <div className="container">
          <ul className="header-pc">
            <li>
              <a href="">UNISWAP</a>
            </li>
            <li>
              <a href="">DEXTOOLS</a>
            </li>
            <li>
              <a href="">
                <img className="logo" src={logo} alt="" />
              </a>
            </li>
            <li>
              <a href="">TELEGRAM</a>
            </li>
            <li>
              <a href="">TWITTER</a>
            </li>
          </ul>
          <div className="header-mobile">
            <a href="">
              <img className="logo" src={logo} alt="" />
            </a>
            <ul>
              <li>
                <a href="">UNISWAP</a>
              </li>
              <li>
                <a href="">DEXTOOLS</a>
              </li>
              <li>
                <a href="">TELEGRAM</a>
              </li>
              <li>
                <a href="">TWITTER</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className="page-main">
        <div className="container">
          <section className="section-intro">
            <div className="left-content">
              <h1 className="title">Martyrs</h1>
              <p className="content">
                “Martyrs” is not an objective or accurate word, nor is
                “murdered”.
              </p>
            </div>
            <div className="intro-wrapper">
              {/* <img src={ImgIntro} alt="" /> */}
              <img className="intro-bg" src={ImgIntroBg} />
              <img className="intro" src={ImgIntro} alt="" />
            </div>
          </section>
          <section className="section-about-us">
            <div className="left-content">
              <img src={ImgAboutUs} alt="" />
            </div>
            <div className="right-content">
              {/* <h3 className="title">who we are?</h3> */}
              <p className="content">
                “Martyrs” is not an objective or accurate word, nor is
                “murdered”. The former implies dying for a cause in battle and
                the latter implies a deliberate attempt to kill those specific
                people. While reporting both sides is fair, please use maximally
                accurate words or I must withdraw my recommendation to follow
                your account.
              </p>
            </div>
          </section>
          <section className="section-communication">
            <div className="item">HUGE COMMUNITY</div>
            <div className="item">NO TAX - NO FEES</div>
            <div className="item">SUPPORT BY WHALES</div>
            <div className="item">BIG MARKETING</div>
          </section>
          <section className="section-join-us">
            <h3 className="title">JOIN US NOW!!</h3>
            <div className="actions">
              <a
                className="img-box"
                target="_blank"
                href="https://twitter.com/OPOXeth">
                <img src={ImgGroup1} alt="" />
              </a>
              <a
                className="img-box"
                target="_blank"
                href="https://twitter.com/OPOXeth">
                <img src={ImgGroup2} alt="" />
              </a>
              <a
                className="img-box"
                target="_blank"
                href="https://twitter.com/OPOXeth">
                <img src={ImgGroup3} alt="" />
              </a>
              <a
                className="img-box"
                target="_blank"
                href="https://twitter.com/OPOXeth">
                <img src={ImgGroup4} alt="" />
              </a>
            </div>
          </section>
        </div>
      </main>
      <footer className="page-footer">
        <div className="container">
          <div className="logo-footer">
            <img src={logo2} alt="" />
          </div>
          <p>$OPOX | All Rights Reserved | 2023 | developer@martyrserc.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
