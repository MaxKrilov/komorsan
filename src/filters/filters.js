import Vue from "vue";

Vue.filter("capitalize", function (value) {
  if (!value) return "";
  value = value.toString();
  let arr = value.split(" ");
  let capitalized_array = [];
  arr.forEach((word) => {
    let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    capitalized_array.push(capitalized);
  });
  return capitalized_array.join(" ");
});

Vue.filter("title", function (value, replacer = "_") {
  if (!value) return "";
  value = value.toString();

  let arr = value.split(replacer);
  let capitalized_array = [];
  arr.forEach((word) => {
    let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    capitalized_array.push(capitalized);
  });
  return capitalized_array.join(" ");
});

Vue.filter("truncate", function (value, limit) {
  return value.substring(0, limit);
});

Vue.filter("tailing", function (value, tail) {
  return value + tail;
});

Vue.filter("time", function (value, is24HrFormat = false) {
  if (value) {
    const date = new Date(Date.parse(value));
    let hours = date.getHours();
    const min = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    if (!is24HrFormat) {
      const time = hours > 12 ? "AM" : "PM";
      hours = hours % 12 || 12;
      return hours + ":" + min + " " + time;
    }
    return hours + ":" + min;
  }
});
Vue.filter("clock", function (value, format = "date") {
  const options = {};

  if (format.includes("date")) {
    options.day = "2-digit";
    options.month = "long";
    options.year = "numeric";
  }

  if (format.includes("time")) {
    options.hour = "2-digit";
    options.minute = "2-digit";
    options.second = "2-digit";
  }
  return new Intl.DateTimeFormat("ru-RU", options).format(new Date(value));
});

Vue.filter("date", function (value, fullDate = false) {
  value = String(value);
  const date = value.slice(8, 10).trim();
  const month = value.slice(4, 7).trim();
  const year = value.slice(11, 15);

  if (!fullDate) return date + " " + month;
  else return date + " " + month + " " + year;
});

Vue.filter("month", function (val, showYear = true) {
  val = String(val);

  const regx = /\w+\s(\w+)\s\d+\s(\d+)./;
  if (!showYear) {
    return regx.exec(val)[1];
  } else {
    return regx.exec(val)[1] + " " + regx.exec(val)[2];
  }
});

Vue.filter("csv", function (value) {
  return value.join(", ");
});

Vue.filter("filter_tags", function (value) {
  return value.replace(/<\/?[^>]+(>|$)/g, "");
});

Vue.filter("k_formatter", function (num) {
  return num > 999 ? (num / 1000).toFixed(1) + "k" : num;
});

// locale event type
Vue.filter("localizeEventType_", function (value, devT) {
  window.language = "RU";
  if (value === "Alarm: Angles sensor") {
    if (window.language === "RU") {
      value = "Сработал датчик воровства";
    } else if (window.language === "EN") {
      value = "Theft sensor has triggered";
    }
  } else {
    if (window.language === "RU") {
      value = value.split(" ");

      for (let val of value) {
        console.log(val);
        if (val === "Transient") {
          val = "Неустойчивое";
        } else if (val === "permanent") {
          val = "устойчивое";
        } else if (val === "PtP") {
          if (devT === 1592) {
            val = "КЗ";
          } else {
            val = "МФЗ";
          }
        } else if (val === "PtG") {
          val = "ОЗЗ";
        } else if (val === "forward") {
          val = " вперед";
        } else if (val === "backward") {
          val = " назад";
        } else if (val === "A(forward)") {
          val = "А(вперед)";
        } else if (val === "B(forward)") {
          val = "В(вперед)";
        } else if (val === "C(forward)") {
          val = "С(вперед)";
        } else if (val === "A(backward)") {
          val = "А(назад)";
        } else if (val === "B(backward)") {
          val = "В(назад)";
        } else if (val === "C(backward)") {
          val = "С(назад)";
        } else if (val === "to") {
          val = " к";
        } else if (val === "feeder") {
          val = "фидеру";
        } else if (val === "line") {
          val = "линии";
        } else if (val === "damaged_line") {
          val = "поврежденная линия";
        } else if (val === "IntLock") {
          val = "Блокировка";
        } else if (val === "transient") {
          val = "неустойчивое";
        }
      }

      value = value.join(" "); // преобразуем в строку
    } else if (window.language === "EN") {
    }
  }
  return value;
});
