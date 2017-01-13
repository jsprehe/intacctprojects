 <script>
 //Script to hide a section -- populate variables below based on section to hide. Other Section is the ID of a field within the section to hide.
 var header_text = "Document Information";
 var header_class_search = ".bold.gray";
 var oth_section_field_jqid = "#rbi_F_isActive";
 
jq(document).ready(function(){
     jq(header_class_search).each( function() {     
        var str = jq(this).text();         
        if (str.search(header_text) > 0) { 
		  var el = get_common_ancestor(jq(this), oth_section_field_jqid);
		  jq(el).hide();
		}
     });
});

function get_common_ancestor(a, b)
{
    $parentsa = jq(a).parents();
    $parentsb = jq(b).parents();

    var found = null;

    $parentsa.each(function() {
        var thisa = this;

        $parentsb.each(function() {
            if (thisa == this)
            {
                found = this;
                return false;
            }
        });

        if (found) return false;
    });

    return found;
}

</script>