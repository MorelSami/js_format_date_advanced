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
  const partitions = [];

  for (let i = 0; i < 3; i++) {
    partitions[fromFormat[i]] = date.split(fromFormat.at(-1))[i];
  }

  let newFormat = '';

  for (let i = 0; i < toFormat.length - 1; i++) {
    let pDate = '';

    switch (toFormat[i]) {
      case 'MM':
      case 'DD':
        pDate = partitions[toFormat[i]];
        break;
      default:
        if (toFormat[i].length === 2) {
          pDate = partitions[toFormat[i]].slice(-1, -3);
        } else {
          pDate =
            partitions[toFormat[i]] < 30
              ? `19${partitions[toFormat[i]]}`
              : `20${partitions[toFormat[i]]}`;
        }
        break;
    }

    newFormat +=
      i + 1 === toFormat.length ? `${pDate}` : `${pDate}${toFormat.at(-1)}`;
  }

  /* eslint no-console: ["error", { allow: ["warn", "log"] }] */
  console.log(newFormat);

  return newFormat;
}

module.exports = formatDate;
