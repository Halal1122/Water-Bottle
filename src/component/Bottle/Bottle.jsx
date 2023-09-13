import './Bottle.css'
const Bottle = ({ bottle, handleBottle }) => {
    const { name, img, price } = bottle;
    return (
        <div>
            <div className='text'>
                

            </div>
            <div className='bottle-container'>
                <h2>Name: {name}</h2>
                <img src={img} alt="" />
                <p>Price: {price}</p>
                <button onClick={() => handleBottle(bottle)}>Purchase</button>
            </div>
        </div>
    );
};

export default Bottle;