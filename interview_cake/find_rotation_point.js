const find_rotation_point = function(words){
  let floorIndex = 0;
  let ceilingIndex = words.length;

  while(floorIndex + 1 < ceilingIndex){
    const distance = ceilingIndex - floorIndex;
    const halfDistance = Math.floor(distance/2);
    const guessIndex = halfDistance + floorIndex;

    const guessValue = words[guessIndex];

    console.log(distance, halfDistance, guessIndex, guessValue, words[floorIndex])

    if (guessValue < words[floorIndex]){ // rotation is somewhere to the left
      // set new ceiling
      ceilingIndex = guessIndex;
    }
    else{ // rotation is somewhere to the right
      // set new floor
      floorIndex = guessIndex;
    }

  }
  //console.log(floorIndex, ceilingIndex);
  return ceilingIndex;
}


const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
  ];

let output = find_rotation_point(words);
console.log(output);
