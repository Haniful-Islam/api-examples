const randomFriends = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => showrandomFriends(data));
}

const showrandomFriends = (data) => {
    // console.log(friends.results[0].gender);
    const friends = data.results;
    const myFriends = document.getElementById('my-friends');
    for(const friend of friends){
        const p = document.createElement('p');
        p.innerText = `name: ${friend.name.first} ${friend.name.last}`
        myFriends.appendChild(p)
    }
}