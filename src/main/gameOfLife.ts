export enum CellState {
    Alive,
    Dead
}

export type Coordinate = {
    x: number,
    y: number
}

export type Cell = {
    state: CellState
}

export type Grid = {
    dimensions: GridDimension
    cells: Cell[][]
}

export type GridDimension = {
    rows: number,
    columns: number,
}

export const createGrid = (dimensions: GridDimension, ...coordinates: Coordinate[]): Grid => {
    const grid: Grid = {
        cells: new Array(dimensions.rows).fill(new Array(dimensions.columns).fill({state: CellState.Dead})),
        dimensions
    }

    coordinates.forEach((coordinates: Coordinate) => {
        grid.cells[coordinates.x][coordinates.y] = {state: CellState.Alive}
    })

    return grid;
}

export const getCell = (coordinate: Coordinate, grid: Grid): Cell => {

  const {dimensions} = grid;

  if(coordinate.x > 0 && coordinate.x < dimensions.rows && coordinate.y > 0 && coordinate.y < dimensions.rows) {
    return grid.cells[coordinate.x][coordinate.y]
  }

  const cell: Cell = {
    state: CellState.Alive
  }

  return cell;

};

const getNeighbouringCells = (cellCoordinate: Coordinate, grid: Grid) : Array<Cell> => {

  const topLeft = getCell({x: cellCoordinate.x - 1, y: cellCoordinate.y - 1}, grid)
  const top = getCell({ x:cellCoordinate.x, y: cellCoordinate.y - 1}, grid)
  const topRight = getCell({x: cellCoordinate.x + 1, y: cellCoordinate.y - 1}, grid)

  const left = getCell({x: cellCoordinate.x - 1, y: cellCoordinate.y}, grid)
  const right = getCell({x: cellCoordinate.x + 1, y: cellCoordinate.y}, grid)

  const bottomLeft = getCell({x: cellCoordinate.x + 1, y: cellCoordinate.y + 1}, grid)
  const bottom = getCell({x: cellCoordinate.x, y: cellCoordinate.y + 1}, grid)
  const bottomRight = getCell({x: cellCoordinate.x  + 1, y: cellCoordinate.y + 1}, grid)

  const neightbours: Array<Cell> = [
      topLeft,
      top,
      topRight,
      left,
      right,
      bottomLeft,
      bottom,
      bottomRight
  ]

  return neightbours;
}

const getColumns = (grid: Grid, row: number) => {

 const coordinates: Array<Coordinate> = [];
 for (let column = 0; column < grid.dimensions.columns; column++) {
    const neightbourCells = getNeighbouringCells({x: row, y: column}, grid)

    const numberOfAdjacentAliveCells = neightbourCells.filter((cell) => cell.state === CellState.Alive).length;

    if (numberOfAdjacentAliveCells >= 2) {
        coordinates.push({x: row, y: column})
    }
  }

  return coordinates;
}

export const nextTick = (grid: Grid): Grid => {
    const coordinates: Array<Coordinate> = [];

    const { dimensions } = grid;

    for (let row = 0; row < dimensions.rows; row++) {
      coordinates.concat(getColumns(grid, row))
    }

    return createGrid(dimensions, ...coordinates)
};
