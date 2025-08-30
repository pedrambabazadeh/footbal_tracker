import players from "../players/players";
import teams from "../teams/teams";
import ratings from "../rtings/Ratings";

//imports need to be changes to await import to mock the data base better
/*const bestPlayers = players.filter(player => player.rating >= 4).map(player => {
    const team = teams.find(team => team.id === player.teamId);
    return {
        ...player,
        team: team ? team.name : "Unknown",
        teamLogo: team ? team.logo : "Unknown"
    };
});
export default bestPlayers;*/