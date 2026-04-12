function whatIsInAName(collection, source) {
  let sourceKeys = Object.keys(source);

  return collection.filter(obj => {
    return sourceKeys.every(key => obj[key] === source[key]);
  });
}
