const shuffleArray = <T>(array: T[]): T[] => {
  const shuffledArray = [...array]; // Create a copy of the original array
  
  // Fisher-Yates shuffle algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
  }
  
  return shuffledArray;
}

export default shuffleArray;