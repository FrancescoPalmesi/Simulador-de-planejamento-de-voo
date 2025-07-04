// Aviation Dictionary Data
const aviationTerms = [
  {
    id: 1,
    term: "VFR",
    category: "regulations",
    definition:
      "Visual Flight Rules - Regras de voo visual que permitem ao piloto navegar por referências visuais externas, mantendo separação de outras aeronaves e obstáculos através da visão.",
    example: "O piloto decidiu voar em VFR devido às excelentes condições meteorológicas.",
    related: ["IFR", "VMC", "Visibilidade"],
  },
  {
    id: 2,
    term: "IFR",
    category: "regulations",
    definition:
      "Instrument Flight Rules - Regras de voo por instrumentos utilizadas quando as condições meteorológicas não permitem voo visual seguro.",
    example: "Devido à neblina, o voo foi realizado em IFR com navegação por instrumentos.",
    related: ["VFR", "IMC", "Radionavegação"],
  },
  {
    id: 3,
    term: "METAR",
    category: "meteorology",
    definition:
      "Meteorological Aerodrome Report - Relatório meteorológico de aeródromo que fornece informações sobre condições meteorológicas atuais.",
    example: "O METAR indicava vento de 090° a 15 nós com visibilidade de 10km.",
    related: ["TAF", "SPECI", "Meteorologia"],
  },
  {
    id: 4,
    term: "TAF",
    category: "meteorology",
    definition:
      "Terminal Aerodrome Forecast - Previsão meteorológica para aeródromo terminal, válida por períodos específicos.",
    example: "O TAF previa deterioração das condições meteorológicas após as 18:00Z.",
    related: ["METAR", "Previsão", "Meteorologia"],
  },
  {
    id: 5,
    term: "NDB",
    category: "navigation",
    definition:
      "Non-Directional Beacon - Radiofarol não direcional que transmite sinais em todas as direções, usado para navegação.",
    example: "A aeronave utilizou o NDB para navegação de aproximação ao aeroporto.",
    related: ["VOR", "ADF", "Radionavegação"],
  },
  {
    id: 6,
    term: "VOR",
    category: "navigation",
    definition:
      "VHF Omnidirectional Range - Sistema de radionavegação que fornece informações de azimute magnético em relação à estação.",
    example: "O piloto sintonizou o VOR para navegar na radial 090.",
    related: ["NDB", "DME", "Radionavegação"],
  },
  {
    id: 7,
    term: "DME",
    category: "navigation",
    definition:
      "Distance Measuring Equipment - Equipamento que mede a distância entre a aeronave e uma estação terrestre.",
    example: "O DME indicava 25 milhas náuticas da estação VOR.",
    related: ["VOR", "TACAN", "Navegação"],
  },
  {
    id: 8,
    term: "TCAS",
    category: "aircraft",
    definition:
      "Traffic Collision Avoidance System - Sistema de prevenção de colisão de tráfego que monitora aeronaves próximas.",
    example: "O TCAS emitiu um alerta de tráfego a 2 milhas náuticas.",
    related: ["Transponder", "Radar", "Segurança"],
  },
  {
    id: 9,
    term: "Squawk",
    category: "communication",
    definition: "Código de quatro dígitos transmitido pelo transponder para identificação da aeronave no radar.",
    example: "Torre: 'Aeronave PT-ABC, squawk 2000'.",
    related: ["Transponder", "Radar", "ATC"],
  },
  {
    id: 10,
    term: "Roger",
    category: "communication",
    definition: "Confirmação de que a mensagem foi recebida e compreendida, mas não necessariamente que será cumprida.",
    example: "Piloto: 'Roger, mantenho altitude 3000 pés'.",
    related: ["Wilco", "Affirm", "Comunicação"],
  },
  {
    id: 11,
    term: "Wilco",
    category: "communication",
    definition: "Will Comply - Indica que a mensagem foi recebida, compreendida e será cumprida.",
    example: "Piloto: 'Wilco, curva à direita proa 180'.",
    related: ["Roger", "Affirm", "Comunicação"],
  },
  {
    id: 12,
    term: "Final",
    category: "procedures",
    definition: "Segmento final da aproximação para pouso, alinhado com a pista de aterrissagem.",
    example: "Aeronave estabelecida no final da pista 09, autorizada para pouso.",
    related: ["Base", "Downwind", "Circuito"],
  },
  {
    id: 13,
    term: "Go Around",
    category: "procedures",
    definition: "Procedimento de arremetida quando o pouso não pode ser completado com segurança.",
    example: "Torre autorizou go around devido a aeronave na pista.",
    related: ["Arremetida", "Aproximação", "Segurança"],
  },
  {
    id: 14,
    term: "Crosswind",
    category: "meteorology",
    definition: "Componente do vento perpendicular ao eixo da pista, que afeta as operações de decolagem e pouso.",
    example: "O crosswind de 15 nós exigiu correção durante o pouso.",
    related: ["Headwind", "Tailwind", "Vento"],
  },
  {
    id: 15,
    term: "Flaps",
    category: "aircraft",
    definition: "Superfícies de controle móveis na asa que aumentam sustentação e arrasto para decolagens e pousos.",
    example: "Piloto baixou flaps 20° para a aproximação final.",
    related: ["Slats", "Spoilers", "Controles"],
  },
  {
    id: 16,
    term: "Stall",
    category: "aircraft",
    definition: "Perda de sustentação que ocorre quando o ângulo de ataque excede o ângulo crítico.",
    example: "O piloto recuperou rapidamente do stall baixando o nariz da aeronave.",
    related: ["Ângulo de Ataque", "Sustentação", "Aerodinâmica"],
  },
  {
    id: 17,
    term: "Ceiling",
    category: "meteorology",
    definition: "Altura da base da camada de nuvens mais baixa que cobre mais da metade do céu.",
    example: "O ceiling estava a 1500 pés, limitando operações VFR.",
    related: ["Visibilidade", "Nuvens", "VMC"],
  },
  {
    id: 18,
    term: "QNH",
    category: "navigation",
    definition: "Pressão atmosférica ao nível médio do mar, usada para ajuste do altímetro.",
    example: "Torre informou QNH 1013 hectopascais.",
    related: ["QFE", "QNE", "Altimetria"],
  },
  {
    id: 19,
    term: "Mayday",
    category: "communication",
    definition: "Chamada de emergência internacional indicando situação de perigo iminente.",
    example: "Mayday, mayday, aeronave PT-XYZ com falha de motor.",
    related: ["Pan-Pan", "Emergência", "Socorro"],
  },
  {
    id: 20,
    term: "Pan-Pan",
    category: "communication",
    definition: "Chamada de urgência internacional para situações que requerem assistência mas não são emergências.",
    example: "Pan-Pan, aeronave com problema no sistema elétrico.",
    related: ["Mayday", "Urgência", "Assistência"],
  },
]

