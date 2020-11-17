function ajaxStart(test) {
	$.ajax({
		type: "POST",
		url: "./PHP/functions.php",
		data: {
			tags: test
		},
		success: function(res) {
			$("#img-Content-Parent").html(res);
			visuImg();
		}
	});
}
$(document).ready(function() {
	//Recupération des tags
	$(document).on("tagUpdate", function() {
		var tags = new Array();
		var i = 0;
		$(".tagContainer .tagDeco").each(function() {
			if ($(this).attr("id") !== "" && $(this).text() !== "") {
				var tag = $(this).text();
				var cat = $(this).attr("id").slice(7);
				tags[i] = new Array(tag, cat);
				i++;
			}
		});
		var tagsString = JSON.stringify(tags);
		ajaxStart(tagsString);
	});
	ajaxStart(null);
});