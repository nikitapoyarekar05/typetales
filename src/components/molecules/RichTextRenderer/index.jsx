const RichTextRenderer = ({ content }) => {
  function renderChildren(children) {
    if (!Array.isArray(children)) return null;

    return children.map((child, idx) => {
      switch (child.type) {
        case "text":
          return <span key={idx}>{child.content}</span>;
        case "bold":
          return <strong key={idx}>{child.content}</strong>;
        case "italic":
          return <em key={idx}>{child.content}</em>;
        case "link": {
          const styledLink = (() => {
            const link = (
              <a href={child.href} target="_blank" rel="noopener noreferrer">
                {child.content}
              </a>
            );
            if (child.style === "bold")
              return <strong key={idx}>{link}</strong>;
            if (child.style === "italic") return <em key={idx}>{link}</em>;
            return link;
          })();
          return styledLink;
        }

        default:
          return null;
      }
    });
  }

  return content.map((block, index) => {
    const ListTag = block.ordered ? "ol" : "ul";

    switch (block.element) {
      case "p":
        return <p key={index}>{renderChildren(block.children)}</p>;
      case "h2":
        return <h2 key={index}>{block.content}</h2>;
      case "h3":
        return <h3 key={index}>{block.content}</h3>;
      case "codeblock":
        return (
          <pre key={index}>
            <code className={`language-${block.language}`}>
              {block.content}
            </code>
          </pre>
        );
      case "img":
        return <img key={index} src={block.src} alt={block.alt} />;
      case "list":
        return (
          <ListTag key={index}>
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ListTag>
        );
      default:
        return <p key={index}>{renderChildren(block.children)}</p>;
    }
  });
};

export default RichTextRenderer;
