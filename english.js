<!--titanic theme song-->
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});
$(document).ready(function() {
   SC.stream('/tracks/201507857',function(sound){
     $('#start1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop1').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
   });
});


<!--taki taki-->
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});
$(document).ready(function() {
   SC.stream('/tracks/512660685',function(sound){
     $('#start4').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop4').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
   });
});


<!--dumb dumb-->
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});
$(document).ready(function() {
   SC.stream('/tracks/379584962',function(sound){
     $('#start5').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop5').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
   });
});


<!--gasolina-->
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});
$(document).ready(function() {
   SC.stream('/tracks/54615116',function(sound){
     $('#start13').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop13').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
   });
});


<!--despacito-->
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});
$(document).ready(function() {
   SC.stream('/tracks/337832878',function(sound){
     $('#start18').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop18').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
   });
});