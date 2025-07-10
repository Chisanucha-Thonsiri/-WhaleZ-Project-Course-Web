function getDate(){
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    const deleteSecond = time.slice(0,-3);
    return {
        date:date,
        time:deleteSecond
    }
}

export default getDate;