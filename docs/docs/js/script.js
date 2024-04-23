function likeNews() {
    const likeButton = document.querySelector('.like');
    // 这里可以添加点赞的逻辑，比如增加计数器
    likeButton.textContent = '点赞（已点赞）';
}

// JavaScript函数用于处理关注
function followNews() {
    const followButton = document.querySelector('.follow');
    // 这里可以添加关注的逻辑
    followButton.textContent = '关注（已关注）';
}