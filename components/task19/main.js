import jsPDF from 'jspdf';

// variables,
const steps = document.querySelectorAll('.step');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const totalEl = document.getElementById('total');
const downloadBtn = document.getElementById('download');

const nameInput = document.getElementById('userName');
const emailInput = document.getElementById('userEmail');
const phoneInput = document.getElementById('userPhone');

let currentStep = 0;

// validate user details,
function validateUserDetails() {
    let valid = true;

    const nameRegex = /^[a-zA-Z ]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!nameRegex.test(nameInput.value.trim())) {
        nameInput.classList.add('error');
        valid = false;
    } else {
        nameInput.classList.remove('error');
    }

    if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('error');
        valid = false;
    } else {
        emailInput.classList.remove('error');
    }

    if (!phoneRegex.test(phoneInput.value.trim())) {
        phoneInput.classList.add('error');
        valid = false;
    } else {
        phoneInput.classList.remove('error');
    }

    if (valid) {
        localStorage.setItem(
            'quotationUser',
            JSON.stringify({
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                phone: phoneInput.value.trim(),
            })
        );
    }

    return valid;
}

document.addEventListener('input', validateUserDetails);

// calculating total price,
function calculateTotal() {
    let total = 0;
    const priceSummary = [];

    let checkedInputVal = document.querySelectorAll('input:checked');

    checkedInputVal.forEach(input => {
        const price = Number(input.dataset.price || 0);
        const label = input.parentElement.textContent.trim();
        total += price;

        if (price > 0) {
            priceSummary.push({ label, price });
        }
    });


    localStorage.setItem('quotationTotal', total);
    localStorage.setItem('quotationSummary', JSON.stringify(priceSummary));


    if (totalEl) {
        totalEl.textContent = `₹ ${total.toLocaleString()}`;
    }
}

// next div container btn,
nextBtn.addEventListener('click', () => {

    // validation incorrect means don't go next,
    if (currentStep === 0 && !validateUserDetails()) return;

    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
    }
});

// prev div container btn,
prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
});

// while changing document price added to total,
document.addEventListener('change', calculateTotal);

// showing which step is active,
function showStep(index) {
    steps.forEach((step, i) => {
        step.classList.toggle('hidden', i !== index);
    });

    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.style.display = index === steps.length - 1 ? 'none' : 'inline-block';
}

showStep(currentStep);

// downloading pdf handle,
const pdfHandle = () => {
    const pdf = new jsPDF();
    const total = localStorage.getItem('quotationTotal') || 0;
    const priceSummary = JSON.parse(localStorage.getItem('quotationSummary') || '[]');
    const clientDetails = JSON.parse(localStorage.getItem('quotationUser') || null);

    // pdf title,
    let y = 20;
    pdf.setFont("'Segoe UI', Tahoma, Geneva, Verdana, sans-serif");
    pdf.setFontSize(16);
    pdf.text('Website Quotation Summary', 20, y);

    // pdf client details,
    y += 15;
    pdf.setFont("'Segoe UI', Tahoma, Geneva, Verdana, sans-serif");
    pdf.setFontSize(14);
    pdf.text(`Name: ${clientDetails.name}`, 20, y); y += 6;
    pdf.text(`Email: ${clientDetails.email}`, 20, y); y += 6;
    pdf.text(`Phone: ${clientDetails.phone}`, 20, y); y += 10;

    // pdf price details,
    y += 10;
    pdf.setFontSize(12);
    priceSummary.forEach(item => {
        pdf.setFont("'Segoe UI', Tahoma, Geneva, Verdana, sans-serif");
        pdf.text(`${item.label} - ₹ ${item.price.toLocaleString()}`, 20, y);
        y += 8;
    });

    // pdf total,
    y += 6;
    pdf.setFont("'Segoe UI', Tahoma, Geneva, Verdana, sans-serif");
    pdf.setFontSize(14);
    pdf.text(`Total Amount: ₹ ${Number(total).toLocaleString()}`, 20, y);

    pdf.save('website-quotation.pdf');
};

const debounce = (func, delay) => {
    let timeoutId;

    return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func();
        }, delay);
    };
};

// PDF Download,
downloadBtn.addEventListener('click', debounce(pdfHandle, 1000));