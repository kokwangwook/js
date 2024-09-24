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
    if (days === "" || isNaN(days) || days < 0) {
        alert("올바른 지연 일수를 입력해주세요.");
        return;
    }
    var fine = calculateFine(parseInt(days));
    document.getElementById('result').innerHTML = '과태료: ' + fine.toLocaleString() + '원';
}

// 페이지 로드 시 계산기 함수가 있는지 확인
window.onload = function() {
    if (typeof calculateFine !== 'function') {
        console.error('calculateFine 함수를 찾을 수 없습니다. carInspectionFine.js 파일이 제대로 로드되었는지 확인하세요.');
    }
};
</script>
