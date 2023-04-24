import React, { useState, useEffect } from "react";
import List from "../components/List";
import DataController from "../controllers/DataController";
import DataModel from "../models/DataModel";

const Home = () => {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    DataController.fetchData().then((data) => {
      DataModel.setData(data);
      setData(data);
    });
  }, []);

  const handleAdd = () => {
    const newId = Math.floor(Math.random() * 100) + 1;
    const newData = { id: newId, title: "New Post" };
    DataController.addData(newData).then(() => {
      DataModel.addData(newData);
      setData(DataModel.getData());
    });
  };

  const handleEdit = (data) => {
    setEditData(data);
  };

  const handleUpdate = (data) => {
    DataController.updateData(data).then(() => {
      DataModel.updateData(data);
      setData(DataModel.getData());
      setEditData(null);
    });
  };

  const handleDelete = (data) => {
    DataController.deleteData(data.id).then(() => {
      DataModel.deleteData(data.id);
      setData(DataModel.getData());
    });
  };

  return (
    <div>
      <h1>CRUD Example using JSONPlaceholder API</h1>
      <button onClick={handleAdd}>Add New</button>

      {editData && (
        <div>
          <h2>Edit Data</h2>
          <input
            type="text"
            value={editData.title}
            onChange={(e) =>
              setEditData({ ...editData, title: e.target.value })
            }
          />
          <button onClick={() => handleUpdate(editData)}>Update</button>
          <button onClick={() => setEditData(null)}>Cancel</button>
        </div>
      )}
      <List data={data} onDelete={handleDelete} onEdit={handleEdit} />
     
    </div>
  );
};

export default Home;
