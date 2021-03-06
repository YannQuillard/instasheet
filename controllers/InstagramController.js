require('dotenv').config();
const axios = require('axios');

const token = process.env.IG_LONG_TOKEN;
const baseUrl = process.env.IG_BASE_URL;

module.exports = {
    getUserMedia: async () => {
        try {
            const endPoints = `${baseUrl}/me/media`;
            const fields = 'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username,children';

            const response = await axios.get(`${endPoints}?fields=${fields}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            return response.data.data;
        }
        catch (error) {
            console.log(error);
        }
    }
}