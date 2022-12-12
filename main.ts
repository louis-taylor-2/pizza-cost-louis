game.splash("Today we will calculate the cost of a pizza!")
let RENT_COST_PER_PIZZA = 1
let LABOUR_COST_PER_PIZZA = 0.75
let MATERIAL_COST_PER_DIAMETER_INCH_OF_PIZZA = 0.5
let HST = 0.13
let diameter = game.askForNumber("What is the diameter of the pizza in inches?")
let cost_of_pizza = (HST + 1) * (LABOUR_COST_PER_PIZZA + RENT_COST_PER_PIZZA + MATERIAL_COST_PER_DIAMETER_INCH_OF_PIZZA * diameter)
game.splash("The cost of a pizza with the diameter of " + diameter + "inches, is " + cost_of_pizza + "dollars with tax.")
