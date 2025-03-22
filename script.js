const prefixes = [
    "Sir", "Lady", "Captain", "Dr.", "Mr.", "Ms.", "Professor", "Count", "Lord", "Queen",
    "Baron", "Duchess", "Chief", "Admiral", "Mayor", "General", "Major", "Bishop", "Squire", "Detective"
  ];
  
  const adjectives = [
    "Fluffy", "Sneaky", "Wiggly", "Sassy", "Meowster", "Bouncy", "Zonky", "Furball", "Chonky", "Sleepy",
    "Grumpy", "Zesty", "Spicy", "Whiny", "Derpy", "Slippery", "Saucy", "Majestic", "Nimble", "Yappy"
  ];
  
  const nouns = [
    "Whiskers", "Paws", "Snugglebutt", "Fuzzinator", "Scratchface", "Naplord", "Mittens", "Wigglepants", "Meowington", "Clawzilla",
    "TunaToes", "Wafflefur", "Boots", "Noodle", "Cheeseball", "Snifflebean", "Wiggles", "Jellypaws", "Meowzart", "Furbinator"
  ];
  
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  function generateCatName() {
    const name = `${getRandomElement(prefixes)} ${getRandomElement(adjectives)} ${getRandomElement(nouns)}`;
    document.getElementById('catName').textContent = name;
    document.getElementById('catImage').src = `https://cataas.com/cat?random=${Math.random()}`;
  }
  