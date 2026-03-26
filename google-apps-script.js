function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // A: Full Name | B: Phone Number | C: Suburb/Location | D: Vehicle Make & Model | E: Service Selected | F: Additional Notes
    sheet.appendRow([
      data.fullName,
      data.phoneNumber,
      data.location,
      data.vehicleModel, // Updated spelling mapping
      data.serviceSelected,
      data.additionalNotes
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({"result":"success"}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({"result":"error", "error": error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}