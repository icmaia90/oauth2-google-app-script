function weekdoneGetObjectives() {
    var weekdoneService = getWeekdoneService();
    var response = UrlFetchApp.fetch(WEEKDONE_OBJECTIVES_API + '?token=' + weekdoneService.getAccessToken());
    if (response) {
        var sheet = SpreadsheetApp.getActiveSheet();
        var json = JSON.parse(response.getContentText());
        for (i in json.data) {
            sheet.appendRow([json.data[i].description, json.data[i].type, json.data[i].team]);
        }
    }
}