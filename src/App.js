import React from "react";
import Card from "./Card";
import "./styles.css";

const data1 = ` Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text ever
since the 1500s, when an unknown printer took a galley of type and
scrambled it to make a type specimen book.`;

const data2 = ` Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's.`;

const data3 = ` Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text ever
since the 1500s.`;

const data4 = ` Lorem Ipsum is simply dummy text of the printing.`;

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div class="container">
        <Card data={data2} />
        <Card data={data3} />
        <Card data={data1} />
        <Card data={data2} />
        <Card data={data4} />
        <Card data={data1} />
      </div>
    </div>
  );
}
