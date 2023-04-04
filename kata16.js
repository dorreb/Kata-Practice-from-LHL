// In this exercise, we will be building an advanced case maker that can convert strings into all different kinds of case styles; like camel, pascal, snake, or even kebab.

const makeCase = function(input, caseNames) {
  if (!Array.isArray(caseNames)) {
    caseNames = [caseNames];
  }

  let result = input;

  for (let i = 0; i < caseNames.length; i++) {
    const caseName = caseNames[i];

    if (caseName === "camel") {
      const words = result.split(' ');
      words[0] = words[0].toLowerCase();
      for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase();
      }
      result = words.join('');
    } else if (caseName === "pascal") {
      const words = result.split(' ');
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase();
      }
      result = words.join('');
    } else if (caseName === "snake") {
      const words = result.split(' ');
      result = words.join('_');
    } else if (caseName === "kebab") {
      const words = result.split(' ');
      result = words.join('-');
    } else if (caseName === "title") {
      const words = result.split(' ');
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase();
      }
      result = words.join(' ');
    } else if (caseName === "vowel") {
      result = result.replace(/[aeiou]/g, (match) => match.toUpperCase());
    } else if (caseName === "consonant") {
      result = result.replace(/[^aeiou]/g, (match) => match.toUpperCase());
    } else if (caseName === "upper") {
      result = result.toUpperCase();
    }
  }

  return result;
};
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));