// Radio Procedures Data
const phoneticAlphabet = [
  { letter: "A", word: "Alpha", pronunciation: "AL-fah" },
  { letter: "B", word: "Bravo", pronunciation: "BRAH-voh" },
  { letter: "C", word: "Charlie", pronunciation: "CHAR-lee" },
  { letter: "D", word: "Delta", pronunciation: "DELL-tah" },
  { letter: "E", word: "Echo", pronunciation: "ECK-oh" },
  { letter: "F", word: "Foxtrot", pronunciation: "FOKS-trot" },
  { letter: "G", word: "Golf", pronunciation: "GOLF" },
  { letter: "H", word: "Hotel", pronunciation: "hoh-TELL" },
  { letter: "I", word: "India", pronunciation: "IN-dee-ah" },
  { letter: "J", word: "Juliet", pronunciation: "JEW-lee-ett" },
  { letter: "K", word: "Kilo", pronunciation: "KEY-loh" },
  { letter: "L", word: "Lima", pronunciation: "LEE-mah" },
  { letter: "M", word: "Mike", pronunciation: "MIKE" },
  { letter: "N", word: "November", pronunciation: "no-VEM-ber" },
  { letter: "O", word: "Oscar", pronunciation: "OSS-cah" },
  { letter: "P", word: "Papa", pronunciation: "pah-PAH" },
  { letter: "Q", word: "Quebec", pronunciation: "keh-BECK" },
  { letter: "R", word: "Romeo", pronunciation: "ROW-me-oh" },
  { letter: "S", word: "Sierra", pronunciation: "see-AIR-rah" },
  { letter: "T", word: "Tango", pronunciation: "TANG-go" },
  { letter: "U", word: "Uniform", pronunciation: "YOU-nee-form" },
  { letter: "V", word: "Victor", pronunciation: "VIK-tah" },
  { letter: "W", word: "Whiskey", pronunciation: "WISS-key" },
  { letter: "X", word: "X-ray", pronunciation: "ECKS-ray" },
  { letter: "Y", word: "Yankee", pronunciation: "YANG-key" },
  { letter: "Z", word: "Zulu", pronunciation: "ZOO-loo" },
]

