const axios = require('axios');

async function getData(){
    try{
        const response = await axios.get('https://4pt4n6d6-8080.asse.devtunnels.ms/order');
        // console.log(response.data);
        // this.apiData = response.data.data;
        this.apiData = [...response.data.data];
        console.log('api data :', this.apiData = [...response.data.data].slice(0,2));
    }
    catch (error) {
        console.error('Error fetching data:', error);
      }
}

getData();

