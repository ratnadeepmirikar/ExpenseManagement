package com.Expense.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table (name = "Expenses")
@NoArgsConstructor

public class Expense {
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private int id;
	private String category;
	private double amount;
	private String comment;
	private String createdAt;
	private String updatedAt;
	public Expense(int id, String category, double amount, String comment, String createdAt, String updatedAt) {
		super();
		this.id = id;
		this.category = category;
		this.amount = amount;
		this.comment = comment;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
	
	
	

}
