import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "./BackgroundSection.css";
import Img from "gatsby-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

export const BackgroundSection = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "EVspeakers.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      //Set ImageData
      const imageData = data.placeholderImage.childImageSharp.fluid;
      return (
        <Img
          Tag="section"
          className="backGroundImg"
          backgroundColor="white"
          fluid={imageData}
        >
          {children}
        </Img>
      );
    }}
  />
);
