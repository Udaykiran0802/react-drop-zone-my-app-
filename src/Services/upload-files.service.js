import http from "../http-common";

class UploadFilesService {
    upload(file, onUploadProgress) {
      
      let formData = new FormData();
      formData.append("file", file);
    
  
      return http.post("/store", formData, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        onUploadProgress,
      });
    }
  
  getFiles() {
    return http.get("/retrive");
  }
}

export default new UploadFilesService();


/* const  async function uploadFile(e) {
    e.preventDefault();
    
			  
    const TOKEN = auth.getToken();
    axios
      .post(
        "http://IP:400/share",
        {
          name: name,
          city: city,
        },
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log("Project created successfully");
          props.history.push("/projects/project-list");
        }
      })
      .catch((error) => console.log(error));
  } */