// رفتن به صفحه سفارش
function goToOrder(service) {
    localStorage.setItem("service", service);
    window.location.href = "./order.html"; 
}

// نمایش عنوان سفارش در order.html
document.addEventListener("DOMContentLoaded", () => {
    const serviceTitle = document.getElementById("serviceTitle");
    if (serviceTitle) {
        const service = localStorage.getItem("service") || "خدمت انتخابی";
        serviceTitle.innerText = "ثبت سفارش " + service;
    }
});

// ارسال سفارش به تلگرام
function submitOrder(e) {
    e.preventDefault();

    const service = localStorage.getItem("service") || "خدمت انتخابی";
    const fullname = document.getElementById("fullname").value;
    const phone = document
