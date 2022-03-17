export default (id: number) => {
  let tag = id.toString();
  while (tag.length < 3) {
    tag = "0" + tag;
  }
  tag = "#" + tag;

  return tag;
};
