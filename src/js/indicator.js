export default function defineIndicator(user) {
  if (user.health > 50) {
    return 'healthy';
  }

  if (user.health < 15) {
    return 'critical';
  }

  return 'wounded';
}
