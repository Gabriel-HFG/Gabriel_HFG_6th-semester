function truncateString(string,number) {
  if (string.length > number) {
    return console.log(`${string.replace(string.slice(number),"")}...`);
  } else {
    return string
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8)
