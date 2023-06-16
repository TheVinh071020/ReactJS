import React, { Component } from "react";

class Baitap4 extends Component {
  // const [students, setStudents] = useState([
  //   { name: "Vinh", age: 23, height: "170cm" },
  //   { name: "Hàn", age: 28, height: "175cm" },
  //   { name: "Hà", age: 25, height: "180cm" }
  // ]);
    handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  handleSort = (event) => {
    setSortBy(event.target.value);
  };

  handleOrder = (event) => {
    setSortOrder(event.target.value);
  };

  filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchText.toLowerCase())
  );

  sortedStudents = filteredStudents.sort((a, b) => {
    const compareValue = sortOrder === 'asc' ? 1 : -1;

    if (a[sortBy] < b[sortBy]) {
      return -compareValue;
    } else if (a[sortBy] > b[sortBy]) {
      return compareValue;
    } else {
      return 0;
    }
  });
  render() {
    return (
      <div>
      <div>
        <input type="text" value={searchText} onChange={handleSearch} placeholder="Search by name" />
        <select value={sortBy} onChange={handleSort}>
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="height">Height</option>
        </select>
        <select value={sortOrder} onChange={handleOrder}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Height</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((student) => (
            <tr key={student.name}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.height}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
}

export default Baitap4;
