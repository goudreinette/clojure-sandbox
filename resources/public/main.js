$('#period').datepicker({
    language: 'en',
    dateFormat: "yyyy-mm-dd",
    onSelect (formattedDate, date, inst) {
        location.assign(`/?date=${formattedDate}`)
    }
})
