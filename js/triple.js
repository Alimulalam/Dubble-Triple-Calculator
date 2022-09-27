document.getElementById('triple-btn').addEventListener('click', function () {
    const tripleValue = getInputValue('triple-filed');
    if (isNaN(tripleValue) || tripleValue < 0) {
        swal.fire({
            icon: "error",
            title: "please enter a number"
        });
        return;
    }
    const triple = tripleValue * 3;
    setValueById('triple', triple);

});