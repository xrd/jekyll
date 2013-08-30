(function(w){
  var searchUrl = function(query) {
    return 'http://dharmafly.noodle-example.jit.su/?q=' +
           encodeURIComponent(JSON.stringify(query)) +
           '&callback=?';
  }

  var jeksearch = function(searchTerm){
    var query = {
      url: 'http://google.com/search?q=site:jekyllrb.com+' + encodeURIComponent(searchTerm),
      type: 'html',
      selector: 'h3.r a',
      extract: 'text'
    };

    jQuery.getJSON(searchUrl(query), function(data) {
      console.log(data);
      demoElement.innerHTML = '<pre>' + 
        JSON.stringify(data, null, 4) +
        '</pre>';
    });
    
  };
  w.jeksearch = jeksearch;
}(window));
