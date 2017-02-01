<script>
//debugging needed due to redraw when account is selected
jq(document).ready(function(){
	// initializes page
	var TF_VendorType = jq('#_obj__BILL_VENDORTYPE'); // custom field
	var objectname = 'vendor';
	var searchfields = 'VENDTYPE';
	var returnformat = 'json';
	var VendorSelectField = jq('#_obj__VENDORID'); // vendor select drop down
	var vendorval;
	var vendorIDkey;
	var api = new API_Session();
	
	
	TF_VendorType.prop( "disabled", true );		
	TF_VendorType.change(function() {

			var callback = function(data) {
				data = eval(data);
				
				TF_VendorType.prop( "disabled", false );
				
				if (data.length == 0) { 
					TF_VendorType.val("");
					TF_VendorType.prop( "disabled", true );	
					return;
				}
				if (data[0].VENDTYPE == null ) { 
					TF_VendorType.val("");
				} else {
					TF_VendorType.val(data[0].VENDTYPE);
				}
				TF_VendorType.prop( "disabled", true );				
			}
			//vendor select field parsed to return vendor ID
			vendorval = VendorSelectField.val();
			vendorIDkey = vendorval.split('--',1);
			
			api.ip_readByName(objectname, searchfields, vendorIDkey, returnformat, callback);
	});

	VendorSelectField.change(function() {
		TF_VendorType.change();
	});
	
});
</script>