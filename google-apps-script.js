function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);

    // Get the active spreadsheet and sheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();

    // Append the data as a new row
    // Order: FULL NAME, PHONE NUMBER, SUBURB, VEHICLE MAKE & MODEL, SERVICE TYPE, PREFERRED DATE
    sheet.appendRow([
      data.name,
      data.phone,
      data.suburb,
      data.vehicle,
      data.service,
      data.date
    ]);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Booking submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}