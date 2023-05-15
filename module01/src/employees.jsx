let emp1 = "Tony Stark";
let emp2 = "Bruce Banner";
let emp3 = "Thor Odinson";
let emp4 = "Rick Jones";
let emp5 = "Steve Rogers";
let emp6 = "Francis Barton";
let emp7 = "Wanda Maximoff";
let emp8 = "Victor Shade";
let emp9 = "Cressida";
const element = (
  <ul style={{ color: "red", fontSize: "16px" }}>
    <li>{emp1}</li>
    <li>{emp2}</li>
    <li>{emp3}</li>
    <li>{emp4}</li>
    <li>{emp5}</li>
    <li>{emp6}</li>
    <li>{emp7}</li>
    <li>{emp8}</li>
    <li>{emp9}</li>
  </ul>
);
ReactDOM.render(element, document.getElementById("content"));
