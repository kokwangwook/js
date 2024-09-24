package com.example.salary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/salaries")
@CrossOrigin(origins = "*") // 프론트엔드와 백엔드가 다른 도메인에 있을 경우 CORS 설정
public class SalaryController {

    @Autowired
    private SalaryService salaryService;

    // 전체 봉급 데이터 조회
    @GetMapping
    public List<Salary> getAllSalaries() {
        return salaryService.getAllSalaries();
    }

    // 특정 계급과 호봉에 대한 봉급 정보 조회
    @GetMapping("/{grade}/{hoBon}")
    public Salary getSalary(
            @PathVariable String grade,
            @PathVariable int hoBon
    ) {
        return salaryService.getSalary(grade, hoBon);
    }
}
