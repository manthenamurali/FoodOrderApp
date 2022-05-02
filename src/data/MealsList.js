class MealsList {
  mealsList = [
    {
      id: 100,
      itemName: "Sushi",
      description: "Finest fish and veggies",
      amount: "$22.99",
      quantity: "1",
    },
    {
      id: 101,
      itemName: "Schnitzel",
      description: "A german speciality!!",
      amount: "$16.50",
      quantity: "1",
    },
    {
      id: 102,
      itemName: "Burger",
      description: "Special chicken burger",
      amount: "$9.99",
      quantity: "1",
    },
    {
      id: 103,
      itemName: "Mutton Biryani",
      description: "Authentic mutton biryani",
      amount: "$12.50",
      quantity: "1",
    },
    {
      id: 104,
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
