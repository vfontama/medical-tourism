const providers = [
  {
    id: "apollo-chennai",
    name: "Apollo Hospitals International",
    country: "India",
    city: "Chennai",
    airport: "MAA",
    specialties: ["Oncology", "Cardiology", "Transplant", "Pediatrics"],
    rating: 4.7,
    reviews: 2780,
    cost: "high",
    fit: "Large international-patient desk, oncology and transplant depth, airport pickup support.",
    website: "https://www.apollohospitals.com/",
    phone: "+91 4043441066",
    whatsapp: "+91 8076036335",
    source: "Apollo international patient pages",
  },
  {
    id: "fortis-gurugram",
    name: "Fortis Memorial Research Institute",
    country: "India",
    city: "Gurugram / Delhi NCR",
    airport: "DEL",
    specialties: ["Oncology", "Neurology", "Orthopedics", "Cardiology"],
    rating: 4.6,
    reviews: 2120,
    cost: "high",
    fit: "Strong tertiary care network with international patient coordination and doctor opinion flow.",
    website: "https://www.fortishealthcare.com/",
    phone: "+91 9266367395",
    whatsapp: "+91 9266367395",
    source: "Fortis international patient pages",
  },
  {
    id: "tata-actrec",
    name: "Tata Memorial Centre / ACTREC",
    country: "India",
    city: "Navi Mumbai",
    airport: "BOM",
    specialties: ["Oncology", "Pediatric Cancer", "Radiation Oncology"],
    rating: 4.8,
    reviews: 1850,
    cost: "low",
    fit: "Cancer-focused public institution, research-led care, often more affordable but with higher demand.",
    website: "https://www.actrec.gov.in/",
    phone: "+91 22 27405000",
    whatsapp: "",
    source: "ACTREC contact page",
  },
  {
    id: "manipal-bengaluru",
    name: "Manipal Hospitals Global",
    country: "India",
    city: "Bengaluru",
    airport: "BLR",
    specialties: ["Gynecology", "Oncology", "Pediatrics", "Gastroenterology"],
    rating: 4.5,
    reviews: 1640,
    cost: "medium",
    fit: "Multi-city hospital network with international centers, interpreters, and accommodation guidance.",
    website: "https://www.manipalhospitalsglobal.com/",
    phone: "1800 102 5555",
    whatsapp: "",
    source: "Manipal global and contact pages",
  },
  {
    id: "cloudnine-bengaluru",
    name: "Cloudnine Hospitals",
    country: "India",
    city: "Bengaluru",
    airport: "BLR",
    specialties: ["Gynecology", "Maternity", "Pediatrics", "IVF"],
    rating: 4.5,
    reviews: 930,
    cost: "medium",
    fit: "Women and child care network for maternity, fertility, gynecology, pediatrics, and neonatal care.",
    website: "https://www.cloudninecare.com/",
    phone: "+91 9972499724",
    whatsapp: "+91 9972999729",
    source: "Cloudnine contact pages",
  },
  {
    id: "rainbow-hyderabad",
    name: "Rainbow Children's Hospital",
    country: "India",
    city: "Hyderabad",
    airport: "HYD",
    specialties: ["Pediatrics", "Pediatric Cardiology", "Maternity", "Gynecology"],
    rating: 4.4,
    reviews: 860,
    cost: "medium",
    fit: "Pediatric and women-focused care with international patient emergency support listed by public directories.",
    website: "https://www.rainbowhospitals.in/",
    phone: "1800 2122",
    whatsapp: "+91 7075988443",
    source: "Rainbow app support and customer-care listings",
  },
  {
    id: "acibadem-istanbul",
    name: "Acibadem Healthcare Group",
    country: "Turkey",
    city: "Istanbul",
    airport: "IST",
    specialties: ["Oncology", "Cardiology", "Transplant", "Pediatrics", "Orthopedics"],
    rating: 4.7,
    reviews: 1940,
    cost: "high",
    fit: "Large Turkish hospital group with international-patient services, airport help, interpreters, and multi-specialty care.",
    website: "https://www.acibadem.com.tr/en/",
    phone: "+90 444 55 44",
    whatsapp: "",
    source: "Acibadem international patient and contact pages",
  },
  {
    id: "memorial-istanbul",
    name: "Memorial Hospitals Group",
    country: "Turkey",
    city: "Istanbul",
    airport: "IST",
    specialties: ["Oncology", "IVF", "Cardiology", "Organ Transplant", "Orthopedics"],
    rating: 4.6,
    reviews: 1760,
    cost: "medium",
    fit: "International Patient Center for second opinions, treatment plans, cost estimates, transfers, and accommodation support.",
    website: "https://www.memorial.com.tr/en/",
    phone: "+90 549 639 3366",
    whatsapp: "+90 549 639 3366",
    source: "Memorial International Patient Center pages",
  },
  {
    id: "anadolu-kocaeli",
    name: "Anadolu Medical Center",
    country: "Turkey",
    city: "Kocaeli / Istanbul area",
    airport: "SAW",
    specialties: ["Oncology", "Bone Marrow Transplant", "Cardiology", "Pediatrics"],
    rating: 4.7,
    reviews: 1420,
    cost: "medium",
    fit: "Oncology-focused medical center with international services, English contact line, and on-campus accommodation options.",
    website: "https://www.anadolumedicalcenter.com/",
    phone: "+90 262 678 50 00",
    whatsapp: "",
    source: "Anadolu Medical Center contact and international patient pages",
  },
  {
    id: "liv-istanbul",
    name: "Liv Hospital",
    country: "Turkey",
    city: "Istanbul",
    airport: "IST",
    specialties: ["Oncology", "Gynecology", "Pediatrics", "Orthopedics", "Cardiology"],
    rating: 4.5,
    reviews: 1180,
    cost: "high",
    fit: "International Guest Center with WhatsApp contacts by language and a broad hospital network across Turkey.",
    website: "https://www.livhospital.com/en",
    phone: "+90 212 999 80 99",
    whatsapp: "+90 530 174 33 92",
    source: "Liv Hospital contact page",
  },
];

