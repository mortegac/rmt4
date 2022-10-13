import React from "react";

/**
 * Component that finds the locale from the url and then uses it to format a provided date using that locale
 * @param {date} string the date to show formated, must be valid date string
 * @param {style} object styles to be injected in the string component
 * @param {options} object allows to format what part of the date will be shown following "Intl.DateTimeFormats"
 * default here is  year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true,
 * but this object overrrides it. 
 * the mozilla documentation of "Intl.DateTimeFormats" is in this link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
 */
export const GetLocaleDate = ({ date, style = {}, options={} }) => {
    let lang = "";
    if (typeof window !== "undefined") {
        lang = window.location.pathname.split("/")[1];
    }
    const optDefault = {
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: 'numeric', 
        minute: 'numeric',
        hour12: true,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
    const opt = { ...options, ...optDefault }
    const validDate = date.split("").slice(-1)==="Z"? date : date+"Z"
    const formatedDate = new Intl.DateTimeFormat(lang || "en-US", opt).format(new Date(validDate));
    return (
        <span style={{ ...style }}>{ formatedDate }</span>
    )
}
