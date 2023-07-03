import "./App.css";
import MyBlog from "./components/MyBlog";

function App() {
  return (
    <>
      <div className="surround">
        <div className="header">
          <h1>MY BLOG</h1>
          <br />
          <p>
            Welcome to the blog of{" "}
            <span style={{ backgroundColor: "black", color: "white" }}>
              {" "}
              unknown{" "}
            </span>
          </p>
        </div>
        <div className="content">
          <div className="left">
            <MyBlog
              avatar="/assets/woods.jpg"
              heading="TITLE HEADING"
              titleDescription="Title description,"
              time="April 7, 2014"
              description="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
              Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna
              enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non
              congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed
              vitae justo condimentum, porta lectus vitae, ultricies congue
              gravida diam non fringilla."
              comment={2}
            />
            <MyBlog
              avatar="/assets/bridge.jpg"
              heading="BLOG ENTRY"
              titleDescription="Title description,"
              time="April 2, 2014"
              description=" Mauris neque quam, fermentum ut nisl vitae, convallis
            maximus nisl. Sed mattis nunc id lorem euismod placerat.
            Vivamus porttitor magna enim, ac accumsan tortor cursus at.
            Phasellus sed ultricies mi non congue ullam corper. Praesent
            tincidunt sed tellus ut rutrum. Sed vitae justo condimentum,
            porta lectus vitae, ultricies congue gravida diam non
            fringilla."
              comment={0}
            />
          </div>
          <div className="right">
            <div className="top-right">
              <div className="a">
                <img src="/assets/avatar_g.jpg" alt="" />
              </div>
              <div className="b">
                <h3>My Name</h3>
                <p>
                  Just me, myself and I, exploring the universe of uknownment. I
                  have a heart of love and a interest of lorem ipsum and mauris
                  neque quam blog. I want to share my world with you.
                </p>
              </div>
            </div>
            <div className="ban-right">
              <div className="upper">
                <div className="in">Popular Posts</div>
              </div>
              <div className="lower">
                <div className="ins">
                  <img src="/assets/workshop.jpg" alt="" />
                </div>
                <div className="ina">
                  <p>
                    Lorembr <br />
                    Sed mattis nunc
                  </p>
                </div>
              </div>
              <div className="lower">
                <div className="ins">
                  <img src="/assets/gondol.jpg" alt="" />
                </div>
                <div className="ina">
                  <p>
                    Ipsum <br />
                    Praes tinci sed
                  </p>
                </div>
              </div>
              <div className="lower">
                <div className="ins">
                  <img src="/assets/skies.jpg" alt="" />
                </div>
                <div className="ina">
                  <p>
                    Dorum <br />
                    Ultricies congue
                  </p>
                </div>
              </div>
              <div className="lower">
                <div className="ins">
                  <img src="/assets/skies.jpg" alt="" />
                </div>
                <div className="ina">
                  <p>
                    Mingsum <br />
                    Lorem ipsum dipsum
                  </p>
                </div>
              </div>
            </div>
            <div className="bot-right">
              <div className="nam">Tags</div>
              <div className="inside-tag">
                <p>
                  <span style={{ background: "black", color: "white" }}>
                    Travel
                  </span>{" "}
                  <span>New York</span> <span>London</span> <span>IKEA</span>{" "}
                  <span>NORWA</span> <span>DIY</span>
                  <span>Ideas</span> <span>Baby</span> <span>Family</span>{" "}
                  <span>News</span> <span>Clothing</span> <span>Shopping</span>
                  <span>Sport</span> <span>Games</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="foot-1">
          <div className="pre">Previous</div>
          <div className="nex">Next&gt;&gt;</div>
        </div>
        <span style={{ color: "white", margin: "10px" }}>Powered by:</span>
        <span>
          <a
            href="https://www.w3schools.com/w3css/default.asp"
            style={{ color: "white" }}
          >
            w3.css
          </a>
        </span>
      </div>
    </>
  );
}

export default App;
