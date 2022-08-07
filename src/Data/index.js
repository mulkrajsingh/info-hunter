import Content from "./Content";

export const getContent = (key) => {
  return Content[key] ?? key;
};

export default getContent;
