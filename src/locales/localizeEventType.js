window.language = 'RU'
let optionsNowDate = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: window.timezone
};

  // export default  function localizeEventType (value, devT) {// locale event type
  export default {// locale event type

     changeLanguageTime(dateAndTimeNew) {
      if (dateAndTimeNew === '') {
        dateOption = '-';
        return dateOption;
      } else {
        let dateOption = new Date( Date.parse( dateAndTimeNew ) );

        if ( window.language === 'EN' ) {
          dateOption = dateOption.toLocaleString('en', optionsNowDate);
          dateOption = dateOption.split(',');
          dateOption = dateOption[0] + ',' + dateOption[1]+ '<br>' + dateOption[2];
          return dateOption;
        } else if ( window.language === 'RU' ) {
          dateOption = dateOption.toLocaleString('ru', optionsNowDate);
          dateOption = dateOption.split(' г.,')[0] + '<br>' + dateOption.split(' г.,')[1];
          return dateOption;
        }
      }
    },
    changeLanguageTimeOption2 (dateAndTime) {
      return this.changeLanguageTime(dateAndTime);
    },
    localizeEventType: (value, devT) => {
      window.language = 'RU'
    if(value === 'Alarm: Angles sensor'){
      if (window.language === 'RU') {
        value = 'Сработал датчик воровства';
      } else if (window.language === 'EN') {
        value = 'Theft sensor has triggered';
      }
    } else  {
      if (window.language === 'RU') {
        value = value.split(' ')
        for (let j = 0; j < value.length; j++) {
          console.log(value[j])
          if (value[j] === 'Transient') {
            value[j] = 'Неустойчивое';
          } else if (value[j] === 'permanent') {
            value[j] = 'устойчивое';
          } else if (value[j] === 'PtP') {
            if (devT === 1592) {
              value[j] = 'КЗ';
            } else {
              value[j] = 'МФЗ';
            }
          } else if (value[j] === 'PtG') {
            value[j] = 'ОЗЗ';
          } else if (value[j] === 'forward') {
            value[j] = ' вперед';
          } else if (value[j] === 'backward') {
            value[j] = ' назад';
          } else if (value[j] === 'A(forward)') {
            value[j] = 'А(вперед)';
          } else if (value[j] === 'B(forward)') {
            value[j] = 'В(вперед)';
          } else if (value[j] === 'C(forward)') {
            value[j] = 'С(вперед)';
          } else if (value[j] === 'A(backward)') {
            value[j] = 'А(назад)';
          } else if (value[j] === 'B(backward)') {
            value[j] = 'В(назад)';
          } else if (value[j] === 'C(backward)') {
            value[j] = 'С(назад)';
          } else if (value[j] === 'to') {
            value[j] = ' к';
          } else if (value[j] === 'feeder') {
            value[j] = 'фидеру';
          } else if (value[j] === 'line') {
            value[j] = 'линии';
          } else if (value[j] === 'damaged_line') {
            value[j] = 'поврежденная линия';
          } else if (value[j] === 'IntLock') {
            value[j] = 'Блокировка';
          } else if (value[j] === 'transient') {
            value[j] = 'неустойчивое';
          }
        }
        value = value.join('')
      } else if (window.language === 'EN') {
      }
    }
    return value
    }
  }

