const clients = [
    {
      name: "Md Sajib Shikder",
      profession: "Web Application Developer",
      review: "This Agency is awesome",
      src: "https://w0.peakpx.com/wallpaper/67/297/HD-wallpaper-shah-rukh-khan-tie-srk.jpg",
    },
    {
      name: "Nata Abir",
      profession: "Facebook page expert",
      review:
        "This Agency is good. The whole team does what I do alone in a sec",
      src: "https://cdn.pixabay.com/photo/2022/10/05/04/11/super-hero-7499630_1280.jpg",
    },
    {
      name: "Sarif Sami",
      profession: "Search Engine Optimizer",
      review: "My Agency, Obvious I will showcase an exclusive comment",
      src: "https://static.mirchi.in/photo/101927361/101927361.jpg",
    },
    {
      name: "Roki Ahh",
      profession: "CSE Engee",
      review: "I love C++ programming. But I dont write it",
      src: "https://i.pinimg.com/236x/21/d5/d8/21d5d857e9b3c8d6325d8b41cae892e3.jpg",
    },
    {
      name: "Arafat",
      profession: "Kasra Archee",
      review:
        "I will earn more then any Kind of agency. karon . . . Amar design sei hoy",
      src: "https://www.hollywoodreporter.com/wp-content/uploads/2023/12/GettyImages-1492131821.jpg?w=2000&h=1126&crop=1",
    },
    {
      name: "Munna Hossaain",
      profession: "Backlink Expert",
      review: "No one can stop me going South Koreaa.",
      src: "https://asianwiki.com/images/7/70/Black_%28Korean_Drama%29-Song_Seung-Heon.jpg",
    },
    {
      name: "Shishir Khan",
      profession: "Sr Engee at Google Ex - Microsoft",
      review: "I only know one line. Good for nothing bad not nothing",
      src: "https://www.snitch.co.in/cdn/shop/files/BaggyTrouser1296.jpg?v=1701497634&width=1080",
    },
    {
      name: "Pranto Roy",
      profession: "Graphis Designer",
      review: "Go Go Slow",
      src: "https://images.unsplash.com/photo-1580171542477-451bb1c67267?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29yZWFuJTIwbWFufGVufDB8fDB8fHww",
    },
    {
      name: "Ahnaf",
      profession: "Rockstart - Agostic Analysis",
      review:
        "I am the next most popular singer and replace your Hero Alom soon",
      src: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/5db3941d-9eb2-445e-b0f2-1560ff25ff07/width=450/hires[1]_00000_2243872216.jpeg",
    },
  ];

  var currentIndex = 0; // To keep track of current client index

  // Function to update main review with client data
  function updateMainReview(index) {
    document.querySelector(".main-review .name-area span").innerText =
      clients[index].name;
    document.querySelector(".main-review .name-area p").innerText =
      clients[index].profession;
    document.querySelector(".main-review .text-review h3").innerText =
      clients[index].review;
    document.querySelector(".main-review .profile img").src =
      clients[index].src;
  }

  // Initialize Swiper after dynamically adding testimonials
  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        currentIndex = this.activeIndex;
        updateMainReview(currentIndex);
      },
    },
  });

  // Function to handle next button click
  document
    .querySelector(".next-button")
    .addEventListener("click", function () {
      swiper.slideNext();
    });

  document
    .querySelector(".prev-button")
    .addEventListener("click", function () {
      swiper.slidePrev();
    });