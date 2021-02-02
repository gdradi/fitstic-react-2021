export const formatDate = (date: Date) => {
    let day: string = (date.getDate() < 10 ? "0" : "") + date.getDate();
    let month: string = (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1);
    let year: string = date.getFullYear().toString();

    let hours = (date.getHours() < 10 ? "0" : "") + date.getHours();
    let minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    let seconds = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}