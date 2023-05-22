
document.addEventListener('DOMContentLoaded', () => {
    //页面加载后，每秒查看计时器增量
    const counter = document.getElementById('counter')
    let count = 0

    function updateCounter() {
        counter.textContent = count
    }
    function incrementCounter() {
        count++
        updateCounter()
    }
    setInterval(incrementCounter, 1000)

    //使用加号和减号按钮手动增加和减少计数器。
    const minus = document.getElementById('minus')
    const plus = document.getElementById('plus')

    function decrementCounter() {
        count--
        updateCounter()
    }
    minus.addEventListener('click', decrementCounter)
    plus.addEventListener('click', incrementCounter)

    //"Like" an individual number of the counter.
    //I should see the count of the number of "likes" associated with that number displayed.

    let likes = {}
    const heart = document.getElementById('heart')
    const likeList = document.querySelector('.likes')

    function likeCount() {
        if (likes[count]) {
            likes[count]++
        } else {
            likes[count] = 1
        }
        updateLike()
    }
    function updateLike() {
        likeList.innerHTML = ''

        for (let number in likes) {
            let likeItem = document.createElement('li')
            likeItem.textContent = number + ' has been liked ' + likes[number] + ' times'
            likeList.appendChild(likeItem)
        }
    }
    heart.addEventListener('click', likeCount)

    // Pause the counter, which should: 
    // pause the counter
    // disable all buttons except the pause button
    // switch the l abel on the button from "pause" to "resume"
    let timerId
    let playing = true
    const pauseButton = document.getElementById('pause')

    function pause() {
        playing = false
        clearInterval(timerId)
        counter.disabled = true
        minus.disabled = true
        plus.disabled = true
        heart.disabled = true
        pauseButton.innerText = "resume"
    }

    function restart() {
        playing = true
        minus.disabled = false
        plus.disabled = false
        heart.disabled = false
        pauseButton.innerText = "pause"
    }

    function togglePause() {
        if (playing) {
            pause();
        } else {
            restart();
        }
    }
    pauseButton.addEventListener('click', togglePause);

    // submit comments
    const commentForm = document.getElementById('comment-form')

    function leaveComment() {
        const commentList = document.getElementById('list')
        const commentInput = document.getElementById('comment-input')
        const commentText = commentInput.value
        const newComment = document.createElement('p')
        newComment.textContent = commentText
        commentList.appendChild(newComment)

    }
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault()
        leaveComment()
        commentForm.reset()
    })

})