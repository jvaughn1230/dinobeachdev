import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import BlogCard from "../../components/blogCard/blogCard";

import "./about.css";

import rightImg from "../../images/about-img-right.png";
import leftImg from "../../images/about-img-left.png";
import footprint from "../../images/trex_footprint.svg";
import wave from "../../images/waves.svg";

const About = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost:1337/api/posts?sort=publishedAt:desc&pagination[limit]=3&populate=*"
      )
      .then(({ data }) => setPosts(data.data))
      .catch((error) => console.log(error));
  }, []);

  const blogPosts = posts.map((post) => (
    <div className="aboutblogcard">
      <BlogCard
        title={post.attributes.title}
        description={post.attributes.description}
        img={post.attributes.image?.data?.attributes?.url}
        key={post.id}
      />
    </div>
  ));

  return (
    <div className="aboutpage">
      {/* Row1 */}
      <div className="aboutpagerow1">
        <img src={rightImg} alt="ocean background" />
        <h1 className="aboutpage-header gradient-text">
          Meet your dev dream team, Maira & Alex
        </h1>
        <img
          src={footprint}
          alt="dino footprint"
          className="aboutprint aboutprint1"
        />
        <img
          src={footprint}
          alt="dino footprint"
          className="aboutprint aboutprint2"
        />
        <img
          src={footprint}
          alt="dino footprint"
          className="aboutprint aboutprint3"
        />
        <img
          src={footprint}
          alt="dino footprint"
          className="aboutprint aboutprint4"
        />
        <img
          src={footprint}
          alt="dino footprint"
          className="aboutprint aboutprint5"
        />
      </div>

      {/* Row 2 */}
      <div className="aboutpagerow2">
        <div className="aboutpage-summary">
          <h3 className="gradient-text">We're Developers</h3>
          <p>
            Non proident officia esse ea magna pariatur irure aute. Qui pariatur
            est et duis ad culpa mollit nulla. Proident id aute commodo laboris
            irure cillum mollit mollit commodo labore ex commodo. Excepteur
            cillum anim minim dolore pariatur adipisicing. Sint eiusmod aute
            mollit voluptate eiusmod cillum.
          </p>
        </div>
        <img
          src={footprint}
          alt="dino footprint"
          className="aboutprint aboutprint6"
        />
        <img
          src={footprint}
          alt="dino footprint"
          className="aboutprint aboutprint7"
        />
        <img
          src={footprint}
          alt="dino footprint"
          className="aboutprint aboutprint8"
        />
        <img
          src={footprint}
          alt="dino footprint"
          className="aboutprint aboutprint9"
        />
        <img src={leftImg} alt="ocean background" />
      </div>

      {/* Blog Post Sectino */}
      <div className="aboutpage-posts">
        <img src={wave} alt="waves" />
        {blogPosts}
      </div>

      {/* Contact Row */}
      <div className="aboutpage-bottomrow">
        <h2 className="gradient-text">Ready to work with us?</h2>
        <Link to="/contact" className="contact-button">
          Contact us Here
        </Link>
      </div>
    </div>
  );
};

export default About;
