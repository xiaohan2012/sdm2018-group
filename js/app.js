$(document).ready(function(){
var sessions = [
      'applied-data-science', 'health-informatics', 'personalization', 
      'classification', 'matrix-factorization-and-topic-models', 'sequence-data', 
      'clustering', 'networks', 'social-media',
      'graphs', 'novel-learning-methods', 'time-series-data'];

var stuff = "";
sessions.forEach(function(session){
	var template = "<section data-markdown id='session-{{id}}'>\n";
	template += '<textarea data-template>\n';
	template += '### {{id}}\n';
	template += '![](figs/wordcloud/{{id}}.png)\n';
	template += '</textarea>\n</section>\n\n';
	    
	var output = Mustache.render(template, {'id': session});
	stuff += output;
    });

console.log(stuff);
$(stuff).insertAfter('#sessions');


Reveal.initialize({
	math: {
	    mathjax: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js',
		config: 'TeX-AMS_HTML-full'  // See http://docs.mathjax.org/en/latest/config-files.html		
		},			
	    dependencies: [
			   { src: 'plugin/markdown/marked.js' },
			   { src: 'plugin/markdown/markdown.js' },
			   { src: 'plugin/notes/notes.js', async: true },
			   { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
			   {src: 'plugin/math/math.js', async: true }
			   ]
	    });
    });
