import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const [isError, setIsError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://meals-585da-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoad(false);
    };
    fetchMeals().catch((error) => {
      setIsLoad(false);
      setIsError(error.message);
    });
  }, []);

  if (isLoad) {
    return (
      <section className={classes.mealsLoading}>
        <h3>Loading...</h3>
      </section>
    );
  }
  if (isError) {
    return (
      <section className={classes.mealsError}>
        <h3>{isError}</h3>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
