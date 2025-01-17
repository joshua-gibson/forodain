import axios from "axios";

export const getStories = async () => {
    const response = await axios.get("forodain-api.luthien-labs.net/stories");
    console.log(response.data);
    return response.data;
};
