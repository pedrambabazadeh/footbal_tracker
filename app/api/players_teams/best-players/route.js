import { NextResponse } from "next/server";

export async function GET(req, res) {

    const { default: players } = await import("../players/players");
    const { default: teams } = await import("../teams/teams");
    const { default: ratings } = await import("../rtings/Ratings");

    const bestPlayer = ratings.map(rating => {
        const player = players.find(player => player.id === rating.playerId);
        const team = teams.find(team => team.id === player.teamId);
        return {
            ...player,
            team: team ? team.name : "Unknown",
            teamLogo: team ? team.logo : "Unknown",
            rating: rating.rating
        };
    }).filter(player => player.rating >= 3.5);
    return NextResponse.json(bestPlayer);
}