// To safely send data in a URL, the data first has to be encoded to convert any special characters to URL safe characters. For this assignment we will only focus on the following URL encoding rules:

// %20 represents a space character.
// Key-value pairs are represented using an = character: key=value
// Multiple key-value pairs are separated using a & character: key1=value1&key2=value2


const urlDecode = function(text) {
  const pairs = text.split("&"); // Split the text into key-value pairs using the "&" separator
  const result = {}; // Create an empty object to store the key-value pairs

  for (let pair of pairs) { // Loop through each key-value pair
    const [key, value] = pair.split("="); // Split the pair into its key and value components

    // Replace "%20" with spaces and decode the rest of the URL encoding
    result[key] = decodeURIComponent(value.replace(/\+/g, " "));
  }

  return result; // Return the object with the key-value pairs
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);