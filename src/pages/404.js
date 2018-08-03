import React from "react";
import { Layout } from "../components/Layout";
import { TitleBox, Paragraph, SadFace } from "../components/Elements";

const NotFoundPage = props => (
  <Layout location={props.location}>
    <TitleBox title="404">
      <div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <SadFace />
        <Paragraph Center>
          How embarassing&hellip; A web developer with a broken link&hellip;
        </Paragraph>
      </div>
    </TitleBox>
  </Layout>
);

export default NotFoundPage;
