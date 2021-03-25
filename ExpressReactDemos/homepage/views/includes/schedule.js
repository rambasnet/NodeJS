import React from 'react';
import parse from 'html-react-parser';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      semester: "Spring 2021 Schedule",
      office: "CH 329",
      days: ["Mon", "Tues", "Wed", "Thrs", "Fri"],
      times: ["10:00", "10:30", "11:00", 
          "11:30", "12:00", "12:30", "1:00", "1:30", "2:00", "2:30", 
          "3:00", "3:30", "4:00"],
      office_hours: [
          {days: ["Mon", "Tues", "Wed", "Thrs", "Fri"],
          start_time: "1:00",
          time: "1-1:50",
          includes: "1:30",
          row_span: 2
        }
      ],
      classes: [
        {name: "JavaScript",
        loc: "CH 276",
        start_time: "3:00",
        days: ["Mon", "Wed", "Fri"],
        time: "3-3:50",
        includes: "3:30",
        row_span: 2},
        {name: "Cyber",
        loc: "CH 276",
        start_time: "12:00",
        days: ["Mon", "Wed", "Fri"],
        time: "12-12:50",
        includes: "12:30",
        row_span: 2},
        {name: "ML",
        loc: "CH 276",
        start_time: "10:00",
        days: ["Mon", "Wed", "Fri"],
        time: "10-10:50",
        includes: "10:30",
        row_span: 2}
      ]
      };
    }

    getOfficeHour(start_time, day) {
      for (const oh of this.state.office_hours) {
        if (oh.start_time === start_time && oh.days.includes(day))
          return oh;  
      }
      return null;
    }

    getClass(start_time, day) {
      for(const cl of this.state.classes) {
        if (cl.start_time === start_time && cl.days.includes(day)) return cl;
      }
      return null;
    }

    createHTML() {
      let html = '<div class="col-sm-8">';
      html += '<h2>' + this.state.semester.toUpperCase() + '</h2>';
      html += '<br /><div class="table-responsive-sm"></div>';
      html += '<table class="table table-sm table-bordered">';
      html += '<thead><tr><th width="16%" style="text-align:center">Time</th>';
      // go though each time slot as row
      // create column headers
      this.state.days.forEach(element => {
        html += '<th width="16%" style="text-align:center">' + element + '</th>';
      });
      html += '</tr></thead><tbody>'
      let RowSpanned = {};
      for(const day of this.state.days){
        RowSpanned[day] = [];
      }
      console.log(RowSpanned);
      for(let i=0; i<this.state.times.length; i++) {
        let start_time = this.state.times[i];
        html += '<tr><th style="text-align:center">' + start_time + '</th>'
        for (const day of this.state.days){
          let oh = this.getOfficeHour(start_time, day);
          //console.log('matched', oh);
          // check if there's an office hour during this time
          if (oh !== null) {
            for(let count=0; count<oh.row_span; count++)
              RowSpanned[day].push(this.state.times[i+count]);
            html += '<td width="16%" class="bg-success schedule" rowspan=' + oh.row_span + 
            '>Off. Hr.<br />' + this.state.office + '<br />' + oh.time + '</td>';
          }
          // check if there's a class during this time
          else {
            let teach = this.getClass(start_time, day);
            if (teach !== null) {
              for(let count=1; count<teach.row_span; count++)
                RowSpanned[day].push(this.state.times[i+count]);
        
              html += '<td width="16%" class="bg-primary schedule" rowspan=' + teach.row_span + 
                '>' + teach.name + '<br />' + teach.loc + '<br />' + teach.time + '</td>';
            }
            else if (!RowSpanned[day].includes(start_time)) {
              html += '<td>&nbsp;</td>';
            }
          }         
        }
        html += '</tr>';
      }
      html += '</table></div></div>';
      return parse(html);
    }

    render() {
      return this.createHTML();
    }
}

export default Schedule;