const numbersPronunciation = [
  { digit: "0", pronunciation: "Zero" },
  { digit: "1", pronunciation: "One" },
  { digit: "2", pronunciation: "Two" },
  { digit: "3", pronunciation: "Tree" },
  { digit: "4", pronunciation: "Four" },
  { digit: "5", pronunciation: "Five" },
  { digit: "6", pronunciation: "Six" },
  { digit: "7", pronunciation: "Seven" },
  { digit: "8", pronunciation: "Eight" },
  { digit: "9", pronunciation: "Niner" },
]

const standardPhrases = [
  {
    category: "Confirmação",
    icon: "✓",
    phrases: [
      {
        text: "Roger",
        meaning: "Mensagem recebida e compreendida",
        example: "Torre: 'Mantenha altitude 3000 pés' - Piloto: 'Roger'",
      },
      {
        text: "Wilco",
        meaning: "Mensagem recebida, compreendida e será cumprida",
        example: "Torre: 'Curva à direita proa 180' - Piloto: 'Wilco'",
      },
      {
        text: "Affirm",
        meaning: "Sim, correto",
        example: "Torre: 'Confirma combustível para 2 horas?' - Piloto: 'Affirm'",
      },
      {
        text: "Negative",
        meaning: "Não, incorreto",
        example: "Torre: 'Tráfego à vista?' - Piloto: 'Negative'",
      },
    ],
  },
  {
    category: "Solicitações",
    icon: "❓",
    phrases: [
      {
        text: "Request",
        meaning: "Solicito",
        example: "Piloto: 'Request altitude change to 4000 feet'",
      },
      {
        text: "Say again",
        meaning: "Repita a mensagem",
        example: "Piloto: 'Say again last transmission'",
      },
      {
        text: "Speak slower",
        meaning: "Fale mais devagar",
        example: "Piloto: 'Speak slower please'",
      },
      {
        text: "Stand by",
        meaning: "Aguarde",
        example: "Torre: 'Stand by for clearance'",
      },
    ],
  },
  {
    category: "Posição e Movimento",
    icon: "📍",
    phrases: [
      {
        text: "Taxi to",
        meaning: "Taxie para",
        example: "Torre: 'Taxi to runway 09 via taxiway Alpha'",
      },
      {
        text: "Hold short",
        meaning: "Pare antes de",
        example: "Torre: 'Hold short of runway 09'",
      },
      {
        text: "Line up and wait",
        meaning: "Alinhe e aguarde",
        example: "Torre: 'Line up and wait runway 09'",
      },
      {
        text: "Cleared for takeoff",
        meaning: "Autorizado para decolagem",
        example: "Torre: 'PT-ABC cleared for takeoff runway 09'",
      },
    ],
  },
]

const emergencyProcedures = [
  {
    title: "MAYDAY",
    description: "Chamada de emergência para situações de perigo iminente à vida ou aeronave.",
    example:
      "MAYDAY, MAYDAY, MAYDAY\nPT-ABC, CESSNA 172\nEngine failure\n10 miles north of SBSP\n2 souls on board\nRequest immediate assistance",
  },
  {
    title: "PAN-PAN",
    description: "Chamada de urgência para situações que requerem assistência mas não são emergências.",
    example:
      "PAN-PAN, PAN-PAN, PAN-PAN\nPT-XYZ, PIPER CHEROKEE\nElectrical system malfunction\nRequest priority landing SBSP\n4 souls on board",
  },
  {
    title: "SQUAWK 7700",
    description: "Código de transponder para emergência geral.",
    example: "Torre: 'PT-ABC squawk 7700 and state nature of emergency'",
  },
  {
    title: "SQUAWK 7600",
    description: "Código de transponder para falha de comunicação.",
    example: "Em caso de falha de rádio, ajuste transponder para 7600 e continue conforme plano de voo",
  },
]

