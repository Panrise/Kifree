$(document).on("click", "#myButton", function(){
	$.post( "https://taketake.azurewebsites.net/api/HttpTrigger1?code=WRYArh2Z8sXoJM0VyKf0hgzk6UWhXQr2sZbCZTB9LtiBLKZbA/BETg==", "送信したい文章" );
}
