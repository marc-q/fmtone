function Result (title, url, fragment, score)
{
	this.title = title;
	this.url = url;
	this.fragment = fragment;
	this.score = score;
}

function sjs_sort_score (a, b)
{
	if (a.score > b.score)
		return -1;
	if (a.score < b.score)
		return 1;
	return 0;
}

function sjs_show_results (results)
{
	var section = document.querySelector('section');
	
	if (results.length === 0)
	{
		var err = document.createElement ('h3');
		err.textContent = "We couldn't find any page.";
		section.appendChild (err);
		return;
	}
	
	for (var i = 0; i < results.length; i++)
	{
		var res = document.createElement ('article');

		var res_link = document.createElement ('a');
		res_link.textContent = results[i]['title'];
		res_link.href = results[i]['url'];

		var res_name = document.createElement ('h2');
		res_name.appendChild (res_link);
		res.appendChild (res_name);

		var res_desc = document.createElement ('p');
		res_desc.textContent = results[i].fragment +
		                       String.fromCharCode (0x2026);
		res.appendChild (res_desc);
		
		section.appendChild (res);
	}
}

function sjs_rank (index, q)
{
	var results = [];
	var body = "";
	var score = 0;
	
	for (var i = 0; i < index.length; i++)
	{
		if (index[i].body === undefined)
			continue;
		
		body = index[i].body.toLowerCase ();
		
		if (!body.includes (q))
			continue;
		
		var myre = new RegExp ("(" + q + ")", "g");
		score = body.match (myre);
		
		results.push (new Result (index[i].title,
		                          index[i].url,
		                          index[i].body.substring (0, 140),
		                          score.length));
	}
	
	results.sort (sjs_sort_score);
	sjs_show_results (results);
}

function sjs_search (q)
{
	document.querySelector("input[name='q']").value = decodeURI (q);
	
	var req = new XMLHttpRequest ();
	req.open ('GET', "http://fmt.one/search.json");
	req.responseType = 'json';
	req.send ();
	
	req.onload = function ()
	{
		var items = req.response;
		sjs_rank (items, q.toLowerCase ());
	}
}
