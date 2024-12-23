async function fetchContent(url) {
    try {
        event.preventDefault()
        fetch(url).then(res => res.text())
        .then(res => {
            document.getElementById("content").innerHTML = res;
        })
    } catch (error) {
        console.log(error)
    }
}