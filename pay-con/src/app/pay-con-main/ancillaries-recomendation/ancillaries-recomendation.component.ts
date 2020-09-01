import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pay-ancillaries-recomendation',
  templateUrl: './ancillaries-recomendation.component.html',
  styleUrls: ['./ancillaries-recomendation.component.scss']
})
export class AncillariesRecomendationComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    // Es necesario el bucle for por si tenemos más elementos observados o queremos incluir en el futuro
    function onIntersection(entries){
      entries.forEach(function(entry) {
        if (entry.intersectionRatio > 0 && document.querySelector('.ancillarie-container')) {
          var timeCounter = 0;
          document.querySelectorAll('.ancillarie-container').forEach(function(el) {
            timeCounter += 350;
            if (timeCounter <= 1050) {
              var animationTimeout = setTimeout(function(){
                el.classList.add('ar-in-animation');
              }, timeCounter);
            } else {
              clearTimeout(animationTimeout);
              theObserver.unobserve(entry.ancillarieTarget);
            }
          });
        }
      });
    }
    if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1){
      document.querySelectorAll('.ancillarie-container').forEach(e => e.classList.add('ar-in-animation'));
    } else {
    
      var ancillarieTarget = document.querySelector('.ancillarie-container') || null;
    
      // Configurando la instancia del observador
      var intersectionObserverOptions = {
        root: null,
        rootMargin: '10px',
        threshold: 1.0
      };
          
      var theObserver = new IntersectionObserver(onIntersection, intersectionObserverOptions);
    
      // Se da al observer un target
      if (ancillarieTarget) {
        theObserver.observe(ancillarieTarget);
      }
    }
  }

}
