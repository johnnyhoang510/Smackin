export const fetchBusinesses = (query) => {
    return $.ajax({
        method: "GET",
        url: '/api/businesses',
        data: {query}
    })
};


export const fetchBusiness = (businessId) => {
    return $.ajax({
        method: "GET",
        url: `/api/businesses/${businessId}`
    })
};