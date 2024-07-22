document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector(".email-footer p");
    footerText.innerHTML = `&copy; ${currentYear} <a href="https://www.kydmasong.net/" target="_blank">KTM EduTech</a>. All rights reserved.`;
});