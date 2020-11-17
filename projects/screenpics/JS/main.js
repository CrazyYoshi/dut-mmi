function makeNewPosition($container, $objet) {
	// Get viewport dimensions (remove the dimension of the div)
	var chH = $objet.height();
	var chW = $objet.width();
	var h = Math.abs($container.height() + 20 - chH);
	var w = Math.abs($container.width() + 20 - chW);
	var nh = Math.floor(Math.random() * h);
	var nw = Math.floor(Math.random() * w);
	return [nh, nw];
}

function animateDiv($target) {
	var Clouds = $target.closest("ul");
	var newq = makeNewPosition($(Clouds), $target);
	var oldq = $target.offset();
	var speed = calcSpeed([oldq.top, oldq.left], newq);
	$target.animate({
		top: newq[0],
		left: newq[1]
	}, speed, function() {
		animateDiv($target);
	});
}

function calcSpeed(prev, next) {
	var x = Math.abs(prev[1] - next[1]);
	var y = Math.abs(prev[0] - next[0]);
	var greatest = x > y ? x : y;
	var speedModifier = 0.1;
	var speed = Math.ceil(greatest / speedModifier);
	return speed;
}

function clouds() { //Fonction d'ouverture-fermeture du nuage de tags
	var otherOpened = false; //varible qui stocke le nom de la liste ouverte
	var working = false; //variable qui va permettre d'éviter d'éviter de relancer la fonction quand elle n'est pas finie
		$("#menu ul li").click(function() {
		if (working) return;
		working = true;
		var cssDiv = $(this).attr('id');
		var idButton = "#" + cssDiv;
		var h = "200px";
		if (otherOpened === false) {
			$(".cloudsWord").fadeIn(100);
			$(".cloudsWord").animate({
				height: h,
			}, 600);
			$(idButton).css({
				'box-shadow': ' inset 0px 4px 8px rgba(0,0,0,0.45)',
				'background-color': '#BA3535'
			});
			$("#LIST" + cssDiv).fadeIn();
			otherOpened = true;
			otherList = cssDiv;
		} else if (otherOpened === true) {
			if (otherList == cssDiv) {
				$(idButton).css({
					'box-shadow': ' inset 0px 0px 0px rgba(0,0,0,0.45)',
					'background-color': '#E54848'
				});
				$("#LIST" + cssDiv).fadeOut(400);
				$(".cloudsWord").animate({
					height: 0,
				}, 600);
				$(".cloudsWord").fadeOut(100);
				otherOpened = false;
				otherList = "";
			} else {
				$("#" + otherList).css({
					'box-shadow': ' inset 0px 0px 0px rgba(0,0,0,0.45)',
					'background-color': '#E54848'
				});
				$(idButton).css({
					'box-shadow': ' inset 0px 4px 8px rgba(0,0,0,0.45)',
					'background-color': '#BA3535'
				});
				$("#LIST" + otherList).fadeOut(400);
				$("#LIST" + cssDiv).fadeIn(400);
				otherList = cssDiv;
			}
		}
		working = false;
	});
}

function visuImg() {
	var onVisu = false;
	$(".img").click(function() {
		if (onVisu === false) {
			$("html, body").animate({
				scrollTop: 0
			});
			$('html, body').css({
				overflow: 'hidden',
				height: '100%'
			});
			$(".imgDisp").css({
				"background-image": $(this).css('background-image')
			});
			$(".imgVisu").fadeIn(100);
			$(".imgVisu .imgDesc #descName").html($('> .hiddenInfo #Aname', this).text());
			$(".imgVisu .imgDesc #descAuthor").html($('> .hiddenInfo #author', this).text());
			$(".imgVisu .imgDesc #descArtist").html($('> .hiddenInfo #artist', this).text());
			$(".imgVisu .imgDesc #descYear").html($('> .hiddenInfo #year', this).text());
			$(".imgVisu .imgDesc #descGenre").html($('> .hiddenInfo #genre', this).text());
			onVisu = true;
		}
	});
	$(".imgVisu").click(function() {
		if (onVisu === true) {
			$('html, body').css({
				overflow: 'auto',
				height: 'auto'
			});
			$(".imgVisu").fadeOut(100);
			onVisu = false;
		}
	});
	$("#previous").click(function() {
		var scroll = $("#img-Content-Parent").scrollTop();
		$("#img-Content-Parent").clearQueue().finish().animate({
			scrollTop: scroll - 930
		});
	});
	$("#next").click(function() {
		var scroll = $("#img-Content-Parent").scrollTop();
		$("#img-Content-Parent").clearQueue().finish().animate({
			scrollTop: scroll + 930
		});
	});
}

