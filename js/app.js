// Global variables
let map
let markers = []
let isLoading = false
let mapInitialized = false
let isMapExpanded = false
let currentPage = "flight-planner"
const seatMap = []
const passengers = []
let selectedSeat = null
let aircraftConfig = null

// DOM elements
const mapElement = document.getElementById("map")
const departureInput = document.getElementById("departure-coordinates")
const landingInput = document.getElementById("landing-coordinates")
const airspeedInput = document.getElementById("airspeed")
const fuelBurnInput = document.getElementById("fuel-burn")
const calculateBtn = document.getElementById("calculate-btn")
const resetBtn = document.getElementById("reset-btn")
const departureBadge = document.getElementById("departure-badge")
const landingBadge = document.getElementById("landing-badge")
const errorMessage = document.getElementById("error-message")
const resultsData = document.getElementById("results-data")
const resultsPlaceholder = document.getElementById("results-placeholder")
const themeToggle = document.getElementById("theme-toggle")
const themeToggleSeats = document.getElementById("theme-toggle-seats")
const mapToggle = document.getElementById("map-toggle")
const mapSection = document.querySelector(".map-section")

// Navigation elements
const hamburgerToggle = document.getElementById("hamburger-toggle")
const hamburgerNav = document.getElementById("hamburger-nav")
const navOverlay = document.getElementById("nav-overlay")
const navClose = document.getElementById("nav-close")
const navFlightPlanner = document.getElementById("nav-flight-planner")
const navSeatCalculator = document.getElementById("nav-seat-calculator")
const appContainer = document.querySelector(".app-container")

// Remove old navigation variables
// const navLeft = document.getElementById("nav-left")
// const navRight = document.getElementById("nav-right")

// Hamburger menu functionality
function toggleHamburgerMenu() {
  const isActive = hamburgerNav.classList.contains("active")

  if (isActive) {
    closeHamburgerMenu()
  } else {
    openHamburgerMenu()
  }
}

function openHamburgerMenu() {
  hamburgerNav.classList.add("active")
  hamburgerToggle.classList.add("active")
  document.body.style.overflow = "hidden"
  updateActiveNavLink()
}

function closeHamburgerMenu() {
  hamburgerNav.classList.remove("active")
  hamburgerToggle.classList.remove("active")
  document.body.style.overflow = ""
}

function updateActiveNavLink() {
  // Remove active class from all nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active")
  })

  // Add active class to current page
  if (currentPage === "flight-planner") {
    navFlightPlanner.classList.add("active")
  } else {
    navSeatCalculator.classList.add("active")
  }
}

// Navigation between pages (updated)
function navigateToPage(page) {
  currentPage = page

  if (page === "seat-calculator") {
    appContainer.classList.add("slide-left")
  } else {
    appContainer.classList.remove("slide-left")
  }

  updateActiveNavLink()
  closeHamburgerMenu()
}

// Seat calculator elements
const aircraftRows = document.getElementById("aircraft-rows")
const seatConfig = document.getElementById("seat-config")
const customConfig = document.getElementById("custom-config")
const customSeats = document.getElementById("custom-seats")
const generateSeats = document.getElementById("generate-seats")
const seatMapElement = document.getElementById("seat-map")
const passengerName = document.getElementById("passenger-name")
const addPassenger = document.getElementById("add-passenger")
const passengerList = document.getElementById("passenger-list")
const exportPdf = document.getElementById("export-pdf")

// Result elements
const distanceValue = document.getElementById("distance-value")
const timeValue = document.getElementById("time-value")
const fuelValue = document.getElementById("fuel-value")
const windValue = document.getElementById("wind-value")

// Leaflet library
const L = window.L

// Theme management
function initializeTheme() {
  const savedTheme = localStorage.getItem("vfr-theme") || "light"
  document.documentElement.setAttribute("data-theme", savedTheme)
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  document.documentElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("vfr-theme", newTheme)
}

// Map expand/collapse functionality
function toggleMapSize() {
  isMapExpanded = !isMapExpanded

  if (isMapExpanded) {
    mapSection.classList.add("map-expanded")
  } else {
    mapSection.classList.remove("map-expanded")
  }

  // Invalidate map size after transition
  setTimeout(() => {
    if (map && mapInitialized) {
      map.invalidateSize()
    }
  }, 300)
}

// Seat configuration management
function handleSeatConfigChange() {
  const selectedConfig = seatConfig.value

  if (selectedConfig === "custom") {
    customConfig.style.display = "block"
  } else {
    customConfig.style.display = "none"
  }
}

function parseSeatConfiguration(config) {
  return config.split("-").map((num) => Number.parseInt(num))
}

