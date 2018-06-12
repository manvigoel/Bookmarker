// listener for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

//save bookmark
function saveBookmark(e){
	
	var siteName = document.getElementById('siteName').value;
	var siteURL = document.getElementById('siteURL').value;
	

	var bookmark = {
		name : siteName,
		url : siteURL
	}
	

	//local storage test
	localStorage.setItem('test', 'manvi');

	//prevent form from resubmitting
	e.preventDefault();
}