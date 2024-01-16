const myMails = [
  "mail1@example.com",
  "mail2@example.com",
  "mail3@example.com",
  "mail4@example.com",
  "mail5@example.com",
  "mail6@example.com",
  "mail7@example.com",
  "mail8@example.com",
];

// const userMail = prompt(`inserisci la mail con la quale vuoi accedere`);
// for (let i = 0; i < myMails.length; i++) {
//   const mail = myMails[i];

//   if (mail == userMail) {
//     alert(`accesso con successo. Benvenuto`);
//   }
// }
// alert(`accesso negato`);

// bonus
for (let k = 0; k < 5; k++) {
  let success = false;
  let userMail = prompt(`inserisci la mail con la quale vuoi accedere`);
  for (let i = 0; i < myMails.length; i++) {
    const mail = myMails[i];

    if (mail == userMail) {
      alert(`accesso con successo. Benvenuto`);
      success = true;
    }
  }
  if (success == true) break;
  alert(`accesso negato`);
  if (k == 4)
    alert(`hai superato il numero dei tenativi. ricarica la pagina e riprova`);
}
