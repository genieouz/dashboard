const BASE_URL = "http://localhost:3000"
const websiteId = "60634d3f5a401a2a1ca8af2f";
export const getGaNewUsersData = async (startDate, endDate) => {
    // const myHeaders = new Headers()
        // myHeaders.append('x-access-token', token)
    const url = `${BASE_URL}/ga/new-users?startDate=${startDate}&endDate=${endDate}&websiteId=${websiteId}`;
    const requestOptions = {
        method: 'GET',
        // headers: myHeaders,
        redirect: 'follow',
    }
    let res = await fetch(url, requestOptions)
    return await res.json()
}

export const getGaBounceRateData = async (startDate, endDate) => {
    // const myHeaders = new Headers()
        // myHeaders.append('x-access-token', token)
    const url = `${BASE_URL}/ga/bounce-rate?startDate=${startDate}&endDate=${endDate}&websiteId=${websiteId}`;
    const requestOptions = {
        method: 'GET',
        // headers: myHeaders,
        redirect: 'follow',
    }
    let res = await fetch(url, requestOptions)
    return await res.json()
}

export const getGaSourceData = async (startDate, endDate) => {
    // const myHeaders = new Headers()
        // myHeaders.append('x-access-token', token)
    const url = `${BASE_URL}/ga/audience-source?startDate=${startDate}&endDate=${endDate}&websiteId=${websiteId}`;
    const requestOptions = {
        method: 'GET',
        // headers: myHeaders,
        redirect: 'follow',
    }
    let res = await fetch(url, requestOptions)
    return await res.json()
}

export const getGaMostPageViewsData = async (startDate, endDate) => {
    // const myHeaders = new Headers()
        // myHeaders.append('x-access-token', token)
    const url = `${BASE_URL}/ga/pageviews?startDate=${startDate}&endDate=${endDate}&websiteId=${websiteId}`;
    const requestOptions = {
        method: 'GET',
        // headers: myHeaders,
        redirect: 'follow',
    }
    let res = await fetch(url, requestOptions)
    return await res.json()
}

export const randomColor = () => {
    const start = 1;
    const end = 255;
    const r = Math.floor(Math.random() * end) + 50;
    const g = Math.floor(Math.random() * end) + start;
    const b = Math.floor(Math.random() * end) + start;
    return { r, g, b };
}