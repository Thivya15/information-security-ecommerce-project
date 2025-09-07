package com.server.service;

import com.server.model.Purchase;
import com.server.repository.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PurchaseService {

    @Autowired
    private PurchaseRepository purchaseRepository;

    public Purchase savePurchase(Purchase purchase) {
        return purchaseRepository.save(purchase);
    }

    public List<Purchase> getPurchasesByUsername(String username) {
        return purchaseRepository.findByUsername(username);
    }
}
