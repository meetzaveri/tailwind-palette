export function pad(number: string, length: any) {
    let str = '' + number
    while (str.length < length) {
        str = '0' + str
    }
    return str
}

export function intToHex(rgbint: number) {
    return pad(Math.min(Math.max(Math.round(rgbint), 0), 255).toString(16), 2)
}

export function rgbToHex(rgb: any) {
    return intToHex(rgb.red) + intToHex(rgb.green) + intToHex(rgb.blue)
}

export function hexToRGB(colorValue: string) {
    return {
        red: parseInt(colorValue.substr(0, 2), 16),
        green: parseInt(colorValue.substr(2, 2), 16),
        blue: parseInt(colorValue.substr(4, 2), 16),
    }
}

export function calculate(colorValue: string, shadeOrTint: any) {
    let color = hexToRGB(colorValue)
    let shadeValues = []

    for (let i = 0; i < 10; i++) {
        shadeValues[i] = rgbToHex(shadeOrTint(color, i))
        console.log('colorValue calc tints', rgbToHex(shadeOrTint(color, i)))
    }
    console.log('colorValue calc tints', shadeValues)
    return shadeValues
}

export function rgbShade(rgb: any, i: any) {
    return {
        red: rgb.red * (1 - 0.1 * i),
        green: rgb.green * (1 - 0.1 * i),
        blue: rgb.blue * (1 - 0.1 * i),
    }
}

export function rgbTint(rgb: any, i: any) {
    return {
        red: rgb.red + (255 - rgb.red) * i * 0.1,
        green: rgb.green + (255 - rgb.green) * i * 0.1,
        blue: rgb.blue + (255 - rgb.blue) * i * 0.1,
    }
}

export function calculateShades(colorValue: string) {
    return calculate(colorValue, rgbShade).concat('000000')
}

export function calculateTints(colorValue: string) {
    return calculate(colorValue, rgbTint).concat('ffffff')
}
