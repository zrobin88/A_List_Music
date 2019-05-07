import axios from "axios";


export default {
  getProfiles: function(data) {
    return axios.post('/api/profiles/getProfiles', data);
 },

 getModalProfile: function(id){
   console.log("id showing", id)
   return axios.get("api/profiles/" + id);
 },
  
  deleteProfile: function(id) {
    return axios.delete("/api/profiles/" + id);
  },
  saveProfile: function(data) {
   
    return axios.post("/api/profiles/saveProfiles", data);
  }
};