const communicationTips = [
  {
    title: "Clareza",
    description: "Fale de forma clara e pausada. Articule bem cada palavra e evite gírias ou expressões regionais.",
  },
  {
    title: "Brevidade",
    description: "Seja conciso. Use apenas as palavras necessárias para transmitir a informação completa.",
  },
  {
    title: "Escuta Ativa",
    description: "Sempre confirme instruções importantes. Se não entender, peça para repetir.",
  },
  {
    title: "Identificação",
    description: "Sempre identifique sua aeronave no início de cada transmissão.",
  },
  {
    title: "Paciência",
    description: "Aguarde sua vez de falar. Não interrompa outras comunicações exceto em emergências.",
  },
  {
    title: "Preparação",
    description: "Organize suas ideias antes de transmitir. Saiba o que vai dizer antes de pressionar o PTT.",
  },
]

// Dictionary variables
let filteredTerms = [...aviationTerms]
let currentCategory = "all"
let currentSort = "alphabetical"

// Dictionary section management
let currentDictionarySection = "terms"

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

// Flight information
let flightInfo = {
  name: "",
  departureAirport: "",
  arrivalAirport: "",
  date: "",
  time: "",
}

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

// Add this after the existing navigation variables
const navAbout = document.getElementById("nav-about")
const themeToggleAbout = document.getElementById("theme-toggle-about")

// Dictionary elements
const navAviationDictionary = document.getElementById("nav-aviation-dictionary")
const themeToggleDictionary = document.getElementById("theme-toggle-dictionary")
const dictionarySearch = document.getElementById("dictionary-search")
const clearSearch = document.getElementById("clear-search")
const categoryButtons = document.querySelectorAll(".category-btn")
const sortTermsSelect = document.getElementById("sort-terms")
const dictionaryList = document.getElementById("dictionary-list")
const dictionaryPlaceholder = document.getElementById("dictionary-placeholder")
const resultsCount = document.getElementById("results-count")
const termModal = document.getElementById("term-modal")
const modalOverlay = document.getElementById("modal-overlay")
const modalClose = document.getElementById("modal-close")
const modalTermTitle = document.getElementById("modal-term-title")
const modalTermCategory = document.getElementById("modal-term-category")
const modalTermDefinition = document.getElementById("modal-term-definition")
const modalTermExample = document.getElementById("modal-term-example")
const modalTermExampleText = document.getElementById("modal-term-example-text")
const modalRelatedTerms = document.getElementById("modal-related-terms")

// Add these variables after the existing dictionary variables
const navTerms = document.getElementById("nav-terms")
const navRadio = document.getElementById("nav-radio")
const radioSection = document.getElementById("radio-procedures")
const dictionaryResults = document.querySelector(".dictionary-results")
const modalTermRelated = document.getElementById("modal-related-terms")

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

// Add these DOM elements after the existing seat calculator elements
const flightName = document.getElementById("flight-name")
const departureAirport = document.getElementById("departure-airport")
const arrivalAirport = document.getElementById("arrival-airport")
const flightDate = document.getElementById("flight-date")
const flightTime = document.getElementById("flight-time")

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

// Navigation between pages (updated for four pages)
function navigateToPage(page) {
  currentPage = page

  if (page === "seat-calculator") {
    appContainer.classList.add("slide-left")
    appContainer.classList.remove("slide-center", "slide-right")
  } else if (page === "about") {
    appContainer.classList.add("slide-center")
    appContainer.classList.remove("slide-left", "slide-right")
  } else if (page === "aviation-dictionary") {
    appContainer.classList.add("slide-right")
    appContainer.classList.remove("slide-left", "slide-center")
  } else {
    appContainer.classList.remove("slide-left", "slide-center", "slide-right")
  }

  updateActiveNavLink()
  closeHamburgerMenu()
}

