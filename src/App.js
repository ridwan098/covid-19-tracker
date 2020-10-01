import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/appicon.png';



class App extends React.Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
        console.log(fetchedData)
    }

    handleCountryChange = async (country) => {
        //fetch data
        const fetchedData = await fetchData(country);
        //set state
        this.setState({ data: fetchedData, country: country })
    }
    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt='covid-19 icon' />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
                {/* <Footer /> */}
                <div className="container" style={{ 'marginTop': 20 }}><small>Copyright © <a href="https://ridwan.co.uk" target="_blank" rel="noopener noreferrer">Ridwan
            Gbadamosi</a> 2020</small></div>

            </div>
        );
    }
}


export default App