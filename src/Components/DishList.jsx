import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import   { db } from "../Config/firebase";
import DishCard from './DishCard';
import Spinner from './Spinner';

const DishList = ({ onAdd }) => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {


   const getMenu = async () => {
      try{

        const data = await getDocs(collection(db, "menu"));
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);
        setDishes(filteredData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }

    }

    getMenu();
    }, [])

  return (
    <div className="px-6 py-14">
      <h2 className="text-3xl font-bold  text-orange-500 text-center mb-8">Recommended</h2>
      {loading? <Spinner/> : dishes.map(dish => (
        <DishCard key={dish.id} item={dish} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default DishList;
