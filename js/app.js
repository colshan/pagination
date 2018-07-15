const studentList = $('.student-item');
let lowerBound = 0;
let upperBound = 10;
let currentPage = 0;

function paginate () {
	studentList.each(function(index, element){
		if (index > lowerBound && index < upperBound){
			$(element).show();
		}
		else {
			$(element).hide();
		}
	});
}

function createPageNav () {
	const pageNav = $('<ul class="pagination"></ul>');
	$('body').append(pageNav);
	const numPages = Math.ceil(studentList.length/10);
	for (var i = 0; i < numPages; i++){
		let j = i;
		const link = $(`<li><a href='#'>${i+1}</a></li>`).click( function () {
			lowerBound = j*10;
			upperBound = lowerBound+10;
			console.log(lowerBound);
			paginate();
		})
		pageNav.append(link);
	}
}

paginate();
createPageNav();