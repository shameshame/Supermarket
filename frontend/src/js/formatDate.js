function helper (input){
    return input<10 ? `0${input}`:input
}

function formatDate(date){
    let toDate= new Date(date);
    
    let year = toDate.getFullYear();
    let day =  helper(toDate.getDate())
    let month=  helper(toDate.getMonth() + 1);
    let hours=  helper(toDate.getHours());
    let minutes=helper(toDate.getMinutes());

    
    return `${day}-${month}-${year},${hours}:${minutes}`;

}

export default formatDate