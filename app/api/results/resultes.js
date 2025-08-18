export const results =
[
    {
    matchId: "M20250810-001",
    date: "2025-08-10T18:00:00Z",
    league: {
      id: "EPL",
      name: "Premier League",
      season: "2025/2026"
    },
    status: "FT",
    stadium: {
      name: "Old Trafford",
      city: "Manchester",
      capacity: 74879
    },
    referee: "Michael Oliver",
    homeTeam: {
      id: "MANU",
      name: "Manchester United",
      logo: "https://media.api-sports.io/football/teams/33.png",
      score: 2,
      possession: 58,
      shotsOnTarget: 7,
      shotsTotal: 15,
      corners: 6,
      fouls: 10,
      yellowCards: 2,
      redCards: 0,
      lineup: ["De Gea","Wan-Bissaka","Varane","Lindelöf","Shaw","Casemiro","Fernandes","Rashford","Saka","Hojlund"]
    },
    awayTeam: {
      id: "CHE",
      name: "Chelsea",
      logo: "https://media.api-sports.io/football/teams/49.png",
      score: 1,
      possession: 42,
      shotsOnTarget: 4,
      shotsTotal: 10,
      corners: 3,
      fouls: 12,
      yellowCards: 3,
      redCards: 0,
      lineup: ["Onana","Kovacic","Silva","Kante","Mount","Nunez"]
    },
    score: {
      halfTime: { home: 1, away: 1 },
      fullTime: { home: 2, away: 1 }
    },
    highlights: [
      { minute: 12, team: "home", type: "goal", player: "Marcus Rashford", description: "Low finish from inside the box" },
      { minute: 35, team: "away", type: "goal", player: "Raheem Sterling", description: "Header from corner" },
      { minute: 78, team: "home", type: "goal", player: "Bruno Fernandes", description: "Free-kick into top corner" }
    ],
    description: "A thrilling match between Manchester United and Chelsea."
  },

  {
    matchId: "M20250811-002",
    date: "2025-08-11T20:30:00Z",
    league: {
      id: "LLIGA",
      name: "La Liga",
      season: "2025/2026"
    },
    status: "HT",
    stadium: {
      name: "Camp Nou",
      city: "Barcelona",
      capacity: 99354
    },
    referee: "Antonio Mateu Lahoz",
    homeTeam: {
      id: "BAR",
      name: "FC Barcelona",
      logo: "https://media.api-sports.io/football/teams/529.png",
      score: 2,
      possession: 63,
      shotsOnTarget: 6,
      shotsTotal: 12,
      corners: 5,
      fouls: 6,
      yellowCards: 1,
      redCards: 0,
      lineup: ["Ter Stegen","Sergi Roberto","Pique","Araujo","Alba","Busquets","Pedri","Gavi","Ferran","Lewandowski"]
    },
    awayTeam: {
      id: "RM",
      name: "Real Madrid",
      logo: "https://media.api-sports.io/football/teams/541.png",
      score: 1,
      possession: 37,
      shotsOnTarget: 3,
      shotsTotal: 8,
      corners: 2,
      fouls: 8,
      yellowCards: 2,
      redCards: 0,
      lineup: ["Courtois","Carvajal","Ramos","Militao","Mendy","Valverde","Kroos","Modric","Benzema","Vinicius"]
    },
    score: {
      halfTime: { home: 2, away: 1 }
    },
    highlights: [
      { minute: 9, team: "home", type: "goal", player: "Ferran Torres", description: "Cut-back finish" },
      { minute: 27, team: "away", type: "goal", player: "Karim Benzema", description: "Penalty" },
      { minute: 43, team: "home", type: "goal", player: "Gavi", description: "Long-range strike" }
    ],
    description: "A thrilling match between FC Barcelona and Real Madrid."
  },

  {
    matchId: "M20250812-003",
    date: "2025-08-12T19:45:00Z",
    league: {
      id: "BUND",
      name: "Bundesliga",
      season: "2025/2026"
    },
    status: "LIVE",
    stadium: {
      name: "Allianz Arena",
      city: "Munich",
      capacity: 75000
    },
    referee: "Felix Zwayer",
    homeTeam: {
      id: "BAY",
      name: "Bayern Munich",
      logo: "https://media.api-sports.io/football/teams/157.png",
      score: 1,
      possession: 62,
      shotsOnTarget: 5,
      shotsTotal: 11,
      corners: 4,
      fouls: 7,
      yellowCards: 1,
      redCards: 0,
      lineup: ["Neuer","Pavard","Upamecano","Kimmich","Gnabry","Musiala","Kane"]
    },
    awayTeam: {
      id: "DOR",
      name: "Borussia Dortmund",
      logo: "https://media.api-sports.io/football/teams/4.png",
      score: 0,
      possession: 38,
      shotsOnTarget: 1,
      shotsTotal: 6,
      corners: 1,
      fouls: 9,
      yellowCards: 2,
      redCards: 0,
      lineup: ["Kobel","Hummels","Schlotterbeck","Reus","Haaland"]
    },
    score: {
      current: { home: 1, away: 0 },
      minute: 56
    },
    highlights: [
      { minute: 14, team: "home", type: "goal", player: "Harry Kane", description: "Header from cross" },
      { minute: 51, team: "away", type: "yellow_card", player: "Marco Reus", description: "Late tackle" }
    ],
    description: "A thrilling match between Bayern Munich and Borussia Dortmund."
  },
]