package com.example.salary;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class SalaryService {
    private List<Salary> salaries;

    private final String DATA_URL = "https://raw.githubusercontent.com/사용자명/public-service-salary/main/data/salaries2024.json";

    @PostConstruct
    public void loadData() {
        try {
            RestTemplate restTemplate = new RestTemplate();
            String jsonData = restTemplate.getForObject(DATA_URL, String.class);
            ObjectMapper mapper = new ObjectMapper();
            salaries = mapper.readValue(jsonData, new TypeReference<List<Salary>>() {});
            // 2025년 봉급 계산
            salaries.forEach(salary -> salary.setSalary2025(Math.round(salary.getSalary2024() * 1.03 * 100) / 100.0));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public List<Salary> getAllSalaries() {
        return salaries;
    }

    public Salary getSalary(String grade, int hoBon) {
        return salaries.stream()
                .filter(s -> s.getGrade().equalsIgnoreCase(grade) && s.getHoBon() == hoBon)
                .findFirst()
                .orElse(null);
    }
}
