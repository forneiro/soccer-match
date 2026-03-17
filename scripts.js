// const tickets = document.getElementById("tickets");
const contact = document.getElementById("contact");
const getTicketsButton = document.getElementById("get-tickets");
const sendMessage = document.getElementById("send-message");

// modal
const tickets = document.querySelectorAll(".ticket-btn");
const modal = document.querySelector(".modal");
const modalBackdrop = document.querySelector(".modal-backdrop");
const modalBtnCancel = document.querySelector(".modal__cancel");

const modalZone = document.getElementById('modal__zone')
const modalPlace = document.getElementById('modal__place')
const modalPrice = document.getElementById('modal__price')

const ticketsContainer = document.querySelector('.tickets__container')

const tickets_arr = [
  { name: "General Admision", place: "Upper tier seating", price: 45 },
  { name: "Fan Zone", place: "Behind the goal", price: 75 },
  { name: "Premium Seating", place: "Lower tier - sideline", price: 120 },
  { name: "VIP box", place: "Private suite", price: 350 },
];

ticketsContainer.addEventListener('click', function(e) {
  if (!e.target.classList.contains('ticket-btn')) return; 

  const ticketElement = e.target.closest('.ticket')
  console.log(ticketElement.dataset.id)

  modalZone.textContent = tickets_arr[ticketElement.dataset.id].name
  modalPlace.textContent = tickets_arr[ticketElement.dataset.id].place
  modalPrice.textContent = tickets_arr[ticketElement.dataset.id].price
})

tickets.forEach((ticket) => {
  ticket.addEventListener("click", function () {
    modalBackdrop.classList.remove("hide");
    console.log(tickets)
  });
});

modalBtnCancel.addEventListener("click", function () {
  modalBackdrop.classList.add("hide");
});
