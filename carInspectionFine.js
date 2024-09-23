<script src="https://kokwangwook.github.io/js/carInspectionFine.js"></script>

<div id="calculator">
    <h3>자동차 검사 과태료 계산기</h3>
    <label for="days">검사 지연 일수:</label>
    <input type="number" id="days" min="0">
    <button onclick="calculateAndDisplayFine()">과태료 계산</button>
    <div id="result"></div>
</div>

<script>
function calculateAndDisplayFine() {
    var days = document.getElementById('days').value;
    var fine = calculateFine(days);
    document.getElementById('result').innerHTML = '과태료: ' + fine.toLocaleString() + '원';
}
</script>
