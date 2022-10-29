module.exports = (maxValue = 15, minValue = 7) => {
    return (maxValue - Math.random() * minValue).toFixed(1)
}