'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  // write code here
  const partitions = {};

  for (let i = 0; i < 3; i++) {
    partitions[fromFormat[i][0]] = date.split(fromFormat.at(-1))[i];
  }

  let newFormat = '';

  for (let i = 0; i < toFormat.length - 1; i++) {
    let pDate = '';

    switch (toFormat[i]) {
      case 'MM':
      case 'DD':
        pDate = partitions[toFormat[i][0]];
        break;
      default:
        pDate = partitions[toFormat[i][0]];

        if (
          toFormat[i].length === 2 &&
          partitions[toFormat[i][0]].length === 4
        ) {
          pDate = partitions[toFormat[i][0]].slice(-2);
        }

        if (partitions[toFormat[i][0]].length === 2) {
          pDate =
            partitions[toFormat[i][0]] < 30
              ? `20${partitions[toFormat[i][0]]}`
              : `19${partitions[toFormat[i][0]]}`;
        }
        break;
    }

    newFormat +=
      i + 1 === toFormat.length - 1 ? `${pDate}` : `${pDate}${toFormat.at(-1)}`;
  }

  return newFormat;
}

module.exports = formatDate;
