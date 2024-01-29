<template>
  <div>
    <h1>Packform Order Web App</h1>
    <DataTable />
  </div>
</template>

<script>
import DataTable from './components/DataTable.vue';

export default {
  components: {
    DataTable,
  },
};
</script>

<style>
.smooth-table {
  border-collapse: collapse;
  width: 100%;
  border-radius: 5px;
  font-family: sans-serif;
  font-size: 14px;
  overflow: hidden; /* Prevent horizontal scroll */
}

.smooth-table th,
.smooth-table td {
  padding: 10px 15px;
  border: 1px solid #ddd;
  text-align: left;
  vertical-align: top;
}

.smooth-table th {
  background-color: #f4f4f4;
  border-bottom: 2px solid #ddd;
}

.smooth-table tbody tr:nth-child(even) {
  background-color: #f8f8f8;
}

.clickable-row:hover {
  background-color: #f0f0f0;
  cursor: pointer;
}
</style>
