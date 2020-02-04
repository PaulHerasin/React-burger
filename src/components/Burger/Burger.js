import React from "react";

import styles from "./Burger.module.css";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  //создаем переменную и даем ей массив с собственными перечисляемыми свойстави переданного объекта,
  //в том же порядке, если использовали цикл for...in
  let transformIngredient = Object.keys(props.ingredients)
    .map(name => {
      return [...Array(props.ingredients[name])].map((_, i) => {
        return <BurgerIngredient key={name + i} type={name} />; //выводит блок с ключем  name1 и тип name
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    });

  console.log(transformIngredient);

  // делаем проверку на количество елементов в массиве, если ноль то выводим p
  if (transformIngredient.length === 0) {
    transformIngredient = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {transformIngredient}
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

export default burger;
