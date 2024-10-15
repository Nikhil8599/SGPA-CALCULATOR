function calculateSGPA() {
    let totalCredits = 0;
    let totalGradePoints = 0;

    for (let i = 1; i <= 10; i++) {
        const credit = parseFloat(document.getElementById(`credit${i}`).value);
        const grade = parseFloat(document.getElementById(`grade${i}`).value);

        if (!isNaN(credit) && !isNaN(grade)) {
            totalCredits += credit;
            totalGradePoints += credit * grade;
        }
    }

    const sgpa = totalGradePoints / totalCredits;
    document.getElementById('sgpa').textContent = sgpa.toFixed(2);
}
