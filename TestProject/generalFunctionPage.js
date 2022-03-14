//TC for required fields

const requiredField = () => {
    var header = element(by.id("gnav-header-inner"));
    console.log(header|JSON)
    // scroll
    browser.sleep(2000);
    browser.executeScript("arguments[0].scrollIntoView();", header.getWebElement());
    browser.sleep(2000);
    var signIn = header.all(by.css("[class='wt-btn wt-btn--small wt-btn--transparent wt-mr-xs-1 inline-overlay-trigger signin-header-action select-signin']"));
    browser.sleep(2000);
    signIn.click()
    var btnRegister = element(by.css("[class='wt-btn wt-btn--secondary wt-btn--small inline-overlay-trigger register-header-action select-register']"));
    btnRegister.click();
    var btnSignIn = element.all(by.tagName("submit"));
    btnSignIn.click();

}

// TC for Register 

const register = (text1,text2) => {
    var header = element(by.id("gnav-header-inner"));
    browser.sleep(2000);
    var signIn = header.all(by.css("[class='wt-btn wt-btn--small wt-btn--transparent wt-mr-xs-1 inline-overlay-trigger signin-header-action select-signin']"));
    browser.sleep(2000);
    signIn.click()
    var btnRegister = element(by.css("[class='wt-btn wt-btn--secondary wt-btn--small inline-overlay-trigger register-header-action select-register']"));
    btnRegister.click();
    var email = element(by.id("join_neu_email_field"));
    email.clear();
    email.sendKey(text1);
    var name = element(by.id("join_neu_first_name_field"));
    name.clear();
    name.sendKey(text2);
    var password = element(by.id("join_neu_password_field"));
    password.sendKey("test1234567");
    
}

// TC for Login

const login = () => {
    var header = element(by.id("gnav-header-inner"));
    browser.sleep(2000);
    var signIn = header.all(by.css("[class='wt-btn wt-btn--small wt-btn--transparent wt-mr-xs-1 inline-overlay-trigger signin-header-action select-signin']"));
    browser.sleep(2000);
    signIn.click()
    var username = element(by.id("join_neu_email_field"));
    username.sendKey("test_test@gmail.com");
    var password = element(by.id("join_neu_password_field"));
    password.clear();
    password.sendKey("test1234567");
    var btnSignIn = element.all(by.tagName("submit"));
    btnSignIn.click();
}

// TC for search box 

const search = (text) => {
    var searchbox = element(by.id("gnav-search"));
    searchbox.sendKey(text);
    var button = searchbox.all(by.tagName("submit"));
    button.click();

}

// Drop down list and checkbox 

const dropdowncheckbox = (index) => {
    var notifications = element(by.css("[class='wt-icon wt-menu__trigger__caret']"));
    notifications.click();
    var modal = element(by.css("[class='wt-display-flex-xs wt-flex-direction-column-xs wt-height-full']"));
    modal.get(index).click();

    var mainpage = element(by.id("content"));
    var checkbox = mainpage.all(by.id("gift-checkbox-GlamourJewelryHouse-input"));
    checkbox.click();
}


module.exports = {
    requiredField,
    register,
    login,
    search,
    dropdowncheckbox,

}