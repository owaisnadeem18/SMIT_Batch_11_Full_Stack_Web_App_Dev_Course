// Question 01

// Write a JavaScript function getDomain that takes a URL as an input and returns the domain name of the website. The function should handle various types of URLs, including those with http, https, and without a protocol prefix. Additionally, it should correctly handle URLs with www and without www.

let enterWeb = prompt("Enter Your Website");

let getDomain = (website) => {
  website = website.trim();

  if (website.startsWith("http://")) {
    website = website.substring(7);
  } else if (website.startsWith("https://")) {
    website = website.substring(8);
  }

  if (website.startsWith("www.")) {
    website = website.substring(4);
  }

  let domain = website.split(".").slice(-2).join(".");
  return domain;
};

console.log(getDomain(enterWeb));
