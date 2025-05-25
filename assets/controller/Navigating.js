let dashboard = $("#dashbord"); // ⚠️ Check this ID spelling!
let item = $("#Item");
let order = $("#Orders");
let customer = $("#Customer");

function navigateDashboard() {
    dashboard.show();
    customer.hide();
    item.hide();
    order.hide();
}

function navigateCustomer() {
    customer.show();
    dashboard.hide();
    item.hide();
    order.hide();
}

function navigateItem() {
    item.show();
    dashboard.hide();
    customer.hide();
    order.hide();
}

function navigateOrder() {
    order.show();
    dashboard.hide();
    customer.hide();
    item.hide();
}