function updateActiveNavLink() {
  // Remove active class from all nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active")
  })

  // Add active class to current page
  if (currentPage === "flight-planner") {
    navFlightPlanner.classList.add("active")
  } else if (currentPage === "seat-calculator") {
    navSeatCalculator.classList.add("active")
  } else if (currentPage === "about") {
    navAbout.classList.add("active")
  } else if (currentPage === "aviation-dictionary") {
    navAviationDictionary.classList.add("active")
  }
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
  // Create a simple PDF-like content in a new window for printing
  const printWindow = window.open("", "_blank")

  if (!printWindow) {
    alert("Por favor, permita pop-ups para exportar o PDF")
    return
  }

  // Get current flight information
  const currentFlightInfo = {
    name: flightName?.value || "Não informado",
    departureAirport: departureAirport?.value || "Não informado",
    arrivalAirport: arrivalAirport?.value || "Não informado",
    date: flightDate?.value || "Não informado",
    time: flightTime?.value || "Não informado",
  }

  // Generate HTML content for PDF
  let htmlContent = `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Lista de Passageiros - ${currentFlightInfo.name}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 20px;
          line-height: 1.6;
          color: #333;
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
          border-bottom: 2px solid #3b82f6;
          padding-bottom: 20px;
        }
        .header h1 {
          color: #3b82f6;
          margin: 0;
          font-size: 24px;
        }
        .flight-info {
          background: #e3f2fd;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 20px;
          border-left: 4px solid #3b82f6;
        }
        .flight-info h2 {
          color: #1565c0;
          margin-top: 0;
          font-size: 18px;
        }
        .flight-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 10px;
          margin-top: 10px;
        }
        .flight-detail {
          background: white;
          padding: 8px;
          border-radius: 4px;
          border: 1px solid #bbdefb;
        }
        .flight-detail strong {
          color: #1565c0;
        }
        .info-section {
          margin-bottom: 30px;
          background: #f8f9fa;
          padding: 15px;
          border-radius: 8px;
        }
        .info-section h2 {
          color: #1f2937;
          margin-top: 0;
          font-size: 18px;
        }
        .info-item {
          margin: 8px 0;
        }
        .passenger-list {
          margin-top: 20px;
        }
        .passenger-item {
          padding: 10px;
          margin: 5px 0;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 5px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .passenger-name {
          border: 1px solid #e5e7eb;
          border-radius: 5px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .passenger-name {
          font-weight: bold;
          color: #1f2937;
        }
        .passenger-seat {
          background: #3b82f6;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
        }
        .no-passengers {
          text-align: center;
          color: #6b7280;
          font-style: italic;
          padding: 20px;
        }
        .footer {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
          text-align: center;
          font-size: 12px;
          color: #6b7280;
        }
        .summary-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 15px;
          margin: 20px 0;
        }
        .stat-card {
          background: white;
          padding: 15px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          text-align: center;
        }
        .stat-number {
          font-size: 24px;
          font-weight: bold;
          color: #3b82f6;
        }
        .stat-label {
          font-size: 12px;
          color: #6b7280;
          margin-top: 5px;
        }
        @media print {
          body { margin: 0; }
          .no-print { display: none; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Lista de Passageiros - Simulador VFR</h1>
        <p>Relatório gerado em ${new Date().toLocaleString("pt-BR")}</p>
      </div>
      
      <div class="flight-info">
        <h2>📋 Informações do Voo</h2>
        <div class="flight-details">
          <div class="flight-detail">
            <strong>Voo:</strong> ${currentFlightInfo.name}
          </div>
          <div class="flight-detail">
            <strong>Origem:</strong> ${currentFlightInfo.departureAirport}
          </div>
          <div class="flight-detail">
            <strong>Destino:</strong> ${currentFlightInfo.arrivalAirport}
          </div>
          <div class="flight-detail">
            <strong>Data:</strong> ${currentFlightInfo.date !== "Não informado" ? new Date(currentFlightInfo.date).toLocaleDateString("pt-BR") : "Não informado"}
          </div>
          <div class="flight-detail">
            <strong>Horário:</strong> ${currentFlightInfo.time}
          </div>
        </div>
      </div>
      
      <div class="info-section">
        <h2>✈️ Informações da Aeronave</h2>
  `

  // Add aircraft information
  if (aircraftConfig) {
    const occupiedSeats = passengers.filter((p) => p.seat).length
    const totalSeats = aircraftConfig.rows * aircraftConfig.totalSeatsPerRow
    const occupancyRate = totalSeats > 0 ? ((occupiedSeats / totalSeats) * 100).toFixed(1) : 0

    htmlContent += `
        <div class="info-item"><strong>Configuração:</strong> ${aircraftConfig.configuration.join("-")}</div>
        <div class="info-item"><strong>Número de Fileiras:</strong> ${aircraftConfig.rows}</div>
        <div class="info-item"><strong>Total de Assentos:</strong> ${totalSeats}</div>
        
        <div class="summary-stats">
          <div class="stat-card">
            <div class="stat-number">${passengers.length}</div>
            <div class="stat-label">Passageiros</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">${occupiedSeats}</div>
            <div class="stat-label">Assentos Ocupados</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">${totalSeats - occupiedSeats}</div>
            <div class="stat-label">Assentos Livres</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">${occupancyRate}%</div>
            <div class="stat-label">Taxa de Ocupação</div>
          </div>
        </div>
    `
  } else {
    htmlContent += `
        <div class="info-item">Configuração da aeronave não definida</div>
    `
  }

  htmlContent += `
      </div>
      
      <div class="info-section">
        <h2>👥 Lista de Passageiros (${passengers.length} passageiro${passengers.length !== 1 ? "s" : ""})</h2>
        <div class="passenger-list">
  `

  // Add passenger list
  if (passengers.length === 0) {
    htmlContent += `
          <div class="no-passengers">Nenhum passageiro cadastrado</div>
    `
  } else {
    passengers.forEach((passenger, index) => {
      const seatText = passenger.seat ? passenger.seat : "Sem assento"
      htmlContent += `
          <div class="passenger-item">
            <span class="passenger-name">${index + 1}. ${passenger.name}</span>
            <span class="passenger-seat">${seatText}</span>
          </div>
      `
    })
  }

  htmlContent += `
        </div>
      </div>
      
      <div class="footer">
        <p><strong>Simulador VFR - Ferramenta Educacional de Aviação</strong></p>
        <p>Desenvolvido por Francesco Palmesi</p>
        <div class="no-print" style="margin-top: 20px;">
          <button onclick="window.print()" style="background: #3b82f6; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-right: 10px;">Imprimir / Salvar PDF</button>
          <button onclick="window.close()" style="background: #6b7280; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Fechar</button>
        </div>
      </div>
    </body>
    </html>
  `

  // Write content to new window
  printWindow.document.write(htmlContent)
  printWindow.document.close()

  // Focus the new window
  printWindow.focus()

  // Auto-trigger print dialog after a short delay
  setTimeout(() => {
    printWindow.print()
  }, 500)
}

