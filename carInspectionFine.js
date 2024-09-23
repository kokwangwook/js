   function calculateFine(daysOverdue) {
       let fine = 0;
       if (daysOverdue <= 30) {
           fine = 20000;
       } else if (daysOverdue <= 90) {
           fine = 30000;
       } else if (daysOverdue <= 180) {
           fine = 50000;
       } else {
           fine = 70000;
       }
       return fine;
   }

   // 사용 예시
   console.log(calculateFine(20));  // 20000 출력
   console.log(calculateFine(60));  // 30000 출력
