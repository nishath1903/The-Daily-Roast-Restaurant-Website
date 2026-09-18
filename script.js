 /* =========================================
   THE DAILY ROAST CAFE
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   CONFIGURATION
========================================= */

// Replace this with the actual cafe WhatsApp number.
//
// IMPORTANT:
// Country code first.
// India = 91
//
// Example:
// 919876543210

const whatsappNumber = "919999999999";



/* =========================================
   MENU DATA
========================================= */

const menuData = {

    coffee: [

        {
            name: "Classic Cappuccino",
            price: 149,
            description:
                "Velvety espresso topped with creamy foam and a beautiful roasted aroma.",
            image:
                "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=900&q=85"
        },

        {
            name: "Caramel Latte",
            price: 169,
            description:
                "Smooth espresso blended with steamed milk and rich caramel sweetness.",
            image:
                "https://images.unsplash.com/photo-1593443320739-77f74939d0da?auto=format&fit=crop&w=900&q=85"
        },

        {
            name: "Mocha",
            price: 179,
            description:
                "A comforting combination of bold coffee, silky chocolate and creamy milk.",
            image:
                "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=900&q=85"
        },

        {
            name: "Cold Coffee",
            price: 159,
            description:
                "Chilled, creamy and refreshing coffee for those who like their caffeine cold.",
            image:
                "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85"
        },

        {
            name: "Spanish Latte",
            price: 189,
            description:
                "Rich espresso with creamy milk and a perfectly sweet finish.",
            image:
                "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=85"
        },

        {
            name: "Classic Americano",
            price: 129,
            description:
                "Clean, bold espresso flavour with a smooth and satisfying finish.",
            image:
                "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=85"
        }

    ],



    meals: [

        {
            name: "Creamy Alfredo Pasta",
            price: 249,
            description:
                "Creamy pasta tossed in a rich white sauce with herbs and comforting flavours.",
            image:
                "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85"
        },

        {
            name: "Veg Fried Rice",
            price: 199,
            description:
                "Fragrant rice tossed with fresh vegetables, sauces and aromatic seasoning.",
            image:
                "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85"
        },

        {
            name: "Paneer Butter Masala",
            price: 229,
            description:
                "Soft paneer cubes simmered in a creamy tomato-based Indian gravy.",
            image:
                "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85"
        },

        {
            name: "Chicken Biryani",
            price: 279,
            description:
                "Aromatic basmati rice layered with tender chicken and fragrant spices.",
            image:
                "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=85"
        },

        {
            name: "Veg Pizza",
            price: 249,
            description:
                "Golden cheesy pizza topped with colourful vegetables and Italian herbs.",
            image:
                "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85"
        },

        {
            name: "Grilled Chicken",
            price: 299,
            description:
                "Juicy grilled chicken served with fresh sides and a smoky finish.",
            image:
                "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85"
        }

    ],



    snacks: [

        {
            name: "Peri Peri Fries",
            price: 139,
            description:
                "Crispy golden fries tossed with fiery peri peri seasoning.",
            image:
                "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85"
        },

        {
            name: "Cheese Garlic Toast",
            price: 159,
            description:
                "Crunchy toasted bread loaded with garlic butter and melted cheese.",
            image:
                "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=900&q=85"
        },

        {
            name: "Veg Sandwich",
            price: 149,
            description:
                "Fresh vegetables, creamy spread and toasted bread in every bite.",
            image:
                "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85"
        },

        {
            name: "Loaded Cheese Fries",
            price: 179,
            description:
                "Crispy fries covered with creamy cheese and delicious toppings.",
            image:
                "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=900&q=85"
        },

        {
            name: "Veg Club Sandwich",
            price: 189,
            description:
                "Triple-layered toasted sandwich packed with fresh crunchy fillings.",
            image:
                "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=900&q=85"
        },

        {
            name: "Nachos & Dip",
            price: 149,
            description:
                "Crunchy nachos served with creamy dip for the perfect sharing snack.",
            image:
                "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=900&q=85"
        }

    ],



    pastries: [

        {
            name: "Butter Croissant",
            price: 129,
            description:
                "Flaky golden layers with a rich buttery aroma straight from the oven.",
            image:
                "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85"
        },

        {
            name: "Chocolate Croissant",
            price: 149,
            description:
                "Crispy pastry layers wrapped around warm, indulgent chocolate.",
            image:
                "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=900&q=85"
        },

        {
            name: "Blueberry Muffin",
            price: 139,
            description:
                "Soft, fluffy muffin bursting with sweet blueberry goodness.",
            image:
                "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=900&q=85"
        },

        {
            name: "Chocolate Brownie",
            price: 129,
            description:
                "Rich, fudgy chocolate brownie made for serious sweet cravings.",
            image:
                "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85"
        },

        {
            name: "Banana Bread",
            price: 119,
            description:
                "Soft homemade-style banana bread with a comforting cinnamon aroma.",
            image:
                "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=900&q=85"
        },

        {
            name: "Cinnamon Roll",
            price: 149,
            description:
                "Soft swirls of cinnamon sweetness finished with a creamy glaze.",
            image:
                "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=900&q=85"
        }

    ]

};



/* =========================================
   RENDER MENU
========================================= */

const menuGrid = document.getElementById("menuGrid");


