function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line){
  if(line.length > 0){
    var nextInLine = line[0];
    line.shift();
    return `Currently serving ${nextInLine}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
  var current = `The line is currently: `;
  if (line.length > 0){
    for (let i = 0; i < line.length; i++){
      current += `${i+1}. ${line[i]}`;
      if(i != line.length - 1){
        current += `, `;
      }
    }
  } else {
    current = `The line is currently empty.`;
  }
  return current;
}
