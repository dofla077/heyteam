console.log('TEST STATED')

var values = [
    [180, 161, 102, 31, 31, 46, 175, 199, 106, 89, 137, 200, 199, 126, 159, 114, 184, 198, 10, 183, 30, 150, 47, 187, 35, 126, 131, 159, 173, 178, 174, 69, 87, 157, 75, 190, 181, 122, 65, 19, 63, 67, 56, 115, 65, 162, 159, 144, 77, 36],
    [195, 31, 102, 148, 119, 28, 190, 197, 145, 190, 84, 91, 62, 101, 72, 178, 81, 92, 119, 103, 183, 57, 122, 47, 170, 12, 19, 193, 196, 199, 47, 43, 85, 152, 158, 151, 42, 26, 112, 44, 163, 186, 50, 121, 152, 49, 169, 136, 198, 98],
    [26, 98, 102, 120, 105, 153, 47, 167, 188, 41, 121, 109, 16, 199, 83, 196, 188, 101, 122, 121, 193, 59, 77, 27, 43, 55, 70, 186, 24, 118, 185, 63, 122, 68, 119, 0, 16, 44, 181, 135, 102, 43, 134, 91, 180, 152, 94, 169, 110, 96],
];

let tbody = document.querySelector("tbody");

/**
 * Set color red
 *
 * @param cell
 * @param indexRow
 * @param value
 * @param position
 * @returns {boolean}
 */
function seColorRed(cell, indexRow, value, position = 1) {
    let arr = values[values.length - position]

    if (arr !== undefined) {
        if ((value < 100) && ((values.length - position) !== indexRow) && !arr.includes(value)) {
            seColorRed(cell, indexRow, value, position + 1)
        } else if (((values.length - position) === indexRow) && value < 100) {
            cell.setAttribute('class', 'red')
        }
    }

    return false
}

/**
 * Set color Green
 *
 * @param cell
 * @param indexRow
 * @param value
 * @param counter
 * @param position
 * @returns {boolean}
 */
function setColorGreen(cell, indexRow, value, counter = 0, position = 0) {
    let arr = values[position]
    if (arr !== undefined) {
        if ((value > 100) && (position !== indexRow) && (arr.includes(value) && (counter < 2))) {
            setColorGreen(cell, indexRow, value, counter + 1, position + 1)
        } else if ((value > 100) && (position !== indexRow) && (!arr.includes(value) && (counter < 2))) {
            setColorGreen(cell, indexRow, value, counter, position + 1)
        } else if ((value > 100) && (position === indexRow) && (counter < 2)) {
            cell.setAttribute('class', 'green')
        }
    }

    return false
}

/**
 * Set row
 *
 * @param row
 * @param indexRow
 * @param column
 * @returns {Element}
 */
function setRow(row, indexRow, column) {
    if (indexRow === 0) {
        row = tbody.insertRow(column);
        row.setAttribute('data-row', column)
    } else {
        row = document.querySelectorAll('[data-row="' + column + '"]')[0]
    }

    return row
}

/**
 * set cell
 *
 * @param cell
 * @param indexRow
 * @param column
 * @returns {HTMLTableCellElement}
 */
function setCell(cell, indexRow, column) {
    cell = row.insertCell(indexRow);
    cell.innerHTML = values[indexRow][column];

    return cell;
}

let cell;
let row;
for (let indexRow = 0; indexRow < values.length; indexRow++) {
    for (let column = 0; column < values[indexRow].length; column++) {
        row = setRow(row, indexRow, column);
        if (row) {
            cell = setCell(cell, indexRow, column);
            if (cell) {
                seColorRed(cell, indexRow, values[indexRow][column])
                setColorGreen(cell, indexRow, values[indexRow][column])
            } else {
                console.log('ERROR cell can\'t found')
            }
        } else {
            console.log('ERROR row can\'t found')
        }
    }
}

