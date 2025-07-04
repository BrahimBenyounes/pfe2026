package com.bys.login.controller;

import com.bys.login.entity.Users;
import com.bys.login.requests.LoginRequest;
import com.bys.login.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController

@RequestMapping("/pfe/api/login")
@CrossOrigin("http://192.168.186.128:4200")
@Slf4j


public class UsersController {
	
	@Autowired
	UserService userService;

	@PostMapping("/addUser")
	@CrossOrigin("*")
	public Users addUser(@RequestBody Users user) {
		return userService.addUser(user);
	}
	
	@PostMapping("/loginUser")
	@CrossOrigin("http://192.168.186.128:4200")
	public Boolean loginUser(@RequestBody LoginRequest loginRequest) {
		return userService.loginUser(loginRequest);
		
   }

	@GetMapping("/getAllUsers")
	@CrossOrigin("http://192.168.186.128:4200")
	public List<Users> getAllUsers() {
		return userService.getAllUsers();
	}

}
