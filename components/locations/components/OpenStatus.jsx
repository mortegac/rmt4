import React from "react";

import { OpenCloseTag } from "../locations-styles";

export const OpenStatus = ({ open, index, now, date, locationsTexts }) => {
  switch (index) {
    case 1:
      return (
        <OpenCloseTag>
          {" "}
          <span className="closed">
            {locationsTexts.closed[0].text
              ? locationsTexts.closed[0].text
              : "Closed"}
          </span>{" "}
          ·{" "}
          {locationsTexts.opens[0].text
            ? locationsTexts.opens[0].text
            : "Opens"}{" "}
          {locationsTexts.opens_at[0].text
            ? locationsTexts.opens_at[0].text
            : "at"}{" "}
          {open.timeOpen}
        </OpenCloseTag>
      );
    case 2:
      return (
        <OpenCloseTag>
          {" "}
          <span className="closed">
            {locationsTexts.closed[0].text
              ? locationsTexts.closed[0].text
              : "Closed"}
          </span>{" "}
          ·{" "}
          {locationsTexts.opens[0].text
            ? locationsTexts.opens[0].text
            : "Opens"}{" "}
          {locationsTexts.opens_on[0].text
            ? locationsTexts.opens_on[0].text
            : "on"}{" "}
          {open.dayOfWeek}{" "}
          {locationsTexts.opens_at[0].text
            ? locationsTexts.opens_at[0].text
            : "at"}{" "}
          {open.timeOpen}
        </OpenCloseTag>
      );
    default:
      let hrs = open.timeClose.split(":");
      let closed = date.set({ hour: hrs[0], minute: hrs[1], second: hrs[2] });
      if (date.isSameOrAfter(now))
        return (
          <OpenCloseTag>
            {" "}
            <span className="success">
              {locationsTexts.open_until[0].text
                ? locationsTexts.open_until[0].text
                : "Open until"}{" "}
              {open.timeClose.length === 5
                ? open.timeClose
                : open.timeClose.substr(0, 5)}
            </span>
          </OpenCloseTag>
        );
      else
        return (
          <OpenCloseTag>
            {" "}
            <span className="closed">
              {locationsTexts.closed[0].text
                ? locationsTexts.closed[0].text
                : "Closed"}
            </span>{" "}
            ·{" "}
            {locationsTexts.opens[0].text
              ? locationsTexts.opens[0].text
              : "Opens"}{" "}
            {locationsTexts.opens_at[0].text
              ? locationsTexts.opens_at[0].text
              : "at"}{" "}
            {open.timeOpen}
          </OpenCloseTag>
        );
  }
};
