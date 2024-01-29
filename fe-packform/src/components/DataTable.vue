<template>
    <div class="data-table">
      <div class="search-container">
        <input type="text" placeholder="Search..." class="search-input">
        <button class="search-button">Search</button>
      </div>
      <table>
        <!-- Table header -->
        <thead>
          <tr>
            <th>Order date</th>
            <th>Delivered Amount</th>
            <th>Total Amount</th>
            <th>Order name</th>
            <th>Customer Company</th>
            <th>Customer name</th>
          </tr>
        </thead>
        <!-- Table body -->
        <tbody>
          <!-- Loop through your data here -->
          <tr v-for="(item, index) in data" :key="item.orderName" :class="{ fade: index === currentIndex }">
            <td>{{ item.orderDate }}</td>
            <td>{{ item.deliveredAmount }}</td>
            <td>{{ item.totalAmount }}</td>
            <td>{{ item.orderName }}</td>
            <td>{{ item.customerCompany }}</td>
            <td>{{ item.customerName }}</td>
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
  export default {
    data() {
      return {
        data: [
          {
            orderDate: 'Apr 23rd, 4:18 AM',
            deliveredAmount: '$99.11',
            totalAmount: '$99.11',
            orderName: '#C19190',
            customerCompany: 'Sony Ericsson',
            customerName: 'Dr. Harold Senger',
          },
          {
            orderDate: 'Apr 23rd, 4:20 AM',
            deliveredAmount: '$99.11',
            totalAmount: '$99.11',
            orderName: '#C19190',
            customerCompany: 'Comedy Central Inc',
            customerName: 'Waylon Beahan V',
          },
        ],
        currentPage: 1,
        itemsPerPage: 5,
        currentIndex: 0,
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.data.length / this.itemsPerPage);
      },
      currentData() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        return this.data.slice(startIndex, startIndex + this.itemsPerPage);
      },
    },
    methods: {
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
          this.currentIndex = (this.currentPage - 1) * this.itemsPerPage;
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
          this.currentIndex = (this.currentPage - 1) * this.itemsPerPage;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .data-table {
    max-width: 800px;
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
