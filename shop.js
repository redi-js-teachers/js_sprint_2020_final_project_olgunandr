const courses = [
    {
        title: 'Drawing course',
        dates: '29.06.20 - 03.07.20',
        time: 'Monday to Friday from 9:30 to 16:00',
        price: 248.00,
        currency: '€',
        image: 'assets/program-drawing.jpg'
    },
    {
        title: 'Painting masterclass: Concept and production',
        dates: '29.06.20 - 03.07.20',
        time: 'Monday to Friday from 9:30 to 16:00',
        price: 348.00,
        currency: '€',
        image: 'assets/program-painting.jpg'
    },
    {
        title: 'COPIC-, Manga-Workshop',
        dates: '29.06.20 - 03.07.20',
        time: 'Monday to Friday from 9:30 to 12:30 or from 12:30 to 16:00',
        price: 168.00,
        currency: '€',
        image: 'assets/manga-comic.jpg'
    },
    {
        title: 'Painting course',
        dates: '06.07.20 - 10.07.20',
        time: 'Monday to Friday from 9:30 to 16:00',
        price: 248.00,
        currency: '€',
        image: 'assets/program-painting2.jpg'
    },
    {
        title: 'Oil painting masterlass',
        dates: '06.07.20 - 10.07.20',
        time: 'Monday to Friday from 9:30 to 16:00',
        price: 348.00,
        currency: '€',
        image: 'assets/program-painting.jpg'
    },
    {
        title: 'COPIC-, Manga-Workshop',
        dates: '06.07.20 - 10.07.20',
        time: 'Monday to Friday from 9:30 to 12:30 or from 12:30 to 16:00',
        price: 168.00,
        currency: '€',
        image: 'assets/manga-comic2.jpg'
    }];
let shoppingCart = [];
for (let i = 0; i < courses.length; i++) {
    const courseListEl = document.getElementById('courseList');
    courseListEl.innerHTML = courseListEl.innerHTML + ` 
    <div class="courseCard" id="${i}">
        <div class="courseImage">
            <img class="imageOfCourse" src="${courses[i].image}" alt="Image of $courses[i].title}">
        </div>
        <div class="courseProperties">
            <span class="courseTitle">${courses[i].title}</span><br>
            <b>Dates</b>: ${courses[i].dates}<br>
            <b>Time</b>: ${courses[i].time}<br>
            <b>Price</b>: ${courses[i].price} ${courses[i].currency}<br>
            <p><button class="courseBtn" id="addCourseBtn${i}">Add to cart</button></p>
        </div>
    </div> 
    `;
}

for (let i = 0; i < courses.length; i++) {
    const addCourseBtn = document.getElementById('addCourseBtn' + i);
    addCourseBtn.addEventListener("click", function () { addCourseToCart(i); });
}
const getInvoiceBtn = document.getElementById('getInvoiceBtn');
getInvoiceBtn.addEventListener("click", getInvoice );

function addCourseToCart(courseId) {
    shoppingCart.push(
        {
            title: courses[courseId].title,
            dates: courses[courseId].dates,
            price: courses[courseId].price
        });
    showShoppingCartProducts()
    const addCourseBtn = document.getElementById('addCourseBtn' + courseId);
    addCourseBtn.disabled = true;
};

function showShoppingCartProducts() {
    let totalPrice = 0;
    const shoppingCartEl = document.getElementById('shoppingCart');
    shoppingCartEl.innerHTML = "";
    for (let i = 0; i < shoppingCart.length; i++) {
        let item = `<span>${shoppingCart[i].title} (${shoppingCart[i].dates}) - ${shoppingCart[i].price}€</span><br />`;
        const wrapper = document.createElement('div');
        wrapper.innerHTML = item;
        shoppingCartEl.appendChild(wrapper);
        totalPrice = totalPrice + shoppingCart[i].price;
    }
    document.getElementById('total').textContent = totalPrice.toFixed(2) + '€';
};

function getInvoice() {
    const email = document.getElementById('emailInputField').value;

    let body = 'Thank you very much for your registration at Krioukov Academy.<br>Here are the courses you are interested in: <ul>'
    for (let i = 0; i < shoppingCart.length; i++) {
        body = body + `<li>${shoppingCart[i].title} (${shoppingCart[i].dates}) - ${shoppingCart[i].price}€</li>`;
    }

    body = body + '</ul><br>We will contact you soon to clarify the last details. <br>Best regards, SBKG'
    
    Email.send({
        SecureToken : "put-secure-token-here",
        To : email,
        From : "olga.andreyevskikh@gmail.com",
        Subject : "Your registration at Krioukov Academy",
        Body : body
    }).then(
      message => alert(message)
    );
}


