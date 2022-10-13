export const generateHtml = text => {
  try {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: text[0].text,
        }}
      />
    );
  } catch (error) {
    console.error("--generateHtml--", error);
    return <></>;
  }
};
