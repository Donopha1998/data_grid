# DataGrid Component

This library provides a reusable DataGrid component with global search functionality.

## Installation

```sh
npm install @cletus98/datagrid-component


## Usage

# import DataGrid from '@cletus98/datagrid-component';

# function App() {
#   const data = [
#     { id: 1, name: 'Cletus', age: 25 },
#     { id: 2, name: 'Akshayam', age: 34 },
#     { id: 3, name: 'Faizal', age: 28 }
#   ];

#   const columns = [
#     { key: 'id', title: 'ID' },
#     { key: 'name', title: 'Name' },
#     { key: 'age', title: 'Age' }
#   ];

#   return (
#     <div className="App">
#       <DataGrid
#         data={data}
#         columns={columns}
#         pageSize={5} // Optional: Number of items per page
#         customStyles={{ margin: '20px' }} // Optional: Apply custom styles
#       />
#     </div>
#   );
# }
