const BitcoinPrice = (props) =>{
    const {price, percent_change_24h, percent_change_7d, percent_change_1h} = props.price;
    return(
        <div className='card text-white bg-success mb-3'>
            <div className='card-header'>
                Precio del Bitcoin en Ars
            </div>
            <div className='card-body'>
                <h4 className='card-title'>Precio actual: {price.toFixed(2)} $</h4>
                <div className='d-md-flex justify-content-between'>
                    <p className='card-text'><span className='font-weight-bold'>Uiltima hora: </span>{percent_change_1h} %</p>
                    <p className='card-text'><span className='font-weight-bold'>Uiltimas 24hs: </span>{percent_change_24h} %</p>
                    <p className='card-text'><span className='font-weight-bold'>Uiltimos 7 días: </span>{percent_change_7d} %</p>
                </div>
            </div>
        </div>
    );
}

export default BitcoinPrice;