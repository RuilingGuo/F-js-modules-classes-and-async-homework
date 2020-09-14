async function getPoetry() {
  let result = [];
  await fetch("https://v1.jinrishici.com/all.json")
    .then((response) => response.json())
    .then((data) => {
      result = [data.origin, data.author, data.content];
    })
    .catch((err) => console.log(err));
  return result;
}

export { getPoetry };
