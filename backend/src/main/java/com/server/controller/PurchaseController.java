package com.server.controller;

import com.server.model.Purchase;
import com.server.service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/purchases")
@CrossOrigin(origins = "http://localhost:5173")
public class PurchaseController {

    @Autowired
    private PurchaseService purchaseService;

    @PostMapping
    public Purchase savePurchase(@RequestBody Purchase purchase) {
        return purchaseService.savePurchase(purchase);
    }

    @GetMapping
    public List<Purchase> getPurchases(@RequestParam String username) {
        return purchaseService.getPurchasesByUsername(username);
    }
}
