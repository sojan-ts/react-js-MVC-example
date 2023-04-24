class DataController {
    static async fetchData() {
      try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            return await response.json();
        } catch (error) {
            return console.log(error);
        }
    }
  
    static async addData(data) {
      try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        } catch (error) {
            return console.log(error);
        }
    }
  
    static async updateData(data) {
      try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        } catch (error) {
            return console.log(error);
        }
    }
  
    static async deleteData(id) {
      try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: "DELETE",
            });
            return await response.json();
        } catch (error) {
            return console.log(error);
        }
    }
  }
  
  export default DataController;
  