const TEST_PASSCODE = "CARE-7305";

const origins = [
  { id: "LOS", label: "Lagos, Nigeria", city: "Lagos" },
  { id: "ABV", label: "Abuja, Nigeria", city: "Abuja" },
  { id: "ACC", label: "Accra, Ghana", city: "Accra" },
  { id: "NBO", label: "Nairobi, Kenya", city: "Nairobi" },
  { id: "JNB", label: "Johannesburg, South Africa", city: "Johannesburg" },
  { id: "ADD", label: "Addis Ababa, Ethiopia", city: "Addis Ababa" },
];

const flightTemplates = [
  { airline: "Ethiopian + IndiGo", stops: "1 stop", duration: "12h 45m", price: 620, tag: "Best balance" },
  { airline: "Qatar Airways", stops: "1 stop", duration: "14h 10m", price: 760, tag: "Comfort pick" },
  { airline: "Emirates / partner", stops: "1 stop", duration: "15h 25m", price: 830, tag: "Flexible baggage" },
];

const turkeyFlightTemplates = [
  { airline: "Turkish Airlines", stops: "Nonstop or 1 stop", duration: "7h 05m", price: 540, tag: "Fastest route" },
  { airline: "Ethiopian + Turkish", stops: "1 stop", duration: "10h 30m", price: 610, tag: "Best balance" },
  { airline: "Qatar Airways", stops: "1 stop", duration: "12h 15m", price: 720, tag: "Comfort pick" },
];

const stayTemplates = [
  { type: "Serviced apartment", band: "$$", features: "Kitchen, lift access, weekly rate", distance: "1.2 km" },
  { type: "Recovery-friendly hotel", band: "$$$", features: "Breakfast, airport desk, room service", distance: "0.8 km" },
  { type: "Budget guest house", band: "$", features: "Simple room, caregiver bed, laundry nearby", distance: "2.4 km" },
];

