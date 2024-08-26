const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }

        alert('Thank you! Your message has been sent.');
        contactForm.reset();
    });
}

const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    flatpickr("#date", {
        enableTime: true,           
        dateFormat: "Y-m-d H:i",    
        minDate: "today",        
        time_24hr: true,          
        defaultDate: new Date(),    
        inline: true,              
        minuteIncrement: 15,        
    });

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value.trim();

        if (!name || !email || !service || !date) {
            alert('Please fill in all fields.');
            return;
        }

        alert(`Thank you! Your appointment for ${service} on ${date} has been booked.`);
        bookingForm.reset();
    });
}
