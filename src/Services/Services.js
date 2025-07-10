const getDataServices = () => {
    return [
        {
            id: 1, 
            image: '/images/services/web.png',
            keahlian: 'WEB DEVELOPMENT',
            text: 'I can create websites from the frontend and backend side'
        },
        {
            id: 2, 
            image: '/images/services/figma.png',
            keahlian: 'UI/UX DESAIN',
            text: 'I can desaign using tool figma'
        },
        {
            id: 3, 
            image: '/images/services/database.png',
            keahlian: 'DATABASE',
            text: 'I can build database using postgreSQL dan MySQL'
        }
    ];
}

export { getDataServices };