let state = {
  specialty: "All",
  query: "",
  origin: "LOS",
  budget: "any",
  country: "any",
  sort: "rating",
  selectedProviderId: providers[0].id,
  selectedFlight: 0,
  selectedStay: 0,
  bookingMode: "flight",
  flightBooking: null,
  stayBooking: null,
};

const specialtySet = ["All", ...new Set(providers.flatMap((provider) => provider.specialties))];
const $ = (selector) => document.querySelector(selector);

function hasAccess() {
  return window.localStorage.getItem("carebridgeAccess") === TEST_PASSCODE;
}

function lockIfNeeded() {
  if (!hasAccess()) {
    document.body.classList.add("locked");
  }
}

function normalize(value) {
  return value.toLowerCase().trim();
}

function selectedProvider() {
  return providers.find((provider) => provider.id === state.selectedProviderId) || providers[0];
}

function costLabel(cost) {
  return cost === "low" ? "Lower cost" : cost === "medium" ? "Medium cost" : "Premium cost";
}

function filteredProviders() {
  const query = normalize(state.query);
  const costRank = { low: 1, medium: 2, high: 3 };
  return providers.filter((provider) => {
    const specialtyMatch = state.specialty === "All" || provider.specialties.includes(state.specialty);
    const budgetMatch = state.budget === "any" || provider.cost === state.budget;
    const countryMatch = state.country === "any" || provider.country === state.country;
    const queryText = normalize(`${provider.name} ${provider.country} ${provider.city} ${provider.specialties.join(" ")} ${provider.fit}`);
    return specialtyMatch && budgetMatch && countryMatch && (!query || queryText.includes(query));
  }).sort((a, b) => {
    if (state.sort === "cost") {
      return costRank[a.cost] - costRank[b.cost] || b.rating - a.rating;
    }
    return b.rating - a.rating;
  });
}

function renderSpecialties() {
  $("#specialtyChips").innerHTML = specialtySet
    .map((specialty) => `<button class="chip ${state.specialty === specialty ? "active" : ""}" data-specialty="${specialty}">${specialty}</button>`)
    .join("");
}

function renderOrigins() {
  $("#originSelect").innerHTML = origins.map((origin) => `<option value="${origin.id}">${origin.label}</option>`).join("");
  $("#originSelect").value = state.origin;
}

function renderProviders() {
  const matches = filteredProviders();
  if (!matches.some((provider) => provider.id === state.selectedProviderId) && matches[0]) {
    state.selectedProviderId = matches[0].id;
  }

  $("#matchCount").textContent = `${matches.length} ${matches.length === 1 ? "match" : "matches"}`;
  $("#selectedProviderLabel").textContent = `${selectedProvider().country} - ${selectedProvider().city}`;
  $("#providerList").innerHTML = matches.length
    ? matches.map(providerCard).join("")
    : `<article class="card"><h3>No exact matches yet</h3><p class="meta">Try another specialty or choose any budget. A concierge can still collect records and search manually.</p></article>`;
}

function providerCard(provider) {
  const whatsapp = provider.whatsapp
    ? `<a class="action-link" href="https://wa.me/${provider.whatsapp.replace(/\D/g, "")}" target="_blank" rel="noreferrer">WhatsApp</a>`
    : `<span class="action-link secondary">WhatsApp not listed</span>`;

  return `
    <article class="card ${provider.id === state.selectedProviderId ? "selected" : ""}">
      <div class="card-top">
        <div>
          <h3>${provider.name}</h3>
          <div class="location">${provider.country} - ${provider.city} - nearest airport ${provider.airport}</div>
        </div>
        <button class="ghost-button select-provider" data-provider="${provider.id}">Select</button>
      </div>
      <p class="meta">${provider.fit}</p>
      <div class="stat-row">
        <span class="stat">Rating ${provider.rating} / 5 - ${provider.reviews.toLocaleString()} reviews</span>
        <span class="stat cost-${provider.cost}">${costLabel(provider.cost)}</span>
      </div>
      <div class="badges">${provider.specialties.map((item) => `<span class="badge">${item}</span>`).join("")}</div>
      <div class="actions">
        ${whatsapp}
        <a class="action-link secondary" href="tel:${provider.phone.replace(/\s/g, "")}">Call</a>
        <a class="action-link secondary" href="${provider.website}" target="_blank" rel="noreferrer">Website</a>
      </div>
    </article>
  `;
}

