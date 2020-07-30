document.getElementById('clear').addEventListener('click', function () {
    displayDigit.value = displayDigit.value.slice(0, -1)
});

document.getElementById('clearAll').addEventListener('click', function () {
    displayDigit.value = "";
});

