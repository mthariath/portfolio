import React from "react";
import PropTypes from "prop-types";
import { Chip } from "./Chip";

const icons = [
  {
    text: "Linux",
    code: "icon-linux"
  },
  {
    text: "Trello",
    code: "icon-trello"
  },
  {
    text: "Gulp",
    code: "icon-gulp"
  },
  {
    text: "Photoshop",
    code: "icon-adobephotoshop"
  },
  {
    text: "InDesign",
    code: "icon-adobeindesign"
  },
  {
    text: "Analytics",
    code: "icon-googleanalytics"
  },
  {
    text: "Illustrator",
    code: "icon-adobeillustrator"
  },
  {
    text: "GraphQL",
    code: "icon-graphql"
  },
  {
    text: "VueJS",
    code: "icon-vuejs"
  },
  {
    text: "Webpack",
    code: "icon-webpack"
  },
  {
    text: "Python",
    code: "icon-python"
  },
  {
    text: "Git",
    code: "icon-git"
  },
  {
    text: "Github",
    code: "icon-github"
  },
  {
    text: "React",
    code: "icon-react"
  },
  {
    text: "SASS",
    code: "icon-sass"
  },
  {
    text: "HTML",
    code: "icon-html5"
  },
  {
    text: "CSS",
    code: "icon-css3"
  },
  {
    text: "JS",
    code: "icon-javascript"
  },
  {
    text: "NodeJS",
    code: "icon-nodejs"
  },
  {
    text: "CLI",
    code: "icon-terminal"
  },
  {
    text: "Netlify",
    code: "icon-netlify"
  },
  {
    text: "Heroku",
    code: "icon-heroku"
  },
  {
    text: "AWS",
    code: "icon-amazon"
  },
  {
    text: "Docker",
    code: "icon-docker"
  },
  {
    text: "Stripe",
    code: "icon-stripe"
  },
  {
    text: "Firebase",
    code: "icon-firebase"
  },
  {
    text: "MongoDB",
    code: "icon-mongodb"
  },
  {
    text: "PHP",
    code: "icon-php"
  },
  {
    text: "Ruby",
    code: "icon-ruby"
  },
  {
    text: "NPM",
    code: "icon-npm"
  },
  {
    text: "GatsbyJS",
    code: "icon-gatsby"
  }
];

const Icon = ({ small, caption, type }) => {
  const iconClass = icons.find(icon => icon.code.includes(type)).code;
  const text = icons.find(icon => icon.code.includes(type)).text;
  const wrapperCss = {
    display: "flex",
    flexDirection: "column",
    fontSize: small ? "2rem" : "3rem",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s cubic-bezier(.82,.22,.44,1.52)",
    "&:hover": {
      transform: "scale(1.05)"
    },
    "@media (max-width: 1024px)": {
      fontSize: small ? "1.5rem" : "2rem"
    }
  };

  return (
    <div css={wrapperCss}>
      <span className={iconClass} />
      {caption && <Chip>{text}</Chip>}
    </div>
  );
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  caption: PropTypes.bool
};

export { Icon };
