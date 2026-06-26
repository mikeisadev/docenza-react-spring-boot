package com.fotografia.romephoto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fotografia.romephoto.entities.ContactFormRequestEntity;

@Repository
public interface ContactFormRequestRepository extends JpaRepository<ContactFormRequestEntity, Long> {

}
