export const processStockDayData = (str) => {
    const items = str.split(',')
    
    return {
        ts: items[0] * 1,
        open: items[1],
        high: items[2],
        low: items[3],
        close: items[4],
        date: formatDate(items[0]),
        mmyy: getMMYY(items[0])
    }
};

export const formatDate = (ts) => {
    let date = new Date(ts * 1);
    let month = date.getMonth() + 1;
    let day = String(date.getDate()).padStart(2, '0');
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

export const getMMYY = (ts) => {
    let date = new Date(ts * 1);
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${month}${year}`;
};

