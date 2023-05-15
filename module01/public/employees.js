let emp1 = "Tony Stark";
let emp2 = "Bruce Banner";
let emp3 = "Thor Odinson";
let emp4 = "Rick Jones";
let emp5 = "Steve Rogers";
let emp6 = "Francis Barton";
let emp7 = "Wanda Maximoff";
let emp8 = "Victor Shade";
let emp9 = "Cressida";

const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    color: "red",
    fontSize: "16px"
  }
}, /*#__PURE__*/React.createElement("li", null, emp1), /*#__PURE__*/React.createElement("li", null, emp2), /*#__PURE__*/React.createElement("li", null, emp3), /*#__PURE__*/React.createElement("li", null, emp4), /*#__PURE__*/React.createElement("li", null, emp5), /*#__PURE__*/React.createElement("li", null, emp6), /*#__PURE__*/React.createElement("li", null, emp7), /*#__PURE__*/React.createElement("li", null, emp8), /*#__PURE__*/React.createElement("li", null, emp9));

ReactDOM.render(element, document.getElementById("content"));