function flightOptions() {
  const provider = selectedProvider();
  const origin = origins.find((item) => item.id === state.origin);
  const templates = provider.country === "Turkey" ? turkeyFlightTemplates : flightTemplates;
  const airportFactor = provider.airport === "DEL" || provider.airport === "IST" ? 0 : provider.airport === "BOM" || provider.airport === "SAW" ? 35 : 70;
  return templates.map((flight, index) => ({
    ...flight,
    from: origin.id,
    fromCity: origin.city,
    to: provider.airport,
    price: flight.price + airportFactor + index * 25,
  }));
}

function bookingReference(prefix) {
  const stamp = Date.now().toString(36).slice(-5).toUpperCase();
  const random = Math.random().toString(36).slice(2, 5).toUpperCase();
  return `${prefix}-${stamp}${random}`;
}

function flightBookingMatches(index) {
  return state.flightBooking && state.flightBooking.providerId === state.selectedProviderId && state.flightBooking.optionIndex === index;
}

function stayBookingMatches(index) {
  return state.stayBooking && state.stayBooking.providerId === state.selectedProviderId && state.stayBooking.optionIndex === index;
}

function renderBookingStatus() {
  $("#flightBookingStatus").innerHTML = state.flightBooking
    ? `<div class="confirmation"><strong>Flight booking request ${state.flightBooking.reference}</strong>${state.flightBooking.travelerName} - ${state.flightBooking.option.airline} - ${state.flightBooking.option.from} to ${state.flightBooking.option.to} - ${state.flightBooking.date}</div>`
    : "";

  $("#stayBookingStatus").innerHTML = state.stayBooking
    ? `<div class="confirmation"><strong>Hotel booking request ${state.stayBooking.reference}</strong>${state.stayBooking.travelerName} - ${state.stayBooking.option.type} near ${state.stayBooking.providerName} - check-in ${state.stayBooking.date}</div>`
    : "";
}

function renderBookingPanels() {
  const provider = selectedProvider();
  const flight = flightOptions()[state.selectedFlight];
  const stay = stayTemplates[state.selectedStay];

  $("#flightBookingPanel").innerHTML = `
    <h3>Book a flight to ${provider.name}</h3>
    <p>${flight.fromCity} to ${provider.city}, ${provider.country}, landing at ${provider.airport}. Selected option: ${flight.airline}, ${flight.duration}, estimated $${flight.price}.</p>
    <button class="primary-button full" data-book-flight="${state.selectedFlight}">Book selected flight</button>
  `;

  $("#stayBookingPanel").innerHTML = `
    <h3>Book a hotel near ${provider.name}</h3>
    <p>Selected stay in ${provider.city}, ${provider.country}: ${stay.type}, ${stay.distance} from the provider. Budget band ${stay.band}.</p>
    <button class="primary-button full" data-book-stay="${state.selectedStay}">Book selected hotel</button>
  `;
}

function renderFlights() {
  const provider = selectedProvider();
  const flights = flightOptions();
  $("#flightContext").textContent = `${origins.find((item) => item.id === state.origin).label} to ${provider.city}, ${provider.country} for ${provider.name}.`;
  $("#flightList").innerHTML = flights
    .map((flight, index) => `
      <article class="card ${state.selectedFlight === index ? "selected" : ""}">
        <div class="card-top">
          <div>
            <h3>${flight.airline}</h3>
            <span class="meta">${flight.tag} - ${flight.stops} - ${flight.duration}</span>
          </div>
          <div class="flight-price">$${flight.price}</div>
        </div>
        <div class="route-line">
          <span><strong>${flight.from}</strong>${flight.fromCity}</span>
          <span>to</span>
          <span><strong>${flight.to}</strong>${provider.city}</span>
        </div>
        <button class="primary-button choose-flight" data-flight="${index}">Choose this flight</button>
        <button class="primary-button full ${flightBookingMatches(index) ? "booked" : ""}" data-book-flight="${index}">
          ${flightBookingMatches(index) ? "Booked for testing" : "Book this flight"}
        </button>
      </article>
    `)
    .join("");
}

