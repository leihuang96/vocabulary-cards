//class declaration, create a new object type
class Vocabulary {
  //define parameters
  constructor(emoji, word, definition, example, star, pronounce, image) {
    //define properties
    this.emoji = emoji;
    this.word = word;
    this.definition = definition;
    this.example = example;
    this.star = star;
    this.pronounce = pronounce;
    this.image = image;
  }
  //add object method
  saveIt(saveStatus) {
    this.star = saveStatus;
  }
}

// Export the  class to be used by other files
export default Vocabulary;
