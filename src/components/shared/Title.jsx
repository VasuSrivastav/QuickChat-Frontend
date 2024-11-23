import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "QuickChat App",
  description = "this is the Chat App called Quickchat",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
