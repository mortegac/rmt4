import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { Btn } from "../components/common";
import styled from "styled-components";
import { asText } from "@prismicio/helpers";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  h1 {
    margin: 0px;
    margin-top: 46px;
    font-weight: bold;
    text-align: center;
    font-size: 36px;
    line-height: 50px;
    @media (max-width: 470px) {
      font-size: 30px;
      line-height: 40px;
    }
    @media (max-width: 380px) {
      font-size: 24px;
      line-height: 30px;
    }
  }
  p {
    text-align: center;
    max-width: 280px;
    width: 100%;
    margin: 16px 0px 30px 0px;
    @media (max-width: 380px) {
      font-size: 15px;
      line-height: 24px;
    }
  }
`;
const Container = styled.div`
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  padding-top: 64px;
  padding-bottom: 64px;
  min-height: 314px;
  background: white;
`;

const NotFound = props => {
  if (props?.error || !props || !props?.page?.lang) {
    return <>{console.error(props, "404 error")}</>;
  }
  const { page, menu } = props;
  const {
    lang,
    type,
    url,
    alternate_languages: alternateLanguages,
    ...rest
  } = page;
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
    sitename: process.env.NEXT_PUBLIC_SITENAME,
  };
  return (
    <Layout header={menu} page={page} activeDocMeta={activeDoc}>
      <div>
        <Container>
          <ContentContainer>
            <img
              src={page?.data?.image?.url}
              height={page?.data?.image?.dimensions?.height}
              width={page?.data?.image?.dimensions?.width}
            />
            <h1>
              {page?.data?.title
                ? asText(page?.data?.title)
                : "Page not found 😔"}
            </h1>
            <p>
              {page?.data?.subtitle
                ? asText(page?.data?.subtitle)
                : "We can’t seem to find the page you’re looking for"}
            </p>
            <Btn
              innerText={
                page?.data?.button_text
                  ? asText(page?.data?.button_text)
                  : "Take me home"
              }
              url="/"
              fullwidth={false}
              type="solid-orange"
              height="unset"
            />
          </ContentContainer>
        </Container>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ locale, locales, previewData }) {
  try {
    const client = createClient({ previewData });
    let page;
    try {
      page = await client.getSingle("404", { lang: locale });
    } catch (error) {
      page = await client.getSingle("404", { lang: "en-us" });
    }
    let menu;
    try {
      menu = await client.getSingle("top_menu", { lang: locale });
    } catch (error) {
      menu = await client.getSingle("top_menu", { lang: "en-us" });
    }
    return {
      props: {
        page,
        menu,
        locales: locales || {},
        locale: locale || {},
      },
    };
  } catch (error) {
    return {
      props: {
        error: JSON.stringify({ ...error }),
        locale,
      },
    };
  }
}

export default NotFound;
