class MealsList {
  mealsList = [
    {
      itemName: "Sushi",
      description: "Finest fish and veggies",
      amount: "$22.99",
      quantity: "1",
    },
    {
      itemName: "Schnitzel",
      description: "A german speciality!!",
      amount: "$16.50",
      quantity: "1",
    },
    {
      itemName: "Burger",
      description: "Special chicken burger",
      amount: "$9.99",
      quantity: "1",
    },
    {
      itemName: "Mutton Biryani",
      description: "Authentic mutton biryani",
      amount: "$12.50",
      quantity: "1",
    },
    {
      itemName: "Tea",
      description: "Our special Irani tea",
      amount: "$0.99",
      quantity: "2",
    },
  ];

  getMealsFullList() {
    return this.mealsList;
  }
}

export default MealsList;
