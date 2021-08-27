export const sendNotification = (body) => {
 
  const key = 'ZTI5NWJlMDgtODA0OC00MWVmLWI4ZDAtMDRhMWU3Y2JjYjQx';
 
  fetch('https://onesignal.com/api/v1/notifications', {
    'method': 'POST',
    'headers': {
      'Authorization': 'Basic ' + key,
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify({
        "included_segments":["AdminSuscribe"],
        "app_id": "d43d203b-53fe-4647-b210-757059b037e9",
        "contents":{"en": `${body}`, "es": `${body}`},
        "headings":{"en": "Notificacion Witi", "es": "Notificacion Witi"} 
    })
  }).then(function(response) {
    console.log('Respuesta:',response);
  }).catch(function(error) {
    console.error(error);
  })
}