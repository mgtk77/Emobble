// function that returns a random number between a min and max
export function getRandomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

function copyArray(array: any[]): any[] {
    return Object.assign([], array);
}

export function shuffleArray(array: any[]): any[] {
    let copiedArray = copyArray(array)
    let currentIndex = copiedArray.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [copiedArray[currentIndex], copiedArray[randomIndex]] = [
            copiedArray[randomIndex], copiedArray[currentIndex]];
    }

    return copiedArray;
}