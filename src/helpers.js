function padTwo(number) {
    number = number.toString()
    return number.length<2 ? "0"+number:number
}
function secondsToString(seconds) {
    const displaySeconds = padTwo(seconds % 60);
    const displayMinutes = padTwo((seconds - displaySeconds) / 60);
    return `${displayMinutes}:${displaySeconds}`;
}
module.exports = {secondsToString}