function generateSeatMap() {
  const rows = Number.parseInt(aircraftRows.value)
  const configValue = seatConfig.value === "custom" ? customSeats.value : seatConfig.value

  if (!configValue || rows < 1) {
    alert("Por favor, configure corretamente a aeronave")
    return
  }

  const seatConfiguration = parseSeatConfiguration(configValue)
  aircraftConfig = {
    rows: rows,
    configuration: seatConfiguration,
    totalSeatsPerRow: seatConfiguration.reduce((a, b) => a + b, 0),
  }

  renderSeatMap()
}

function renderSeatMap() {
  if (!aircraftConfig) return

  const seatMapHtml = `
    <div class="seat-map-content">
      <div class="aircraft-body">
        <div class="aircraft-nose"></div>
        ${generateRowsHtml()}
      </div>
    </div>
  `

  seatMapElement.innerHTML = seatMapHtml
  attachSeatEventListeners()
}

function generateRowsHtml() {
  let html = ""

  for (let row = 1; row <= aircraftConfig.rows; row++) {
    html += `<div class="seat-row">`
    html += `<div class="row-number">${row}</div>`

    let seatLetter = "A"
    aircraftConfig.configuration.forEach((groupSize, groupIndex) => {
      if (groupIndex > 0) {
        html += `<div class="aisle"></div>`
      }

      html += `<div class="seat-group">`
      for (let i = 0; i < groupSize; i++) {
        const seatId = `${row}${seatLetter}`
        const isOccupied = passengers.some((p) => p.seat === seatId)
        html += `<div class="seat ${isOccupied ? "occupied" : ""}" data-seat="${seatId}">${seatLetter}</div>`
        seatLetter = String.fromCharCode(seatLetter.charCodeAt(0) + 1)
      }
      html += `</div>`
    })

    html += `</div>`
  }

  return html
}

function attachSeatEventListeners() {
  const seats = document.querySelectorAll(".seat")
  seats.forEach((seat) => {
    seat.addEventListener("click", handleSeatClick)
  })
}

function handleSeatClick(event) {
  const seatId = event.target.dataset.seat
  const isOccupied = event.target.classList.contains("occupied")

  if (isOccupied) {
    // Remove passenger from seat
    const passengerIndex = passengers.findIndex((p) => p.seat === seatId)
    if (passengerIndex !== -1) {
      passengers[passengerIndex].seat = null
      updatePassengerList()
      renderSeatMap()
    }
  } else {
    // Select seat for assignment
    document.querySelectorAll(".seat").forEach((s) => s.classList.remove("selected"))
    event.target.classList.add("selected")
    selectedSeat = seatId
  }
}

// Passenger management
function addNewPassenger() {
  const name = passengerName.value.trim()

  if (!name) {
    alert("Por favor, digite o nome do passageiro")
    return
  }

  const passenger = {
    id: Date.now(),
    name: name,
    seat: selectedSeat,
  }

  passengers.push(passenger)

  if (selectedSeat) {
    selectedSeat = null
    renderSeatMap()
  }

  passengerName.value = ""
  updatePassengerList()
  updateExportButton()
}

function removePassenger(passengerId) {
  const index = passengers.findIndex((p) => p.id === passengerId)
  if (index !== -1) {
    passengers.splice(index, 1)
    updatePassengerList()
    renderSeatMap()
    updateExportButton()
  }
}

function assignSeatToPassenger(passengerId, seatId) {
  const passenger = passengers.find((p) => p.id === passengerId)
  if (passenger) {
    // Remove seat from other passengers
    passengers.forEach((p) => {
      if (p.seat === seatId && p.id !== passengerId) {
        p.seat = null
      }
    })

    passenger.seat = seatId
    updatePassengerList()
    renderSeatMap()
  }
}

function updatePassengerList() {
  if (passengers.length === 0) {
    passengerList.innerHTML = `
      <div class="passenger-list-placeholder">
        <svg class="placeholder-icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        <p>Nenhum passageiro adicionado</p>
      </div>
    `
    return
  }

  const html = passengers
    .map(
      (passenger) => `
    <div class="passenger-item">
      <div class="passenger-info">
        <span class="passenger-name">${passenger.name}</span>
        ${passenger.seat ? `<span class="passenger-seat">Assento ${passenger.seat}</span>` : ""}
      </div>
      <div class="passenger-actions">
        <button class="btn btn-outline btn-icon-only" onclick="removePassenger(${passenger.id})" title="Remover passageiro">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </div>
  `,
    )
    .join("")

  passengerList.innerHTML = html
}

function updateExportButton() {
  const hasPassengers = passengers.length > 0
  exportPdf.disabled = !hasPassengers
}

