if (friends.hasOwnProperty('Becky') && friends['Becky'].isFreeThisFriday()) {
    inviteToBoardGameNight(friends['Becky']);
  }

// if friends doesn't have 'Becky', you will no longer get a type error and 
// will ignore the rest of the conditional and avoid type error