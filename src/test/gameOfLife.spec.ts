import {CellState, createGrid, getCell, nextTick} from "../main/gameOfLife"

describe("a live cell with fewer than two live neighbours", () => {
    it("should die if on the next tick", () => {
        const grid = createGrid({rows: 3, columns: 3}, {x: 1, y: 1})
        const nextGrid = nextTick(grid)
        const cell = getCell({x: 1, y: 1}, nextGrid)

        expect(cell.state).toBe(CellState.Dead)
    })
})

describe("a live cell with two live neighbours", () => {
    it("should stay alive on the next tick", () => {
        const grid = createGrid({rows: 3, columns: 3}, {x: 0, y: 0}, {x: 1, y: 1},{x: 2, y: 2})

        const nextGrid = nextTick(grid)
        const cell = getCell({x: 1, y: 1}, nextGrid)

        expect(cell.state).toBe(CellState.Dead)
    })
})