// PDF Export functionality
function exportToPDF() {
  if (typeof window.jsPDF === "undefined") {
    alert("Biblioteca PDF não carregada. Tente novamente.")
    return
  }

  const { jsPDF } = window.jsPDF
  const doc = new jsPDF()

  // Header
  doc.setFontSize(20)
  doc.text("Lista de Passageiros - Simulador VFR", 20, 30)

  // Aircraft info
  doc.setFontSize(12)
  if (aircraftConfig) {
    doc.text(`Configuração da Aeronave: ${aircraftConfig.configuration.join("-")}`, 20, 50)
    doc.text(`Número de Fileiras: ${aircraftConfig.rows}`, 20, 60)
    doc.text(`Total de Assentos: ${aircraftConfig.rows * aircraftConfig.totalSeatsPerRow}`, 20, 70)
  }

  // Passenger list
  doc.setFontSize(14)
  doc.text("Lista de Passageiros:", 20, 90)

  doc.setFontSize(10)
  let yPosition = 110

  if (passengers.length === 0) {
    doc.text("Nenhum passageiro cadastrado", 20, yPosition)
  } else {
    passengers.forEach((passenger, index) => {
      const seatText = passenger.seat ? `Assento ${passenger.seat}` : "Sem assento"
      doc.text(`${index + 1}. ${passenger.name} - ${seatText}`, 20, yPosition)
      yPosition += 10

      // Add new page if needed
      if (yPosition > 270) {
        doc.addPage()
        yPosition = 30
      }
    })
  }

  // Footer
  const pageCount = doc.internal.getNumberOfPages()
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)
    doc.setFontSize(8)
    doc.text(`Gerado em ${new Date().toLocaleString("pt-BR")} - Página ${i} de ${pageCount}`, 20, 285)
    doc.text("Desenvolvido por Francesco Palmesi", 20, 292)
  }

  // Save the PDF
  doc.save("lista-passageiros.pdf")
}

// Simplified map initialization function
function initializeMap() {
  // Prevent multiple initializations
  if (mapInitialized || !L) {
    return
  }

  try {
    console.log("Initializing map...")

    // Create map instance
    map = L.map("map").setView([-23.5489, -46.6388], 5)

    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "© OpenStreetMap contributors",
    }).addTo(map)

    // Add event listeners
    map.on("click", handleMapClick)
    map.on("dblclick", resetMarkers)

    mapInitialized = true
    console.log("Map initialized successfully")
  } catch (error) {
    console.error("Error initializing map:", error)
  }
}

// Handle map clicks
function handleMapClick(e) {
  const { lat, lng } = e.latlng

  if (markers.length < 2) {
    const marker = L.marker([lat, lng]).addTo(map)
    markers.push(marker)

    if (markers.length === 1) {
      departureInput.value = `${lat.toFixed(4)}, ${lng.toFixed(4)}`
      departureBadge.classList.add("active")
    } else {
      landingInput.value = `${lat.toFixed(4)}, ${lng.toFixed(4)}`
      landingBadge.classList.add("active")
    }

    updateUI()
  }
}

// Reset markers
function resetMarkers() {
  if (map && markers.length > 0) {
    markers.forEach((marker) => map.removeLayer(marker))
    markers = []
  }

  departureInput.value = ""
  landingInput.value = ""
  departureBadge.classList.remove("active")
  landingBadge.classList.remove("active")
  hideResults()
  hideError()
  updateUI()
}

// Calculate distance using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371 // Earth's radius in km
  const toRad = (value) => (value * Math.PI) / 180

  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

// Mock weather data (replace with actual API)
async function getWindData(lat, lon) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Simulated wind data - replace with actual OpenWeather API call
  return {
    speed: Math.random() * 10 + 5, // 5-15 m/s
    deg: Math.random() * 360, // 0-360 degrees
  }
}

// Calculate flight parameters
async function calculateFlight() {
  if (isLoading) return

  setLoading(true)
  hideError()

  try {
    const departureCoords = departureInput.value.split(",").map(Number)
    const landingCoords = landingInput.value.split(",").map(Number)

    if (
      departureCoords.length !== 2 ||
      landingCoords.length !== 2 ||
      departureCoords.some(isNaN) ||
      landingCoords.some(isNaN)
    ) {
      throw new Error("Por favor, insira coordenadas válidas!")
    }

    const [lat1, lon1] = departureCoords
    const [lat2, lon2] = landingCoords
    const airspeed = Number.parseFloat(airspeedInput.value)
    const fuelBurn = Number.parseFloat(fuelBurnInput.value)

    if (isNaN(airspeed) || airspeed <= 0) {
      throw new Error("Velocidade deve ser um número positivo!")
    }

    if (isNaN(fuelBurn) || fuelBurn <= 0) {
      throw new Error("Consumo de combustível deve ser um número positivo!")
    }

    const distance = calculateDistance(lat1, lon1, lat2, lon2)
    const flightTime = distance / airspeed
    const fuelConsumption = fuelBurn * flightTime
    const windInfo = await getWindData(lat1, lon1)

    displayResults({
      distance,
      flightTime,
      fuelConsumption,
      windInfo,
    })
  } catch (error) {
    showError(error.message)
  } finally {
    setLoading(false)
  }
}

