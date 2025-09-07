package com.server.model;

import jakarta.persistence.*;

@Entity
public class Purchase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String purchaseDate;
    private String deliveryTime;
    private String deliveryLocation;
    private String productName;
    private int quantity;
    private String message;

    public Purchase() {
    }

    public Purchase(Long id, String username, String purchaseDate, String deliveryTime, String deliveryLocation, String productName, int quantity, String message) {
        this.id = id;
        this.username = username;
        this.purchaseDate = purchaseDate;
        this.deliveryTime = deliveryTime;
        this.deliveryLocation = deliveryLocation;
        this.productName = productName;
        this.quantity = quantity;
        this.message = message;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPurchaseDate() {
        return purchaseDate;
    }

    public void setPurchaseDate(String purchaseDate) {
        this.purchaseDate = purchaseDate;
    }

    public String getDeliveryTime() {
        return deliveryTime;
    }

    public void setDeliveryTime(String deliveryTime) {
        this.deliveryTime = deliveryTime;
    }

    public String getDeliveryLocation() {
        return deliveryLocation;
    }

    public void setDeliveryLocation(String deliveryLocation) {
        this.deliveryLocation = deliveryLocation;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "Purchase{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", purchaseDate='" + purchaseDate + '\'' +
                ", deliveryTime='" + deliveryTime + '\'' +
                ", deliveryLocation='" + deliveryLocation + '\'' +
                ", productName='" + productName + '\'' +
                ", quantity=" + quantity +
                ", message='" + message + '\'' +
                '}';
    }
}
