function padTwo(number) {
    number = number.toString()
    return number.length<2 ? "0"+number:number
}