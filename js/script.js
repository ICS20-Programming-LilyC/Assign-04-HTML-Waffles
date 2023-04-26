// Copyright (c) 2023 Lily Carroll All rights reserved
//
// Created by: Lily C
// Created on: 04/21/2023
// This file contains the JS functions for index.html

"use strict"

// Function that executes the user's food order
function WaffleOrder() {

// Determining constants for tax rate, my toppings price, fried chicken prices and breakfast drinks price.
  const HST = 0.13;
  const PRICE_WAFFLE_TOPPINGS = 2.00;
  const PRICE_FRIED_CHICKEN_TENDERS = 2.00;
  const PRICE_BREAKFAST_DRINKS = 1.00;
  
  // Initializing variable for base cost of waffles, which is determined depending on the size of waffle ordered.
  let baseWaffleCost = 0;

  // Getting user input for waffle size, number of fried chicken tenders and number of breakfast drinks.
  let waffleSize = document.getElementById("size").value;
  let numberOfFriedChickenTenders = parseInt(document.getElementById("fried-chicken-tenders").value);
  let numberOfBreakfastDrinks = parseInt(document.getElementById("amount-drinks").value);
  
  // Establishing the number of waffle toppings selected given the number of checkboxes selected.
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  // Using determined value to declare variable for number of toppings chosen
  let numberOfWaffleToppings = checkboxes.length;
  
  // Determining the cost of the toppings using number of toppings variable and cost of toppings constant
  let costOfToppings = numberOfWaffleToppings * PRICE_WAFFLE_TOPPINGS;
  
  // Establishing the base cost of a waffle using compound if statements.
  
  // If the waffle size is small, then the user will owe $3.00.
  if (waffleSize == "small") {
    baseWaffleCost = 3.00;
  }
    
  // Otherwise, if the waffle size is medium, then the user will owe $4.00.
  else if (waffleSize == "medium") {
    baseWaffleCost = 4.00;
  }
    
  // Otherwise, if the waffle size is large, then the user will owe $5.00.
  else if (waffleSize == "large") {
    baseWaffleCost = 5.00;
  }

  // Else, the base cost for a waffle is $0.00.
  else {
    baseWaffleCost = 0.00;
  }
  
  // Establishing the cost of the optional sides, from the number of sides variables and the prices of sides constants.
  let costOfFriedChicken = numberOfFriedChickenTenders * PRICE_FRIED_CHICKEN_TENDERS;
  let costOfBreakfastDrinks = numberOfBreakfastDrinks * PRICE_BREAKFAST_DRINKS;
  
  // Calculating the user's subtotal, tax and total for their order
  let subtotal = baseWaffleCost + costOfToppings + costOfFriedChicken + costOfBreakfastDrinks;
  let taxes = subtotal * HST;
  let total = subtotal + taxes;

  // Displaying the total to the user in the "results" div
  document.getElementById("results").innerHTML = "You order is a " + waffleSize + " waffle. " + "For your waffle, you chose " + numberOfWaffleToppings + " toppings. You also decided to add " + numberOfFriedChickenTenders + " fried chicken tender(s) to your order, along with " + numberOfBreakfastDrinks + " beverage(s). Your subtotal is $" + subtotal.toFixed(2) + ". The calculated amount of taxes added due to the HST rate is $" + taxes.toFixed(2) + ". Which makes your total $" + total.toFixed(2) + ". Thanks for your purchase!";
  
}