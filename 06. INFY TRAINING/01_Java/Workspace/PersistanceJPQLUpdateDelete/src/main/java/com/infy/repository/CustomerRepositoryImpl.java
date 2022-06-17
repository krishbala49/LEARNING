package com.infy.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

@Repository(value = "customerRepository")
public class CustomerRepositoryImpl implements CustomerRepository {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public Integer updateCityOfCustomer(Integer customerId, String city) {
		Query query = entityManager.createQuery("UPDATE Customer c SET c.city = ?1 where c.customerId = ?2");
		query.setParameter(1, city);
		query.setParameter(2, customerId);
		return query.executeUpdate();
	}

	@Override
	public Integer deleteCustomer() {
		Query query = entityManager.createQuery("DELETE FROM Customer c where c.emailId is NULL");
		return query.executeUpdate();
	}

}
