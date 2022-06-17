package com.infy.service;

import java.util.List;

import com.infy.dto.CustomerDTO;
import com.infy.exception.InfyBankException;

public interface CustomerService {
	public CustomerDTO getCustomer(Integer customerId) throws InfyBankException;

	public void addCustomer(CustomerDTO customer) throws InfyBankException;

	public List<CustomerDTO> findAll() throws InfyBankException;

	public void updateCustomer(Integer customerId, String emailId) throws InfyBankException;

	public void deleteCustomer(Integer customerId) throws InfyBankException;
}
