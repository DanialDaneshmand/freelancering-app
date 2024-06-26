import React from "react";

function Table({ children }) {
  return <div className=" overflow-x-scroll p-3  ">{children}</div>;
}

export default Table;

function TableHeader({ children }) {
  return (
    <thead className=" inline-block w-full ">
      <tr>{children}</tr>
    </thead>
  );
}

function TableBody({ children }) {
  return <tbody className="inline-block w-full bg-white">{children}</tbody>;
}

function TableRow({ children }) {
  return <tr className="title-row flex justify-between">{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
