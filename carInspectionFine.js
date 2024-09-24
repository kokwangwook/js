function calculateFine(daysOverdue) {
    let fine = 0;
    if (daysOverdue <= 30) {
        fine = 40000;
    } else if (daysOverdue <= 90) {
        fine = 40000 + Math.ceil((daysOverdue - 30) / 3) * 20000;
    } else {
        fine = 600000;
    }
    return Math.min(fine, 600000);
}
