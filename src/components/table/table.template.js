const CODES = {
  A: 65,
  Z: 90,
};

function createCell() {
  return `
  <div class="cell" contenteditable>
  </div>`;
}

function toColumn(col) {
  return `
      <div class="column">
        ${col}
      </div>`;
}

function createRow(index, content) {
  return `
    <div class="row">
        <div class="row-info">${index ? index : " "}</div>
        <div class="row-data">${content}</div>
    </div>`;
}

function toChar(_, i) {
  return String.fromCharCode(CODES.A + i);
}

export function createTable(rowsCount = 15) {
  const colsCoutn = CODES.Z - CODES.A + 1;

  const rows = [];

  const cols = new Array(colsCoutn).fill("").map(toChar).map(toColumn).join("");

  console.log(new Array(colsCoutn).fill("").map(toChar).map(toColumn));

  const spaceCols = new Array(colsCoutn).fill("").map(createCell).join("");

  rows.push(createRow(null, cols));

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(i + 1, spaceCols));
  }
  return rows.join("");
}
