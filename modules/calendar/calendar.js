      formatGoogleCalendar.init({
        calendarUrl: 'https://www.googleapis.com/calendar/v3/calendars/shawnlfaleiro@gmail.com/events?key=AIzaSyCR3-ptjHE-_douJsn8o20oRwkxt-zHStY',
        past: false,
        upcoming: true,
        sameDayTimes: false,
        pastTopN: 5,
        upcomingTopN: 4,
        recurringEvents: true,
        itemsTagName: 'li',
        upcomingSelector: '#events-upcoming',
        upcomingHeading: '<h2>Family events</h2>',
        pastHeading: '' ,
        format: ['*summary*', ' in ',' &mdash; ',  ': ','*date*'],
        timeMin: '2016-06-03T10:00:00-07:00',
        timeMax: '2020-06-03T10:00:00-07:00'
      });