// Display results
function displayResults(results) {
  distanceValue.textContent = `${results.distance.toFixed(2)} km`
  timeValue.textContent = `${results.flightTime.toFixed(2)} horas`
  fuelValue.textContent = `${results.fuelConsumption.toFixed(2)} L`
  windValue.textContent = `${results.windInfo.speed.toFixed(1)} m/s, ${results.windInfo.deg.toFixed(0)}°`

  resultsData.style.display = "block"
  resultsPlaceholder.style.display = "none"
}

// Hide results
function hideResults() {
  resultsData.style.display = "none"
  resultsPlaceholder.style.display = "block"
}

// Show error
function showError(message) {
  errorMessage.querySelector(".alert-text").textContent = message
  errorMessage.style.display = "flex"
}

// Hide error
function hideError() {
  errorMessage.style.display = "none"
}

// Set loading state
function setLoading(loading) {
  isLoading = loading
  const btnText = calculateBtn.querySelector(".btn-text")
  const spinner = calculateBtn.querySelector(".loading-spinner")

  if (loading) {
    btnText.textContent = "Calculando..."
    spinner.style.display = "block"
    calculateBtn.disabled = true
  } else {
    btnText.textContent = "Calcular Planejamento"
    spinner.style.display = "none"
    calculateBtn.disabled = false
  }
}

// Update UI state
function updateUI() {
  const hasValidInputs = departureInput.value && landingInput.value
  calculateBtn.disabled = !hasValidInputs || isLoading
}

// Wait for Leaflet to load, then initialize
function waitForLeafletAndInit() {
  if (typeof L !== "undefined" && L.map) {
    initializeMap()
  } else {
    setTimeout(waitForLeafletAndInit, 100)
  }
}

// Main initialization
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing app...")

  // Initialize theme
  initializeTheme()

  // Wait for Leaflet to be available
  waitForLeafletAndInit()

  // Set up hamburger menu event listeners
  if (hamburgerToggle) {
    hamburgerToggle.addEventListener("click", toggleHamburgerMenu)
  }

  if (navOverlay) {
    navOverlay.addEventListener("click", closeHamburgerMenu)
  }

  if (navClose) {
    navClose.addEventListener("click", closeHamburgerMenu)
  }

  if (navFlightPlanner) {
    navFlightPlanner.addEventListener("click", () => navigateToPage("flight-planner"))
  }

  if (navSeatCalculator) {
    navSeatCalculator.addEventListener("click", () => navigateToPage("seat-calculator"))
  }

  // Close menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && hamburgerNav.classList.contains("active")) {
      closeHamburgerMenu()
    }
  })

  // Remove old navigation event listeners
  // if (navLeft) {
  //   navLeft.addEventListener("click", () => navigateToPage("seat-calculator"))
  // }
  // if (navRight) {
  //   navRight.addEventListener("click", () => navigateToPage("flight-planner"))
  // }

  // Set up flight planner event listeners
  if (calculateBtn) {
    calculateBtn.addEventListener("click", calculateFlight)
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", resetMarkers)
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme)
  }

  if (themeToggleSeats) {
    themeToggleSeats.addEventListener("click", toggleTheme)
  }

  if (mapToggle) {
    mapToggle.addEventListener("click", toggleMapSize)
  }

  // Set up seat calculator event listeners
  if (seatConfig) {
    seatConfig.addEventListener("change", handleSeatConfigChange)
  }

  if (generateSeats) {
    generateSeats.addEventListener("click", generateSeatMap)
  }

  if (addPassenger) {
    addPassenger.addEventListener("click", addNewPassenger)
  }

  if (passengerName) {
    passengerName.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addNewPassenger()
      }
    })
  }

  if (exportPdf) {
    exportPdf.addEventListener("click", exportToPDF)
  }

  // Update UI when inputs change
  const inputs = [departureInput, landingInput, airspeedInput, fuelBurnInput]
  inputs.forEach((input) => {
    if (input) {
      input.addEventListener("input", updateUI)
    }
  })

  // Handle manual coordinate input
  if (departureInput) {
    departureInput.addEventListener("blur", () => {
      if (departureInput.value && markers.length === 0) {
        departureBadge.classList.add("active")
      }
    })
  }

  if (landingInput) {
    landingInput.addEventListener("blur", () => {
      if (landingInput.value && markers.length <= 1) {
        landingBadge.classList.add("active")
      }
    })
  }

  updateUI()
  updateExportButton()
  updateActiveNavLink()
})

// Handle window resize for map (only if map exists)
window.addEventListener("resize", () => {
  if (map && mapInitialized) {
    setTimeout(() => {
      map.invalidateSize()
    }, 100)
  }
})