function updateFlightInfo() {
  flightInfo = {
    name: flightName?.value || "",
    departureAirport: departureAirport?.value || "",
    arrivalAirport: arrivalAirport?.value || "",
    date: flightDate?.value || "",
    time: flightTime?.value || "",
  }
}

// Fix modal positioning and centering
function showTermModal(termId) {
  const term = aviationTerms.find((t) => t.id === termId)
  if (!term) return

  modalTermTitle.textContent = term.term
  modalTermCategory.textContent = getCategoryName(term.category)
  modalTermDefinition.textContent = term.definition

  if (term.example) {
    modalTermExample.style.display = "block"
    modalTermExampleText.textContent = term.example
  } else {
    modalTermExample.style.display = "none"
  }

  if (term.related && term.related.length > 0) {
    modalTermRelated.style.display = "block"
    const relatedHtml = term.related
      .map((relatedTerm) => `<span class="related-term" data-related="${relatedTerm}">${relatedTerm}</span>`)
      .join("")
    modalRelatedTerms.innerHTML = relatedHtml

    // Add click listeners to related terms
    modalRelatedTerms.querySelectorAll(".related-term").forEach((relatedEl) => {
      relatedEl.addEventListener("click", () => {
        const relatedTermName = relatedEl.dataset.related
        const relatedTerm = aviationTerms.find((t) => t.term === relatedTermName)
        if (relatedTerm) {
          showTermModal(relatedTerm.id)
        }
      })
    })
  } else {
    modalTermRelated.style.display = "none"
  }

  // Show modal with proper centering
  termModal.style.display = "flex"
  document.body.style.overflow = "hidden"

  // Ensure modal content is centered
  const modalContent = termModal.querySelector(".modal-content")
  if (modalContent) {
    modalContent.scrollTop = 0
  }
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

// Dictionary functionality
function getCategoryIcon(category) {
  const icons = {
    navigation: "🧭",
    meteorology: "🌤️",
    regulations: "📋",
    aircraft: "✈️",
    communication: "📡",
    procedures: "🛬",
  }
  return icons[category] || "📖"
}

function getCategoryName(category) {
  const names = {
    navigation: "Navegação",
    meteorology: "Meteorologia",
    regulations: "Regulamentos",
    aircraft: "Aeronave",
    communication: "Comunicação",
    procedures: "Procedimentos",
  }
  return names[category] || category
}

function filterTerms() {
  const searchTerm = dictionarySearch.value.toLowerCase().trim()

  filteredTerms = aviationTerms.filter((term) => {
    const matchesCategory = currentCategory === "all" || term.category === currentCategory
    const matchesSearch =
      !searchTerm || term.term.toLowerCase().includes(searchTerm) || term.definition.toLowerCase().includes(searchTerm)

    return matchesCategory && matchesSearch
  })

  sortFilteredTerms()
  renderTerms()
  updateResultsCount()
}

function sortFilteredTerms() {
  switch (currentSort) {
    case "alphabetical":
      filteredTerms.sort((a, b) => a.term.localeCompare(b.term))
      break
    case "category":
      filteredTerms.sort((a, b) => {
        if (a.category === b.category) {
          return a.term.localeCompare(b.term)
        }
        return a.category.localeCompare(b.category)
      })
      break
    case "relevance":
      // For relevance, we could implement a scoring system
      // For now, just use alphabetical as fallback
      filteredTerms.sort((a, b) => a.term.localeCompare(b.term))
      break
  }
}

function renderTerms() {
  if (filteredTerms.length === 0) {
    dictionaryList.style.display = "none"
    dictionaryPlaceholder.style.display = "block"
    return
  }

  dictionaryList.style.display = "grid"
  dictionaryPlaceholder.style.display = "none"

  const html = filteredTerms
    .map(
      (term) => `
    <div class="term-item" data-term-id="${term.id}">
      <div class="term-header">
        <div>
          <h3 class="term-title">${term.term}</h3>
          <span class="term-category-badge">${getCategoryName(term.category)}</span>
        </div>
        <div class="term-icon">${getCategoryIcon(term.category)}</div>
      </div>
      <p class="term-preview">${term.definition}</p>
    </div>
  `,
    )
    .join("")

  dictionaryList.innerHTML = html

  // Add click listeners to term items
  document.querySelectorAll(".term-item").forEach((item) => {
    item.addEventListener("click", () => {
      const termId = Number.parseInt(item.dataset.termId)
      showTermModal(termId)
    })
  })
}

function updateResultsCount() {
  const total = filteredTerms.length
  const categoryText = currentCategory === "all" ? "todos os termos" : `termos de ${getCategoryName(currentCategory)}`

  if (total === 0) {
    resultsCount.textContent = "Nenhum termo encontrado"
  } else if (total === 1) {
    resultsCount.textContent = `Mostrando 1 termo de ${categoryText}`
  } else {
    resultsCount.textContent = `Mostrando ${total} termos de ${categoryText}`
  }
}

function closeTermModal() {
  termModal.style.display = "none"
  document.body.style.overflow = ""
}

function clearDictionarySearch() {
  dictionarySearch.value = ""
  filterTerms()
}

function setCategory(category) {
  currentCategory = category

  // Update category buttons
  categoryButtons.forEach((btn) => {
    btn.classList.remove("active")
    if (btn.dataset.category === category) {
      btn.classList.add("active")
    }
  })

  filterTerms()
}

function setSortOrder(sortOrder) {
  currentSort = sortOrder
  filterTerms()
}

// Add this function after the existing dictionary functions
function switchDictionarySection(section) {
  currentDictionarySection = section

  // Update navigation buttons
  document.querySelectorAll(".dictionary-nav-btn").forEach((btn) => {
    btn.classList.remove("active")
  })

  if (section === "terms") {
    navTerms.classList.add("active")
    dictionaryResults.style.display = "block"
    radioSection.style.display = "none"
  } else if (section === "radio") {
    navRadio.classList.add("active")
    dictionaryResults.style.display = "none"
    radioSection.style.display = "block"
  }
}

function renderPhoneticAlphabet() {
  const container = document.getElementById("phonetic-alphabet")
  if (!container) return

  const html = phoneticAlphabet
    .map(
      (item) => `
    <div class="phonetic-item">
      <div class="phonetic-letter">${item.letter}</div>
      <div class="phonetic-word">
        <div class="phonetic-name">${item.word}</div>
        <div class="phonetic-pronunciation">${item.pronunciation}</div>
      </div>
      <button class="phonetic-audio" onclick="speakPhonetic('${item.word}')" title="Ouvir pronúncia">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        </svg>
      </button>
    </div>
  `,
    )
    .join("")

  container.innerHTML = html
}

function renderNumbersPronunciation() {
  const container = document.getElementById("numbers-pronunciation")
  if (!container) return

  const html = numbersPronunciation
    .map(
      (item) => `
    <div class="number-item">
      <div class="number-digit">${item.digit}</div>
      <div class="number-pronunciation">${item.pronunciation}</div>
    </div>
  `,
    )
    .join("")

  container.innerHTML = html
}

function renderStandardPhrases() {
  const container = document.getElementById("standard-phrases")
  if (!container) return

  const html = standardPhrases
    .map(
      (category) => `
    <div class="phrase-category">
      <div class="phrase-category-header">
        <span class="phrase-category-icon">${category.icon}</span>
        ${category.category}
      </div>
      <div class="phrase-list">
        ${category.phrases
          .map(
            (phrase) => `
          <div class="phrase-item">
            <div class="phrase-text">${phrase.text}</div>
            <div class="phrase-meaning">${phrase.meaning}</div>
            <div class="phrase-example">Exemplo: ${phrase.example}</div>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  `,
    )
    .join("")

  container.innerHTML = html
}

function renderEmergencyProcedures() {
  const container = document.getElementById("emergency-procedures")
  if (!container) return

  const html = emergencyProcedures
    .map(
      (procedure) => `
    <div class="emergency-item">
      <div class="emergency-title">
        <svg class="emergency-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
        ${procedure.title}
      </div>
      <div class="emergency-description">${procedure.description}</div>
      <div class="emergency-example">${procedure.example}</div>
    </div>
  `,
    )
    .join("")

  container.innerHTML = html
}

function renderCommunicationTips() {
  const container = document.getElementById("communication-tips")
  if (!container) return

  const html = communicationTips
    .map(
      (tip) => `
    <div class="tip-item">
      <div class="tip-title">
        <svg class="tip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
        ${tip.title}
      </div>
      <div class="tip-description">${tip.description}</div>
    </div>
  `,
    )
    .join("")

  container.innerHTML = html
}

function speakPhonetic(word) {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(word)
    utterance.lang = "en-US"
    utterance.rate = 0.8
    speechSynthesis.speak(utterance)
  }
}

function initializeRadioProcedures() {
  renderPhoneticAlphabet()
  renderNumbersPronunciation()
  renderStandardPhrases()
  renderEmergencyProcedures()
  renderCommunicationTips()
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

  // Add this after the existing navigation event listeners
  if (navAbout) {
    navAbout.addEventListener("click", () => navigateToPage("about"))
  }

  if (themeToggleAbout) {
    themeToggleAbout.addEventListener("click", toggleTheme)
  }

  // Close menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && hamburgerNav.classList.contains("active")) {
      closeHamburgerMenu()
    }
  })

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

  // Set up flight information event listeners
  if (flightName) {
    flightName.addEventListener("input", updateFlightInfo)
  }

  if (departureAirport) {
    departureAirport.addEventListener("input", updateFlightInfo)
  }

  if (arrivalAirport) {
    arrivalAirport.addEventListener("input", updateFlightInfo)
  }

  if (flightDate) {
    flightDate.addEventListener("input", updateFlightInfo)
  }

  if (flightTime) {
    flightTime.addEventListener("input", updateFlightInfo)
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

  // Set up dictionary event listeners
  if (navAviationDictionary) {
    navAviationDictionary.addEventListener("click", () => navigateToPage("aviation-dictionary"))
  }

  if (themeToggleDictionary) {
    themeToggleDictionary.addEventListener("click", toggleTheme)
  }

  if (dictionarySearch) {
    dictionarySearch.addEventListener("input", filterTerms)
  }

  if (clearSearch) {
    clearSearch.addEventListener("click", clearDictionarySearch)
  }

  if (sortTermsSelect) {
    sortTermsSelect.addEventListener("change", (e) => setSortOrder(e.target.value))
  }

  // Category filter buttons
  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => setCategory(btn.dataset.category))
  })

  // Modal event listeners
  if (modalOverlay) {
    modalOverlay.addEventListener("click", closeTermModal)
  }

  if (modalClose) {
    modalClose.addEventListener("click", closeTermModal)
  }

  // Close modal on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && termModal.style.display === "flex") {
      closeTermModal()
    }
  })

  // Set up dictionary navigation event listeners
  if (navTerms) {
    navTerms.addEventListener("click", () => switchDictionarySection("terms"))
  }

  if (navRadio) {
    navRadio.addEventListener("click", () => switchDictionarySection("radio"))
  }

  // Initialize dictionary
  filterTerms()

  updateUI()
  updateExportButton()
  updateActiveNavLink()

  // Initialize radio procedures
  initializeRadioProcedures()
})

// Handle window resize for map (only if map exists)
window.addEventListener("resize", () => {
  if (map && mapInitialized) {
    setTimeout(() => {
      map.invalidateSize()
    }, 100)
  }
})
