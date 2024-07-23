// get the data
let users = [
  {
    profilePic:
      "https://images.unsplash.com/photo-1574297500578-afae55026ff3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    displayPic:
      "https://images.unsplash.com/photo-1640154853987-48e54d2ca0b8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 5,
    location: "Odisha, India",
    name: "Raza",
    age: 19,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "painting",
      },
    ],
    bio: "Student by day, programming enthusiast by night - Learning the skills to shape the future!",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1544441543-513a50c268f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1642116145614-2db9e4843b7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    pendingMessage: 3,
    location: "Bhopal, India",
    name: "Fatma",
    age: 22,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "painting",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optioblanditiis unde sequi ",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1536528947088-d655e462f4d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
    displayPic:
      "https://images.unsplash.com/photo-1640131512569-a473df73f4a6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 12,
    location: "Delhi, India",
    name: "Sunehra",
    age: 27,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "painting",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optioblanditiis unde sequi aspernatur earum hic sunt, beatae voluptatem perferendis laboriosam temporibus odit eveniet aut in! Commodi",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1585728748176-455ac5eed962?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
    displayPic:
      "https://images.unsplash.com/photo-1586682643135-060f061868b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    pendingMessage: 8,
    location: "Mumbai, India",
    name: "Sanida",
    age: 25,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "painting",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optioblanditiis unde",
    isFriend: null,
  },
];

function select(elem) {
  return document.querySelector(elem);
}
let curr = 0;
let isAnimating = false;

function setData(index) {
  select(".prflimg img").src = users[index].profilePic;
  select(".badge h5").textContent = users[index].pendingMessage;
  select(".location h3").textContent = users[index].location;
  select(".name h1:nth-child(1)").textContent = users[index].name;
  select(".name h1:nth-child(2)").textContent = users[index].age;

  let clutter = "";
  users[index].interests.forEach(function (interest) {
    clutter += `<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
     ${interest.icon}
      <h3 class="text-sm tracking-tight capitalize">${interest.interest}</h3>
    </div>`;
  });
  select(".tags").innerHTML = clutter;

  select(".bio p").textContent = users[curr].bio;
}

(function setInitial() {
  select(".maincard img").src = users[curr].displayPic;
  select(".incomingcard img").src = users[curr + 1]?.displayPic;

  setData(curr);

  curr = 2;
})();

function imageChange() {
  if (!isAnimating) {
    isAnimating = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAnimating = false;
        let main = select(".maincard");
        let incoming = select(".incomingcard");

        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3]");
        incoming.classList.remove("incomingcard");

        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");
        gsap.set(main, {
          scale: 1,
          opacity: 1,
        });
        if (curr === users.length) curr = 0;
        select(".maincard img").src = users[curr].displayPic;
        curr++;
        main.classList.remove("maincard");
        incoming.classList.add("maincard");
        main.classList.add("incomingcard");
      },
    });

    tl.to(
      ".maincard",
      {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: 0.9,
      },
      "a"
    ).from(
      ".incomingcard",
      {
        scale: 0.9,
        opacity: 0,
        ease: Circ,
        duration: 1.1,
      },
      "a"
    );
  }
}

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function () {
  imageChange();
  setData(curr - 1);
  gsap.from(".details .element", {
    y: "100%",
    stagger: 0.06,
    ease: Power4.easeInOut,
    duration: 1.5,
  });
});

// accept.addEventListener("click", function () {
//   imageChange();
//   setData(curr - 1);
//   gsap.from(".details .element", {
//     y: "100%",
//     stagger: 0.06,
//     ease: Power4.easeInOut,
//     duration: 1.5,
//   });
// });

(function containerCreator() {
  document.querySelectorAll(".element").forEach(function (element) {
    let div = document.createElement("div");
    div.classList.add(`${element.classList[1]}container`, "overflow-hidden");
    div.appendChild(element);
    select(".details").appendChild(div);
  });
})();
