import React from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="welcome">Welcome to Ice Factory Outfitters</h1>

      <div className="all-products-container">
        <Link to="/sticks">
          <div className="head-text">
            <div className="stick-image">
              <img
                className="sticks"
                src="https://www.hockeymonkey.com/media/wysiwyg/Hockey/2023/01Jan/Static-Jetspeed-FT5-Sticks.jpg"
              ></img>
            </div>
            <div className="text-on-image">
              <h2 className="image-text">Sticks</h2>
            </div>
          </div>
        </Link>

        <Link to="/pucks">
          <div className="head-text">
            <div className="puck-image">
              <img
                className="pucks"
                src="https://d2779tscntxxsw.cloudfront.net/631a33aeb08d5.png"
              ></img>
            </div>
            <div className="text-on-image">
              <h2 className="image-text">Pucks</h2>
            </div>
          </div>
        </Link>

        <Link to="/skates">
          <div className="head-text">
            <div className="skates-image">
              <img
                className="skates"
                src="http://cdn.shopify.com/s/files/1/0505/8838/5453/articles/blog-hockey-how-to-properly-tie-your-skates.jpg?v=1647237041"
              ></img>
            </div>
            <div className="text-on-image">
              <h2 className="image-text">Skates</h2>
            </div>
          </div>
        </Link>

        <Link to="/helmets">
          <div className="head-text">
            <div className="helmets-image">
              <img
                className="helmets"
                src="https://img.inlinewarehouse.com/watermark/rs.php?path=WA1H-BK1-12.jpg&nw=296"
              ></img>
            </div>
            <div className="text-on-image">
              <h2 className="image-text">Helmets</h2>
            </div>
          </div>
        </Link>

        <Link to="/protectiveGear">
          <div className="head-text">
            <div className="protective-gear-image">
              <img
                className="protective-gear"
                src="https://www.popsci.com/uploads/2019/03/18/PWGMA5HLZVXUQJFPGGFTO7QALI.jpg?auto=webp"
              ></img>
            </div>
            <div className="text-on-image">
              <h2 className="image-text">Protective Gear</h2>
            </div>
          </div>
        </Link>

        <Link to="/goalieGear">
          <div className="head-text">
            <div className="goalie-gear-image">
              <img
                className="goalie-gear"
                src="https://vaughnhockey.com/wp-content/uploads/2021/10/SLR3-smoke3.png"
              ></img>
            </div>
            <div className="text-on-image">
              <h2 className="image-text">Goalie Gear</h2>
            </div>
          </div>
        </Link>

        <Link to="/accessories">
          <div className="head-text">
            <div className="accessories-image">
              <img
                className="accessories"
                src="https://www.kwikrinksyntheticice.com/wp-content/uploads/2020/03/Why-Do-Hockey-Players-Tape-Their-Sticks-1-scaled.jpeg"
              ></img>
            </div>
            <div className="text-on-image">
              <h2 className="image-text">Accessories</h2>
            </div>
          </div>
        </Link>

        <Link to="/teamApparel">
          <div className="head-text">
            <div className="team-apparel-image">
              <img
                className="team-apparel"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd7oJ4aItOuJQ-zev5rRnwCnc9FyK3q6A8WA&usqp=CAU"
              ></img>
            </div>
            <div className="text-on-image">
              <h2 className="image-text">Team Apparel</h2>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