function renderStays() {
  const provider = selectedProvider();
  $("#stayContext").textContent = `Book accommodation near ${provider.name} in ${provider.city}, ${provider.country}.`;
  $("#stayList").innerHTML = stayTemplates
    .map((stay, index) => `
      <article class="card ${state.selectedStay === index ? "selected" : ""}">
        <div class="card-top">
          <div>
            <h3>${stay.type}</h3>
            <span class="meta">${stay.distance} from provider - ${stay.features}</span>
          </div>
          <span class="stat cost-${stay.band === "$" ? "low" : stay.band === "$$" ? "medium" : "high"}">${stay.band}</span>
        </div>
        <button class="primary-button choose-stay" data-stay="${index}">Choose this stay</button>
        <button class="primary-button full ${stayBookingMatches(index) ? "booked" : ""}" data-book-stay="${index}">
          ${stayBookingMatches(index) ? "Booked for testing" : "Book this hotel"}
        </button>
      </article>
    `)
    .join("");
}

function renderPlan() {
  const provider = selectedProvider();
  const flight = flightOptions()[state.selectedFlight];
  const stay = stayTemplates[state.selectedStay];
  $("#planSummary").innerHTML = `
    <div class="plan-item"><span>Provider</span><strong>${provider.name}</strong></div>
    <div class="plan-item"><span>Care need</span><strong>${state.specialty === "All" ? "To be confirmed" : state.specialty}</strong></div>
    <div class="plan-item"><span>Flight</span><strong>${flight.airline}, about $${flight.price}</strong></div>
    <div class="plan-item"><span>Accommodation</span><strong>${stay.type}, ${stay.distance}</strong></div>
    <div class="plan-item"><span>Contact</span><strong>${provider.whatsapp || provider.phone}</strong></div>
    <div class="plan-item"><span>Flight booking</span><strong>${state.flightBooking ? state.flightBooking.reference : "Not booked yet"}</strong></div>
    <div class="plan-item"><span>Hotel booking</span><strong>${state.stayBooking ? state.stayBooking.reference : "Not booked yet"}</strong></div>
  `;
}

