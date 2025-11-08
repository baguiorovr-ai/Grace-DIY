// Comments section logic for index.html
document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.getElementById('comment-form');
    const commentsList = document.getElementById('comments-list');

    if (commentForm) {
        commentForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('comment-name').value.trim();
            const text = document.getElementById('comment-text').value.trim();

            if (name && text) {
                // Simple, ephemeral comment add
                const li = document.createElement('li');
                li.innerHTML = `<strong>${name}:</strong> ${text}`;
                commentsList.appendChild(li);

                // Reset form
                commentForm.reset();
            }
        });
    }
});