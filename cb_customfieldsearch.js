<script> 
/* 
cb_stdobj_findcustfields: 
Callback function to search a standard object for custom fields on an object and identify if they are required. 
 
Custom fields are identified using the <id> field from an inspect detail call. It appears that for a standard object, the last four digits of a custom field is greater than 1000 while for standard fields the last four digits is under 1000. (Note: not extensively tested). Fields used for object relationships have a different id length than other fields, they are 5 digits vs 15 for regular fields, and are filtered out below by looking at length. 
 
The <isRequired> field from the call can return whether or not the field has been marked as required.  
*/ 
 
// Sets the object to search for custom fields. To make this dynamic create another callback function to set the variable before the inspect call is made.  
var inspect_object = 'CUSTOMER'; 
 
jq( document ).ready(function() { 
       var cb_stdobj_findcustfields = function(responseText) { 
        var xml = responseText, 
                xmlDoc = jq.parseXML(xml), 
                $xml = jq(xmlDoc); 
 
       $xml.find("Field").each(function() { 
            var id_value = jq(this).children('id').text(); 
            var isrequired = jq(this).children('isRequired').text(); 
            // standard and custom fields are 15, relationships are 5, so 10 seems like a safe bet 
            if (id_value.length > 10 && Number(id_value.slice(-4))>1000) {  
 
                //CODE HERE TRIGGERED BY CUSTOM FIELD WITH REQUIRED FIELDS 
                console.log(id_value); 
                console.log(isrequired); 
} 
        }); 
} 
var s = new API_Session(); 
s.ip_inspect(inspect_object, "1", cb_stdobj_findcustfields); //returned as XML not JSON 
}); 
</script> 