function addTags() {
	$('.cloudsWord ul li').each(function() {
		animateDiv($(this));
	});
	$(".tags ul").on("click", "li", function() {
		var tag = $(this).text();
		var tagList = $(this).closest("ul").attr("id");
		var li = $(this);
		$(".tagContainer").each(function() {
			if ($("> .tagDeco", this).text() === "" && $("> .tagDeco", this).attr('id') === "") {
				$("> .tagDeco", this).attr('id', "BAR" + tagList).html(tag);
				$('> .tagDeco', this).fadeIn();
				$(this).css({
					'box-shadow': ' inset 0px 4px 8px rgba(0,0,0,0.45)'
				});
				li.remove();
				$(document).trigger('tagUpdate');
				return false;
			}
		});
	});
}

function hoverTags() {
	$(".tagContainer").mouseenter(function() {
		if ($('> .tagDeco', this).text() !== "") {
			$('> .tagDeco', this).clearQueue().finish().fadeOut();
			$('> .delTag', this).clearQueue().finish().fadeIn();
		}
	});
	$(".tagContainer").mouseleave(function() {
		if ($('> .tagDeco', this).text() !== "") {
			$('> .tagDeco', this).clearQueue().finish().fadeIn();
			$('> .delTag', this).clearQueue().finish().fadeOut();
		}
	});
}

function delTags() {
	var working = false;
	$("#tagsBar").on('click', ".tagContainer", function() {
		if (working) return;
		working = true;
		var TagToReplace = $('> .tagDeco', this).text();
		var tagList = "#" + $('> .tagDeco', this).attr('id').slice(3);
		var random = 1 + Math.floor(Math.random() * 5);
		var tagSize = "tag" + random;
		var liElement = "<li><a class=\"" + tagSize + "\" href=\"javaScript:void(0);\">" + TagToReplace + "</a></li>";
		var html = $(tagList).html() + liElement;
		if ($('> .tagDeco', this).attr('id') !== "" && $('> .tagDeco', this).text() !== "") {
			$(this).css({
				'box-shadow': ' inset 0px 0px 0px rgba(0,0,0,0.45)'
			});
			$('> .tagDeco', this).fadeOut();
			$('> .delTag', this).fadeOut();
			$('> .tagDeco', this).attr("id", "").html("");
			$(document).trigger('tagUpdate');
			$(tagList).html(html);
			$('.cloudsWord ul li').each(function() {
				animateDiv($(this));
			});
		}
		working = false;
	});
	$("#header").on('click', "#hmIcon", function() {
		if (working) return;
		working = true;
		$(".tagContainer").each(function() {
			var TagToReplace = $('> .tagDeco', this).text();
			var tagList = "#" + $('> .tagDeco', this).attr('id').slice(3);
			var random = 1 + Math.floor(Math.random() * 5);
			var tagSize = "tag" + random;
			var liElement = "<li><a class=\"" + tagSize + "\" href=\"javaScript:void(0);\">" + TagToReplace + "</a></li>";
			var html = $(tagList).html() + liElement;
			if ($('> .tagDeco', this).attr('id') !== "" && $('> .tagDeco', this).text() !== "") {
				$(this).css({
					'box-shadow': ' inset 0px 0px 0px rgba(0,0,0,0.45)'
				});
				$('> .tagDeco', this).fadeOut();
				$('> .delTag', this).fadeOut();
				$('> .tagDeco', this).attr("id", "").html("");
				$(document).trigger('tagUpdate');
				$(tagList).html(html);
				$('.cloudsWord ul li').each(function() {
					animateDiv($(this));
				});
			}
		});
		working = false;
	});
}

function tagSelection() {
	// Selection de tags
	addTags();
	//Hover sur les tags de tagBar
	hoverTags();
	//Tagbar Retour du Tag à la liste appropriée
	delTags();
}

function startActivities() {
	clouds();
	//Function qui est relancée lorsqu'on retire un tag
}
$(document).ready(function() {
	clouds();
	tagSelection();
	$("#hmIcon").finish().mouseenter(function() {
		$(this).clearQueue().finish().animate({
			"background-size": "+=20px",
		});
	});
	$("#hmIcon").mouseleave(function() {
		$(this).clearQueue().finish().animate({
			"background-size": "-=20px",
		});
	});
});