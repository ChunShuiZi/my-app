package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "http://localhost:3000")

public abstract class DemoApplication {
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	@GetMapping("/dichas")
	public String dichas() {
		return String.format("");
	}
	@GetMapping("/chats")
	public String chats() {
		return String.format("");
	}
	@GetMapping("/actions")
	public String actions() {
		return String.format("");
	}

	@PostMapping("/api/saveChats")
	public String saveChats(@RequestBody List<ChatMessage> chats) {

		for (ChatMessage chat : chats) {
			System.out.println("Received chat: " + chat);
		}

		return "Chats saved successfully!";
	}

}