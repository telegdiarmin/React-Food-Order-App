import React from "react";

import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicios Food, Delivered to You</h2>
      <p>
        Tired of searching after quality products in the hipermarkets? Have no
        time to browse on markets all-day? We have good news: all you have to do
        is putting the fruits and vegetables you like in your cart!
      </p>
      <p>
        All of our fruits and vegetables are fresh, locally grown and are from
        responsible sources. We regularly test our suppliers to meet our high
        standards of quality.
      </p>
    </section>
  );
};

export default MealsSummary;
