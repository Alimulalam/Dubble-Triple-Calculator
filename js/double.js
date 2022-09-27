document.getElementById('double-btn').addEventListener('click', function () {
    const doubleValue = getInputValue('double-filed');

    if (isNaN(doubleValue) || doubleValue < 0) {
        swal.fire({
            icon: "error",
            title: "Please Inter Number"
        });
        return;
    }

    const double = doubleValue * 2;
    setValueById('double', double);
});
