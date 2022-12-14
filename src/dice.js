export function getRound(dice) {
    return dice.split(",").map(getFace).map(pickOne);
  }
  
  function getFace(dice) {
    const faces = [];
    for (let i = 0; i < dice.length; i++) {
      const face = dice[i];
      if (face === "Q") {
        i++;
        faces.push(face + dice[i]);
      } else {
        faces.push(face);
      }
    }
    return faces;
  }
  
  function pickOne(faces) {
    const index = Math.floor(Math.random() * (faces.length - 1));
    //console.log(faces, index, faces[index]);
    return faces[index];
  }