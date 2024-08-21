const contactUsButton = document.querySelector('a.btn.btn-people.btn-outline-hover-people');
if (contactUsButton) {
    contactUsButton.addEventListener('mouseover', () => {
        contactUsButton.style.top = Math.round(Math.random() * 400) + 100 + 'px';
        contactUsButton.style.left = Math.round(Math.random() * 400) - 200 + 'px';
    });
}