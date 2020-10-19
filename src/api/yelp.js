import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Ii8Uy9QqCQVmtOZx2wf_bW-rF0EQ84Txo3cEux5-pfM7Qq8hU1M_7xiNB3FyzKl--oAOTlFxCavi9UoG8xDYqJNu-hfbQPqW_srGqy5IvdJRb2gHiIOw3wimMOGNX3Yx",
  },
});
