module.exports = function toReadable(number) {
    let words = [];
    const hunders = Math.floor(number / 100);
    const prob = (number / 100).toString().slice(2, 3)
    const units = Number((number%100).toString().slice(-1));
    const sec = Number(prob + '' + units);

    if ( number === 0) return unitStr[0]

    if (number % 100 === 0) words.push(unitStr[hunders], 'hundred');

    if (number > 99 && sec < 20 && number % 100 !== 0) words.push(unitStr[hunders], 'hundred', unitStr[sec]);

    if (number > 99 && sec > 19 && units !== 0)  words.push(unitStr[hunders], 'hundred', tenStr[prob], unitStr[units]);

    if (number > 99 && sec > 19 && units === 0) words.push(unitStr[hunders], 'hundred', tenStr[prob]);

    if (number > 19 && number < 100) {
        if (units === 0) {
            words.push(tenStr[prob])
        } else {
            words.push(tenStr[prob], unitStr[units])
        }
    }

    if (number > 0 && number < 20)  words.push(unitStr[number]);

    return words.join(' ')
}
const unitStr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
                 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tenStr = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']