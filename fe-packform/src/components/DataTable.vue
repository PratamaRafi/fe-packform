<template>
    <div class="data-table">
      <div class="search-container">
    <input type="text" v-model="searchQuery" placeholder="Search..." class="search-input">
    <button @click="search" class="search-button">Search</button>
  </div>
      <table>
        <thead>
          <tr>
            <th>Order name</th>
            <th>Customer Company</th>
            <th>Customer name</th>
            <th>Order date</th>
            <th>Delivered Amount</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in paginatedData" :key="index" :class="{ fade: index === currentIndex }">
            <td>{{ item.order_name }}</td>
            <!-- <td>{{logAndReturn(item.orderName)}}</td>
            <td>{{logAndReturn(item.companyName)}}</td> -->
            <td>{{ item.company_name }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.created_at }}</td>
            <td>{{ item.delivered_amount }}</td>
            <td>{{ item.total_amount }}</td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">
        <button class="pagination-button" @click="prevPage" :class="{ disabled: currentPage === 1 }">Previous</button>
        <span class="pagination-text">{{ currentPage }}</span>
        <button class="pagination-button" @click="nextPage" :class="{ disabled: currentPage === totalPages }">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import moment from 'moment';
  export default {
    data() {
      return {
        data: [],
        currentPage: 1,
        itemsPerPage: 5,
        searchQuery: ''
        // currentIndex: 0,
      };
    },

    computed: {
      totalPages() {
        return Math.ceil(this.data.length / this.itemsPerPage);
      },
      paginatedData() {
        console.log('Data before pagination:', this.data);
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.data.slice(start, end);
      },

      filteredData() {
        const query = this.searchQuery.toLowerCase();
        return this.data.filter(item => item.order_name.toLowerCase().includes(query));
    },
      // currentData() {
      //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      //   return this.data.slice(startIndex, startIndex + this.itemsPerPage);
      // },
      formattedApiData() {
        return this.data.map(item => ({
        orderName: item.order_name,
        companyName: item.company_name,
        name: item.name,
        created_at: moment(item.created_at).format('YYYY-MM-DD HH:mm:ss'),
        deliveredAmount: item.delivered_amount,
        totalAmount: item.total_amount,
        price: item.price,
        deliveredQuantity: item.delivered_quantity,
      }));
      // console.log('ini formated data: ',formattedData);
      // return formattedData;
    }
    },
    mounted() {
      this.getData();
      console.log('Data saya:', this.formattedApiData);
  },
    methods: {
      prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    search() {
      this.data = this.filteredData;
      // reset data
      this.currentPage = 1;
    },
      logAndReturn(value) {
        console.log('Value:', value);
        return value;
      },
      async getData(){
        try {
              // url = 'https://4pt4n6d6-8080.asse.devtunnels.ms/order';
              // const response = { data: { data: [{ order_name: 'PO #001-I' }] } };
              const response = await axios.get('https://4pt4n6d6-8080.asse.devtunnels.ms/order');
              // console.log(response.data);
              // this.apiData = response.data.data;
              this.data = [...response.data.data];
              console.log('api data :', this.data = [...response.data.data]);
              // this.$set(this, 'apiData', response.data.data);
              // console.log('test jnck',this.$set(this, 'apiData', response.data.data))
              // const data = this.apiData.data
              // console.log('apiData:', this.apiData);
              // console.log('testing data:',data[0].company_name);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    },
  };
  </script>
  
  <style scoped>
  .data-table {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background-color: #fff;
  }

  .search-container {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }

  .search-input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 8px;
  }

  .search-button {
    padding: 8px 16px;
    background-color: #404661;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }

  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #3A405A;
    color: #fff;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pagination-button {
    padding: 8px 16px;
    background-color: #404661;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 0 4px;
  }

  .pagination-text {
    margin: 0 8px;
  }

  .disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .fade {
    transition: background-color 0.3s ease;
  }
</style>
