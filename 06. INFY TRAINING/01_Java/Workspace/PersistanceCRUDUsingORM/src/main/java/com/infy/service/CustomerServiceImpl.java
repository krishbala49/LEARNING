package com.infy.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infy.dto.CustomerDTO;
import com.infy.exception.InfyBankException;
import com.infy.repository.CustomerRepository;

@Service(value = "customerService")
@Transactional
public class CustomerServiceImpl implements CustomerService {
	@Autowired
	private CustomerRepository customerRepository;

	@Override
	public CustomerDTO getCustomer(Integer customerId) throws InfyBankException {
		CustomerDTO customerDTO = customerRepository.getCustomer(customerId);
		if (customerDTO == null) {
			throw new InfyBankException("Service.CUSTOMER_UNAVAILABLE");
		}
		return customerDTO;
	}

	@Override
	public void addCustomer(CustomerDTO customerDTO) throws InfyBankException {
		if (customerRepository.getCustomer(customerDTO.getCustomerId()) != null) {
			throw new InfyBankException("Service.CUSTOMER_ALREADY_EXISTS");
		}
		customerRepository.addCustomer(customerDTO);
	}

	@Override
	public void updateCustomer(Integer customerId, String emailId) throws InfyBankException {
		CustomerDTO customerDTO = customerRepository.getCustomer(customerId);
		if (customerDTO == null) {
			throw new InfyBankException("Service.CUSTOMER_UNAVAILABLE");
		} else {
			customerRepository.updateCustomer(customerId, emailId);
		}
	}

	@Override
	public void deleteCustomer(Integer customerId) throws InfyBankException {
		CustomerDTO customerDTO = customerRepository.getCustomer(customerId);
		if (customerDTO == null) {
			throw new InfyBankException("Service.CUSTOMER_UNAVAILABLE");
		} else {
			customerRepository.deleteCustomer(customerId);
		}
	}
}
