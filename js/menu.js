function readJSON(file){
	$.getJSON(file, function(data) {
    $.each(data, function(index, element) {
        $('body').append($('<div>', {
            text: element.files
        }));
    });
});
}

