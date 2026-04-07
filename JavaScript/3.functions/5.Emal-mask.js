function maskEmail(email) {
  let end_index = email.indexOf("@");
  let email_at = email.slice(end_index);
  let last_char = email[end_index - 1]
  return `${email[0]}${"*".repeat(end_index - 2)}${last_char}${email_at}`
}

let email = ("apple.pie@example.com");
console.log(maskEmail(email));

email = ("freecodecamp@example.com");
console.log(maskEmail(email));

email = ("info@test.dev");
console.log(maskEmail(email));

email = ("user@domain.org");
console.log(maskEmail(email));
