function tplawesome(e,t){
	res=e;
	for(var n=0;n<t.length;n++)
	{
		res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){
			return t[n][r];
		})
	}
	return res;
}
$(function(){
	$("form").on("submit", function(e){
		e.preventDefault();
		// Prepare the request
		var request = gapi.client.youtube.search.list(
		{
			part: "snippet",
			channelId: "UCXyq6UjvT4dWjMOOiKuBncA",
			type: "video",
			q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
			maxResults: 10,
			order: "viewCount"
		});
		// Execute the request
		request.execute(function(response){
			var results = response.result;
			$.each(results.items, function(index, item){
				$.get("item.html", function(data){
					$("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
				});
			});
		});
	});
});
function init(){
	gapi.client.setApiKey("AIzaSyD-ygOrqTEbqGERk31Te0ogMu7_oJZQwOI");
	gapi.client.load("youtube", "v3" ,function(){
	// youtube API is ready
	});
}