function renderMenu(category) {

    if (!menuGrid) return;


    const items = menuData[category];


    menuGrid.innerHTML = "";


    items.forEach((item, index) => {

        const card = document.createElement("article");

        card.className = "menu-card";

        card.setAttribute(
            "data-aos",
            "fade-up"
        );

        card.setAttribute(
            "data-aos-delay",
            `${index * 70}`
        );


        card.innerHTML = `

            <div class="menu-image">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    loading="lazy"
                >

                <span class="menu-price">
                    ₹${item.price}
                </span>

            </div>


            <div class="menu-content">

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.description}
                </p>


                <button
                    class="order-btn"
                    onclick="orderOnWhatsApp('${item.name}', ${item.price})"
                >
                    Order on WhatsApp →
                </button>

            </div>

        `;


        menuGrid.appendChild(card);

    });


    // Refresh AOS after dynamically adding cards
    if (typeof AOS !== "undefined") {

        AOS.refresh();

    }

}



/* =========================================
   MENU TABS
========================================= */

const menuTabs =
    document.querySelectorAll(".menu-tab");


menuTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        menuTabs.forEach(item => {

            item.classList.remove("active");

        });


        tab.classList.add("active");


        const category =
            tab.dataset.category;


        renderMenu(category);

    });

});



/* =========================================
   WHATSAPP ORDER
========================================= */

function orderOnWhatsApp(name, price) {

    const message = `Hi The Daily Roast Cafe! 👋

I'd like to order:

🍽️ ${name}
💰 Price: ₹${price}

Please let me know about availability and ordering. Thank you! ☕`;

    const url =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    window.open(url, "_blank");

}



/* =========================================
   RESERVATION
========================================= */

const reservationForm =
    document.getElementById("reservationForm");


const bookingDate =
    document.getElementById("bookingDate");


/*
   Prevent selecting previous dates
*/

if (bookingDate) {

    const today =
        new Date().toISOString().split("T")[0];

    bookingDate.min = today;

}



/*
   Reservation Submit
*/

if (reservationForm) {

    reservationForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById("guestName").value.trim();


            const phone =
                document.getElementById("guestPhone").value.trim();


            const date =
                document.getElementById("bookingDate").value;


            const time =
                document.getElementById("bookingTime").value;


            const guests =
                document.getElementById("guestCount").value;


            const specialRequest =
                document.getElementById("specialRequest").value.trim();


            const seating =
                document.querySelector(
                    'input[name="seating"]:checked'
                )?.value || "No Preference";



            /*
               Convert date to DD/MM/YYYY
            */

            let formattedDate = date;


            if (date) {

                const parts =
                    date.split("-");

                formattedDate =
                    `${parts[2]}/${parts[1]}/${parts[0]}`;

            }



            /*
               Convert time
               Example:
               18:30 -> 6:30 PM
            */

            let formattedTime = time;


            if (time) {

                const [
                    hour,
                    minute
                ] = time.split(":");


                const dateObj =
                    new Date();


                dateObj.setHours(
                    parseInt(hour),
                    parseInt(minute)
                );


                formattedTime =
                    dateObj.toLocaleTimeString(
                        "en-IN",
                        {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true
                        }
                    );

            }



            /*
               WhatsApp Reservation Message
            */

            const message = `Hi The Daily Roast Cafe! 👋

I'd like to reserve a table.

🍽️ TABLE RESERVATION

👤 Name: ${name}
📱 WhatsApp: ${phone}
📅 Date: ${formattedDate}
🕐 Time: ${formattedTime}
👥 Guests: ${guests}
🪑 Seating: ${seating}

📝 Special Request:
${specialRequest || "None"}

Please confirm the availability of the table.

Thank you! ☕`;



            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}



/* =========================================
   NAVBAR SCROLL
========================================= */

const navbar =
    document.getElementById("navbar");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }
);



/* =========================================
   MOBILE MENU
========================================= */

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");


const mobileMenu =
    document.getElementById("mobileMenu");


if (mobileMenuBtn) {

    mobileMenuBtn.addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle("active");

        }
    );

}



/*
   Close mobile menu
   when clicking a link
*/

document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu.classList.remove(
                    "active"
                );

            }
        );

    });



/* =========================================
   FLOATING WHATSAPP
========================================= */

const floatingWhatsApp =
    document.getElementById(
        "floatingWhatsApp"
    );


if (floatingWhatsApp) {

    floatingWhatsApp.addEventListener(
        "click",
        function(event) {

            event.preventDefault();


            const message =
                `Hi The Daily Roast Cafe! 👋

I'd like to know more about your menu, table reservations and timings.`;



            const url =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


            window.open(
                url,
                "_blank"
            );

        }
    );

}



/* =========================================
   HERO PARALLAX
========================================= */

const hero =
    document.querySelector(".hero");


window.addEventListener(
    "scroll",
    () => {

        if (!hero) return;


        const scrollPosition =
            window.scrollY;


        if (scrollPosition < window.innerHeight) {

            hero.style.backgroundPosition =
                `center ${scrollPosition * 0.25}px`;

        }

    }
);



/* =========================================
   INITIALISE AOS
========================================= */

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 800,

        easing: "ease-out-cubic",

        once: true,

        offset: 80

    });

}



/* =========================================
   INITIAL MENU
========================================= */

renderMenu("coffee");



/* =========================================
   SMOOTH SCROLL
========================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function(event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) return;


                event.preventDefault();


                const navbarHeight =
                    navbar
                        ? navbar.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    navbarHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });