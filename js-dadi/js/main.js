// let numUser = Math.ceil(Math.random() * 6);
// let numCpu = Math.ceil(Math.random() * 6);

// console.log(`il numero del user è ${numUser}`);
// console.log(`il numero del cpu è ${numCpu}`);

// if (numCpu == numUser)
//   alert(
//     `il numero del cpu è:${numCpu} \n il numero del user è:${numUser} \n È UN PAREGGIO `
//   );
// if (numCpu > numUser)
//   alert(
//     `il numero del cpu è:${numCpu} \n il numero del user è:${numUser} \n HA VINTO IL CPU`
//   );
// if (numCpu < numUser)
//   alert(
//     `il numero del cpu è:${numCpu} \n il numero del user è:${numUser} \n HA VINTO IL USER`
//   );

// bonus
let numCpu = 0;
let numUser = 0;
let userWinCount = 0;
let cpuWinCount = 0;
do {
  numUser = Math.ceil(Math.random() * 6);
  numCpu = Math.ceil(Math.random() * 6);

  if (numCpu == numUser)
    alert(
      `il numero del cpu è:${numCpu} \n il numero del user è:${numUser} \n È UN PAREGGIO `
    );
  if (numCpu > numUser) {
    alert(
      `il numero del cpu è:${numCpu} \n il numero del user è:${numUser} \n HA VINTO IL CPU`
    );
    cpuWinCount++;
  }
  if (numCpu < numUser) {
    alert(
      `il numero del cpu è:${numCpu} \n il numero del user è:${numUser} \n HA VINTO IL USER`
    );
    userWinCount++;
  }
} while (userWinCount < 3 && cpuWinCount < 3);

alert(`la partita si è conclusa con USER ${userWinCount} : ${cpuWinCount} CPU`);
