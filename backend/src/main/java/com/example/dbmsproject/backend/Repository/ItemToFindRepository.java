package com.example.dbmsproject.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.dbmsproject.backend.Model.ItemToFind;
import com.example.dbmsproject.backend.Model.Place;
import com.example.dbmsproject.backend.Model.User;

import java.util.Collection;


public interface ItemToFindRepository extends JpaRepository<ItemToFind,Long>{
    Collection<ItemToFind> findByUser(User user);
    Collection<ItemToFind> findByType(String type);
    Collection<ItemToFind> findByLastSeenPlace(Place lastSeenPlace);
    Collection<ItemToFind> findByName(String name);
}