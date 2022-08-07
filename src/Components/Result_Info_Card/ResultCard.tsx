const ResultCard = () => {
  const namesOfAuthor = ["Name 1", "Name 2", "Name 3"];

  const contents = [
    `CONCLUSION COVID-19 vaccines administered in pregnancy can reduce the
  risk of severe COVID-19 and their serious consequences for mothers and
  their offspring`,
    `CONCLUSION COVID-19 vaccines administered in pregnancy can reduce the
  risk of severe COVID-19 and their serious consequences for mothers and
  their offspring`,
    `CONCLUSION COVID-19 vaccines administered in pregnancy can reduce the
  risk of severe COVID-19 and their serious consequences for mothers and
  their offspring`,
  ];

  const getContent = (content: string, index: number) => {
    return (
      <span key={index} className="sample_content-snippet">
        {content}
      </span>
    );
  };

  return (
    <section className="result_card">
      <h1 className="cart_title">
        CONCLUSION COVID-19 vaccines administered in pregnancy can reduce the
        risk of severe COVID-19 and their serious consequences for mothers and
        their offspring
      </h1>
      <div className="paper_details">
        <span>Number of pages : 24</span>
        <span className="date_of_publish">Published On : 17 April 2001</span>
      </div>
      <h4 className="author_names">{namesOfAuthor.join(", ")}</h4>
      <div className="sample_content">
        {contents.map((content, index) => getContent(content, index))}
      </div>
    </section>
  );
};

export default ResultCard;
