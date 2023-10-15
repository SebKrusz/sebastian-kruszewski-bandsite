const apiKey = "d7c86449-e347-4825-8110-fea6f51d2b5a";

class BandSiteAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = "https://project-1-api.herokuapp.com";
        this.comments = [];
    }



    async getComments() {
        try {
            const response = await axios.get(`${this.baseURL}/comments?api_key=${this.apiKey}`);
            const comments = response.data
            return comments;
        } catch (error) {
            console.error('Error fetching comments:', error);
            throw error;
        }
    }

    async postComment(comment) {
        try {
            const response = await axios.post(`${this.baseURL}/comments?api_key=${this.apiKey}`, comment);
            this.comments.unshift(response.data);
            return response.data;
        } catch (error) {
            console.error('Error posting comment:', error);
            throw error;
        }
    }

    addCommentToUI(commentElement) {
        const commentsContainer = document.getElementById("comments");
        const firstComment = commentsContainer.firstChild;
        commentsContainer.insertBefore(commentElement, firstComment);
    }

    async getShows() {
        try {
            const response = await axios.get(`${this.baseURL}/showdates?api_key=${this.apiKey}`);
            const showData = response.data;
            return showData;
        } catch (error) {
            console.error("Error fetching data from the API: ", error);
        }
    }
}

export default BandSiteAPI;