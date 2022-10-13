import React from "react";
import { useState, useEffect } from "react";
import {
  PageContainer,
  SitemapContainer,
  SitemapSection,
  TitleContainer,
} from "./SitemapStyle";

import Link from "next/link";

const SitemapSlice = ({ slice }) => {
  useEffect(() => {
    getCategories();
    getPages();
  }, []);

  const [categories, setCategories] = useState([]);
  const [pages, setPages] = useState([]);

  const pagesOrderedByTitle = slice.items.sort((a, b) => {
    return b.page_title[0].text < a.page_title[0].text
      ? 1
      : b.page_title[0].text > a.page_title[0].text
      ? -1
      : 0;
  });

  const getCategories = () => {
    const listOfCategories = [];
    pagesOrderedByTitle.map((page) => {
      if (!listOfCategories.includes(page.category[0].text)) {
        listOfCategories.push(page.category[0].text);
      }
    });
    listOfCategories.sort();
    setCategories(listOfCategories);
  };

  const getPages = () => {
    const listOfPages = [];
    pagesOrderedByTitle.map((page) => {
      if (listOfPages[page.category[0].text] === undefined) {
        listOfPages[page.category[0].text] = [];
        listOfPages[page.category[0].text].push([
          page.page_title[0].text,
          page.page_link.uid,
        ]);
      } else {
        listOfPages[page.category[0].text].push([
          page.page_title[0].text,
          page.page_link.uid,
        ]);
      }
    });
    setPages(listOfPages);
  };

  const sitemap = categories
    ? categories.map((category, index) => {
        return (
          <SitemapSection key={`sitemap${index}`}>
            <h3 className="title-site">{category}</h3>
            {pages[category].map((page, i) => {
              return (
                <Link
                  key={`sitemapUrl${i}`}
                  href={`/${slice.items[0].page_link.lang}/${page[1]}`}
                  passHref
                >
                  <a className="space-site">{page[0]}</a>
                </Link>
              );
            })}
          </SitemapSection>
        );
      })
    : null;

  return (
    <PageContainer>
      <TitleContainer>
        <h1>{slice.primary?.slice_title?.text || "Sitemap"}</h1>
      </TitleContainer>
      <SitemapContainer>{sitemap}</SitemapContainer>
    </PageContainer>
  );
};

export default SitemapSlice;
