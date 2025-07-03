// Global variables
let map
let markers = []
let isLoading = false
let mapInitialized = false
let isMapExpanded = false

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
const mapToggle = document.getElementById("map-toggle")
const mapSection = document.querySelector(".map-section")

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

  // Set up event listeners
  if (calculateBtn) {
    calculateBtn.addEventListener("click", calculateFlight)
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", resetMarkers)
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme)
  }

  if (mapToggle) {
    mapToggle.addEventListener("click", toggleMapSize)
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
})

// Handle window resize for map (only if map exists)
window.addEventListener("resize", () => {
  if (map && mapInitialized) {
    setTimeout(() => {
      map.invalidateSize()
    }, 100)
  }
})
