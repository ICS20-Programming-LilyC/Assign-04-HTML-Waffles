// Copyright (c) 2023 Lily Carroll All rights reserved
//
// Created by: Lily C
// Created on: 04/21/2023
// This file contains the JS functions for index.html

"use strict"

"use strict"

// Function that executes the user's food order
function WaffleOrder() {

  // Determining a constant for tax rate
  const HST = 0.13;
  
  // Initializing variables
  let baseWaffleCost = 0;

  // Declaring variables for base waffle and optional drink
  let waffleSmall = document.getElementById("small").value;
  let waffleMedium = document.getElementById("medium").value;
  let waffleLarge = document.getElementById("large").value;
  let amountOfDrinks = parseInt(document.getElementById("drinks-amount").value);

  // Determining the cost of the base waffle using if/else statements

  // If the waffle size is small
  if (waffleSmall == "3.00") {
    baseWaffleCost = 3.00;
  }

  // If the waffle size is medium
  else if (waffleMedium == "4.00") {
    baseWaffleCost = 4.00;
  }

  // If the waffle size is large
  else if (waffleLarge == "5.00") {
    baseWaffleCost = 5.00;
  }

  // Determining the number of checkboxes selected
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let numberOfToppings = checkboxes.length;

  // Determining constants of the toppings and using a variable to calculate the price of the toppings chosen
  const UNIT_PRICE_TOPPINGS = 2.00;
  let costOfToppings = numberOfToppings * UNIT_PRICE_TOPPINGS;

  // Determining the constant for the drinks and using a variable to calculate the price of the drinks chosen
  const UNIT_PRICE_DRINKS = 1.00;
  let costOfDrinks = amountOfDrinks * UNIT_PRICE_DRINKS;

  // Calculating the subtotal of the user (tax and total)
  let subtotal = baseWaffleCost + costOfToppings + costOfDrinks;
  let tax = subtotal * HST;
  let total = subtotal + tax;

  // Displaying the total price back to the user
  document.getElementById("results").innerHTML = "Your subtotal is $" + subtotal.toFixed(2) + ".<br>The amount of HST added is $" + tax.toFixed(2) + ".<br>Your total is $" + total.toFixed(2) + "." + " Thanks for your purchase!"; 
}