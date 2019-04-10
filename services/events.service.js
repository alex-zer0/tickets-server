export const updateTicketsAvailability = (tickets, origins, isRelease) => {
  const ticketSavePromises = tickets
    .filter(ticket => {
      if (!ticket.amount) {
        return false;
      }
      const ticketType = origins.find(t => t.id === ticket.id);
      return ticketType && ticketType.available != null;
    })
    .map(ticket => {
      const ticketType = origins.find(t => t.id === ticket.id);
      if (!ticketType || !isRelease && ticketType.available < ticket.amount) {
        throw new Error('Insufficient available tickets amount');
      } else if (isRelease) {
        ticketType.available += ticket.amount;
      } else {
        ticketType.available -= ticket.amount;
      }
      return ticketType;
    })
    .map(ticket => ticket.save());
  return Promise.all(ticketSavePromises);
}
