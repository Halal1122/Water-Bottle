import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../../Utilitis/LocalStorage";
import Cart from "../Cart/Cart";




const Bottles = () => {
    const [bottles, setBottles] = useState([]);

    const [cart, setCat] = useState([]);


    useEffect(() => {
        fetch('Bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    useEffect(() => {
        console.log('called the useEffect', bottles.length)
        if (bottles.length > 0) {
            const storedCart = getStoredCart();
            console.log(storedCart, bottles);
            const saveCart = [];
            for (const id of storedCart) {
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    saveCart.push(bottle)
                }
            }
            console.log('saved cart', saveCart)
            setCat(saveCart)
        }
    }, [bottles])
    const handleBottle = bottle => {
        const newCat = [...cart, bottle]
        setCat(newCat);
        addToLS(bottle.id)
    }
    return (
        <div>
            <div className="text">
                <h2>Bottles: {bottles.length}</h2>
                
                <Cart cart={cart}></Cart>
            </div>
            <div className="bottles-container">

                {
                    bottles.map(bottle => <Bottle key={bottle} bottle={bottle} handleBottle={handleBottle} ></Bottle>)
                }
            </div>
        </div>

    );
};

export default Bottles;