export default function indicate(player) {
    if (player.health > 50) {
        return 'healthy';
    } else if (player.health > 15) {
        return 'wounded';
    } else {
        return 'critical';
    }
}