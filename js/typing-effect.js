$(document).ready(function () {


//Want more typing functionality? Visit typeitjs.com for easy options and controls.

new TypeIt("#typed", {
    speed: 36,
    lifeLike:true,
    waitUntilVisible: true
  })
  .type('<a href="https://jewishcurrents.org/author/joshua-leifer/" target="_blank">Jewish Currents</a>. ', {delay: 100})
  .pause(700)
  .type(' His writing has appeared in <a href="https://www.dissentmagazine.org/" target="_blank">Dissent</a>, <a href="https://www.972mag.com/writer/joshl/" target="_blank">972</a>, <a href="https://nplusonemag.com/authors/leiferjoshua/" target="_blank">n+1</a>, <a href="https://www.theguardian.com/profile/joshua-leifer" target="_blank">The Guardian</a>, <a href="https://www.thenation.com/authors/joshua-leifer/" target="_blank">The Nation</a>, <a href="https://www.jacobinmag.com/author/joshua-leifer" target="_blank">Jacobin</a>,  <a href="https://www.haaretz.com/misc/writers/WRITER-1.6855413" target="_blank">Haaretz</a>, <a href="https://thebaffler.com/authors/joshua-leifer" target="_blank">The Baffler</a>, <a href="https://slate.com/author/joshua-leifer" target="_blank">Slate</a>, and others.')
  .go();

  
//---------------document closing bracket; don't touch
});