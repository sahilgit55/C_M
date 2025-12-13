function utc2delhi(utc_datetime) {
	// Convert UTC datetime to local Delhi time
	var utcDate = new Date(utc_datetime);
	var delhiDate = new Date(utcDate.getTime());

	// Date parts
	var year = delhiDate.getFullYear();
	var month = ('0' + (delhiDate.getMonth() + 1)).slice(-2);
	var date = ('0' + delhiDate.getDate()).slice(-2);

	// Time parts (12-hour format)
	var hours24 = delhiDate.getHours();
	var ampm = hours24 >= 12 ? 'PM' : 'AM';
	var hours12 = hours24 % 12 || 12; // convert 0 to 12
	var hour = ('0' + hours12).slice(-2);

	var minute = ('0' + delhiDate.getMinutes()).slice(-2);
	var second = ('0' + delhiDate.getSeconds()).slice(-2);

	return `${date}-${month}-${year} ${hour}:${minute}:${second} ${ampm}`;
}
