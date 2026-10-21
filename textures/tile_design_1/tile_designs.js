const r = require("raylib");

function drawTexture1(row, column, startX, startY, t, source) {
  const texture = t.target.texture;
  const pos = {
    x: startX + t.width * column,
    y: startY + t.height * row,
  };

  if (row % 2 === 0) {
    r.DrawTextureV(texture, pos, r.WHITE);
  } else {
    r.DrawTextureRec(texture, source, pos, r.WHITE);
  }
}

function drawTile1(row, column, startX, startY, texture, source) {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      drawTexture1(i, j, startX, startY, texture, source);
    }
  }
}

function drawTexture2(row, column, startX, startY, t, source) {
  const texture = t.target.texture;
  const pos = {
    x: startX + t.width * column,
    y: startY + t.height * row,
  };

  if (column % 2 === 0) {
    r.DrawTextureV(texture, pos, r.WHITE);
  } else {
    r.DrawTextureRec(texture, source, pos, r.WHITE);
  }
}

function drawTile2(row, column, startX, startY, texture, source) {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      drawTexture2(i, j, startX, startY, texture, source);
    }
  }
}

function drawTexture3(row, column, startX, startY, t, source) {
  const texture = t.target.texture;
  const pos = {
    x: startX + t.width * column,
    y: startY + t.height * row,
  };

  if ((row + column) % 2 === 0) {
    r.DrawTextureV(texture, pos, r.WHITE);
  } else {
    r.DrawTextureRec(texture, source, pos, r.WHITE);
  }
}

function drawTile3(row, column, startX, startY, texture, source) {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      drawTexture3(i, j, startX, startY, texture, source);
    }
  }
}

function drawTexture4(row, column, startX, startY, t, source) {
  const texture = t.target.texture;
  const pos = {
    x: startX + t.width * column,
    y: startY + t.height * row,
  };

  if ((row + column) % 6 % 3 === 0) {
    r.DrawTextureV(texture, pos, r.WHITE);
  }
  if ((row + column) % 6 % 3 === 1) {
    r.DrawTextureRec(texture, source, pos, r.WHITE);
  }
  if ((row + column) % 6 % 3 === 2) {
    r.DrawTextureV(texture, pos, r.WHITE);
  }
}

function drawTile4(row, column, startX, startY, texture, source) {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      drawTexture4(i, j, startX, startY, texture, source);
    }
  }
}

function drawTexture5(row, column, startX, startY, t, source) {
  const texture = t.target.texture;
  const pos = {
    x: startX + t.width * column,
    y: startY + t.height * row,
  };

  if ((row * column) % 6 % 2 === 0) {
    r.DrawTextureV(texture, pos, r.WHITE);
  }
  if ((row * column) % 6 % 2 === 1) {
    r.DrawTextureRec(texture, source, pos, r.WHITE);
  }
}

function drawTile5(row, column, startX, startY, texture, source) {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      drawTexture5(i, j, startX, startY, texture, source);
    }
  }
}

function drawTexture6(row, column, startX, startY, t, source) {
  const texture = t.target.texture;
  const pos = {
    x: startX + t.width * column,
    y: startY + t.height * row,
  };

  if ((row * column) % 6 % 3 === 0) {
    r.DrawTextureV(texture, pos, r.WHITE);
  }
  if ((row * column) % 6 % 3 === 1) {
    r.DrawTextureRec(texture, source, pos, r.WHITE);
  }
  if ((row * column) % 6 % 3 === 2) {
    r.DrawTextureV(texture, pos, r.WHITE);
  }
}

function drawTile6(row, column, startX, startY, texture, source) {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      drawTexture6(i, j, startX, startY, texture, source);
    }
  }
}

function drawTexture7(row, column, startX, startY, t, source) {
  const texture = t.target.texture;
  const pos = {
    x: startX + t.width * column,
    y: startY + t.height * row,
  };

  if (column > row) {
    if (column % 2 === 0) {
      r.DrawTextureV(texture, pos, r.WHITE);

    } else {
      r.DrawTextureRec(texture, source, pos, r.WHITE);
    }
  } else {
    if (row % 2 === 0) {
      r.DrawTextureV(texture, pos, r.WHITE);
    } else {
      r.DrawTextureRec(texture, source, pos, r.WHITE);
    }
  }
}

function drawTile7(row, column, startX, startY, texture, source) {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      drawTexture7(i, j, startX, startY, texture, source);
    }
  }
}

function drawTexture8(row, column, startX, startY, t, source) {
  const texture = t.target.texture;
  const pos = {
    x: startX + t.width * column,
    y: startY + t.height * row,
  };

  if (column > row) {
    if (row % 2 === 0) {
      r.DrawTextureV(texture, pos, r.WHITE);

    } else {
      r.DrawTextureRec(texture, source, pos, r.WHITE);
    }
  } else {
    if (column % 2 === 0) {
      r.DrawTextureV(texture, pos, r.WHITE);
    } else {
      r.DrawTextureRec(texture, source, pos, r.WHITE);
    }
  }
}

function drawTile8(row, column, startX, startY, texture, source) {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      drawTexture8(i, j, startX, startY, texture, source);
    }
  }
}

function drawTexture9(row, column, startX, startY, t, source) {
  const texture = t.target.texture;
  const pos = {
    x: startX + t.width * column,
    y: startY + t.height * row,
  };

  if (column >= row) {
    r.DrawTextureV(texture, pos, r.WHITE);
  } else {
    r.DrawTextureRec(texture, source, pos, r.WHITE);
  }
}

function drawTile9(row, column, startX, startY, texture, source) {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      drawTexture9(i, j, startX, startY, texture, source);
    }
  }
}

module.exports = {
  drawTile1,
  drawTile2,
  drawTile3,
  drawTile4,
  drawTile5,
  drawTile6,
  drawTile7,
  drawTile8,
  drawTile9,
};