function createCalculator() {
    // 스타일시트 로드
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://kokwangwook.github.io/js/styles.css'; // CSS 파일의 실제 URL로 변경하세요
    document.head.appendChild(link);

    // 계산기 컨테이너 생성
    var container = document.createElement('div');
    container.className = 'calculator-container';

    // 제목 추가
    var title = document.createElement('h2');
    title.textContent = '자동차 검사 과태료 계산기';
    container.appendChild(title);

    // 입력 필드 생성
    var label = document.createElement('label');
    label.textContent = '검사 지연 일수 입력:';
    container.appendChild(label);

    var input = document.createElement('input');
    input.type = 'number';
    input.id = 'days';
    input.placeholder = '검사 지연 일수를 입력하세요';
    input.min = '0';
    container.appendChild(input);

    // 버튼 생성
    var button = document.createElement('button');
    button.textContent = '과태료 계산';
    button.onclick = calculateAndDisplayFine;
    container.appendChild(button);

    // 결과 표시 영역 생성
    var result = document.createElement('div');
    result.id = 'result';
    container.appendChild(result);

    // 페이지에 계산기 추가
    document.body.appendChild(container);
}

function calculateAndDisplayFine() {
    var days = document.getElementById('days').value;
    if (days === "" || isNaN(days) || days < 0) {
        alert("올바른 지연 일수를 입력해주세요.");
        return;
    }
    var fine = calculateFine(parseInt(days));
    document.getElementById('result').innerHTML = '과태료: ' + fine.toLocaleString() + '원';
}

function calculateFine(daysOverdue) {
    // 기존의 과태료 계산 로직
    // ...
}

// 페이지 로드 시 계산기 생성
window.onload = createCalculator;
