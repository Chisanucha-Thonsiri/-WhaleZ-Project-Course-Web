function isToday(date){
    const todayData = new Date();
    const today = todayData.toLocaleDateString();
    return date === today;
}

export default isToday;