function renderAll() {
  renderSpecialties();
  renderProviders();
  renderBookingPanels();
  renderBookingStatus();
  renderFlights();
  renderStays();
  renderPlan();
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function switchView(view) {
  document.querySelectorAll(".tab, .view").forEach((node) => node.classList.remove("active"));
  document.querySelector(`[data-view="${view}"]`).classList.add("active");
  $(`#${view}View`).classList.add("active");
}

function openBookingDialog(mode, index) {
  const provider = selectedProvider();
  state.bookingMode = mode;
  if (mode === "flight") {
    state.selectedFlight = index;
    const flight = flightOptions()[index];
    $("#bookingTitle").textContent = "Book flight";
    $("#bookingSummary").innerHTML = `
      <span><strong>Provider:</strong> ${provider.name}</span>
      <span><strong>Route:</strong> ${flight.from} to ${flight.to}, ${flight.duration}</span>
      <span><strong>Airline:</strong> ${flight.airline}</span>
      <span><strong>Estimate:</strong> $${flight.price} per traveler</span>
    `;
    $("#dateField").firstChild.textContent = "Preferred departure date";
  } else {
    state.selectedStay = index;
    const stay = stayTemplates[index];
    $("#bookingTitle").textContent = "Book hotel";
    $("#bookingSummary").innerHTML = `
      <span><strong>Provider:</strong> ${provider.name}</span>
      <span><strong>Stay:</strong> ${stay.type}</span>
      <span><strong>Distance:</strong> ${stay.distance}</span>
      <span><strong>Budget band:</strong> ${stay.band}</span>
    `;
    $("#dateField").firstChild.textContent = "Preferred check-in date";
  }
  renderAll();
  $("#optionBookingForm").reset();
  $("#bookingDialog").showModal();
}

document.addEventListener("click", (event) => {
  const specialty = event.target.closest("[data-specialty]");
  const provider = event.target.closest("[data-provider]");
  const flight = event.target.closest("[data-flight]");
  const stay = event.target.closest("[data-stay]");
  const bookFlight = event.target.closest("[data-book-flight]");
  const bookStay = event.target.closest("[data-book-stay]");
  const tab = event.target.closest("[data-view]");

  if (specialty) {
    state.specialty = specialty.dataset.specialty;
    renderAll();
  }

  if (provider) {
    state.selectedProviderId = provider.dataset.provider;
    state.selectedFlight = 0;
    state.selectedStay = 0;
    state.flightBooking = null;
    state.stayBooking = null;
    renderAll();
    showToast("Provider selected. Flights and hotels updated.");
  }

  if (flight) {
    state.selectedFlight = Number(flight.dataset.flight);
    renderAll();
    showToast("Flight added to your plan.");
  }

  if (stay) {
    state.selectedStay = Number(stay.dataset.stay);
    renderAll();
    showToast("Stay added to your plan.");
  }

  if (bookFlight) {
    openBookingDialog("flight", Number(bookFlight.dataset.bookFlight));
  }

  if (bookStay) {
    openBookingDialog("stay", Number(bookStay.dataset.bookStay));
  }

  if (tab) {
    switchView(tab.dataset.view);
  }
});

$("#needSearch").addEventListener("input", (event) => {
  state.query = event.target.value;
  renderAll();
});

$("#clearSearch").addEventListener("click", () => {
  state.query = "";
  $("#needSearch").value = "";
  renderAll();
});

$("#originSelect").addEventListener("change", (event) => {
  state.origin = event.target.value;
  renderAll();
});

$("#countrySelect").addEventListener("change", (event) => {
  state.country = event.target.value;
  renderAll();
});

$("#budgetSelect").addEventListener("change", (event) => {
  state.budget = event.target.value;
  renderAll();
});

$("#sortSelect").addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderAll();
});

$("#bookingForm").addEventListener("submit", (event) => {
  event.preventDefault();
  showToast("Request drafted. A real build would send this to a secure concierge backend.");
});

$("#helpButton").addEventListener("click", () => $("#helpDialog").showModal());
$("#closeHelp").addEventListener("click", () => $("#helpDialog").close());
$("#closeBooking").addEventListener("click", () => $("#bookingDialog").close());

$("#optionBookingForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const provider = selectedProvider();
  const baseBooking = {
    providerId: provider.id,
    providerName: provider.name,
    travelerName: form.get("travelerName"),
    adults: form.get("adults"),
    children: form.get("children"),
    date: form.get("date"),
    contact: form.get("contact"),
    requests: form.get("requests"),
  };

  if (state.bookingMode === "flight") {
    const option = flightOptions()[state.selectedFlight];
    state.flightBooking = {
      ...baseBooking,
      reference: bookingReference("FLT"),
      optionIndex: state.selectedFlight,
      option,
    };
    switchView("travel");
    showToast(`Flight booking request ${state.flightBooking.reference} created.`);
  } else {
    const option = stayTemplates[state.selectedStay];
    state.stayBooking = {
      ...baseBooking,
      reference: bookingReference("HTL"),
      optionIndex: state.selectedStay,
      option,
    };
    switchView("stays");
    showToast(`Hotel booking request ${state.stayBooking.reference} created.`);
  }

  $("#bookingDialog").close();
  renderAll();
});

$("#accessForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if ($("#accessCode").value.trim().toUpperCase() === TEST_PASSCODE) {
    window.localStorage.setItem("carebridgeAccess", TEST_PASSCODE);
    document.body.classList.remove("locked");
    showToast("Access granted. Welcome to the CareBridge test.");
    return;
  }
  showToast("Passcode not recognized.");
});

lockIfNeeded();
renderOrigins();
renderAll();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => registration.unregister());
    }).catch(() => {});
  });
}

if ("caches" in window) {
  caches.keys().then((names) => {
    names.forEach((name) => caches.delete(name));
  }).catch(() => {});
}
