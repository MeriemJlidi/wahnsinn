const sections = document.querySelectorAll('section');
const config = {
  rootMargin: '-50px 0px -55%'
};

let observer = new IntersectionObserver(function (entries, self) {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {
      intersectionHandler(entry);
    }
  });
}, config);

sections.forEach(section => {
  observer.observe(section);
});

function intersectionHandler(entry) {
  const id = entry.target.id;
  console.log(id);
  const logo = document.querySelector("#logo");
  const hand = document.querySelector("#hand");

  console.log(hand);


  if (id==='wahnsinn1'|| id==='team'|| id==='teamname'||  id==='bottom') {
    logo.classList.add("wahnsinnsection");
    hand.classList.add("handwahnsinnsection");

    logo.classList.remove("damedicsection");
    hand.classList.remove("handdamedicsection");

    logo.classList.remove("telekomsection");
    hand.classList.remove("handtelekomsection");
  }

  else if (id==='Telekom'){

    logo.classList.add("telekomsection");
    hand.classList.add("handtelekomsection");

    logo.classList.remove("stroersection");
    hand.classList.remove("handstroersection");

    logo.classList.remove("wahnsinnsection");
    hand.classList.remove("handwahnsinnsection");


  }

  else if (id==='stroer'){

    logo.classList.remove("damedicsection");
    hand.classList.remove("handdamedicsection");

    logo.classList.add("stroersection");
    hand.classList.add("handstroersection");

    logo.classList.remove("telekomsection");
    hand.classList.remove("handtelekomsection");



  }


  else if (id==='Damedic'){

    logo.classList.add("damedicsection");
    hand.classList.add("handdamedicsection");

    logo.classList.remove("stroersection");
    hand.classList.remove("handstroersection");

    logo.classList.remove("wahnsinnsection");
    hand.classList.remove("handwahnsinnsection");
  }


}

