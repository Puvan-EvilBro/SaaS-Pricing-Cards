
const billingToggle = document.getElementById("billingToggle");

const prices = document.querySelectorAll(".amount");
const periods = document.querySelectorAll(".period");
const billingInfo = document.querySelectorAll(".billing-info");

const monthlyLabel = document.getElementById("monthlyLabel");
const yearlyLabel = document.getElementById("yearlyLabel");

billingToggle.addEventListener("change", function () {

    const isYearly = billingToggle.checked;

    prices.forEach((price) => {

        const monthly = price.dataset.monthly;
        const yearly = price.dataset.yearly;

        price.textContent = isYearly ? yearly : monthly;

    });

    periods.forEach((period) => {
        period.textContent = isYearly ? "/month" : "/month";
    });

    billingInfo.forEach((info, index) => {

        if (index === 0) {
            info.textContent = "Free forever";
        } else {
            info.textContent = isYearly
                ? "Billed annually"
                : "Billed monthly";
        }

    });

    monthlyLabel.classList.toggle("active", !isYearly);
    yearlyLabel.classList.toggle("active", isYearly);

});
