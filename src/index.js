module.exports = function toReadable (number) {
    const field = String(number)
    const collection = [
        {0: 'zero'}, {1: 'one'}, {2: 'two'}, {3: 'three'}, {4: 'four'}, {5: 'five'}, {6: 'six'}, {7: 'seven'}, {8: 'eight'}, {9: 'nine'}, {10: 'ten'},
        {11: 'eleven'}, {12: 'twelve'}, {13: 'thirteen'}, {14: 'fourteen'}, {15: 'fifteen'}, {16: 'sixteen'}, {17: 'seventeen'}, {18: 'eighteen'},
        {19: 'nineteen'}, {20: 'twenty'}, {30: 'thirty'}, {40: 'forty'}, {50: 'fifty'}, {60: 'sixty'}, {70: 'seventy'}, {80: 'eighty'}, {90: 'ninety'},
        {100: 'one hundred'}, {200: 'two hundred'}, {300: 'three hundred'}, {400: 'four hundred'}, {500: 'five hundred'}, {600: 'six hundred'},
        {700: 'seven hundred'}, {800: 'eight hundred'}, {900: 'nine hundred'}
    ]
    let result;

    for (let i = 0; i < collection.length; i++) {
        if (collection[i].hasOwnProperty(field)) {
            result = collection[i][field];
            break
        }
    }

    if (Number(field) > 10 && Number(field) < 20) {
        for (let i = 0; i < collection.length; i++) {
            if (collection[i].hasOwnProperty(field)) {
                result = collection[i][field];
                break
            }
        }
    }


    if (Number(field) > 20 && field.split('')[1] !== '0') {
        let twoDigit = field.split('')[0] + '0';
        let oneDigit = field.split('')[1];

        for (let i = 0; i < collection.length; i++) {
            if (collection[i].hasOwnProperty(twoDigit)) {
                twoDigit = collection[i][twoDigit]
                break
            }
        }
        for (let i = 0; i < collection.length; i++) {
            if (collection[i].hasOwnProperty(oneDigit)) {
                oneDigit = collection[i][oneDigit]
                break
            }
        }
        result = `${twoDigit} ${oneDigit}`
    }

    if (field.length === 3 && (field.split('').slice(1).join('') !== '00')) {
        let threeDigit = field.split('')[0] + '00';
        for (let i = 0; i < collection.length; i++) {
            if (collection[i].hasOwnProperty(threeDigit)) {
                threeDigit = collection[i][threeDigit];
                break
            }
        }

        let oneDigit = field.split('')[2];
        for (let i = 0; i < collection.length; i++) {
            if (collection[i].hasOwnProperty(oneDigit)) {
                oneDigit = collection[i][oneDigit];
                break
            }
        }

        if (field.split('')[1] === '0') {
            result = `${threeDigit} ${oneDigit}`
        } else if (field.split('')[1] === '1') {
            let twoDigit = field.split('').slice(1).join('')
            for (let i = 0; i < collection.length; i++) {
                if (collection[i].hasOwnProperty(twoDigit)) {
                    twoDigit = collection[i][twoDigit];
                    break
                }
            }
            result = `${threeDigit} ${twoDigit}`
        } else if (field.split('')[2] === '0') {
            let twoDigit = field.split('')[1] + '0'
            for (let i = 0; i < collection.length; i++) {
                if (collection[i].hasOwnProperty(twoDigit)) {
                    twoDigit = collection[i][twoDigit];
                    break
                }
            }
            result = `${threeDigit} ${twoDigit}`

        } else {
            let twoDigit = field.split('')[1] + '0'
            for (let i = 0; i < collection.length; i++) {
                if (collection[i].hasOwnProperty(twoDigit)) {
                    twoDigit = collection[i][twoDigit];
                    break
                }
            }
            result = `${threeDigit} ${twoDigit} ${oneDigit}`
        }
    }
    return result;

}
