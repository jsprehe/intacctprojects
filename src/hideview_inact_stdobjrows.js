<script>
jq(document).ready(function() { 
var class_search_rows = ".listItemValue";
var class_search_header = ".bold";
var str_search = "inactive";

   jq(class_search_rows).each( function() {   
   var str = jq(this).text();
    if (str == str_search) { 
		  jq(this).closest("tr").hide();
    }
  });

   jq(class_search_header).each( function() {   
   var str = jq(this).text();
    if (str == str_search) { 
		  jq(this).closest("tr").hide();
    }
  });

});
</script>
