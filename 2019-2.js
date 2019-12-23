function run(input) {
    let i = 0;
    let stop = false
    do {
        stop = singleEval(
            input[i],
            input[i + 1],
            input[i + 2],
            input[i + 3],
            input)
        i += 4
    } while(!stop)
    
    return input
}

function singleEval(one, two, three, four, input) {
    if (one === 99) {
        return true
    } else if (one === 1) {
        input[four] = input[two] + input[three]
    } else if (one === 2) {
        input[four] = input[two] * input[three]
    }
    return false
}

function partOne() {
    master[1] = 12
    master[2] = 2
    return run(master)[0];
}

function partTwo() {
    for (let i = 0; i < 99; i++){
        for (let j = 0; j < 99; j++) {
            let input = master.slice()
            input[1] = i;
            input[2] = j;
            const result = run(input)[0]
            if (result === 19690720) {
                return (100 * i) + j
            }
        }
    }
}

export default {
    run,
    partOne,
    partTwo
}

const master = [1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 13, 19, 2, 9, 19, 23, 1, 23, 6, 27, 1, 13, 27, 31, 1, 31, 10, 35, 1, 9, 35, 39, 1, 39, 9, 43, 2, 6, 43, 47, 1, 47, 5, 51, 2, 10, 51, 55, 1, 6, 55, 59, 2, 13, 59, 63, 2, 13, 63, 67, 1, 6, 67, 71, 1, 71, 5, 75, 2, 75, 6, 79, 1, 5, 79, 83, 1, 83, 6, 87, 2, 10, 87, 91, 1, 9, 91, 95, 1, 6, 95, 99, 1, 99, 6, 103, 2, 103, 9, 107, 2, 107, 10, 111, 1, 5, 111, 115, 1, 115, 6, 119, 2, 6, 119, 123, 1, 10, 123, 127, 1, 127, 5, 131, 1, 131, 2, 135, 1, 135, 5, 0, 99, 2, 0, 14, 0];