import axios from "../../../axios/index.js"
import store from "../../../../store/store.js"
let localeIndicateIkzNotConnected,
  localeIndicateBatteryLow,
  localeIndicateLowSignalStrength,
  localeIndicateDisconnectedFromMaster,
  localeIndicateNoSync,
  localeIndicateConnectedWithError,
  localeIndicateDidNotConnected,
  localeIndicateUnknownState,
  localeIndicateKitOffline,
  localeIndicateFwVerisonDiff,
  localeIndicateKitMissedConnections,
  localeIndicateNoSessions;

  localeIndicateIkzNotConnected = "Fault indicator didn't connect";
  localeIndicateBatteryLow = 'Battery low';
  localeIndicateLowSignalStrength = 'Low signal strength';
  localeIndicateDisconnectedFromMaster = 'This indicator was disconnected from its master';
  localeIndicateNoSync = 'There was no synchronization';
  localeIndicateConnectedWithError = 'The kit contacted with an error';
  localeIndicateDidNotConnected = "The kit haven't been connected";
  localeIndicateUnknownState = "Unknown kit's state";
  localeIndicateKitOffline = 'Kit offline';
  localeIndicateFwVerisonDiff = 'The firmware version is different';
  localeIndicateKitMissedConnections = 'The kit missed 3-10 connection sessions';
  localeIndicateNoSessions = 'No sessions';



function errorHandler(errType, errMessage, kitStateObject) {
  kitStateObject.devices.forEach(device => {
    device.color = errType;
    device.info = errMessage;
  })
}

function mixByMaster(state) {
  if (state.kit.master == 1) {
    [state.devices[0], state.devices[1]] = [state.devices[1], state.devices[0]]
  } else if (state.kit.master == 2) {
    [state.devices[0], state.devices[2]] = [state.devices[2], state.devices[0]]
  }
}

function detectMaster(kitData) {
  let state = kitData.state;
  if (state == 1) {
    return 1
  } else if (state == 2) {
    return 2
  } else if (state == 3) {
    throw {
      type: 'red',
      message: localeIndicateKitOffline
    }
  } else if (state == 0) {
    return 0
  } else {
    return 0
  }
}


function createKitStateObject() {
  return state = {
    kit: {
      device: null,
      parentSession: null,
      sessions: null,
      conTimeDevice: null,
      conTimeParent: null,
      firstSession: null,
      master: 0
    },
    devices: [{
      index: 0,
      name: 'device',
      color: 'green',
      info: '',
      rssi_local_counter: 0,
      rssi_remote_counter: 0,
      checkSteps: {
        six: true,
        seven: true,
        eight: true,
        nine: true,
        ten: true,
        eleven: true
      }
    },
      {
        index: 1,
        name: 'device',
        color: 'green',
        info: '',
        rssi_local_counter: 0,
        rssi_remote_counter: 0,
        checkSteps: {
          six: true,
          seven: true,
          eight: true,
          nine: true,
          ten: true,
          eleven: true
        }
      },
      {
        index: 2,
        name: 'device',
        color: 'green',
        info: '',
        rssi_local_counter: 0,
        rssi_remote_counter: 0,
        checkSteps: {
          six: true,
          seven: true,
          eight: true,
          nine: true,
          ten: true,
          eleven: true
        }
      },
    ]
  };
}

function disableCheckForAllDevices(object, step) {
  object.devices.forEach((device) => {
    device.checkSteps[step] = false
  })
}

function checkSn(kitStateObject) {
  (kitStateObject.kit.firstSession.telemetry.decoded.devs_telemetry.d).forEach((device, index) => {
    if (!(findProp(['sn'], device)) || device.sn < 0 || device.sn == 0) {
      kitStateObject.devices[index].color = 'red';
      kitStateObject.devices[index].info = localeIndicateIkzNotConnected + '<br><br>';
      disableCheckForAllDevices(kitStateObject, 'seven');

      kitStateObject.devices[index].checkSteps.eight = false;
      kitStateObject.devices[index].checkSteps.nine = false;
      kitStateObject.devices[index].checkSteps.ten = false;
      kitStateObject.devices[index].checkSteps.eleven = false;
    }
  })
}





function checkFw(kitStateObject) {
  let version = kitStateObject.kit.firstSession.telemetry.decoded.devs_telemetry.d[0].fw_ver;

  (kitStateObject.kit.firstSession.telemetry.decoded.devs_telemetry.d).forEach((device, index) => {
    if (((device.fw_ver < version) || (device.fw_ver > version)) && kitStateObject.devices[index].checkSteps.seven == true) {
      kitStateObject.devices[index].color = 'yellow';
      kitStateObject.devices[index].info += localeIndicateFwVerisonDiff + '<br><br>';
    }
  })
}

function checkBattery(kitStateObject) {
  (kitStateObject.kit.firstSession.telemetry.decoded.devs_telemetry.d).forEach((device, index) => {
    if ((device.battery == 1) && (kitStateObject.devices[index].checkSteps.eight == true)) {
      kitStateObject.devices[index].color = 'yellow';
      kitStateObject.devices[index].info += localeIndicateBatteryLow + '<br><br>';
    }
  })
}

