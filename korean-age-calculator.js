document.addEventListener('DOMContentLoaded', function() {
    // 첫 번째 계산기 스크립트
    document.getElementById('calculateBtn').addEventListener('click', calculateAges);
    document.getElementById('resetBtn').addEventListener('click', resetForm1);
    
    // 두 번째 계산기 스크립트
    document.getElementById('calculateBtn2').addEventListener('click', calculateMannai);
    document.getElementById('resetBtn2').addEventListener('click', resetForm2);
    
    function calculateAges() {
        const today = new Date();
        const birthYear = parseInt(document.getElementById("year").value);
        const birthMonth = parseInt(document.getElementById("month").value);
        const birthDay = parseInt(document.getElementById("day").value);
        const errorDiv = document.getElementById('error1');
        const resultDiv = document.getElementById('result1');
        
        // 초기화
        errorDiv.textContent = '';
        resultDiv.innerHTML = '';
        
        // 입력값 유효성 검사
        if (!birthYear || !birthMonth || !birthDay) {
            errorDiv.textContent = '생년월일을 모두 입력해 주세요.';
            return;
        }
        
        // 유효한 날짜인지 검사 (윤년 포함)
        if (!isValidDate(birthYear, birthMonth, birthDay)) {
            errorDiv.textContent = '유효한 생년월일을 입력해 주세요.';
            return;
        }
        
        const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
        
        if (birthDate > today) {
            errorDiv.textContent = '생년월일은 현재 날짜보다 이전이어야 합니다.';
            return;
        }
        
        // 만 나이 계산 (한국 기준)
        let age = today.getFullYear() - birthYear;
        if (today.getMonth() < birthMonth - 1 || 
            (today.getMonth() == birthMonth - 1 && today.getDate() < birthDay)) {
            age--;
        }
        
        if (age >= 0) {
            resultDiv.textContent = `만 나이: ${age}세`;
        } else {
            resultDiv.textContent = `아직 태어나지 않았습니다.`;
        }
    }
    
    function resetForm1() {
        document.getElementById('year').value = '';
        document.getElementById('month').value = '';
        document.getElementById('day').value = '';
        document.getElementById('error1').textContent = '';
        document.getElementById('result1').innerHTML = '';
    }

    function calculateMannai() {
        const dobInput = document.getElementById('dob2').value;
        const refDateInput = document.getElementById('refDate2').value;
        const errorDiv = document.getElementById('error2');
        const resultDiv = document.getElementById('result2');
        
        // 초기화
        errorDiv.textContent = '';
        resultDiv.textContent = '';
        
        if (!dobInput || !refDateInput) {
            errorDiv.textContent = '생년월일과 기준 날짜를 모두 선택해 주세요.';
            return;
        }
        
        const dob = new Date(dobInput);
        const refDate = new Date(refDateInput);
        
        if (dob > refDate) {
            errorDiv.textContent = '생년월일은 기준 날짜보다 이전이어야 합니다.';
            return;
        }
        
        // 유효한 날짜인지 추가 검사 (윤년 포함)
        const [year, month, day] = dobInput.split('-').map(Number);
        if (!isValidDate(year, month, day)) {
            errorDiv.textContent = '유효한 생년월일을 입력해 주세요.';
            return;
        }

        // 만 나이 계산 (한국 기준)
        let age = refDate.getFullYear() - dob.getFullYear();
        if (refDate.getMonth() < dob.getMonth() || 
            (refDate.getMonth() == dob.getMonth() && refDate.getDate() < dob.getDate())) {
            age--;
        }
        
        if (age >= 0) {
            resultDiv.textContent = `만 나이: ${age}세`;
        } else {
            resultDiv.textContent = `아직 태어나지 않았습니다.`;
        }
    }
    
    function resetForm2() {
        document.getElementById('dob2').value = '';
        document.getElementById('refDate2').value = '';
        document.getElementById('error2').textContent = '';
        document.getElementById('result2').textContent = '';
    }

    // 유효한 날짜인지 검사하는 함수 (윤년 포함)
    function isValidDate(year, month, day) {
        const date = new Date(year, month - 1, day);
        return date.getFullYear() === year && 
               (date.getMonth() + 1) === month && 
               date.getDate() === day;
    }
});
