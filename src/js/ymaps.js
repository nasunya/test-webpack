function mapInit() {
    ymaps.ready(() => {
        let moscow = new ymaps.Map('map', {
            center: [55.76, 37.6],
            zoom: 10
        })
    })
}

export {
    mapInit
}