function checkRssi(kitStateObject) {

  (kitStateObject.kit.sessions).forEach((session) => {
    if (findProp(['telemetry', 'decoded', 'devs_telemetry', 'd'], session)) {

      let firstSessionSN = kitStateObject.kit.firstSession.telemetry.decoded.devs_telemetry.d[0].sn;

      if (firstSessionSN == session.telemetry.decoded.devs_telemetry.d[0].sn) {
        session.telemetry.decoded.devs_telemetry.d.forEach((device, index) => {

          if (device.rssi_local < -80) {
            kitStateObject.devices[index].rssi_local_counter++
          }

          if (device.rssi_remote < -80) {
            kitStateObject.devices[index].rssi_remote_counter++
          }

          if ((kitStateObject.devices[index].rssi_remote_counter == 5 || kitStateObject.devices[index].rssi_local_counter == 5) && (kitStateObject.devices[index].checkSteps.nine == true)) {
            kitStateObject.devices[index].color = "yellow";
            kitStateObject.devices[index].info += localeIndicateLowSignalStrength + '<br><br>'
          }
        })
      }
    }
  })
}

function checkHandle(kitStateObject) {
  (kitStateObject.kit.firstSession.telemetry.decoded.devs_telemetry.d).forEach((device, index) => {
    if (kitStateObject.kit.sessions.length > 1 && (findProp(['telemetry', 'decoded', 'devs_telemetry', 'd'], kitStateObject.kit.sessions[0]))) {
      if ((device.handle != kitStateObject.kit.sessions[1].telemetry.decoded.devs_telemetry.d[index].handle) && (kitStateObject.devices[index].checkSteps.ten == true) && index > 0) {
        kitStateObject.devices[index].color = 'yellow';
        kitStateObject.devices[index].info += localeIndicateDisconnectedFromMaster + '<br><br>';
      }
    }
  })
}

function checkCntResync(kitStateObject) {
  (kitStateObject.kit.firstSession.telemetry.decoded.devs_telemetry.d).forEach((device, index) => {
    if (kitStateObject.kit.sessions.length > 1 && (findProp(['telemetry', 'decoded', 'devs_telemetry', 'd'], kitStateObject.kit.sessions[0]))) {
      if ((device.cnt_resync != kitStateObject.kit.sessions[1].telemetry.decoded.devs_telemetry.d[index].cnt_resync) && (kitStateObject.devices[index].checkSteps.eleven == true)) {
        kitStateObject.devices[index].color = 'yellow';
        kitStateObject.devices[index].info += localeIndicateNoSync + '<br><br>';
      }
    }
  })
}





function checkFirstSession(kitData) {
  if (findProp(['sessions'], kitData)) {
    if (findProp(['telemetry', 'decoded', 'devs_telemetry', 'd'], kitData.sessions[0]) && (kitData.sessions[0].telemetry.decoded.devs_telemetry.d).length == 3) {
      return kitData.sessions[0]
    } else {
      throw {
        type: 'yellow',
        message: localeIndicateConnectedWithError + '<br><br>'
      }
    }
  }
}

function checkTime(kitData) {
  if (findProp(['connection_time_parent'], kitData) && findProp(['connection_time_device'], kitData)) {
    let connectionTimeParent = +kitData.connection_time_parent;
    let connectionTimeDevice = +kitData.connection_time_device;

    if (connectionTimeDevice < connectionTimeParent) {
      throw {
        type: 'red',
        message: localeIndicateIkzNotConnected
      }
    } else return [connectionTimeDevice, connectionTimeParent]
  } else throw {
    type: 'red',
    message: 'Data error'
  }
}

function checkKitSessions(kitData) {
  if (findProp(['sessions'], kitData)) {
    if (kitData.sessions.length == 0) {
      throw {
        type: 'red',
        message: localeIndicateNoSessions
      }
    } else {
      return kitData.sessions
    }
  } else throw {
    type: 'red',
    message: 'Data error'
  }
}


function checkBspiSession(kitData) {
  if (findProp(['parent_session'], kitData)) {
    if (typeof kitData.parent_session == 'string') {
      throw {
        type: 'grey',
        message: localeIndicateDidNotConnected
      }
    } else
    if ((typeof kitData.parent_session == 'object') && (findProp(['parent_session', 'telemetry', 'decoded', 'sets'], kitData) == false)) {
      throw {
        type: 'yellow',
        message: localeIndicateUnknownState
      }
    } else {
      return kitData.parent_session
    }
  } else throw {
    type: 'red',
    message: 'Data error'
  }
}

function checkDeviceIsOnline(device) {
  if (findProp(['is_online'], device)) {
    switch (device.is_online) {
      case 0:
        throw {
          type: 'red',
          message: localeIndicateKitOffline
        }
      case 1:
        throw {
          type: 'yellow', message: localeIndicateKitMissedConnections
        }
      case 2:
        return device
    }
  } else throw {
    type: 'red',
    message: 'Data error'
  }

}

function checkMatchUuid(allStates, deviceUuid) {
  let result = {
    match: false,
    data: null
  };

  if (allStates != null) {
    allStates.forEach((item) => {
      if (deviceUuid == item.uuid) {
        result.match = true;
        result.data = item
      }
    })
  }

  return result
}



export default {

  getKitsStates(devices) {
      let uuidsForResponse = [];
      let arrOfDeviceTypes = [];
      let urlBase = 'http://localhost:8080'
      arrOfDeviceTypes.push(1572, 1573, 1574, 1584, 1588, 1589, 1590, 1591, 1592, 1594)

      devices.forEach((device) => {
        if (deviceTypesArray.includes(device.device_description.device_type)) {
          uuidsForResponse.push(`uuid=${device.uuid}`);
        }
      })
      const path = `/devices/state?${uuidsForResponse.join('&')}`;
      return axios.get(path, {headers: {"Content-Type": "application/json"}})
        .then((response) => {
          if(response.status === 200) {

            return response
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }

}
