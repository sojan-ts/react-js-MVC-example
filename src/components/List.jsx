import React from "react";

const List = ({ data, onDelete, onEdit }) => {
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => onEdit(item)}>Edit</button>
            <button onClick={() => onDelete(item)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
