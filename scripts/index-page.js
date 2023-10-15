
// ID LIKE TO ADD A COMMENT THAT IT SEEMS LIKE UNSHIFT DOES NOT WORK FOR THIS API SO I CANT POST COMMENTS TO THE FRONT OF THE ARRAY
// FORCING ME TO HAVE THE ORIGINAL DEFAULT COMMENTS MIS-ORDERED OR HAVE MY NEW COMMENTS DISPLAYED IN REVERSE ORDER.


import BandSiteAPI from './band-site-api.js';
const apiKey = "d7c86449-e347-4825-8110-fea6f51d2b5a";
const bandSiteAPI = new BandSiteAPI(apiKey);
// CREATE STRING IN STYLE WANTED FROM UNIX TIME //
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
}
//  END OF CREATE STRING IN STYLE WANTED FROM UNIX TIME //

// CREATE COMMENT FUNCTION //
function createCommentElement(commentData) {
    const { name, comment, timestamp } = commentData;
    const commentDiv = document.createElement("div");
    commentDiv.className = "comment";

    const avatarImage = document.createElement("img");
    avatarImage.src = './assets/images/50x50.png'; 
    avatarImage.alt = 'Avatar';
    avatarImage.className = 'comment-avatar';
    commentDiv.appendChild(avatarImage);

    const nameDateDiv = document.createElement("div");
    nameDateDiv.className = "name-date comment-name-date";

    const nameElement = document.createElement("p");
    nameElement.textContent = name + ":";
    nameElement.classList.add("comment-name");

    const commentDateElement = document.createElement("p");
    const formattedTimestamp = formatTimestamp(timestamp);
    commentDateElement.textContent = "Date: " + formattedTimestamp;
    commentDateElement.classList.add("comment-date");
    nameDateDiv.appendChild(nameElement);
    nameDateDiv.appendChild(commentDateElement);

    const commentTextElement = document.createElement("p");
    commentTextElement.textContent = " " + comment;
    commentTextElement.classList.add("comment-text");
    commentDiv.appendChild(nameDateDiv);
    commentDiv.appendChild(commentTextElement);

    return commentDiv;
}
// END OF  CREATE COMMENT FUNCTION //



// POSTING COMMENTS & CHECK FIELDS //
async function displayComment(event) {
    event.preventDefault();
    const name = document.getElementById("yourName").value;
    const commentText = document.getElementById("yourComment").value;
    const commentForm = document.getElementById("commentsection__myForm");

    if (name && commentText) {
        try {
            const newCommentData = {
                name: name,
                comment: commentText,
            };

            const response = await bandSiteAPI.postComment(newCommentData);
            console.log('Comment posted successfully:', response);

            const commentsContainer = document.getElementById("comments-container");
            commentsContainer.innerHTML = "";

            fetchCommentsAndDisplay();

            commentForm.reset();
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    }
}
// END OF POSTING COMMENTS & CHECK FIELDS //


// RECIEVE DATA/ CREATE COMMENT / APPEND COMMENT // 

async function fetchCommentsAndDisplay() {
    try {
        let comments = await bandSiteAPI.getComments();
        comments = comments.reverse();
        const commentsContainer = document.getElementById("comments-container");

        comments.forEach(commentData => {
            const commentElement = createCommentElement(commentData);
            commentsContainer.appendChild(commentElement);
            console.log(commentData);
        });
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
}
// END OF RECIEVE DATA/ CREATE COMMENT / APPEND COMMENT // 

document.getElementById("commentsection__myForm").addEventListener("submit", displayComment);
fetchCommentsAndDisplay();