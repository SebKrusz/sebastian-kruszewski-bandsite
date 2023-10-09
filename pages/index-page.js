
function createComment(name, commentText, commentPic, commentDate) {
    
    const commentDiv = document.createElement("div");
    commentDiv.className = "comment";

    const avatarImg = document.createElement("img");
    avatarImg.src = commentPic;
    avatarImg.alt = "avatar";
    avatarImg.className = "comment-avatar";

    const nameDateDiv = document.createElement("div");
    nameDateDiv.className = "name-date comment-name-date";

    const nameElement = document.createElement("p");
    nameElement.textContent = name + ":";
    nameElement.classList.add("comment-name");

    const commentDateElement = document.createElement("p");
    commentDateElement.textContent = "Date: " + commentDate;
    commentDateElement.classList.add("comment-date");
    nameDateDiv.appendChild(nameElement);
    nameDateDiv.appendChild(commentDateElement);
    
    const commentTextElement = document.createElement("p");
    commentTextElement.textContent = " " + commentText;
    commentTextElement.classList.add("comment-text");
    commentDiv.appendChild(avatarImg);
    commentDiv.appendChild(nameDateDiv);
    commentDiv.appendChild(commentTextElement);

    return commentDiv;
}

function displayComment(event) {
    event.preventDefault();
    const name = document.getElementById("yourName").value;
    const commentText = document.getElementById("yourComment").value;
    
    if (name && commentText) {
        const newCommentData = {
            name: name,
            commentText: commentText,
            commentPic: "./assets/images/50x50.png",
            commentDate: "Now",
        };
        defaultComments.push(newCommentData);
        const previousComments = document.getElementById("comments");
        const newCommentElement = createComment(newCommentData.name, newCommentData.commentText, newCommentData.commentPic, newCommentData.commentDate);
        previousComments.insertBefore(newCommentElement, previousComments.firstChild);
        
        document.getElementById("yourName").value = "";
        document.getElementById("yourComment").value = "";
    }
}

document.getElementById("add-comment").addEventListener("click", displayComment);

const defaultComments = [
    { 
      name: "Connor Walton",
      commentText: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.", 
      commentPic: "./assets/images/50x50.png", 
      commentDate: "02/17/2021",
    },
    {
    name: "Emilie Beach", 
    commentText: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.", 
    commentPic: "./assets/images/50x50.png", 
    commentDate: "01/09/2021",
    },
    {
    name: "Miles Acosta",
    commentText: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    commentPic: "./assets/images/50x50.png",
    commentDate: "12/20/2020",
    }
];

const previousComments = document.getElementById("comments");
for (let i = 0; i < defaultComments.length; i++) {
    const comment = defaultComments[i];
    const commentElement = createComment(comment.name, comment.commentText, comment.commentPic, comment.commentDate);
    previousComments.appendChild(commentElement);
}