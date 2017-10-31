
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tickets').del()
    .then(function () {
      // Inserts seed entries
      return knex('tickets').insert([
        {
          event: 'Broncos Game',
          date: '11-03-17',
          time: '20:00:00',
          venue: 'Mile High Stadium',
          location: "Denver, CO",
          type: 'Sports',
          pdf_link: 'www.fakepdf.com',
          user_id: '1'
        },
        {
          event: 'J Cole Concert',
          date: '01-10-18',
          time: '18:00:00',
          venue: 'Red Rocks Ampitheater',
          location: "Denver, CO",
          type: 'Music',
          pdf_link: 'www.fakepdf.com',
          user_id: '1'
        }
      ]);
    });
};
