export default function generateSchema(data, pageLanguage) {
  let schema = "";

  //Grab data from hero section
  const heroSection = data.filter(
    (section) => section.slice_type === "index_section_one"
  );

  //Grab data from testimonials section
  const testimonialsSection = data.filter(
    (section) => section.slice_type === "index_section_five"
  );

  //If testimonialsSection length is larger than 0, then we have testimonials and
  //we can schema markup the page as type Product. Here we include the review in the schema.

  if (testimonialsSection.length > 0) {
    schema = {
      "@context": "http://schema.org",
      "@type": "Product",
      name: "Low-cost international money transfer",
      description:
        heroSection[0]?.primary?.hero_description[0]?.text ||
        "Low-cost international money transfer",
      brand: {
        "@type": "Brand",
        name: "Ria Money Transfer",
        slogan: "Fast. Safe. Guaranteed",
      },
      review: {
        "@type": "Review",
        author: {
          "@type": "Person",
          name:
            testimonialsSection[0]?.items[0]?.testimonial_name_and_date[0].text?.split(
              " -"
            )[0] || "Person reviewing",
        },
        datePublished:
          testimonialsSection[0]?.items[0]?.testimonial_name_and_date[0].text?.split(
            "- "
          )[1] || "Date reviewed",
        reviewBody:
          testimonialsSection[0]?.items[0]?.testimonial_text[0].text ||
          "Review body",
      },
    };
  }

  //If there are no testimonials, we create a schema type Organization, for the
  //home page that does not contain testimonials.
  else {
    schema = {
      "@context": "http://schema.org",
      "@type": "Organization",
      name: "Ria Money Transfer",
      url: `https//app.riamoneytransfer.com/${pageLanguage}/`,
      description:
        heroSection[0]?.primary?.hero_heading[0]?.text ||
        "Low cost international money transfer",
      sameAs: [
        "https://www.instagram.com/riamoneytransfer/",
        "https://twitter.com/RiaFinancial",
      ],
    };
  }

  return JSON.stringify(schema);
}
