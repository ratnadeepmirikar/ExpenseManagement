package com.Expense.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Expense.entity.Expense;
import com.Expense.repository.ExpenseRepository;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class ExpenseController {
	@Autowired
	ExpenseRepository qRepository;
	@GetMapping("/expenses")
	public ResponseEntity<List<Expense>> getAllExpenses(@RequestParam(required = false) String category) {
		try {
			List<Expense> expenses = new ArrayList<Expense>();

			if (category == null)
				qRepository.findAll().forEach(expenses::add);
			else
				qRepository.findByCategoryContainingIgnoreCase(category).forEach(expenses::add);

			if (expenses.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(expenses, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	@GetMapping("/expenses/{id}")
	public ResponseEntity<Expense> getExpenseById(@PathVariable("id") int id) {
		Optional<Expense> expenseData = qRepository.findById(id);

		if (expenseData.isPresent()) {
			return new ResponseEntity<>(expenseData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	 
	@PostMapping("/expenses")
	public Expense createQuote(@RequestBody Expense quote) {
		return qRepository.save(quote);
	}

@PutMapping("/expenses/{id}")
	public ResponseEntity<Expense> updateQuote(@PathVariable("id") int id, @RequestBody Expense expense) {
		Optional<Expense>expenseData = qRepository.findById(id);

		if (expenseData.isPresent()) {
			 Expense _expense = expenseData.get();
			 _expense.setCategory(expense.getCategory());
			 _expense.setAmount(expense.getAmount());
			 
			 _expense.setComment(expense.getComment());
			 _expense.setCreatedAt(expense.getCreatedAt());
			 _expense.setUpdatedAt(expense.getUpdatedAt());
			
			return new ResponseEntity<>(qRepository.save(_expense), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/expenses/{id}")
	public ResponseEntity<HttpStatus> deleteExpense(@PathVariable("id") int id) {
		try {
			qRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
@DeleteMapping("/expenses")
	public ResponseEntity<HttpStatus> deleteAllQuote() {
		try {
			qRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}


}
