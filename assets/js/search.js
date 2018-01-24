function fmt_show_results (data)
{
	var items = data['items'];
	var section = document.querySelector('section');
	
	for (var i = 0; i < items.length; i++)
	{
		var res = document.createElement ('article');
		var res_name = document.createElement ('h2');
		var res_link = document.createElement ('a');
		
		res_link.textContent = items[i].name.replace ('.md', '');
		res_link.href = "http://fmt.one/wiki/" + res_link.textContent;
		
		res_name.appendChild (res_link);
		res.appendChild (res_name);
		
		if (items[i].text_matches.length >= 1)
		{
			var res_desc = document.createElement ('p');
			res_desc.textContent = items[i].text_matches[0].fragment;
			res.appendChild (res_desc);
		}
		
		section.appendChild (res);
	}
}

function fmt_search (q)
{
	var url = "https://api.github.com/search/code?q=" + q + "+in:file+path:/wiki/+repo:marc-q/fmtone";
	var req = new XMLHttpRequest ();
	req.open ('GET', url);
	req.responseType = 'json';
	req.setRequestHeader ('Accept', 'application/vnd.github.v3.text-match+json');
	req.send ();
	
	req.onload = function ()
	{
		var items = req.response;
		fmt_show_results (items);
	}
}
