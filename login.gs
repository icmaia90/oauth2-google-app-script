function showSidebar() {
    var weekdoneService = getWeekdoneService();
    var template, page;
    if (!weekdoneService.hasAccess()) {
        var authorizationUrl = weekdoneService.getAuthorizationUrl();
        template = HtmlService.createTemplate(
            '<h1>Autentication</h1> ' +
            '<a href="<?= authorizationUrl ?>" target="_blank">Authorize the use of data from your Weekdone account</a>. ' +
            '<p>Why do I need to do this?</p> ' +
            '<p>This application extract data from Weekdone on your behalf, using your credentials and permissions. Such operation must be approved by you.</p>' +
            '<p>Google Sheets should present you with an authentication screen automatically but if that doesn\'t happen you can use the link available on this sidebar.</p>' +
            '<p>Reopen the sidebar when the authorization is complete.</p>');
        template.authorizationUrl = authorizationUrl;
    } else {
        template = HtmlService.createTemplate(
            '<h1>Autentication</h1> ' +
            '<p>You are already authorized. This sidebar can be closed.</p> ');
    }
    page = template.evaluate();
    SpreadsheetApp.getUi().showSidebar(page);
}

function showDialog() {
    var weekdoneService = getWeekdoneService();
    if (!weekdoneService.hasAccess()) Browser.msgBox('You should authorize this script to get Weekdone data on your behalf. On the menu, go to Weekdone Integration > Login to authorize.', Browser.Buttons.OK);
}

function getObjectives() {
    try {
        weekdoneGetObjectives();
    } catch (e) {
        Browser.msgBox(e, Browser.Buttons.OK);
    }
}

function logout() {
    var weekdoneService = getWeekdoneService()
    weekdoneService.reset();
}

function onOpen() {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Weekdone Integration')
        .addItem('Login', 'showSidebar')
        .addItem('Retrieve Objectives', 'getObjectives')
        .addItem('Logout', 'logout')
        .addToUi();
    showDialog();
}